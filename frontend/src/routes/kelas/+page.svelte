<script lang="ts">
    import '../../app.css';
    import { goto } from "$app/navigation";

    let isMobileMenuOpen = false;
    let search = "";
    let sort = "Name (A-Z)";
    let kategoriDipilih = "null";
    let isKategoriTerbuka = false;

    let kategoriList = [
        "Cloud", "Machine Learning", "AI", "UI/UX", "Design Patterns",
        "Security", "Testing", "Microservices", "Data Science", "Blockchain",
        "Networking", "Big Data", "Kubernetes", "Frontend", "Backend"
    ];

    let kategoriTambahan = [
        "Pemrograman", "Web", "API", "Mobile", "Android",
        "Database", "SQL", "Framework", "DevOps", "Docker",
    ];

    let produk = [
        {
            slug: "java",
            judul: "Pemrograman Java untuk Pemula sampai Mahir",
            deskripsi: "Roadmap Terlengkap Menjadi Programmer Java untuk Pemula",
            instruktur: "Eko Kurniawan Khannedy",
            harga: "Rp75.000",
            thumbnail: "https://www.paigeniedringhaus.com/static/13beeafbbd98000e9dda382fa8733bed/8b983/java-logo-hero.webp"
        },
        {
            slug: "php",
            judul: "Pemrograman PHP untuk Pemula sampai Mahir",
            deskripsi: "Roadmap Terlengkap Menjadi Programmer PHP untuk Pemula",
            instruktur: "Eko Kurniawan Khannedy",
            harga: "Rp75.000",
            thumbnail: "https://logowik.com/content/uploads/images/php.jpg"
        },
        {
            slug: "golang",
            judul: "Pemrograman Go-Lang untuk Pemula sampai Mahir",
            deskripsi: "Roadmap Terlengkap Menjadi Programmer Go-Lang",
            instruktur: "Eko Kurniawan Khannedy",
            harga: "Rp75.000",
            thumbnail: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png"
        },
        {
            slug: "sveltekit",
            judul: "Membangun SvelteKit dari Dasar sampai Mahir",
            deskripsi: "Pelajari cara membangun SPA dan SSR dengan SvelteKit",
            instruktur: "Sun Jinwoo",
            harga: "Rp80.000",
            thumbnail: "https://cdn.sanity.io/images/3do82whm/next/2add36e54d193160841f3f6c8076ba337596e0bc-1000x667.png?w=720&h=480&fit=clip&auto=format"
        },
        {
            slug: "mysql",
            judul: "Belajar Database MySQL dari Dasar sampai Mahir",
            deskripsi: "Query, Relasi, dan Optimasi MySQL untuk Developer",
            instruktur: "Eko Kurniawan Khannedy",
            harga: "Rp70.000",
            thumbnail: "https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg"
        },
        {
            slug: "nodejs",
            judul: "Belajar Node.js dari Dasar sampai Mahir untuk Pemula",
            deskripsi: "Pelajari standar pembuatan API dengan REST di backend",
            instruktur: "Sun Jinwoo",
            harga: "Rp85.000",
            thumbnail: "https://logowik.com/content/uploads/images/nodejs.jpg"
        },
        {
            slug: "bunjs",
            judul: "Belajar Bun.js untuk Pemula dari Dasar sampai Mahir",
            deskripsi: "Pelajari Bun.js untuk membuat server backend yang cepat dan efisien.",
            instruktur: "Sun Jinwoo",
            harga: "Rp90.000",
            thumbnail: "https://bun.sh/logo.svg"
        },
        {
            slug: "restful-api",
            judul: "Membangun RESTful API untuk Pemula sampai Mahir",
            deskripsi: "Kuasai pembuatan REST API lengkap dengan autentikasi dan CRUD.",
            instruktur: "Eko Kurniawan Khannedy",
            harga: "Rp75.000",
            thumbnail: "https://keenethics.com/wp-content/uploads/2022/01/rest-api-1.svg"
        },
        {
            slug: "laravel",
            judul: "Belajar Laravel untuk Pemula dari Dasar hingga Mahir",
            deskripsi: "Pelajari Laravel untuk membangun aplikasi web modern dengan PHP.",
            instruktur: "Sun Jinwoo",
            harga: "Rp80.000",
            thumbnail: "https://download.logo.wine/logo/Laravel/Laravel-Logo.wine.png"
        }
    ];
</script>

<!-- HEADER -->
<header class="bg-blue-900 shadow sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        <div class="flex items-center space-x-2">
            <span class="text-lg font-semibold text-white">Programmer Zaman Now</span>
        </div>

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

        <nav class="hidden md:flex items-center space-x-6 text-base font-medium text-white">
            <a href="/project-baru-pzn/kelas" class="hover:text-blue-300">Browse Products</a>
            <a href="/project-baru-pzn/login" class="hover:text-blue-300">Log In</a>
            <a href="/project-baru-pzn/signup" class="bg-white hover:bg-gray-200 text-blue-800 border border-white rounded px-3 py-3 inline-block">
                Sign Up
            </a>
        </nav>
    </div>

    <div class={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
    }`}>
        <div class="px-4 pt-2 pb-4 bg-blue-900 shadow space-y-2 text-base font-medium text-white">
            <a href="/project-baru-pzn/kelas" class="block py-2 px-2 rounded hover:bg-blue-800">Browse Products</a>
            <a href="/project-baru-pzn/login" class="block py-2 px-2 rounded hover:bg-blue-800">Log In</a>
            <a href="/project-baru-pzn/signup" class="block py-2 px-2 rounded hover:bg-blue-800">Sign Up</a>
        </div>
    </div>
</header>

<main class="max-w-7xl mx-auto px-8 py-8">
    <section class="mb-8">
        <h2 class="font-medium text-2xl mb-4">Browse Products</h2>
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <form class="w-full sm:flex-1 sm:max-w-sm">
                <label class="sr-only" for="search">Search product names</label>
                <input
                        bind:value={search}
                        id="search"
                        type="search"
                        placeholder="Search product names"
                        class="w-full rounded-md border-gray-300 px-4 py-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
            </form>
            <div class="flex items-center space-x-2 text-lg text-gray-700 w-full sm:w-auto">
                <label class="whitespace-nowrap hidden sm:inline" for="sort">Sort by:</label>
                <select
                        bind:value={sort}
                        class="w-full sm:w-auto rounded-md border-gray-300 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                >
                    <option>Name (A-Z)</option>
                    <option>Name (Z-A)</option>
                    <option>Price (Low to High)</option>
                    <option>Price (High to Low)</option>
                </select>
            </div>
        </div>
    </section>

    <section class="mb-8">
        <h3 class="hidden md:block font-medium text-xl mb-4">Categories</h3>
        <button
                class="w-full text-lg font-semibold border border-red-500 text-red-600 rounded-md px-4 py-3 mb-4 hover:bg-red-50 md:text-lg md:font-medium"
                on:click={() => (isKategoriTerbuka = !isKategoriTerbuka)}
        >
            {isKategoriTerbuka ? 'Hide categories' : 'View all categories'}
        </button>

        <div
                class="overflow-hidden transition-all duration-500 ease-in-out"
                style={`max-height: ${isKategoriTerbuka ? '500px' : '0px'}; opacity: ${isKategoriTerbuka ? 1 : 0}; transform: translateY(${isKategoriTerbuka ? '0' : '-10px'});`}
        >
            <div class="flex flex-wrap gap-3 mb-3 pt-2">
                {#each kategoriList as kategori}
                    <button
                            on:click={() => (kategoriDipilih = kategori)}
                            class="text-lg bg-gray-50 border rounded-md px-4 py-2 transition-colors duration-150 hover:bg-gray-100 {kategoriDipilih === kategori ? 'bg-blue-100 border-blue-600 text-blue-600' : 'border-gray-300 text-gray-800'}"
                    >
                        {kategori}
                    </button>
                {/each}
            </div>
        </div>

        <div class="flex flex-wrap gap-3 mt-2">
            {#each kategoriTambahan as kategori}
                <button
                        on:click={() => (kategoriDipilih = kategori)}
                        class="text-lg bg-gray-50 border rounded-md px-4 py-2 transition-colors duration-150 hover:bg-gray-100 {kategoriDipilih === kategori ? 'bg-green-100 border-green-600 text-green-600' : 'border-gray-300 text-gray-800'}"
                >
                    {kategori}
                </button>
            {/each}
        </div>
    </section>

    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {#each produk as item}
            <article class="overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 rounded-lg bg-white">
                <img src={item.thumbnail} alt={item.judul} class="w-auto h-36 sm:h-44 md:h-58 object-cover mx-auto"/>
                <div class="p-5">
                    <h4 class="font-semibold text-lg mb-2">{item.judul}</h4>
                    <p class="text-base text-gray-600 mb-1">{item.deskripsi}</p>
                    <p class="text-sm text-gray-400 mb-5">Course • By {item.instruktur}</p>
                    <a href={`/project-baru-pzn/kelas/${item.slug}`} class="block w-full sm:w-auto text-base text-center border border-red-500 rounded-md py-3 px-4 text-gray-800 hover:bg-red-50 font-medium">
                        {item.harga}
                    </a>
                </div>
            </article>
        {/each}
    </section>
</main>

<!-- FOOTER -->
<footer class="bg-gray-600 border-t border-gray-200 py-8 mt-20 text-white">
    <div class="container mx-auto px-16 flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0 text-base">
            &copy; <span id="year"></span> <strong>Programmer Zaman Now</strong>
        </div>
        <div class="flex space-x-6 text-base">
            <a href="/#" class="hover:text-blue-500 transition">Tentang</a>
            <a href="/#" class="hover:text-blue-500 transition">Kontak</a>
            <a href="/#" class="hover:text-blue-500 transition">Privacy Policy</a>
        </div>
    </div>

    <div class="container mx-auto px-16 mt-4 flex space-x-8 text-base text-gray-300">
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition">Instagram</a>
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition">Facebook</a>
        <a href="https://t.me/yourprofile" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition">Telegram</a>
    </div>
</footer>
