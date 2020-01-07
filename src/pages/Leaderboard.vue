<template>
  <section class="bg-gray-200 pt-20 pb-2">
    <div class="mx-4 max-w-4xl lg:mx-auto">
      <h1 class="font-bold uppercase tracking-wide mb-8">Leaderboard</h1>
      <loading v-if="$store.state.utils.isLoading" />
      <leaderboard-card
        v-else
        v-for="trip in sortedTrips"
        :key="trip.id"
        :trip="trip"
        :upVote="upVote"
      />
    </div>
  </section>
</template>

<script>
import LeaderboardCard from '../components/LeaderboardCard'
import Loading from '../components/Loading'

export default {
  components: {
    'leaderboard-card': LeaderboardCard,
    'loading': Loading,
  },
  created() {
    this.$store.dispatch('getAllTrips')
  },
  computed: {
    sortedTrips: function() {
      return this.$store.getters.sortedTrips
    }
  },
  methods: {
    upVote: function(id) {
      this.$store.dispatch('upVoteTrip', id)
    }
  }
}
</script>