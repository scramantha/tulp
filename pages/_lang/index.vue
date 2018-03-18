<template>
  <div class="Content">
    <div class="container">
      <app-logo/>
      <h1 class="Content__Title">{{ $t('home.title') }}</h1>
      <p>{{ $t('home.introduction') }}</p>
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  head() {
    return { title: this.$t('home.title') }
  },
  components: {
    AppLogo
  }
}
</script>