<template>
  <section class="bg-black text-white h-screen pt-12 px-4">
    <div class="max-w-sm mx-auto">
      <div class="mb-6">
        <h1 class="text-3xl tracking-wide font-bold mb-2 leading-tight">Log In Below</h1>
        <p class="text-sm">
          Don't have an account? 
          <router-link to="/register">
            <span class="text-gradient">Sign Up</span>
          </router-link>
        </p>
      </div>
      <form class="max-w-sm">
        <div class="mb-4">
          <label class="block mb-2 text-sm" for="email">Email Address</label>
          <input class="text-gray-700 rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="your@email.com"></div>
        <div class="mb-8">
          <label class="block mb-2 text-sm" for="password">Password</label>
          <input class="text-gray-700 rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
        </div>
        <styled-button class="mb-3">Create Account</styled-button>
        <p class="text-gradient text-sm cursor-pointer">Forgot Password?</p>
      </form>
    </div>
  </section>
</template>

<script>
import Button from '../components/Button'

export default {
  components: {
    "styled-button": Button
  }
}
</script>