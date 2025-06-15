<script lang="ts">
    import '../../../app.css'
    import { page } from '$app/stores';
    let openMenu = '';
    let isLoggedIn = true;
    let isMobileMenuOpen = false;
    let userName = 'Sun Jinwoo';
    let isDropdownOpen = false;

    function toggleDropdown() {
        isDropdownOpen = !isDropdownOpen;
    }

    function clickOutside(node: HTMLElement) {
        const handleClick = (event: MouseEvent) => {
            if (!node.contains(event.target as Node)) {
                isDropdownOpen = false;
            }
        };

        document.addEventListener('click', handleClick, true);

        return {
            destroy() {
                document.removeEventListener('click', handleClick, true);
            }
        };
    }

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
            thumbnail: "https://logowik.com/content/uploads/images/php.jpg"
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
            thumbnail: "https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg"
        },
        {
            slug: "nodejs",
            judul: "Belajar Node.js dari Dasar sampai Mahir untuk Pemula",
            deskripsi: `Kuasai backend development menggunakan Node.js, mulai dari pemahaman event-driven programming, membuat server menggunakan Express.js, mengelola database, otentikasi pengguna, hingga membuat RESTful API. Cocok untuk yang ingin membangun aplikasi full-stack modern.`,
            instruktur: "Sun Jinwoo",
            harga: "Rp85.000",
            thumbnail: "https://logowik.com/content/uploads/images/nodejs.jpg"
        },
        {
            slug: "bunjs",
            judul: "Belajar Bun.js dari Dasar sampai Mahir",
            deskripsi: `Pelajari runtime modern Bun.js yang cepat dan efisien. Mulai dari instalasi, membuat server, pengelolaan routing, integrasi database, testing, hingga deployment. Cocok bagi developer JavaScript yang ingin membangun backend performa tinggi.`,
            instruktur: "Sun Jinwoo",
            harga: "Rp90.000",
            thumbnail: "https://bun.sh/logo.svg"
        },
        {
            slug: "restful-api",
            judul: "Membangun RESTful API untuk Pemula sampai Mahir",
            deskripsi: `Kuasai konsep REST API dari dasar: HTTP method, routing, middleware, autentikasi, hingga membuat API CRUD menggunakan framework populer. Kursus ini penting untuk pengembang backend dan full-stack.`,
            instruktur: "Eko Kurniawan Khannedy",
            harga: "Rp75.000",
            thumbnail: "https://keenethics.com/wp-content/uploads/2022/01/rest-api-1.svg"
        },
        {
            slug: "laravel",
            judul: "Belajar Laravel dari Dasar hingga Mahir",
            deskripsi: `Pelajari framework Laravel dari instalasi, routing, controller, Eloquent ORM, autentikasi, hingga membuat aplikasi web lengkap. Laravel cocok bagi pengembang PHP yang ingin produktif dengan fitur modern.`,
            instruktur: "Sun Jinwoo",
            harga: "Rp80.000",
            thumbnail: "https://download.logo.wine/logo/Laravel/Laravel-Logo.wine.png"
        }
    ];


    import { derived } from 'svelte/store';

    // Ambil slug dari $page.params.slug
    const item = derived(page, ($page) => {
        return produk.find(p => p.slug === $page.params.slug);
    });
</script>

<!-- HEADER -->
<header class="bg-blue-900 shadow sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
            <a href="/project-baru-pzn/dashboard" class="text-lg font-semibold text-white">Programmer Zaman Now</a>
        </div>

        <!-- Mobile toggle -->
        <button
                class="md:hidden text-white focus:outline-none"
                on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)}
                aria-label="Toggle menu"
        >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                 stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

        <!-- Desktop menu -->
        <nav class="hidden md:flex items-center space-x-6 text-base font-medium text-white">
            <a href="/project-baru-pzn/dashboard    " class="hover:text-blue-300">Browse Products</a>

            {#if isLoggedIn}
                <div class="relative">
                    <!-- User Icon -->
                    <button on:click={toggleDropdown} class="flex items-center bg-white rounded-full">
                        <img src="https://cdn-icons-png.flaticon.com/128/456/456212.png" alt="User" class="w-10 h-10 rounded-full border-2 border-white" />
                    </button>

                    <!-- Dropdown Menu -->
                    <div use:clickOutside class={`absolute right-0 mt-3 w-60 bg-white rounded-xl shadow-lg transform transition-all duration-300 ease-in-out origin-top-right ${isDropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                        <div class="px-6 py-4 border-b border-gray-200">
                            <p class="text-base font-semibold text-gray-800">Hi, {userName}</p>
                        </div>
                        <a href="/project-baru-pzn/profile"
                           class="block px-6 py-3 text-base hover:bg-gray-100 text-gray-700 font-medium">Edit Profil</a>
                        <button
                                class="block w-full text-left px-6 py-3 text-base hover:bg-gray-100 text-red-600 font-medium">Logout</button>
                    </div>
                </div>
            {:else}
                <a href="/project-baru-pzn/login" class="hover:text-blue-300">Log In</a>
                <a href="/project-baru-pzn/signup"
                   class="bg-white hover:bg-gray-200 text-blue-800 border border-white rounded px-3 py-2">
                    Sign Up
                </a>
            {/if}
        </nav>
    </div>

    <!-- Mobile Menu -->
    <div class={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
		isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
	}`}>
        <div class="px-4 pt-2 pb-4 bg-blue-900 shadow space-y-2 text-base font-medium text-white">
            <a href="/project-baru-pzn/kelas" class="block py-2 px-2 rounded hover:bg-blue-800">Browse Products</a>

            {#if isLoggedIn}
                <span class="block px-2">Hi, {userName}</span>
                <a href="/project-baru-pzn/profile" class="block py-2 px-2 hover:bg-blue-800">Edit Profil</a>
                <button class="block w-full text-left py-2 px-2 hover:bg-blue-800">Logout</button>
            {:else}
                <a href="/project-baru-pzn/login" class="block py-2 px-2 rounded hover:bg-blue-800">Log In</a>
                <a href="/project-baru-pzn/signup" class="block py-2 px-2 rounded hover:bg-blue-800">Sign Up</a>
            {/if}
        </div>
    </div>
</header>


{#if $item}
    <main class="max-w-6xl mx-auto px-4 py-10 space-y-12">
        <!-- Detail Kelas -->
        <div class="grid md:grid-cols-2 gap-12 items-start">
            <!-- Gambar Thumbnail -->
            <div class="w-full">
                <div class="overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200">
                    <img
                            src={$item.thumbnail}
                            alt="Thumbnail kelas {$item.judul} oleh {$item.instruktur}"
                            class="w-full max-h-96 object-contain aspect-video bg-white"
                    />
                </div>
            </div>


            <!-- Informasi Kelas -->
            <div>
                <h1 class="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 leading-snug">
                    {$item.judul}
                </h1>

                <p class="text-base sm:text-lg text-gray-600 mb-6">
                    {$item.deskripsi}
                </p>

                <p class="text-sm text-gray-500 mb-4">
                    Instruktur: <span class="font-semibold text-gray-800">{$item.instruktur}</span>
                </p>

                <p class="text-2xl font-bold text-red-600 mb-6">{$item.harga}</p>
            </div>
        </div>

        <!-- CTA -->
        <div class="sticky bottom-0 left-0 right-0 z-4">
            <div class="max-w-6xl mx-auto">
                <button
                        class="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
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
    </div>

</footer>