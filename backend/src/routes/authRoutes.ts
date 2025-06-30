// src/routes/authRoutes.ts

import { Hono } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client'
import { authMiddleware } from '../middleware/authMiddleware'
import { signup, login } from '../controllers/authController'
import type { Context } from 'hono'

const prisma = new PrismaClient()
const JWT_SECRET = Bun.env.JWT_SECRET ?? 'fallback-secret'

export const authController = new Hono()

// Register & Login routes
authController.post('/register', signup)
authController.post('/login', login)

// Me route (tanpa middleware, manual verifikasi token)
authController.get('/me', async (c: Context) => {
    const authHeader = c.req.header('Authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new HTTPException(401, { message: 'Unauthorized' })
    }

    const token = authHeader.split(' ')[1]

    // @ts-ignore
    const payload = await verify(token, JWT_SECRET)

    // Type safety: pastikan payload bentuknya sesuai
    if (!payload || typeof payload !== 'object' || !('id' in payload)) {
        throw new HTTPException(401, { message: 'Token tidak valid' })
    }

    const user = await prisma.user.findUnique({
        where: { id: Number(payload.id) },
        select: { id: true, name: true, email: true }
    })

    if (!user) {
        throw new HTTPException(404, { message: 'User tidak ditemukan' })
    }

    return c.json({ user })
})

// Me secure route (menggunakan middleware)
authController.get('/me/secure', authMiddleware, async (c) => {
    // @ts-ignore
    const user = c.get('user') as { id: number; name: string; email: string }
    return c.json({ message: 'User login', user })
})
