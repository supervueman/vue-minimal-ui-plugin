<template>
  <div
    class="scroll-pagination"
    :style="{'max-height': maxHeight, 'max-width': maxWidth}"
    @scroll="scrolling"
  >
    <div class="scroll-pagination--inner">
      <slot />
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

    data: () => ({
      scrollPosition: 0
    }),

    methods: {
      scrolling(e) {
        const maxHeight = e.target.scrollHeight,
              scrollUser = e.target.scrollTop,
              height = e.target.offsetHeight + scrollUser;

        if (maxHeight === height && scrollUser > this.scrollPosition) {
          this.$emit('scroll');
        }
        this.scrollPosition = scrollUser;
      }
    }
  };
</script>

<style lang="sass" scoped>
.scroll-pagination
  height: 100%
  overflow-y: auto
  &--inner
    width: 100%
</style>
