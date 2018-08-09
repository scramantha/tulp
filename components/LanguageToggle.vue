<template>
    <div class="language-toggle font-xsmall">
        <nuxt-link :class="$i18n.locale.code === 'nl' ? '' : 'text-bold' " :to="switchLocalePath('en')" active-class="none" exact>
        {{ $t('links.english') }}
        </nuxt-link>
         | 
        <nuxt-link :class="$i18n.locale.code === 'en' ? '' : 'text-bold' " :to="switchLocalePath('nl')" active-class="none" exact>
        {{ $t('links.dutch') }}
        </nuxt-link>
    </div>
</template>

<script>
export default {
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
