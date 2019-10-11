<template>
  <section class="bg-black text-white h-screen pt-8 px-4 sm:pt-10">
    <div class="max-w-sm mx-auto">
      <div class="mb-6">
        <h1 class="text-3xl tracking-wide font-bold mb-1 leading-tight">Create Your Account</h1>
        <p class="text-sm">
          Already have an account? 
          <router-link to="/login">
            <span class="text-gradient">Log In</span>
          </router-link>
        </p>
      </div>
      <form @submit.prevent="onSubmit" class="max-w-sm" novalidate>
        <div class="mb-4">
          <label class="block mb-2 text-sm" for="name">Name</label>
          <input 
            id="name"
            class="text-gray-700 rounded w-full py-2 px-2 leading-tight border focus:outline-none focus:shadow-outline mb-1"
            :class="{'border-red-500': $v.name.$error }"
            type="text"
            v-model.trim="$v.name.$model"
            placeholder="Your Name"
          >
          <p v-if="$v.name.$error && !$v.name.required" class="text-red-500 text-xs italic">Name is required.</p>
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-sm" for="email">Email Address</label>
          <input
            id="email"
            class="text-gray-700 rounded w-full py-2 px-2 leading-tight border focus:outline-none focus:shadow-outline mb-1"
            :class="{'border-red-500': $v.email.$error }"
            type="email"
            v-model.trim="$v.email.$model"
            placeholder="your@email.com"
          >
          <p v-if="$v.email.$error && !$v.email.required" class="text-red-500 text-xs italic">Email address is required.</p>
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-sm" for="password">Password</label>
          <input
            id="password"
            class="text-gray-700 rounded w-full py-2 px-2 leading-tight border focus:outline-none focus:shadow-outline mb-1"
            :class="{'border-red-500': $v.password.$error }"
            type="password"
            v-model="$v.password.$model"
            placeholder="Password"
          >
          <p v-if="$v.password.$error && !$v.password.required" class="text-red-500 text-xs italic">Password is required.</p>
          <p v-if="$v.password.$error && !$v.password.minLength" class="text-red-500 text-xs italic">Password must be at least 6 characters.</p>
        </div>
        <div class="mb-8">
          <label class="block mb-2 text-sm" for="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            class="text-gray-700 rounded w-full py-2 px-2 leading-tight border focus:outline-none focus:shadow-outline mb-1"
            :class="{'border-red-500': $v.confirmPassword.$error }"
            type="password"
            v-model="$v.confirmPassword.$model"
            placeholder="Confirm Password"
          >
          <p v-if="$v.confirmPassword.$error && !$v.confirmPassword.required" class="text-red-500 text-xs italic">Confirm password is required.</p>
          <p v-if="$v.confirmPassword.$error && !$v.confirmPassword.sameAs" class="text-red-500 text-xs italic">Password should be same as above.</p>
        </div>
        <styled-button :disabled="$store.state.utils.isLoading" class="px-4 py-2">{{ buttonText }}</styled-button>
      </form>
    </div>
  </section>
</template>

<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators';
import Button from '../components/Button'

export default {
  data: function() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  computed: {
    buttonText: function() {
      return this.$store.state.utils.isLoading ? 'Loading...' : 'Create Account'
    }
  },
  validations: {
    name: {
      required,
    },
    email: {
      required,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    confirmPassword: {
      required,
      sameAsPassword: sameAs('password'),
    },
  },
  components: {
    "styled-button": Button
  },
  methods: {
    onSubmit: function() {
      if (this.$v.$invalid) {
        this.$v.$touch()
      } else {
        this.register()
      }
    },
    register: function() {
      this.$store.dispatch('register', { email: this.email, password: this.password })
      .then(() => {
        this.$router.push('/home')
      })
      .catch(err => alert(err.code))
    }
  }
}
</script>