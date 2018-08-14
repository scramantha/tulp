<template>
  <div class="container-fluid">
    <div class="row">
    <div class="col-16 col-md-8 offset-md-4 text-center">
      <h1 class="display-4">BIO</h1>
      <p>{{ $t('bio.introduction') }}</p>
        <img class="responsive-margin--medium" src="/logo-nowordstransp-sm.png"/>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return { title: this.$t('about.title') }
  },
  layout: 'page-purple'
}
</script>