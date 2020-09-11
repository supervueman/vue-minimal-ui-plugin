<template>
  <div
    class="ui-card--content"
    :class="{'ui-card--content_flat': $parent.flat}"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UiCardContent"
};
</script>

<style lang="sass" scoped>
.ui-card--content
  width: 100%
  padding-right: $gap
  padding-left: $gap
  .ui-card
    &--header
      padding-right: 0
      padding-left: 0

    &--actions
      padding-right: 0
      padding-left: 0

    &--content
      padding-right: 0
      padding-left: 0

  &_flat
    padding-right: 0
    padding-left: 0
</style>
