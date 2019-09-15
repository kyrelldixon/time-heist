<template>
  <div class="bg-gray-200 h-screen">
    <navbar />
    <section>
      <div class="mx-4 lg:mx-auto mt-20 max-w-4xl">
        <h1 class="font-bold uppercase tracking-wide mb-8">Leaderboard</h1>
        <leaderboard-card 
          v-for="(trip, id) in trips"
          :key="id"
          :title="trip.title"
          :city="trip.city"
          :likes="trip.likes"
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
          title: "The Best Vacation Ever",
          city: "Paris",
          likes: 57,
        },
        {
          title: "Digital Nomad Paradise",
          city: "Chiang Mai",
          likes: 42,
        },
        {
          title: "Becoming Batman",
          city: "Gotham",
          likes: 23,
        },
      ],
    }
  },
}
</script>