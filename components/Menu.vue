<template>
    <nav class="home-nav responsive-margin--medium">
        <nuxt-link :class="homeNavClass" :to="$i18n.path('services')" exact>
        {{ $t('links.services') }} <i class="fa fa-angle-right"></i>
        </nuxt-link>
        <nuxt-link :class="homeNavClass" :to="$i18n.path('about')" exact>
        {{ $t('links.about') }} <i class="fa fa-angle-right"></i>
        </nuxt-link>
        <nuxt-link :class="homeNavClass" :to="$i18n.path('about')" exact>
        {{ $t('links.bio') }} <i class="fa fa-angle-right"></i>
        </nuxt-link>
        <nuxt-link :class="homeNavClass" :to="$i18n.path('about')" exact>
        {{ $t('links.info') }} <i class="fa fa-angle-right"></i>
        </nuxt-link>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      homeNavClass:
        "home-nav-link responsive-padding--small-y responsive-margin--small-y"
    };
  }
};
</script>

<style>
.home-nav {
  text-align: center;
}

.home-nav-link {
  color: #11171e;
  padding-right: 10vw;
  padding-left: 10vw;
  text-decoration: none;
  border-radius: 5px;
  text-transform: uppercase;
}
</style>
