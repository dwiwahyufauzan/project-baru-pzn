import { PrismaClient } from '@prisma/client'
import { Hono } from 'hono'

const prisma = new PrismaClient()
export const kelasController = new Hono()

const kelas = [
    {
        id: 1,
        judul: 'Belajar NodeJS',
        slug: 'nodejs',
        thumbnail: 'https://i.ytimg.com/vi/7R9Nq2qcP9I/maxresdefault.jpg',
        kategori: 'programming',
        level: 'Pemula',
        deskripsi: 'Pelajari dasar NodeJS dengan mudah dan cepat.'
    },
    {
        id: 2,
        judul: 'Belajar Laravel',
        slug: 'laravel',
        thumbnail: 'https://laravelnews.imgix.net/images/laravel.jpg',
        kategori: 'web',
        level: 'Menengah',
        deskripsi: 'Laravel untuk membangun aplikasi web modern.'
    }
]

const lessonsMap = {
    nodejs: [
        { title: 'Pendahuluan', duration: '2:00', type: 'video', done: true },
        { title: 'Pengenalan NodeJS', duration: '4:12', type: 'video', done: true },
        { title: 'Slide dan Source Code', type: 'document', done: true }
    ],
    laravel: [
        { title: 'Intro Laravel', duration: '2:45', type: 'video', done: true },
        { title: 'Routing Dasar', duration: '3:30', type: 'video', done: false }
    ]
}

kelasController.get('/', (c) => c.json(kelas))

kelasController.get('/:slug', (c) => {
    const { slug } = c.req.param()
    const kelasDetail = kelas.find(k => k.slug === slug)
    if (!kelasDetail) return c.notFound()
    return c.json(kelasDetail)
})

kelasController.get('/:slug/lessons', (c) => {
    const { slug } = c.req.param()
    // @ts-ignore
    const lessons = lessonsMap[slug]
    if (!lessons) return c.notFound()
    return c.json(lessons)
})

kelasController.get('/:slug/lesson/:index', (c) => {
    const { slug, index } = c.req.param()
    // @ts-ignore
    const lessons = lessonsMap[slug]
    if (!lessons || !lessons[+index]) return c.notFound()
    return c.json(lessons[+index])
})
