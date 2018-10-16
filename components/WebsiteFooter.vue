<template>
  <footer class="d-flex justify-content-between py-3 navbar-dark">
    <span>Terms of Service</span>
    <nuxt-link class="nav-item text-center" :to="localePath('contact')" exact>
    {{ $t('links.contact') }}
    </nuxt-link>
    <span>KvK Nummer: 123456789</span>
  </footer>
</template>