<template>
  <section class="bg-gray-200 min-h-screen">
    <navbar />
    <!-- <loading v-if="$store.state.utils.isLoading && !$store.getters.isLoggedIn" /> -->
    <loading v-if="true" />
    <router-view v-else/>
  </section>
</template>

<script>
import Navbar from '../components/Navbar'
import Loading from '../components/Loading'

export default {
  components: {
    navbar: Navbar,
    loading: Loading,
  }
}
</script>