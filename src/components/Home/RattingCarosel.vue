<template>
  <div class="h-full bg-white">
    <div class="container max-w-7xl mx-auto">
      <h1 class="uppercase text-4xl font-integral-cf py-7">
        OUR HAPPY CUSTOMERS
      </h1>
      <n-carousel
        :slides-per-view="3"
        :space-between="20"
        :loop="true"
        draggable
        class="pb-4"
      >
        <RattingCustomer />
        <RattingCustomer />
        <RattingCustomer />
        <RattingCustomer />
        <RattingCustomer />
      </n-carousel>
    </div>
  </div>
</template>

<script setup>
import RattingCustomer from "@/components/RattingCustomer.vue";
import { NCarousel } from "naive-ui";
</script>
