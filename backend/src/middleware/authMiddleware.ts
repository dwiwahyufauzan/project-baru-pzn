// src/middleware/authMiddleware.ts

import { verify } from 'hono/jwt'
import { HTTPException } from 'hono/http-exception'
import type { Context } from 'hono'

const JWT_SECRET = Bun.env.JWT_SECRET ?? 'fallback-secret'

export const authMiddleware = async (c: Context, next: () => Promise<void>) => {
    const authHeader = c.req.header('Authorization')

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new HTTPException(401, { message: 'Unauthorized' })
    }

    const token = authHeader.split(' ')[1]

    try {
        // @ts-ignore
        const payload = await verify(token, JWT_SECRET)
        if (!payload || typeof payload !== 'object' || !('id' in payload)) {
            throw new HTTPException(401, { message: 'Token tidak valid' })
        }

        c.set('user', payload)
        await next()
    } catch (err) {
        throw new HTTPException(401, { message: 'Token tidak valid' })
    }
}
