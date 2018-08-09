<template>
  <div class="Content">
    <div class="container">
      <h1 class="Content__Title">BIO</h1>
      <p>{{ $t('about.introduction') }}</p>
      THISS IS BIO
    </div>
  </div>
</template>

<script>
export default {
  head() {
    // return { title: this.$t('about.title') }
    return { title: "BIO HIO" }
  },
  layout: 'page-purple'
}
</script>