<template>
  <nav class="bg-black text-white px-4 md:px-8 py-4">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <router-link to="/"><img class="h-12" src="../assets/logo.png" /></router-link>
      <div :class="{hidden: isHidden()}">
        <router-link to="/login">
          <button class="uppercase text-xs">Log In</button>
        </router-link>
        <router-link to="/register">
          <styled-button class="ml-4">Sign Up</styled-button>
        </router-link>
      </div>
    </div>
    </nav>
</template>

<script>
import Button from '../components/Button'

export default {
  components: {
    "styled-button": Button
  },
  methods: {
    isHidden: function() {
      return this.$route.path === '/register'
    }
  }
}
</script>