<template>
    <!-- Header -->
    <header>
        <MainNav />
    </header>

    <main class="main-content container mx-auto">
        <slot/>
    </main>

    <footer class="bg-gray-800 p-4">
        <!-- Main layout footer content -->
        <p class="text-white text-center">Vue Store @nolrm</p>
    </footer>
</template>

<script>
// import axios from 'axios';
import MainNav from '@/components/MainNav.vue';

export default {
    components: {
        MainNav
    },
};
</script>