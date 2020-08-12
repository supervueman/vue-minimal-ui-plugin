<template>
  <div class="ui-scroll-pagination" :style="{'max-height': maxHeight, 'max-width': maxWidth}" @scroll="scrolling">
    <div class="ui-scroll-pagination--inner" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      maxHeight: {
        type: String,
        default: '100%'
      },
      maxWidth: {
        type: String,
        default: '100%'
      }
    },
    data () {
      return {
        scrollPosition: 0
      }
    },
    methods: {
      scrolling(e) {
        const maxHeight = e.target.scrollHeight;
        const scrollUser = e.target.scrollTop;
        const height = e.target.offsetHeight + scrollUser;

        if (maxHeight === height && scrollUser > this.scrollPosition) {
          this.$emit('scroll');
        }
        this.scrollPosition = scrollUser;
      }
    }
  }
</script>

<style lang="scss" scoped>
.ui-scroll-pagination {
  height: 100%;
  overflow-y: auto;
  &--inner {
    width: 100%;
  }
}
</style>
