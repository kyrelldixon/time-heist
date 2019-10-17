<template>
  <section class="bg-black h-screen text-white">
    <div class="text-center max-w-xl pt-32 mx-8 sm:mx-auto sm:pt-24 md:pt-20">
      <h1 class="font-bold text-3xl mb-4 sm:text-5xl md:text-5xl md:mb-6">
        Wish List of Trips for You and Your Friends
      </h1>
      <p class="mb-8 sm:mb-12 sm:text-lg md:mb-12 opacity-75">
        Add places you want to go with people you want to go with and start checking them off your list.
      </p>
      <router-link to="/register">
        <button class="uppercase text-sm px-10 py-4 bg-gradient rounded ml-4 sm:text-lg md:text-lg">
          Sign Up
        </button>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  created() {
    if (this.$store.getters.isLoggedIn) {
      this.$router.push('/home')
    }
  },
}
</script>
