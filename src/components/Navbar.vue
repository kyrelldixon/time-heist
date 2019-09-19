<template>
  <nav class="bg-black text-white px-4 md:px-8 py-4">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <router-link to="/"><img class="h-12" src="../assets/logo.png" /></router-link>
      <div>
        <button class="uppercase text-xs">Log In</button>
        <router-link to="/register">
          <button class="uppercase text-xs px-4 py-2 bg-gradient rounded ml-4">Sign Up</button>
        </router-link>
      </div>
    </div>
    </nav>
</template>