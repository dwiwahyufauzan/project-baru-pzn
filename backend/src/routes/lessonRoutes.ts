import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const lessonRoutes = (app: any) => {
    // @ts-ignore
    app.get('/kelas/:slug/lessons', async ({ params }) => {
        const kelas = await prisma.kelas.findUnique({
            where: { slug: params.slug },
            include: { lessons: true }
        })

        if (!kelas) return { error: 'Kelas tidak ditemukan' }
        return kelas.lessons
    })

    // @ts-ignore
    app.get('/kelas/:slug/lesson/:index', async ({ params }) => {
        const kelas = await prisma.kelas.findUnique({
            where: { slug: params.slug },
            include: { lessons: true }
        })

        if (!kelas) return { error: 'Kelas tidak ditemukan' }

        const index = parseInt(params.index)
        return kelas.lessons[index]
    })
}
