// src/controllers/authController.ts

import { PrismaClient } from '@prisma/client'
import { HTTPException } from 'hono/http-exception'
import { registerSchema, loginSchema } from '../validations/authValidations'
import { hash, compare } from 'bcryptjs'
import { sign } from 'hono/jwt'
import type { Context } from 'hono'

const prisma = new PrismaClient()
const JWT_SECRET = Bun.env.JWT_SECRET ?? 'fallback-secret'

export const signup = async (c: Context) => {
    const body = await c.req.json()
    const parsed = registerSchema.safeParse(body)

    if (!parsed.success) {
        const message = parsed.error.errors[0]?.message || 'Data tidak valid'
        throw new HTTPException(400, { message })
    }

    const { name, email, password } = parsed.data

    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
        throw new HTTPException(409, { message: 'Email sudah digunakan' })
    }

    const hashed = await hash(password, 10)
    const user = await prisma.user.create({
        data: { name, email, password: hashed }
    })

    return c.json({
        message: 'Registrasi berhasil',
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    })
}

export const login = async (c: Context) => {
    const body = await c.req.json()
    const parsed = loginSchema.safeParse(body)

    if (!parsed.success) {
        const message = parsed.error.errors[0]?.message || 'Data tidak valid'
        throw new HTTPException(400, { message })
    }

    const { email, password } = parsed.data

    const user = await prisma.user.findUnique({ where: { email } })
    if (!user || !(await compare(password, user.password))) {
        throw new HTTPException(401, { message: 'Email atau password salah' })
    }

    const token = await sign(
        { id: user.id, name: user.name, email: user.email },
        JWT_SECRET
    )

    return c.json({
        message: 'Login berhasil',
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    })
}
