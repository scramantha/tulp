<template>
  <div class="text-center container d-flex flex-column justify-content-middle" style="height:100%">
    <h1 class="display-1" v-if="error.statusCode === 404">Page not found</h1>
    <h1 class="display-1" v-else>An error occurred</h1>
    <p>:(</p>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'page-purple',
};
</script>

