<template>
<div class="container">
  <div class="row">
    <div class="col-16 col-xl-10 offset-xl-3 text-center">
      <img class="responsive-margin--medium" src="/logo-nowordstransp-sm.png"/>
      <HeadingX :level="1">Reijns-IP</HeadingX>
      <HeadingX :level="2">Consulting &nbsp;&nbsp; <i class="fa fa-star"></i> &nbsp;&nbsp; Law &nbsp;&nbsp; <i class="fa fa-star"></i> &nbsp;&nbsp; IP</HeadingX>
      <p>{{ $t('home.introduction') }}</p>
    </div>
  </div>
  <div class="row">
    <div class="col-16 col-sm offset-xl-2 col-xl-4">
    <VerticalCardBlob :text="$t('about.agreements')"  />
    </div>
    <div class="col-16 col-sm col-xl-4">

      <VerticalCardBlob :text="$t('about.agreements')"  />
    </div>
    <div class="col-16 col-sm col-xl-4">
      <VerticalCardBlob :text="$t('about.agreements')"  />
    </div>
  </div>
  <div class="row text-center">
    <div class="col">
      <ContactButton />
    </div>
  </div>
</div>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import ContactButton from "~/components/ContactButton.vue";
import Menu from "~/components/Menu.vue";
import HeadingX from "~/components/HeadingX.vue";
import VerticalCardBlob from "~/components/VerticalCardBlob.vue";

export default {
  head() {
    return { title: this.$t("home.title") };
  },
  components: {
    ContactButton,
    AppLogo,
    Menu,
    HeadingX,
    VerticalCardBlob
  }
};
</script>