<template>
  <div
    class="ui-container"
    :class="{'ui-container_big': big}"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "UiContainer",

  props: {
    big: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="sass" scoped>
.ui-container
  width: 100%
  max-width: $max-width
  min-width: 1240px
  padding: 0 $gap
  margin-right: auto
  margin-left: auto
  &_big
    max-width: $max-width-big-container
</style>
