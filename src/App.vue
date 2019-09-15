<template>
  <div class="bg-gray-200 h-screen">
    <nav class="bg-black text-white flex justify-between items-center px-4 md:px-8 py-4">
      <p class="uppercase tracking-widest">Time Heist</p>
      <div>
        <button class="uppercase text-xs">Log In</button>
        <button class="uppercase text-xs px-4 py-2 bg-gradient rounded ml-4">Sign Up</button>
      </div>
    </nav>

    <section>
      <div class="mx-4 lg:mx-auto mt-20 max-w-4xl">
        <h1 class="font-bold uppercase tracking-wide mb-8">Leaderboard</h1>
          <article class="flex justify-between items-center bg-white rounded p-6 uppercase">
            <div class="flex">
              <img class="h-32 hidden md:block" src="https://via.placeholder.com/150" alt="Dream trip">
              <div class="flex flex-col justify-between ml-4">
                <div class="mb-4">
                  <p class="font-bold text-sm">Title</p>
                  <p>City</p>
                </div>
                <div class="flex items-center">
                  <span class="text-xs text-gray-700 mr-2">Posted by</span>
                  <img class="h-4 rounded-full" src="https://randomuser.me/api/portraits/men/86.jpg" alt="Profile">
                </div>
              </div>
            </div>
            <button class="font-bold flex flex-col py-4 px-8 bg-gray-100 border border-gray-300 rounded">
              <span role="img" aria-label="up arrow">🔝</span>
              <span>23</span>
            </button>
          </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .bg-gradient {
    background: linear-gradient(to top right,#af35f1, #fa9a5e);
  }
</style>