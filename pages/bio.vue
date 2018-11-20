<template>
  <div class="container-fluid">
    <div class="row">
    <div class="col-16 col-md-8 offset-md-4 text-center">
        <HeadingX :level="1">{{ $t('bio.title') }}</HeadingX>
      <p>{{ $t('bio.introduction') }}</p>
        <img class="responsive-margin--medium" src="/logo-nowordstransp-sm.png"/>
    </div>
    </div>
  </div>
</template>

<script>
import HeadingX from '~/components/HeadingX.vue'

export default {
  head() {
    return { title: this.$t('bio.title') }
  },
  components: {
    HeadingX
  },
  layout: 'page-blue'
}
</script>