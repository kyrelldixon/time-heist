<template>
  <section>
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