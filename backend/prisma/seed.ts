import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const kelas = await prisma.kelas.create({
        data: {
            judul: 'Belajar Node.js untuk Pemula',
            deskripsi: 'Panduan lengkap memulai dengan Node.js dan membangun web app.',
            thumbnail: 'https://i.ytimg.com/vi/ckcX0vY2bF4/maxresdefault.jpg',
            slug: 'belajar-nodejs',
            kategori: 'Backend',
            lessons: {
                create: [
                    { title: 'Slide dan Source Code', type: 'document', done: true },
                    { title: 'Group Discord', type: 'link', done: true },
                    { title: '01 - Pendahuluan', type: 'video', duration: '2:21', done: true },
                    { title: '02 - Pengenalan NodeJS', type: 'video', duration: '6:14', done: true },
                    { title: '03 - Web Application', type: 'video', duration: '6:08', done: true },
                    { title: '04 - Concurrency dan Parallel', type: 'video', duration: '9:07', done: true },
                    { title: '05 - Threadpool Web Model', type: 'video', duration: '7:13', done: true },
                ]
            }
        }
    });

    console.log('✅ Seed berhasil: ', kelas);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
