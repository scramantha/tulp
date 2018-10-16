<template>
  <div class="">
    <div class="container">
      <div class="responsive-padding-x text-center">
        <HeadingX :level="1">{{ $t('about.title') }}</HeadingX>
      </div>
      <div class="row py-4">
        <HorizontalCard :text="$t('about.amsterdam')" :offsetMd="0" />
      </div>
      <div class="row mb-4">   
        <HorizontalCard :text="$t('about.relationships')" />
      </div>
      <div class="row mb-4">
        <HorizontalCard :text="$t('about.agreements')" :offsetMd="8" />
      </div>



    </div>
  </div>
</template>

<script>
import HorizontalCard from '~/components/HorizontalCard.vue'
import HeadingX from '~/components/HeadingX.vue'

export default {
  head() {
    return { title: this.$t("about.title") };
  },
  components:{
    HorizontalCard,
    HeadingX
  },
  layout: "page-purple"
};
</script>