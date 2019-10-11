<template>
  <section class="bg-gray-200 pt-20 pb-2">
    <div class="mx-4 max-w-3xl sm:mx-auto">
      <h1 class="font-semibold text-2xl mb-6">Tell Us More About Your Time Heist</h1>
      <form @submit.prevent="onSubmit" class="px-4 bg-white border border-gray-400 py-10 md:px-16">
        <div>
          <label class="block text-lg font-semibold mb-2">Name of Time Heist</label>
          <input
            class="text-gray-700 rounded w-full py-2 px-2 leading-tight border focus:outline-none focus:shadow-outline mb-6"
            type="text"
            placeholder="Chiang Mai Digital Nomad"
            v-model="title"
          />
        </div>
        <div class="flex flex-col w-full sm:flex-row sm:justify-between">
          <div class="sm:w-1/2 sm:mr-4">
            <label class="block text-lg font-semibold mb-2">City</label>
            <input
              class="text-gray-700 rounded w-full py-2 px-2 leading-tight border focus:outline-none focus:shadow-outline mb-6"
              type="text"
              placeholder="Chiang Mai"
              v-model="city"
            />
          </div>
          <div class="sm:w-1/2">
            <label class="block text-lg font-semibold mb-2">State or Country</label>
            <input
              class="text-gray-700 rounded w-full py-2 px-2 leading-tight border focus:outline-none focus:shadow-outline mb-6"
              type="text"
              placeholder="Thailand"
              v-model="state"
            />
          </div>
        </div>
        <div>
          <label class="block text-lg font-semibold mb-2">Thumbnail</label>
          <div class="flex items-center mb-6">
            <label class="inline-block bg-gray-200 cursor-pointer text-center p-4 rounded border border-gray-400 text-sm mr-4">
              Upload Image
              <p>⬆️</p>
              <input class="hidden" type="file" />
            </label>
            <div class="text-sm font-semibold">
              <p>Recommended Size: 240x240</p>
              <p>JPG, PNG, GIF.</p>
              <p>Max Size: 2MB</p>
            </div>
          </div>
        </div>
        <div>
          <label class="block text-lg font-semibold">Gallery</label>
          <p class="text-sm font-semibold mb-4">Recommended Size: 1270x760</p>
          <label class="block bg-gray-200 cursor-pointer text-center rounded border border-gray-400 text-sm mb-4 py-2 md:py-4">
            Upload Image
            <p>⬆️</p>
            <input class="hidden" type="file" />
          </label>
          <div class="flex mb-8">
            <div class="w-12 h-12 border border-gray-300 mr-4 rounded md:w-20 md:h-20"></div>
            <div class="w-12 h-12 border border-gray-300 mr-4 rounded md:w-20 md:h-20"></div>
            <div class="w-12 h-12 border border-gray-300 mr-4 rounded md:w-20 md:h-20"></div>
          </div>
        </div>
        <div>
          <label class="block text-lg font-semibold mb-2">Description</label>
          <textarea
            class="border border-gray-300 w-full h-24 rounded mb-10 p-2"
            placeholder="Short message describing the trip"
            v-model="description"
          />
        </div>
        <styled-button class="py-4 px-10 text-sm">Create Trip</styled-button>
      </form>
    </div>
  </section>
</template>

<script>
import Button from '../components/Button'

export default {
  components: {
    'styled-button': Button,
  },
  data: function() {
    return {
      title: '',
      city: '',
      state: '',
      description: '',
    }
  },
  computed: {
    trip: function() {
      return {
        title: this.title,
        city: this.city,
        state: this.state,
        description: this.description,
      }
    }
  },
  methods: {
    onSubmit: function() {
      this.$store.dispatch('create', this.trip).then(() => {
        this.$router.push('/home')
      })
    }
  }
}
</script>