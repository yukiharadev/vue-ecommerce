<script setup>
import Versace from "@/assets/images/Logo_Shop/Versace.svg";
import Zara from "@/assets/images/Logo_Shop/Zara.svg";
import Gucci from "@/assets/images/Logo_Shop/Gucci.svg";
import Prada from "@/assets/images/Logo_Shop/Prada.svg";
import CalvinKlein from "@/assets/images/Logo_Shop/CalvinKlein.svg";
</script>

<template>
  <div class="bg-black">
    <div
      class="container max-w-7xl mx-auto justify-around content-center py-4 items-center flex flex-wrap"
    >
      <img class="py-4" :src="Versace" />
      <img class="py-4" :src="Zara" />
      <img class="py-4" :src="Gucci" />
      <img class="py-4" :src="Prada" />
      <img class="py-4" :src="CalvinKlein" />
    </div>
  </div>
</template>
