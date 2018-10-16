<template>
        <div class="col-16 col-md-10 col-lg-8 text-dark d-flex" :class="offsetMdClass">
          <div class="container-fluid box white-bg py-3">
          <div class="row">
            <div class="col col-md-6 order-md-2">
              icon here
            </div>
            <p class="col-16 col-md-10 order-md-1 m-0">
              {{ text }}
            </p>
          </div>
          </div>
        </div>
</template>

<script>
export default {
  data() {
    return {
    
    };
  },
  computed: {
    offsetMdClass: function() {
      if(this.offsetMd == 0){
        return '';
      }
      return 'offset-md-' + (this.offsetMd - 2) + ' offset-lg-' + this.offsetMd;
    }
  },
  props: {
    text: {
      type: String,
      default: 'page'
    },
    icon: {
      type: String
    },
    offsetMd: {
      type: Number,
      default: 4
    }
  }
};
</script>
