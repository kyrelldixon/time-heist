<template>
  <div class="bg-gray-200 h-screen">
    <navbar />
    <section>
      <div class="mx-4 lg:mx-auto mt-20 max-w-4xl">
        <h1 class="font-bold uppercase tracking-wide mb-8">Leaderboard</h1>
        <leaderboard-card 
          v-for="trip in trips"
          :key="trip.id"
          :trip="trip"
          :upVote="upVote"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import LeaderboardCard from './components/LeaderboardCard'

export default {
  components: {
    'navbar': Navbar,
    'leaderboard-card': LeaderboardCard,
  },
  data: function() {
    return {
      trips: [
        {
          id: 1,
          title: "The Best Vacation Ever",
          city: "Paris",
          likes: 57,
        },
        {
          id: 2,
          title: "Digital Nomad Paradise",
          city: "Chiang Mai",
          likes: 42,
        },
        {
          id: 3,
          title: "Becoming Batman",
          city: "Gotham",
          likes: 23,
        },
      ],
    }
  },
  methods: {
    upVote: function(id) {
      this.trips = this.trips.map(trip => {
        if (trip.id === id) {
          return {
            ...trip,
            likes: trip.likes + 1
          }
        }
        return trip;
      });
    }
  }
}
</script>