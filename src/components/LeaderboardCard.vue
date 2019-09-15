<template>
  <article class="flex justify-between items-center bg-white rounded p-6 uppercase mb-6">
    <div class="flex">
      <img class="h-32 hidden md:block" src="https://via.placeholder.com/150" alt="Dream trip">
      <div class="flex flex-col justify-between ml-4">
        <div class="mb-4">
          <p class="font-bold text-sm">{{ title }}</p>
          <p>{{ city }}</p>
        </div>
        <div class="flex items-center">
          <span class="text-xs text-gray-700 mr-2">Posted by</span>
          <img class="h-12 rounded-full" src="https://randomuser.me/api/portraits/men/86.jpg" alt="Profile">
        </div>
      </div>
    </div>
    <button class="font-bold flex flex-col py-4 px-8 bg-gray-100 border border-gray-300 rounded">
      <span role="img" aria-label="up arrow">🔝</span>
      <span>{{ likes }}</span>
    </button>
  </article>
</template>

<script>
export default {
  props: [
    "title",
    "city",
    "likes",
  ]
}
</script>