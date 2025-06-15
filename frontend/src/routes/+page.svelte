<script>
    import '../app.css';
    let openMenu = '';
    let isMobileMenuOpen = false;

    // Set current year for footer
    let year = new Date().getFullYear();
</script>

<svelte:head>
    <title>Programmer Zaman Now</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<header class="bg-white shadow sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
            <img src="https://www.programmerzamannow.com/img/pzn.png" alt="Logo PZN" class="h-8 w-8" />
            <span class="text-lg font-bold text-gray-900">Programmer Zaman Now</span>
        </div>

        <!-- Hamburger Menu (Mobile) -->
        <button class="md:hidden focus:outline-none" on:click={() => isMobileMenuOpen = !isMobileMenuOpen}>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

        <!-- Menu Desktop -->
        <nav class="hidden md:flex items-center space-x-6 text-base font-semibold text-gray-800">
            <a href="/promo" class="hover:text-blue-600">Promo Kelas</a>
            <a href="/project-baru-pzn/kelas" class="hover:text-blue-600">Kelas Online</a>

            <!-- Dropdown Komunitas -->
            <div class="relative">
                <button
                        on:click={() => openMenu = openMenu === 'komunitas' ? '' : 'komunitas'}
                        class="hover:text-blue-600 flex items-center gap-1"
                >
                    Komunitas <span>▼</span>
                </button>
                {#if openMenu === 'komunitas'}
                    <div class="absolute bg-white shadow rounded mt-2 p-2 space-y-1 w-48">
                        <a href="/discord" class="block px-3 py-1 hover:bg-gray-100">Discord</a>
                        <a href="/forum" class="block px-3 py-1 hover:bg-gray-100">Forum</a>
                    </div>
                {/if}
            </div>

            <!-- Dropdown Social Media -->
            <div class="relative">
                <button
                        on:click={() => openMenu = openMenu === 'sosmed' ? '' : 'sosmed'}
                        class="hover:text-blue-600 flex items-center gap-1"
                >
                    Social Media <span>▼</span>
                </button>
                {#if openMenu === 'sosmed'}
                    <div class="absolute bg-white shadow rounded mt-2 p-2 space-y-1 w-48">
                        <a href="https://www.youtube.com/@ProgrammerZamanNow" target="_blank" class="block px-3 py-1 hover:bg-gray-100">YouTube</a>
                        <a href="https://www.instagram.com/programmerzamannow/" target="_blank" class="block px-3 py-1 hover:bg-gray-100">Instagram</a>
                    </div>
                {/if}
            </div>

            <!-- GitHub Link -->
            <a href="https://github.com/ProgrammerZamanNow" target="_blank" class="hover:text-blue-600 flex items-center gap-1">
                GitHub
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3h7v7m0 0L10 21l-7-7 11-11z" />
                </svg>
            </a>
        </nav>
    </div>

    <!-- Mobile Menu -->
    {#if isMobileMenuOpen}
        <div class="md:hidden px-4 pb-4 space-y-2 text-base font-medium text-gray-800 bg-white shadow">
            <a href="/promo" class="block py-1 hover:text-blue-600">Promo Kelas Udemy</a>
            <a href="/project-baru-pzn/kelas" class="block py-1 hover:text-blue-600">Kelas Online</a>
            <details>
                <summary class="cursor-pointer py-1 hover:text-blue-600">Komunitas</summary>
                <div class="pl-4 space-y-1">
                    <a href="/discord" class="block py-1 hover:text-blue-600">Discord</a>
                    <a href="/forum" class="block py-1 hover:text-blue-600">Forum</a>
                </div>
            </details>
            <details>
                <summary class="cursor-pointer py-1 hover:text-blue-600">Social Media</summary>
                <div class="pl-4 space-y-1">
                    <a href="https://youtube.com" target="_blank" class="block py-1 hover:text-blue-600">YouTube</a>
                    <a href="https://instagram.com" target="_blank" class="block py-1 hover:text-blue-600">Instagram</a>
                </div>
            </details>
            <a href="https://github.com/ProgrammerZamanNow" target="_blank" class="block py-1 hover:text-blue-600">GitHub</a>
        </div>
    {/if}
</header>

<!-- HERO SECTION -->
<section class="bg-blue-900/85 py-20 text-center">
    <div class="container mx-auto px-4">
        <h2 class="text-5xl font-bold mb-4 text-white">Programmer Zaman Now</h2>
        <p class="text-xl text-white max-w-2xl mx-auto mb-8">
            Tempat Belajar untuk Menjadi Software Development Expert yang Zaman Now Banget!
        </p>
        <a href="/project-baru-pzn/kelas" class="px-6 py-3 bg-white text-gray-900 text-lg font-bold rounded-xl hover:bg-gray-200">
            Gabung Kelas Online!
        </a>
    </div>
</section>

<!-- INFORMASI -->
<section class="py-16 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-16">
        <div class="text-center mb-12">
            <h2 class="text-2xl font-bold text-gray-800">Kenapa Belajar di Programmer Zaman Now?</h2>
            <p class="mt-2 text-gray-600 text-lg">Kami punya banyak alasan kuat untuk mendukung perjalanan belajarmu!</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Fitur 1 -->
            <div class="bg-white rounded-2xl p-6 hover:shadow-lg transition">
                <div class="flex flex-col items-center text-center">
                    <div class="mb-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Belajar Mudah" class="w-20 h-20" />
                    </div>
                    <h4 class="text-xl font-semibold text-gray-800 mb-2">Roadmap Jelas</h4>
                    <p class="text-gray-600 text-base">Di sini, semua diajarkan dari awal sampai akhir. Setiap kelas sudah di susun sesuai dengan Roadmap nya. Sehingga peserta tidak akan tersesat ketika belajar, cukup ikuti kelas yang diinginkan.</p>
                </div>
            </div>

            <!-- Fitur 2 -->
            <div class="bg-white rounded-2xl p-6 hover:shadow-lg transition">
                <div class="flex flex-col items-center text-center">
                    <div class="mb-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png" alt="Materi Kekinian" class="w-20 h-20" />
                    </div>
                    <h4 class="text-xl font-semibold text-gray-800 mb-2">Materi Kekinian</h4>
                    <p class="text-gray-600 text-base">Materi di sini selalu up to date sesuai dengan perkembangan teknologi saat ini. Sehingga peserta akan mendapatkan materi yang pasti selalu terbaru. Selain itu semua materi akan selalu di update secara berkala.</p>
                </div>
            </div>

            <!-- Fitur 3 -->
            <div class="bg-white rounded-2xl p-6 hover:shadow-lg transition">
                <div class="flex flex-col items-center text-center">
                    <div class="mb-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" alt="Instruktur" class="w-20 h-20" />
                    </div>
                    <h4 class="text-xl font-semibold text-gray-800 mb-2">Instruktur Berpengalaman</h4>
                    <p class="text-gray-600 text-base">Di sini, instruktur belajar nya adalah praktisi yang sangat berpengalaman di dunia industri. Sehingga peserta tidak hanya bisa belajar teknologi saja, namun bisa belajar best practice dan pengalaman dari instrukturnya.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- FOOTER -->
<footer class="bg-gray-600 border-t border-gray-200 py-8 mt-20 text-white">
    <div class="container mx-auto px-16 flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0 text-base">
            &copy; {year} <strong>Programmer Zaman Now</strong>
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