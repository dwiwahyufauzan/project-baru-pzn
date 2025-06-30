<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import clickOutside from '$lib/clickOutside'; // pastikan ini ada

    let user: { id: number; name: string; email: string } | null = null;
    let error = '';
    let loading = true;

    let isDropdownOpen = false;
    let isMobileMenuOpen = false;

    onMount(async () => {
        const token = localStorage.getItem('token');

        if (!token) {
            goto('/project-baru-pzn/login');
            return;
        }

        try {
            const res = await fetch('http://localhost:3000/auth/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const data = await res.json();

            if (!res.ok) {
                error = data?.message || 'Gagal mengambil data user.';
                localStorage.removeItem('token');
                goto('/project-baru-pzn/login');
                return;
            }

            user = data.user;
        } catch (err) {
            console.error(err);
            error = 'Terjadi kesalahan saat memuat profil.';
        } finally {
            loading = false;
        }
    });

    function logout() {
        localStorage.removeItem('token');
        goto('/project-baru-pzn/login');
    }

    function toggleDropdown() {
        isDropdownOpen = !isDropdownOpen;
    }
</script>

<!-- ✅ NAVBAR -->
<header class="bg-blue-900 shadow sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        <a href="/project-baru-pzn/dashboard" class="text-lg font-semibold text-white">
            Programmer Zaman Now
        </a>

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

        <!-- Desktop Menu -->
        <nav class="hidden md:flex items-center space-x-6 text-base font-medium text-white">
            <a href="/project-baru-pzn/dashboard" class="hover:text-blue-300">Browse Products</a>

            {#if user}
                <div class="relative">
                    <button on:click={toggleDropdown} class="flex items-center bg-white rounded-full">
                        <img src="https://cdn-icons-png.flaticon.com/128/456/456212.png" alt="User"
                             class="w-10 h-10 rounded-full border-2 border-white" />
                    </button>

                    {#if isDropdownOpen}
                        <div use:clickOutside on:click_outside={() => (isDropdownOpen = false)}
                             class="absolute right-0 mt-3 w-60 bg-white rounded-xl shadow-lg origin-top-right scale-100 opacity-100 transition-all">
                            <div class="px-6 py-4 border-b border-gray-200">
                                <p class="text-base font-semibold text-gray-800">Hi, {user.name}</p>
                            </div>
                            <a href="/project-baru-pzn/profile"
                               class="block px-6 py-3 text-base hover:bg-gray-100 text-gray-700 font-medium">Edit Profil</a>
                            <button on:click={logout}
                                    class="block w-full text-left px-6 py-3 text-base hover:bg-gray-100 text-red-600 font-medium">
                                Logout
                            </button>
                        </div>
                    {/if}
                </div>
            {/if}
        </nav>
    </div>

    <!-- Mobile Menu -->
    <div class={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div class="px-4 pt-2 pb-4 bg-blue-900 shadow space-y-2 text-base font-medium text-white">
            <a href="/project-baru-pzn/dashboard" class="block py-2 px-2 rounded hover:bg-blue-800">Browse Products</a>

            {#if user}
                <span class="block px-2">Hi, {user.name}</span>
                <a href="/project-baru-pzn/profile" class="block py-2 px-2 hover:bg-blue-800">Edit Profil</a>
                <button on:click={logout} class="block w-full text-left py-2 px-2 hover:bg-blue-800">Logout</button>
            {/if}
        </div>
    </div>
</header>

<!-- ✅ HALAMAN PROFILE -->
<section class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        {#if loading}
            <p class="text-center text-gray-500">Memuat profil...</p>
        {:else if error}
            <p class="text-red-600 text-center">{error}</p>
        {:else if user}
            <div class="space-y-4 text-center">
                <h2 class="text-2xl font-bold text-gray-900">Profil Pengguna</h2>
                <p><strong>Nama:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </div>
        {/if}
    </div>
</section>
