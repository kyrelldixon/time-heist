<template>
  <section class="bg-gray-200 min-h-screen">
    <navbar />
    <router-view />
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