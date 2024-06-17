<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main class="bg-[#F2F0F1]">
    <RouterView />
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>

<style scoped></style>
