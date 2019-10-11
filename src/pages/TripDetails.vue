<template>
  <section class="bg-gray-200 py-20">
    <div class="flex flex-col items-start mx-4 max-w-4xl lg:mx-auto">
      <div class="flex justify-between items-end w-full mb-10">
        <div class="flex">
          <img
            class="hidden h-32 mr-4 sm:block"
            src="https://via.placeholder.com/150"
            alt="Dream trip"
          >
          <div class="flex flex-col uppercase mr-4">
            <p class="mb-2 font-semibold text-lg">{{ trip.title }}</p>
            <p>{{ trip.city }}, {{ trip.state }}</p>
          </div>
        </div>
        <button @click="upVote" class="font-bold flex py-2 px-4 bg-gradient border border-gray-300 rounded text-white md:hidden">
          <span class="h-4 mr-2" role="img" aria-label="up arrow">🔝</span>
          <span class="mr-2">Upvote</span>
          <span class="">{{ trip.votes }}</span>
        </button>
      </div>
      <div class="flex justify-between">
        <div class="bg-white p-6 max-w-3xl md:mr-8">
          <img class="block mb-4 mx-auto" src="https://via.placeholder.com/600x400" alt="Dream trip">
          <div class="flex mb-8 justify-center">
            <div class="w-12 h-12 border border-gray-300 mr-4 rounded md:w-20 md:h-20"></div>
            <div class="w-12 h-12 border border-gray-300 mr-4 rounded md:w-20 md:h-20"></div>
            <div class="w-12 h-12 border border-gray-300 mr-4 rounded md:w-20 md:h-20"></div>
          </div>
          <hr class="mb-4" />
          <p>
            {{ trip.description }}
          </p>
        </div>
        <div class="hidden md:flex md:flex-col">
          <button @click="upVote" class="font-bold flex py-4 px-8 bg-gradient border border-gray-300 rounded text-white mb-4">
            <span class="h-4 mr-2" role="img" aria-label="up arrow">🔝</span>
            <span class="mr-2">Upvote</span>
            <span class="">{{ trip.votes }}</span>
          </button>
          <div class="bg-white border border-gray-300 uppercase p-2">
            <div>
              <p class="text-xs text-gray-700 mb-1">Posted by</p>
              <div class="flex items-center mb-6">
                <img class="h-12 rounded-full block mr-2" src="https://randomuser.me/api/portraits/men/86.jpg" alt="Profile">
                <p class="text-xs">David M.</p>
              </div>
            </div>
            <div>
              <p class="text-xs text-gray-700 mb-1">Upvoted by</p>
              <div class="flex">
                <img class="h-12 rounded-full block" src="https://randomuser.me/api/portraits/men/86.jpg" alt="Profile">
                <img class="h-12 rounded-full block -ml-6" src="https://randomuser.me/api/portraits/men/86.jpg" alt="Profile">
                <img class="h-12 rounded-full block -ml-6" src="https://randomuser.me/api/portraits/men/86.jpg" alt="Profile">
                <img class="h-12 rounded-full block -ml-6" src="https://randomuser.me/api/portraits/men/86.jpg" alt="Profile">
                <img class="h-12 rounded-full block -ml-6" src="https://randomuser.me/api/portraits/men/86.jpg" alt="Profile">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      trip: {}
    }
  },
  created: function() {
    const tripId = parseInt(this.$route.params.id)
    this.trip = this.$store.getters.getTripById(tripId)
  },
  methods: {
    upVote: function() {
      this.$store.dispatch('upVote', this.trip.id)
    }
  }
}
</script>