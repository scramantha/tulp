<template>
  <div class="">
    <div class="container">
      <div class="responsive-padding-x text-center">

        <HeadingX :level="1">{{ $t('services.title') }}</HeadingX>
        <p>{{ $t('about.introduction') }}</p>

      </div>

      <div class="row mb-4">
        <div class="col-16">
          <div class="container-fluid">
            <div class="row">
              <VerticalCard :text="$t('about.relationships')" cardType="left" />
              <VerticalCard :text="$t('about.relationships')" />
              <VerticalCard :text="$t('about.relationships')" cardType="right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VerticalCard from '~/components/VerticalCard.vue'
import HeadingX from '~/components/HeadingX.vue'

export default {
  head() {
    return { title: this.$t('services.title') }
  },
  components: {
    VerticalCard,
    HeadingX
  },
  layout: 'page-purple'
}
</script>