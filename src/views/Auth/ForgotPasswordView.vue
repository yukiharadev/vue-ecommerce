<template>
  <div class="container flex justify-center content-center items-center h-screen mx-auto">
    <div class="w-96">
      <div class="space-y-7">
        <div class="text-center">
          <div class="font-integral-cf text-2xl">Forgot Password</div>
          <div>Enter your email to reset your password</div>
        </div>
        <fwb-input class="w-full" label="Email" placeholder="Enter your Email">
        </fwb-input>
        <div class="space-y-3">
          <fwb-button color="dark" class="w-full" outline>
            Send Code
          </fwb-button>
        </div>
        <div class="text-center">
          <span>Remember your password?</span>
          <RouterLink to="signin" class="cursor-pointer text-purple-600 ml-1 font-bold">Sign In</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FwbButton, FwbInput } from "flowbite-vue";
</script>

<style lang="scss" scoped></style>
