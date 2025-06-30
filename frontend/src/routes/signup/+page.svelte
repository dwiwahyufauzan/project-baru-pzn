<script lang="ts">
    import { goto } from '$app/navigation';
    let name = '';
    let email = '';
    let password = '';
    let error = '';
    let loading = false;

    const handleRegister = async () => {
        error = '';
        loading = true;

        try {
            const res = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });

            const data = await res.json();

            if (!res.ok) {
                error = data?.error || 'Registrasi gagal';
                return;
            }

            alert('Registrasi berhasil. Silakan login.');
            goto('/project-baru-pzn/login');
        } catch (err) {
            console.error(err);
            error = 'Terjadi kesalahan saat mengirim data.';
        } finally {
            loading = false;
        }
    };
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
            <img src="https://www.programmerzamannow.com/img/pzn.png" alt="Logo PZN" class="h-16 w-auto" />
        </div>

        <h2 class="text-center text-3xl font-medium text-gray-900">Sign Up</h2>

        {#if error}
            <p class="text-red-600 text-sm text-center">{error}</p>
        {/if}

        <form class="space-y-5" on:submit|preventDefault={handleRegister}>
            <input
                    type="text"
                    placeholder="Nama Lengkap"
                    bind:value={name}
                    class="appearance-none rounded-md block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    required
            />

            <input
                    type="email"
                    placeholder="Email"
                    bind:value={email}
                    class="appearance-none rounded-md block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    required
            />

            <input
                    type="password"
                    placeholder="Password"
                    bind:value={password}
                    class="appearance-none rounded-md block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    required
                    minlength="6"
            />

            <button
                    type="submit"
                    class="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold transition disabled:opacity-50"
                    disabled={loading}
            >
                {loading ? 'Mendaftarkan...' : 'Daftar'}
            </button>
        </form>

        <p class="text-center text-sm text-gray-600">
            Sudah punya akun?
            <a href="/project-baru-pzn/login" class="font-medium text-blue-600 hover:text-blue-700 transition underline">Masuk</a>
        </p>
    </div>
</section>
