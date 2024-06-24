<template>
    <div>
        <header>
            <AppHeader />
        </header>
        <main class="bg-[#F2F0F1]">
            <RouterView />
        </main>
        <footer>
            <AppFooter />
        </footer>
    </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

