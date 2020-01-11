<template>
  <div>
    <orbit-spinner
      :animation-duration="1200"
      :size="200"
      class="mx-auto"
    />
  </div>
</template>

<script>
import { OrbitSpinner } from 'epic-spinners'

export default {
  components: {
    'orbit-spinner': OrbitSpinner
  }
}
</script>