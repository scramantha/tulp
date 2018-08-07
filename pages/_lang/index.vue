<template>
    <div class="home_container responsive-padding-x">
      <div class="lhs">
        <h1>Reijns-IP<span>Consulting</span><span>Law</span><span>IP</span></h1>
        <p>See what Reijns-IP can do to help your growing and innovative business.</p>
        <ContactButton />
      </div>
      <div class="rhs">
        <img class="responsive-margin--medium" src="/logo-nowordstransp-sm.png"/>
        <Menu/>
      </div>
    </div>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import ContactButton from "~/components/ContactButton.vue";
import LanguageToggle from "~/components/LanguageToggle.vue";
import Menu from "~/components/Menu.vue";

export default {
  head() {
    return { title: this.$t("home.title") };
  },
  components: {
    ContactButton,
    LanguageToggle,
    AppLogo,
    Menu
  }
};
</script>

<style lang="css">
.rhs {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-family: "Spectral SC", serif;
  font-size: calc(48px + 4vw);
  line-height: calc(52px + 5vw);
}

h1 span {
  display: block;
  font-size: 36px;
  font-size: calc(36px + 2vw);
  line-height: calc(40px + 3vw);
}

.home_container {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: space-between;
}

.rhs,
.rhs nav {
  display: flex;
  flex-direction: column;
}

.rhs,
.lhs {
  min-width: 400px;
  width: 50%;
  flex-grow: 1;
}
</style>