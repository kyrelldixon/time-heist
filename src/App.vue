<template>
  <div>
    <nav class="bg-black text-white flex justify-between items-center px-8 py-4">
      <p class="uppercase tracking-widest">Time Heist</p>
      <div>
        <button class="uppercase text-xs">Log In</button>
        <button class="uppercase text-xs px-4 py-2 bg-gradient rounded ml-4">Sign Up</button>
      </div>
    </nav>

    <section>
      <h1>Leaderboard</h1>
      <ul>
        <li>
          <article>
            <img src="" alt="Dream trip">
            <div>
              <div>
                <p>Title</p>
                <p>City</p>
              </div>
              <div>
                <span>Posted by</span>
                <img src="" alt="Profile">
              </div>
            </div>
          </article>
          <button>
            <span role="img" aria-label="up arrow">🔝</span>
            23
          </button>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
  .bg-gradient {
    background: linear-gradient(to top right,#af35f1, #fa9a5e);
  }
</style>