<template>
  <div
    class="divider"
    :class="{'divider_horizontal': horizontal, 'divider_vertical': vertical}"
  >
  </div>
</template>

<script>
  export default {
    name: "UiDivider",

    props: {
      horizontal: {
        type: Boolean,
        default: false
      },
      vertical: {
        type: Boolean,
        default: false
      }
    }
  };
</script>

<style lang="sass" scoped>
  .divider
    background-color: $gray-color
    &_horizontal
      height: 2px
      width: 100%
    &_vertical
      width: 2px
</style>
