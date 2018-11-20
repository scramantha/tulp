<template>
  <div class="col-16 col-lg white-bg py-3 text-dark mb-3" :class="[cardClass,offsetMdClass]">
    <!-- <div class="container-fluid box white-bg py-3">
      <div class="row"> -->
        <!-- <div class="col-16 text-center"> -->
          icon here
          <h2 v-if="title !== ''">{{ title }}</h2>
          <p>
            {{ text }}
          </p>
          <!-- {{ cardType }} -->
        <!-- </div> -->
      <!-- </div>
    </div> -->
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
    },
    cardClass: function() {

        
      if (this.cardType === 'right'){
        return 'vert-card vert-card--r'
      } else if (this.cardType === 'left'){
        return 'vert-card vert-card--l'
      }

      return 'vert-card'
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: 'page'
    },
    icon: {
      type: String
    },
    cardType: {
      type: String,
      default: 'single'
    },
    offsetMd: {
      type: Number,
      default: 0
    }
  }
};
</script>
