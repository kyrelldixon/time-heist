<template>
  <article class="flex justify-between items-center bg-white rounded-lg p-6 uppercase mb-6 shadow-md">
    <div class="flex">
      <router-link :to="`/trip/${trip.id}`">
        <img class="h-32 hidden md:block" src="https://via.placeholder.com/150" alt="Dream trip">
      </router-link>
      <div class="flex flex-col justify-between ml-4">
        <div class="mb-4">
          <router-link :to="`/trip/${trip.id}`" class="font-bold text-sm">{{ trip.title }}</router-link>
          <p>{{ trip.city }}</p>
        </div>
        <div class="flex items-center">
          <span class="text-xs text-gray-700 mr-2">Posted by</span>
          <img class="h-12 rounded-full" src="https://randomuser.me/api/portraits/men/86.jpg" alt="Profile">
        </div>
      </div>
    </div>
    <button @click="upVote(trip.id)" class="group font-bold flex flex-col py-4 px-6 bg-gray-100 border border-gray-300 rounded hover:bg-gradient">
      <span class="h-4" role="img" aria-label="up arrow">🔝</span>
      <span class="group-hover:text-white">{{ trip.likes }}</span>
    </button>
  </article>
</template>

<script>
export default {
  props: {
    trip: {
      type: Object,
      required: true,
    },
    upVote: {
      type: Function,
      required: true,
    },
  },
}
</script>

<style>

</style>