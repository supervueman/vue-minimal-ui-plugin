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
  padding: 0 $gap
  margin-right: auto
  margin-left: auto
  @include media(lg)
    max-width: 992px
  @include media(md)
    max-width: 768px
  @include media(sm)
    max-width: 100%
</style>
