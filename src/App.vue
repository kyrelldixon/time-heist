<template>
  <div class="bg-gray-200 h-screen">
    <navbar />
    <section>
      <div class="mx-4 lg:mx-auto mt-20 max-w-4xl">
        <h1 class="font-bold uppercase tracking-wide mb-8">Leaderboard</h1>
        <leaderboard-card />
        <leaderboard-card />
        <leaderboard-card />
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
  }
}
</script>