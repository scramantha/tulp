<template>
    <div class="home_container responsive-padding-x">
      <div class="lhs">
        <h1>Reijns-IP<span>Consulting</span><span>Law</span><span>IP</span></h1>
        <p class="body-big">See what Reijns-IP can do to help your growing and innovative business.</p>
        <ContactButton />
      </div>
      <div class="rhs">
        <img class="responsive-margin--medium" src="/logo-nowordstransp-sm.png"/>
        <Menu menuContext="home" />
      </div>
    </div>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import ContactButton from "~/components/ContactButton.vue";
import Menu from "~/components/Menu.vue";

export default {
  head() {
    return { title: this.$t("home.title") };
  },
  components: {
    ContactButton,
    AppLogo,
    Menu
  }
};
</script>