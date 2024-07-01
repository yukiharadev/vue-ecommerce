<template>
  <div class="pt-4 pb-8 h-full bg-white justify-center justify-items-center items-center">
    <h1 class="py-10 font-bebas-neue uppercase lg:text-5xl sm:text-5xl text-5xl font-bold text-center font-integral-cf">
      Top Selling
    </h1>
    <div class="container max-w-7xl mx-auto">
      <div class="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <CardProduct v-for="(product, index) in products" :key="index" :productName="product.name"
          :productPrice="product.price" :imgSrc="product.img" :class="{
            'hidden sm:block': !showAll && index >= 2,
            'sm:hidden md:block': !showAll && index >= 2,
            'md:hidden lg:block': !showAll && index >= 3,
            'lg:hidden': !showAll && index >= 4,
          }" />
      </div>
    </div>
    <fwb-button class="justify-center flex mx-auto px-20 rounded-full mb-8 mt-4" color="light"
      @click="toggleShowAll">View All</fwb-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CardProduct from "@/components/CardProduct.vue";
import { FwbButton } from "flowbite-vue";

const showAll = ref(false);

const toggleShowAll = () => {
  showAll.value = !showAll.value;
};

console.log(products.value);
</script>

<style lang="scss" scoped></style>
