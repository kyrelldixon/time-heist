<template>
  <nav class="bg-black text-white px-4 md:px-8 py-4">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <router-link :to="homePath"><img class="h-12" src="../assets/logo.png" /></router-link>
      <div v-if="$store.getters.isLoggedIn" class="flex items-center" :class="{hidden: isHidden()}">
        <router-link to="/create" class="mr-4 text-xl cursor-pointer" role="img" aria-label="add trip">+</router-link>
        <img class="h-8 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/86.jpg" alt="Profile">
        <button class="uppercase text-xs" @click="logout">Logout</button>
      </div>
      <div v-else :class="{hidden: isHidden()}">
        <router-link to="/login">
          <button class="uppercase text-xs">Log In</button>
        </router-link>
        <router-link to="/register">
          <styled-button class="ml-4 px-4 py-2">Sign Up</styled-button>
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
  computed: {
    homePath: function() {
      return this.$store.getters.isLoggedIn ? '/home' : '/'
    },
  },
  methods: {
    isHidden: function() {
      const { path } = this.$route
      return path === '/register' || path === '/login'
    },
    logout: function() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>