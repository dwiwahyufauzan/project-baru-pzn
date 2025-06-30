<script lang="ts">
    import { goto } from '$app/navigation';

    let email = '';
    let password = '';
    let error = '';
    let loading = false;

    const handleLogin = async () => {
        error = '';
        loading = true;

        try {
            const res = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (!res.ok) {
                error = data?.message || data?.errors || 'Login gagal';
                return;
            }

            // Simpan token ke localStorage
            localStorage.setItem('token', data.token);

            // Arahkan ke halaman profile
            goto('/project-baru-pzn/dashboard');
        } catch (err) {
            console.error(err);
            error = 'Terjadi kesalahan saat login.';
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

<!-- FORM LOGIN -->
<section class="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div class="flex justify-center">
            <img
                    src="https://www.programmerzamannow.com/img/pzn.png"
                    alt="Logo PZN"
                    class="h-16 w-auto"
            />
        </div>

        <h2 class="text-center text-3xl font-medium text-gray-900">Login</h2>

        {#if error}
            <p class="text-red-600 text-sm text-center">{error}</p>
        {/if}

        <form class="space-y-5" on:submit|preventDefault={handleLogin}>
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
                {loading ? 'Memproses...' : 'Masuk'}
            </button>
        </form>

        <p class="text-center text-sm text-gray-600">
            Belum punya akun?
            <a href="/project-baru-pzn/signup" class="font-medium text-blue-600 hover:text-blue-700 transition underline">
                Daftar
            </a>
        </p>
    </div>
</section>
