<template>
<h1 v-if="level == '1'" :class="classToAdd"><slot/></h1>
<h2 v-else-if="level == '2'"><slot/></h2>
<h3 v-else-if="level == '3'"><slot/></h3>
<h4 v-else-if="level == '4'"><slot/></h4>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    classToAdd: function() {
        var levelNumberSmall = this.level + 2;
        var levelNumber = this.level;

      return 'my-4 display-'+ levelNumberSmall +' display-md-' + levelNumber;
    }
  },
  props: {
    level: {
      type: Number,
      default: 1
    }
  }
};
</script>
