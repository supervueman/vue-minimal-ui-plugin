<template>
  <div
    class="ui-divider"
    :class="{'ui-divider_horizontal': horizontal, 'ui-divider_vertical': vertical}"
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
  .ui-divider
    background-color: $gray-color
    &_horizontal
      height: 2px
      width: 100%
    &_vertical
      width: 2px
</style>
