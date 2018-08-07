<template>
  <div class="home blue-yellow-gradient-diagonal">
    <div class="container">
      <div class="above-the-fold">
        <nav class="top-menu--home responsive-padding">
            <LanguageToggle/>
        </nav>
        <nuxt/>
      </div>
      <WebsiteFooter/>
    </div>
  </div>
</template>

<script>
import WebsiteFooter from '~/components/WebsiteFooter.vue'
import LanguageToggle from '~/components/LanguageToggle.vue'

export default {
  components: {
    WebsiteFooter,
    LanguageToggle
  },
  data() {
    return {
    backArrow: '<'
  }
}
}
</script>


<style>
  .home {
    color: #11171E;
  }
  
  .top-menu--home {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
  }
</style>
