<template>
  <div
    class="ui-card--header"
    :class="{'ui-card--header_flat': $parent.flat}"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UiCardHeader"
};
</script>

<style lang="sass" scoped>
.ui-card--header
  width: 100%
  padding-right: $gap
  padding-left: $gap
  padding-top: $gap
  &_flat
    padding-right: 0
    padding-left: 0
</style>
