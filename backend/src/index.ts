import { Hono } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { ZodError } from 'zod'
import { cors } from 'hono/cors'
import { serve } from '@hono/node-server'

import { authController } from './routes/authRoutes'
import { kelasController } from './routes/kelasRoutes'

const app = new Hono()

app.use('*', cors())

app.get('/', (c) => {
    return c.json({ message: 'API PZN Course aktif!' })
})

app.route('/auth', authController)
app.route('/kelas', kelasController)

app.onError((err, c) => {
    if (err instanceof HTTPException) {
        c.status(err.status)
        return c.json({ errors: err.message })
    } else if (err instanceof ZodError) {
        c.status(400)
        return c.json({ errors: err.message })
    } else {
        c.status(500)
        return c.json({ errors: err.message || 'Internal Server Error' })
    }
})

app.onError((err, c) => {
    console.error('ERROR:', err)
    if (err instanceof HTTPException) {
        return c.json({ error: err.message }, err.status)
    }
    return c.json({ error: 'Internal Server Error' }, 500)
})


serve({ fetch: app.fetch, port: 3000 })
console.log('✅ Server berjalan di http://localhost:3000')
