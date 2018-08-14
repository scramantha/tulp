<template>
  <div >
        <nuxt-link
      v-for="locale in $i18n.locales"
      v-if="(locale.code !== $i18n.locale)"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="align-self-end"
      :class="[languageLinkClass]">{{ locale.name }}</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languageLinkClass: "nav-item nav-link align-self-end ",
    };
  },
};
</script>

<style>
.language-toggle,
.language-toggle a {
  color: inherit;
  text-decoration: none;
}

.text-bold {
  font-weight: bold;
}
</style>
