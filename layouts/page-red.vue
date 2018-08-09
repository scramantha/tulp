<template>
    <div class="page this-page red-purple-gradient-diagonal">
      <div class="above-the-fold">
        <nav class="top-menu responsive-padding">
            <nuxt-link class="Header__Link font-small" :to="localePath('/')" exact>
                {{ backArrow }} {{ $t('links.home') }}
            </nuxt-link>
            <LanguageToggle/>
        </nav>
        <nuxt />
      </div>
      <WebsiteFooter/>
    </div>
</template>
  

<script>
import WebsiteFooter from "~/components/WebsiteFooter.vue";
import LanguageToggle from "~/components/LanguageToggle.vue";

export default {
  components: {
    WebsiteFooter,
    LanguageToggle
  },
  //todo prop to determine the title of the page and the next page to direct ppl to
  props: {
    bgColor: {
      type: "String"
    }
  },
  data() {
    return {
      backArrow: "<"
    };
  }
};
</script>


<style lang="css">
.this-page {
  color: black;
}
</style>
