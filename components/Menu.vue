<template>
<nav class="navbar navbar-expand-lg navbar-dark">
  <a class="navbar-brand" href="#">Reijns-IP</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
        <nuxt-link :class="navLinkClass" :to="localePath('index')" exact>
          {{ $t('links.home') }}
        </nuxt-link>
        <nuxt-link :class="navLinkClass" :to="localePath('services')" exact>
          {{ $t('links.services') }}
        </nuxt-link>
        <nuxt-link :class="navLinkClass" :to="localePath('about')" exact>
          {{ $t('links.about') }}
        </nuxt-link>
        <nuxt-link :class="navLinkClass" :to="localePath('bio')" exact>
          {{ $t('links.bio') }}
        </nuxt-link>

        <nuxt-link
          v-for="locale in $i18n.locales"
          v-if="locale.code !== $i18n.locale"
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
      navLinkClass: "nav-item nav-link align-self-end align-self-lg-start",
      languageLinkClass: "nav-item nav-link align-self-end ",
    };
  },
};
</script>