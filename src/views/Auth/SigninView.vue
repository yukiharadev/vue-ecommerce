<template>
  <div class="container flex justify-center items-center h-screen mx-auto">
    <form @submit.prevent="handleSubmit">
      <div class="space-y-7">
        <div class="text-center">
          <div class="font-integral-cf text-2xl">Log in to your account</div>
          <div>Welcome back! Please enter your details</div>
        </div>
        <fwb-input v-model="email" class="w-full" label="Email" placeholder="Enter your Email"></fwb-input>
        <fwb-input v-model="password" class="w-full" label="Password" placeholder="*********"
          type="password"></fwb-input>
        <div class="space-y-3">
          <fwb-button type="submit" color="dark" class="w-full" outline> Log In </fwb-button>
          <div class="flex justify-between">
            <fwb-checkbox label="Remember for 30 days" />
            <RouterLink to="forgot-password" class="cursor-pointer text-purple-600 font-bold">Forgot password
            </RouterLink>
          </div>
          <fwb-button color="light" class="w-full" size="md">
            <img src="/public/google.svg" class="w-[20px] inline mr-2 h-auto" />
            Sign in with Google
          </fwb-button>
        </div>
        <div class="text-center">
          <span>Don't have an account?</span>
          <RouterLink to="signup" class="cursor-pointer text-purple-600 ml-1 font-bold">Sign Up</RouterLink>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FwbButton, FwbInput, FwbCheckbox } from "flowbite-vue";
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');
const handleSubmit = async () => {
  try {
    const { data: users } = await axios.get('http://localhost:3000/users');
    const user = users.find(u => u.email === email.value && u.password === password.value);
    if (user) {
      console.log('Login success for:', user.name);
      localStorage.setItem('authToken', user.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
      router.push("/");
    } else {
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    console.error('Login failed:', error);
  }
};
</script>