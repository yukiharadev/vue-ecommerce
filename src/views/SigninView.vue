<template>
    <div class="container flex justify-center items-center h-screen mx-auto">
      <div class="space-y-7">
        <div class="text-center">
          <div class="font-integral-cf text-2xl">Log in into your account</div>
          <div>Welcome back! Please enter your details</div>
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
        <div class="space-y-3">
          <fwb-button color="dark" class="w-full" outline> Sign Up </fwb-button>
          <div class="flex justify-between">
            <fwb-checkbox v-model="check" label="Remember for 30days" />
            <span class="cursor-pointer text-purple-600 font-bold"
              >Forgot password</span
            >
          </div>
          <fwb-button color="light" class="w-full" size="md">
            <img src="/public/google.svg" class="w-[20px] inline mr-2 h-auto" />
            <Slot class="ml-1">Sign in with Google</Slot>
          </fwb-button>
        </div>
        <div class="text-center">
          <span>Don't have an account?</span>
          <span class="cursor-pointer text-purple-600 ml-1 font-bold">Sign Up</span>
          </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { FwbButton, FwbInput, FwbCheckbox } from "flowbite-vue";
  </script>
  
  <style lang="scss" scoped></style>
  