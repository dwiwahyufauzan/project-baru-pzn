<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let slug = '';
    let index = '';

    $: {
        slug = $page.params.slug;
        index = $page.params.index;
    }

    onMount(() => {
        console.log('slug:', slug);
        console.log('index:', index);
    });
</script>

<h1>Konten untuk lesson {index} dari kelas {slug}</h1>
