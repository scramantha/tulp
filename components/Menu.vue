<template>
<nav class="navbar navbar-expand-lg navbar-dark">
  <a class="navbar-brand" href="#">Reijns-IP</a>
  <button v-if="!isHome" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div :class="!isHome ? 'collapse navbar-collapse' : ''" id="navbarNavAltMarkup">
    <div class="navbar-nav">
        <nuxt-link v-if="!isHome" :class="homeNavClass" :to="localePath('index')" exact>
          {{ $t('links.home') }} <i v-if="isHome" class="fa fa-angle-right"></i>
        </nuxt-link>
        <nuxt-link :class="homeNavClass" :to="localePath('services')" exact>
          {{ $t('links.services') }} <i v-if="isHome" class="fa fa-angle-right"></i>
        </nuxt-link>
        <nuxt-link :class="homeNavClass" :to="localePath('about')" exact>
          {{ $t('links.about') }} <i v-if="isHome" class="fa fa-angle-right"></i>
        </nuxt-link>
        <nuxt-link :class="homeNavClass" :to="localePath('bio')" exact>
          {{ $t('links.bio') }} <i v-if="isHome" class="fa fa-angle-right"></i>
        </nuxt-link>

        <nuxt-link
          v-for="locale in $i18n.locales"
          v-if="(locale.code !== $i18n.locale) && !isHome"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="align-self-end"
          :class="[languageLinkClass]">{{ locale.name }}</nuxt-link>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      homeNavClass: "nav-item nav-link align-self-end align-self-lg-start",
      languageLinkClass: "nav-item nav-link align-self-end ",
    };
  },
  computed: {
    isHome: function(){
      return this.menuContext === 'home';
    }
  },
  props: {
    menuContext: {
      type: String,
      default: 'page'
    }
  }
};
</script>