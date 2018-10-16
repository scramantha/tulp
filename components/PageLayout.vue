<template>
  <div>
    <div class="above-the-fold">
      <div>
        <Menu/>
      </div>
      <slot></slot>
    </div>
    <div class="container-fluid">
      <WebsiteFooter/>
    </div>
  </div>
</template>

<script>
import WebsiteFooter from "~/components/WebsiteFooter.vue";
import Menu from "~/components/Menu.vue";

export default {
  components: {
    WebsiteFooter,
    Menu
  },
};
</script>
