<template>
  <section class="bg-black text-white h-screen pt-8 px-4 sm:pt-10">
    <div class="max-w-sm mx-auto">
      <div class="mb-6">
        <h1 class="text-3xl tracking-wide font-bold mb-1 leading-tight">Create Your Account</h1>
        <p class="text-sm">
          Already have an account? 
          <router-link to="/login">
            <span class="text-gradient">Log In</span>
          </router-link>
        </p>
      </div>
      <form class="max-w-sm">
        <div class="mb-4">
          <label class="block mb-2 text-sm" for="name">Name</label>
          <input class="text-gray-700 rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name">
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-sm" for="email">Email Address</label>
          <input class="text-gray-700 rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="your@email.com"></div>
        <div class="mb-4">
          <label class="block mb-2 text-sm" for="username">Username</label>
          <input class="text-gray-700 rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="your_username">
        </div>
        <div class="mb-8">
          <label class="block mb-2 text-sm" for="password">Password</label>
          <input class="text-gray-700 rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
        </div>
        <styled-button>Create Account</styled-button>
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