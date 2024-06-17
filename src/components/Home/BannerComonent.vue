<script setup></script>

<template>
  <div class="dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
    <div
      class="container max-w-7xl mx-auto px-6 flex flex-col md:flex-row relative"
    >
      <div
        class="lg:w-1/2 md:w-1/2 sm:mr-7 flex flex-col relative z-20 order-1 md:order-1 mb-8 lg:py-20 mt-8 sm:py-10"
      >
        <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
        <h1
          class="font-bebas-neue uppercase text-5xl md:text-5xl sm:text-6xl font-black flex flex-col leading-none dark:text-white text-gray-800"
        >
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p class="text-sm sm:text-base text-gray-700 dark:text-white">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <div class="flex mt-8">
          <a
            href="#"
            class="py-2 px-8 rounded-full bg-slate-700 border-2 border-transparent text-white text-md mr-4 hover:bg-black"
          >
            Shop Now
          </a>
        </div>
        <div
          class="flex mt-8 justify-items-center justify-around items-center flex-wrap"
        >
          <div class="col block w-40 mb-8">
            <h1 class="text-4xl font-semibold">200+</h1>
            <h1 class="text-sm font-thin">International Brands</h1>
          </div>
          <div class="col block w-40 mb-8">
            <h1 class="text-4xl font-semibold">2,000+</h1>
            <h1 class="text-sm font-thin">High-Quality Products</h1>
          </div>
          <div class="col block w-40 mb-8">
            <h1 class="text-4xl font-semibold">30,000+</h1>
            <h1 class="text-sm font-thin">Happy Customers</h1>
          </div>
        </div>
      </div>
      <div
        class="md:flex lg:w-1/2 relative order-2 md:order-2 p-36 pb-[14rem] sm:w-1/2 bg-[url('./src/assets/images/banner.jpg')] bg-cover bg-top bg-no-repeat"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
