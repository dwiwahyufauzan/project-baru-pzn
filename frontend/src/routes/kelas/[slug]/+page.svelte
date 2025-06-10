<script>
    import '../../../app.css'
    import { page } from '$app/stores';
    let openMenu = '';
    let isMobileMenuOpen = false;

    const produk = [
        {
            slug: "java",
            judul: "Pemrograman Java untuk Pemula sampai Mahir",
            deskripsi: `Kursus lengkap yang membahas dasar-dasar pemrograman Java hingga konsep lanjutan seperti OOP (Object-Oriented Programming), koleksi data, exception handling, serta penggunaan framework populer. Cocok bagi kamu yang ingin menjadi developer Java profesional dengan pemahaman mendalam dan praktik langsung.`,
            instruktur: "Eko Kurniawan Khannedy",
            harga: "Rp75.000",
            thumbnail: "https://www.paigeniedringhaus.com/static/13beeafbbd98000e9dda382fa8733bed/8b983/java-logo-hero.webp"
        },
        {
            slug: "php",
            judul: "Pemrograman PHP untuk Pemula sampai Mahir",
            deskripsi: `Pelajari cara membuat website dinamis menggunakan PHP mulai dari instalasi server lokal, sintaks dasar, pengolahan form, session management, hingga menghubungkan database MySQL. Termasuk juga best practice dan tips keamanan agar aplikasi kamu aman dan efisien.`,
            instruktur: "Eko Kurniawan Khannedy",
            harga: "Rp75.000",
            thumbnail: "https://pngimg.com/d/php_PNG26.png"
        },
        {
            slug: "golang",
            judul: "Pemrograman Go-Lang untuk Pemula sampai Mahir",
            deskripsi: `Kursus intensif untuk mengenal bahasa Go yang terkenal cepat dan efisien. Mulai dari tipe data, fungsi, goroutine, channel, hingga membangun aplikasi web dan REST API menggunakan framework Go populer. Cocok untuk developer yang ingin berkarir di cloud dan microservices.`,
            instruktur: "Eko Kurniawan Khannedy",
            harga: "Rp75.000",
            thumbnail: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png"
        },
        {
            slug: "sveltekit",
            judul: "Membangun SvelteKit dari Dasar sampai Mahir",
            deskripsi: `Pelajari framework SvelteKit dari instalasi, konsep reactive programming, routing, server-side rendering (SSR), hingga deployment. Kursus ini cocok bagi front-end developer yang ingin membuat aplikasi web modern dengan performa tinggi dan mudah dikembangkan.`,
            instruktur: "Sun Jinwoo",
            harga: "Rp80.000",
            thumbnail: "https://cdn.sanity.io/images/3do82whm/next/2add36e54d193160841f3f6c8076ba337596e0bc-1000x667.png?w=720&h=480&fit=clip&auto=format"
        },
        {
            slug: "mysql",
            judul: "Belajar Database MySQL dari Dasar sampai Mahir",
            deskripsi: `Belajar mengelola database menggunakan MySQL mulai dari instalasi, desain database, pembuatan query SQL, pengelolaan relasi tabel, optimasi query, hingga backup dan restore database. Kursus ini penting bagi siapa saja yang ingin memahami cara kerja backend dan data management.`,
            instruktur: "Eko Kurniawan Khannedy",
            harga: "Rp70.000",
            thumbnail: "https://techvccloud.mediacdn.vn/2020/9/17/mysql-1-1600340047538868003500-crop-160034079526453914971.png"
        },
        {
            slug: "nodejs",
            judul: "Belajar Node.js dari Dasar sampai Mahir untuk Pemula",
            deskripsi: `Kuasai backend development menggunakan Node.js, mulai dari pemahaman event-driven programming, membuat server menggunakan Express.js, mengelola database, otentikasi pengguna, hingga membuat RESTful API. Cocok untuk yang ingin membangun aplikasi full-stack modern.`,
            instruktur: "Sun Jinwoo",
            harga: "Rp85.000",
            thumbnail: "https://logowik.com/content/uploads/images/nodejs.jpg"
        }
    ];


    import { derived } from 'svelte/store';

    // Ambil slug dari $page.params.slug
    const item = derived(page, ($page) => {
        return produk.find(p => p.slug === $page.params.slug);
    });
</script>

<header class="bg-blue-900/85 shadow sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
            <span class="text-lg font-bold text-white">Programmer Zaman Now</span>
        </div>

        <!-- Hamburger Menu Button (mobile only) -->
        <button class="md:hidden text-white focus:outline-none" on:click={() => isMobileMenuOpen = !isMobileMenuOpen}>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                 stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-6 text-base font-medium text-white">
            <a href="/kelas" class="hover:text-blue-300">Browse Products</a>
            <a href="/login" class="hover:text-blue-300">Log In</a>
            <a href="/signup" target="_blank" class="bg-white hover:bg-gray-200 text-blue-800 border border-white rounded px-3 py-1 inline-block">
                Sign Up
            </a>
        </nav>
    </div>

    <!-- Mobile Navigation -->
    {#if isMobileMenuOpen}
        <div class="md:hidden px-4 pt-2 pb-4 bg-white shadow space-y-2 text-base font-medium text-gray-800 transition-all duration-200">
            <a href="/kelas" class="block py-2 px-2 rounded hover:bg-gray-100">Browse Products</a>
            <a href="/login" class="block py-2 px-2 rounded hover:bg-gray-100">Log In</a>
            <a href="/signup" target="_blank" class="block py-2 px-2 rounded hover:bg-gray-100">Sign Up</a>
        </div>
    {/if}
</header>

{#if $item}
    <main class="max-w-6xl mx-auto px-4 py-10 space-y-10">
        <!-- Detail Kelas -->
        <div class="grid md:grid-cols-2 gap-10 items-start">
            <div class="w-full">
                <div class="overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200">
                    <img
                            src={$item.thumbnail}
                            alt="Thumbnail kelas {$item.judul} oleh {$item.instruktur}"
                            class="w-full h-auto object-cover aspect-video"
                    />
                </div>
            </div>
            <div>
                <h1 class="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 leading-snug">
                    {$item.judul}
                </h1>
                <p class="text-base sm:text-lg text-gray-600 mb-4">
                    {$item.deskripsi}
                </p>

                <p class="text-sm text-gray-500 mb-3">
                    Instruktur: <span class="font-semibold text-gray-800">{$item.instruktur}</span>
                </p>

                <div class="flex items-center justify-between">
                    <p class="text-2xl font-bold text-red-600">{$item.harga}</p>
                </div>
            </div>
        </div>

        <div class="sticky bottom-0 left-0 right-0 p-4 py-4 md:static md:shadow-none md:border-0">
            <div class="max-w-6xl mx-auto">
                <button class="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
                    Daftar Sekarang - Akses Seumur Hidup
                </button>
            </div>
        </div>
    </main>
{:else}
    <div class="max-w-2xl mx-auto text-center py-20">
        <h2 class="text-2xl font-semibold text-gray-800">Kelas tidak ditemukan</h2>
    </div>
{/if}

<!-- FOOTER -->
<footer class="bg-gray-600 border-t border-gray-200 py-8 mt-8 text-white">
    <div class="container mx-auto px-16 flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0 text-base">
            &copy; <span id="year"></span> <strong>Programmer Zaman Now</strong>
        </div>
        <div class="flex space-x-6 text-base">
            <a href="#" class="hover:text-blue-500 transition">Tentang</a>
            <a href="#" class="hover:text-blue-500 transition">Kontak</a>
            <a href="#" class="hover:text-blue-500 transition">Privacy Policy</a>
        </div>
    </div>

    <!-- Social media section -->
    <div class="container mx-auto px-16 mt-4 flex space-x-8 text-base text-gray-300">
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition">
            Instagram
        </a>
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition">
            Facebook
        </a>
        <a href="https://t.me/yourprofile" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition">
            Telegram
        </a>
        <a href="mailto:email@domain.com" class="hover:text-blue-400 transition">
            Email
        </a>
    </div>

</footer>