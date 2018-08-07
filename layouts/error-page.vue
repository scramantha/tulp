<template>
    <div class="page red-yellow-gradient-diagonal">
      <div class="above-the-fold">
        <nav class="top-menu responsive-padding">
            <nuxt-link class="Header__Link font-small" :to="$i18n.path('')" exact>
                {{ backArrow }} {{ $t('links.home') }}
            </nuxt-link>
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

  data() {
    return {
      backArrow: "<"
    };
  }
};
</script>


<style lang="css">
.page {
  color: black;
}
</style>
