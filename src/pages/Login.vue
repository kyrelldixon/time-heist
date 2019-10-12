<template>
  <section class="bg-black text-white h-screen pt-12 px-4">
    <div class="max-w-sm mx-auto">
      <div class="mb-6">
        <h1 class="text-3xl tracking-wide font-bold mb-2 leading-tight">Log In Below</h1>
        <p class="text-sm">
          Don't have an account? 
          <router-link to="/register">
            <span class="text-gradient">Sign Up</span>
          </router-link>
        </p>
      </div>
      <form @submit.prevent="onSubmit" class="max-w-sm" novalidate>
        <div class="mb-4">
          <label class="block mb-2 text-sm" for="email">Email Address</label>
          <input
            id="email"
            class="text-gray-700 rounded w-full py-2 px-2 leading-tight border focus:outline-none focus:shadow-outline mb-1"
            :class="{'border-red-500': $v.email.$error}"
            type="text"
            v-model="$v.email.$model"
            placeholder="your@email.com"
          >
          <p v-if="$v.email.$error && !$v.email.required" class="text-red-500 text-xs italic">Email is required.</p>
        </div>
        <div class="mb-8">
          <label class="block mb-2 text-sm" for="password">Password</label>
          <input
            id="password"
            class="text-gray-700 rounded w-full py-2 px-2 leading-tight border focus:outline-none focus:shadow-outline mb-1"
            :class="{'border-red-500': $v.password.$error}"
            type="password"
            v-model="$v.password.$model"
            placeholder="Password"
          >
          <p v-if="$v.password.$error && !$v.password.required" class="text-red-500 text-xs italic">Password is required.</p>
        </div>
        <styled-button :disabled="$store.state.utils.isLoading" class="mb-3 px-6 py-2">Log In</styled-button>
        <p class="text-gradient text-sm cursor-pointer">Forgot Password?</p>
      </form>
    </div>
  </section>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import Button from '../components/Button'

export default {
  components: {
    "styled-button": Button
  },
  data: function() {
    return {
      email: '',
      password: '',
    }
  },
  created() {
    if (this.$store.getters.isLoggedIn) {
      this.$router.push('/home')
    }
  },
  validations: {
    email: {
      required,
    },
    password: {
      required,
    }
  },
  methods: {
    onSubmit: function() {
      if (this.$v.$invalid) {
        this.$v.$touch()
      } else {
        this.login()
      }
    },
    login: function() {
      this.$store.dispatch('login', { email: this.email, password: this.password })
      .then(() => {
        this.$router.push('/home')
      })
      .catch(err => alert(err.code))
    }
  }
}
</script>