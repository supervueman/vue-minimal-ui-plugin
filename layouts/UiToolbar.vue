<template>
  <header
    class="ui-toolbar"
  >
    <slot />
  </header>
</template>

<script>
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
</style>
