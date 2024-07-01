<template>
  <div class="container flex justify-center items-center h-screen mx-auto">
    <div class="space-y-7">
      <div class="text-center">
        <div class="font-integral-cf text-2xl">Registration Your Account</div>
        <div>Welcome to! Please enter your details</div>
      </div>
      <fwb-input
        v-model="name"
        class="w-full"
        label="Email"
        placeholder="Enter your Email"
      >
      </fwb-input>
      <fwb-input
        v-model="password"
        class="w-full"
        label="Password"
        placeholder="*********"
        type="password"
      >
      </fwb-input>
      <fwb-input
        class="w-full"
        label="Confirm Password"
        placeholder="*********"
        type="password"
      >
      </fwb-input>
      <div class="space-y-3">
        <fwb-button color="dark" class="w-full" outline> Sign Up </fwb-button>
        <fwb-button color="light" class="w-full" size="md">
          <img src="/public/google.svg" class="w-[20px] inline mr-2 h-auto" />
          <Slot class="ml-1">Sign in with Google</Slot>
        </fwb-button>
        <fwb-button color="light" class="w-full" size="md">
          <img
            src="/src/assets/icons/apple.svg"
            class="w-[20px] inline mr-2 h-auto"
          />
          <Slot class="ml-1">Sign in with Apple</Slot>
        </fwb-button>
      </div>

      <div class="text-center">
        <span>Already have an account?</span>
        <RouterLink
          to="signin"
          class="cursor-pointer text-purple-600 ml-1 font-bold"
          >Sign In</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { FwbButton, FwbInput, FwbCheckbox } from "flowbite-vue";
</script>

<style lang="scss" scoped></style>
