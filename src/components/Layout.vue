<template>
  <section class="bg-gray-200 min-h-screen">
    <navbar />
    <p v-if="$store.state.utils.isLoading && !$store.getters.isLoggedIn">Loading...</p>
    <router-view v-else/>
  </section>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  components: {
    navbar: Navbar,
  }
}
</script>