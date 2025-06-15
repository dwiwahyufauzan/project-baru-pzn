<script lang="ts">
    import { page } from '$app/stores';
    import { produk } from '$lib/data/produk';
    import { onMount } from 'svelte';

    let isMobileMenuOpen = false;
    let isLoggedIn = true;
    let isDropdownOpen = false;
    let userName = 'Sun Jinwoo';


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

    const slug = $page.params.slug;
    let currentProduk = produk.find(p => p.slug === slug);
    const progress = 85;

    const lessons = [
        { id: "slide-source", title: "Slide dan Source Code", type: "document", done: true },
        { id: "discord-group", title: "Group Discord", type: "link", done: true },
        { id: "pendahuluan", title: "01 - Pendahuluan", duration: "2:21", type: "video", done: true },
        { id: "pengenalan-nodejs", title: "02 - Pengenalan NodeJS", duration: "6:14", type: "video", done: true },
        { id: "web-application", title: "03 - Web Application", duration: "6:08", type: "video", done: true },
        { id: "concurrency-parallel", title: "04 - Concurrency dan Parallel", duration: "9:07", type: "video", done: true },
        { id: "threadpool-web-model", title: "05 - Threadpool Web Model", duration: "7:13", type: "video", done: true }
    ];


    const getIcon = (type: string) => {
        if (type === 'video') return '▶️';
        if (type === 'document') return '📘';
        if (type === 'link') return '🌐';
        return '📌';
    };

    let activeTab = 'curriculum';
</script>

<!-- Header -->
<header class="bg-blue-900 shadow sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        <a href="/project-baru-pzn/dashboard" class="inline-block bg-white p-2 rounded-full shadow">
            <img src="https://cdn-icons-png.flaticon.com/128/1250/1250678.png" alt="Back" class="w-6 h-6" />
        </a>

        <button class="md:hidden text-white" on:click={() => isMobileMenuOpen = !isMobileMenuOpen}>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

        <!-- Desktop menu -->
        <nav class="hidden md:flex items-center space-x-6 text-base font-medium text-white">
            {#if isLoggedIn}
                <div class="relative">
                    <button on:click={toggleDropdown} class="flex items-center bg-white rounded-full">
                        <img src="https://cdn-icons-png.flaticon.com/128/456/456212.png" alt="User" class="w-10 h-10 rounded-full border-2 border-white" />
                    </button>
                    <div
                            use:clickOutside
                            class={`absolute right-0 mt-3 w-60 bg-white rounded-xl shadow-lg transition duration-300 ${isDropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                        <div class="px-6 py-4 border-b border-gray-200">
                            <p class="text-base font-semibold text-gray-800">Hi, {userName}</p>
                        </div>
                        <a href="/project-baru-pzn/profile" class="block px-6 py-3 hover:bg-gray-100 text-gray-700">Edit Profil</a>
                        <button class="block w-full text-left px-6 py-3 text-red-600 hover:bg-gray-100">Logout</button>
                    </div>
                </div>
            {:else}
                <a href="/project-baru-pzn/login" class="hover:text-blue-300">Log In</a>
                <a href="/project-baru-pzn/signup" class="bg-white text-blue-800 border border-white rounded px-3 py-2 hover:bg-gray-200">Sign Up</a>
            {/if}
        </nav>
    </div>

    <!-- Mobile menu -->
    <div class={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div class="px-4 pt-2 pb-4 bg-blue-900 shadow text-white">
            {#if isLoggedIn}
                <span class="block px-2">Hi, {userName}</span>
                <a href="/project-baru-pzn/profile" class="block py-2 px-2 hover:bg-blue-800">Edit Profil</a>
                <button class="block w-full text-left py-2 px-2 hover:bg-blue-800">Logout</button>
            {:else}
                <a href="/project-baru-pzn/login" class="block py-2 px-2 hover:bg-blue-800">Log In</a>
                <a href="/project-baru-pzn/signup" class="block py-2 px-2 hover:bg-blue-800">Sign Up</a>
            {/if}
        </div>
    </div>
</header>

<!-- Layout -->
<section class="min-h-screen bg-gradient-to-br from-white to-slate-100 text-gray-800 px-4 lg:pl-[320px]">

    <!-- Sidebar -->
    <aside class="fixed top-12 left-0 h-screen w-full max-w-xs bg-white shadow-xl px-6 py-10 hidden lg:flex flex-col">
        <div class="mb-8">
            <img
                    src={currentProduk.thumbnail}
                    alt={currentProduk.judul}
                    class="w-full mx-auto rounded-lg mb-6 shadow"
            />
            <h2 class="text-xl font-semibold mb-3">{currentProduk.judul}</h2>

            <div class="w-full h-2 bg-gray-200 rounded-full mb-2">
                <div
                        class="h-2 bg-red-500 rounded-full transition-all duration-500"
                        style="width: {progress}%"
                ></div>
            </div>
            <p class="text-sm text-gray-600 font-normal">{progress}% COMPLETE</p>
        </div>

        <nav class="space-y-3 text-lg font-normal">
            <a
                    class="flex items-center gap-2 px-4 py-2 rounded-lg transition block cursor-pointer {activeTab === 'curriculum' ? 'bg-gray-100 text-blue-600' : 'text-gray-900'}"
                    on:click={() => (activeTab = 'curriculum')}
            >
                <img src="https://cdn-icons-png.flaticon.com/128/2097/2097172.png" alt="Curriculum Icon" class="w-5 h-5" />
                Course Curriculum
            </a>

            <a
                    class="flex items-center gap-2 px-4 py-2 rounded-lg transition block cursor-pointer {activeTab === 'instructor' ? 'bg-gray-100 text-blue-600' : 'text-gray-900'}"
                    on:click={() => (activeTab = 'instructor')}
            >
                <img src="https://cdn-icons-png.flaticon.com/128/17701/17701286.png" alt="Instructor Icon" class="w-5 h-5" />
                Your Instructor
            </a>
        </nav>

    </aside>


    <!-- Main Content -->
    <main class="col-span-2 px-4 sm:px-8 py-12">
        {#if activeTab === 'curriculum'}
            <h1 class="text-2xl font-medium mb-6">Course Curriculum</h1>
            <div class="flex items-center justify-between mb-8">
                <button class="flex items-center gap-2 bg-white  text-gray font-semibold px-5 py-2 rounded-lg shadow transition">
                    <span class="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-lg shadow">Start next lesson</span>
                    <span>Slide dan Source Code</span>
                </button>
            </div>
            <div class="space-y-4">
                {#each lessons as lesson}
                    <div class="flex items-center gap-4 bg-white px-6 py-4 rounded-xl shadow hover:shadow-md transition">
                        <span class="text-lg">{getIcon(lesson.type)}</span>
                        <a href={`/project-baru-pzn/content/${slug}/lesson/${lessons.indexOf(lesson)}`}>
                            {lesson.title}
                        </a>
                        {#if lesson.done}
                            <img src="https://mocipay.com/blog/wp-content/uploads/2023/08/Emoji-centang-biru.png" alt="Done" class="ml-auto w-6 h-6" />
                        {/if}
                    </div>
                {/each}
            </div>
        {:else if activeTab === 'instructor'}
            <h1 class="text-2xl font-medium mb-6">Your Instructor</h1>
            <div class="bg-white p-6 rounded-xl shadow-md">
                <img src="https://sketchok.com/images/articles/06-anime/068-solo-leveling/11/19.jpg" alt="Instructor" class="w-32 h-32 rounded-full mb-4">
                <h3 class="text-xl font-semibold">Sun Jinwoo</h3>
                <p class="text-gray-600 mt-2">
                    Instructor dengan pengalaman lebih dari 5 tahun di bidang pengembangan web full-stack. Aktif mengajar di berbagai platform online dan menciptakan ratusan jam konten edukatif.
                </p>
            </div>
        {/if}
    </main>
</section>
