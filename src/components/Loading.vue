<template>
  <section class="flex h-screen bg-black text-white items-center justify-center">
    <orbit-spinner
      :animation-duration="1200"
      :size="100"
      class="-mt-40"
    />
    <p class="-mt-40 ml-4 text-3xl uppercase font-semibold sm:text-4xl">Loading...</p>
  </section>
</template>

<script>
import { OrbitSpinner } from 'epic-spinners'

export default {
  components: {
    'orbit-spinner': OrbitSpinner
  }
}
</script>