<template>
  <div class="contact-button font-small responsive-margin--small-y">
    <!-- <span class="text">Button</span>
    <span class="hover-text">
        <i class="fa fa-envelope-square"></i>
        <i class="fa fa-phone-square"></i>
    </span> -->
        <span class="button-text">Contact</span>
        <i class="fa fa-envelope-square"></i>
        <i class="fa fa-phone-square"></i>
  </div>
</template>

<script>
// todo prop for text,
// add functionality on hover
</script>

<style lang="css" scoped>
.button-text {
  display: block;
}

.contact-button:hover .button-text {
  /* font-size: 12px; */
}

.contact-button i {
  font-size: 3rem;
  /* transition: all .2s ease; */
  cursor: pointer;
}

.contact-button .button-text {
  transition: all 0.2s ease;
}

.contact-button:hover i {
  /* font-size: 4rem; */
}

.contact-button {
  /* border: solid 1px white; */
}
</style>
