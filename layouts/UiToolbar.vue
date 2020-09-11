<template>
  <header
    class="ui-toolbar"
    :class="{'ui-toolbar_fixed': fixed}"
  >
    <slot></slot>
  </header>
</template>

<script lang="ts">
export default {
  name: 'UiToolbar',

  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="sass" scoped>
.ui-toolbar
  top: 0
  left: 0
  width: calc(100% - 1px)
  display: flex
  align-items: center
  z-index: z(toolbar)
  &_fixed
    position: fixed
</style>
