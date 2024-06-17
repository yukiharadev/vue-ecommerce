<template>
  <fwb-card class="my-4 rounded-3xl" :img-src="props.imgSrc" variant="image">
    <div class="p-5">
      <h5
        class="capitalize mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ props.productName }}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        {{ props.productPrice }}
      </p>
    </div>
  </fwb-card>
</template>

<script setup>
import { FwbCard } from "flowbite-vue";

const props = defineProps({
  imgSrc: String,
  productName: String,
  productPrice: String,
});
</script>
