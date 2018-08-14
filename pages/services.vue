<template>
  <div class="">
    <div class="container">
      <div class="responsive-padding-x text-center">

        <h1>Services</h1>
        <p>{{ $t('about.introduction') }}</p>

      </div>
      <!-- <div class="box--wide white-bg responsive-padding flex_container services-container">
              <div class="service-blob">
                {{ $t('about.relationships') }}
              </div>
              <div class="service-blob">
                {{ $t('about.relationships') }}
              </div>
              <div class="service-blob">
                {{ $t('about.relationships') }}
              </div>
      </div> -->

      <!-- <div class="card-group mb-3 text-center text-dark"> -->
      <div class="row text-center white-bg box text-dark">
        <div class="box p-4 col-16 col-md-5">
          <div class="card-body">
            <img class="responsive-margin--medium" src="/logo-nowordstransp-sm.png"/>
            <div>{{ $t('about.relationships') }}</div>
          </div>
        </div>
        <div class="box p-4 col-16 col-md-6">
          <div class="card-body">
            <img class="responsive-margin--medium" src="/logo-nowordstransp-sm.png"/>
            <div>{{ $t('about.relationships') }}</div>
          </div>
        </div>
        <div class="box p-4 col-16 col-md-5">
          <div class="card-body">
            <img class="responsive-margin--medium" src="/logo-nowordstransp-sm.png"/>
            <div>{{ $t('about.relationships') }}</div>
          </div>
        </div>
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