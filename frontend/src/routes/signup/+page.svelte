<script>
    let name = '';
    let email = '';
    let password = '';
</script>

<!-- HEADER NAVBAR -->
<header class="bg-blue-900/85 shadow-md sticky top-0 z-50">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/project-baru-pzn/kelas" class="text-2xl font-bold text-white transition">Programmer Zaman Now</a>
    </nav>
</header>

<!-- FORM REGISTRASI -->
<section class="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">

        <div class="flex justify-center">
            <img
                    src="https://www.programmerzamannow.com/img/pzn.png"
                    alt="Logo PZN"
                    class="h-16 w-auto"
            />
        </div>

        <h2 class="text-center text-3xl font-medium text-gray-900">Sign Up</h2>

        <form class="space-y-5" on:submit|preventDefault={() => alert(`Daftar: ${name}, ${email}`)}>
            <input
                    type="text"
                    placeholder="Nama Lengkap"
                    bind:value={name}
                    class="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
            />
            <input
                    type="email"
                    placeholder="Email"
                    bind:value={email}
                    class="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
            />
            <input
                    type="password"
                    placeholder="Password"
                    bind:value={password}
                    class="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                    minlength="6"
            />
            <button
                    type="submit"
                    class="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold transition"
            >
                Daftar
            </button>
        </form>

        <p class="text-center text-sm text-gray-600">
            Sudah punya akun?
            <a href="/login" class="font-medium text-blue-600 hover:text-blue-700 transition underline">
                Masuk
            </a>
        </p>
    </div>
</section>

<!-- FOOTER -->
<footer class="bg-gray-600 border-t border-gray-200 py-8 mt-20 text-white">
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