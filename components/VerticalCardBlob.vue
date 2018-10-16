<template>
  <div class="white-bg box p-3 text-dark mb-3 text-center">
    icon here
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'page'
    },
    icon: {
      type: String
    },
  }
};
</script>
