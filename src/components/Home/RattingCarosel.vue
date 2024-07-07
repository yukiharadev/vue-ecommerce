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
        <n-carousel-item v-for="item in rattingData" :key="item.id">
          <RattingCustomer
            :name="item.name"
            :content="item.content"
            :rating="item.ratting"
          />
        </n-carousel-item>
      </n-carousel>
    </div>
  </div>
</template>

<script setup>
import RattingCustomer from "@/components/RattingCustomer.vue";
import { NCarousel } from "naive-ui";
import { ref, onMounted } from "vue";
import { getReviews } from "@/api/reviews";

const rattingData = ref([]);

onMounted(() => {
  getReviews().then((data) => {
    rattingData.value = data;
    console.log(rattingData.value);
  });
});
</script>
