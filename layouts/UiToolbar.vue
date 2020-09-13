<template>
  <header
    class="toolbar"
  >
    <slot />
  </header>
</template>

<script>
export default {
  name: 'UiToolbar'
};
</script>

<style lang="sass" scoped>
.toolbar
  position: fixed
  top: 0
  left: 0
  width: calc(100% - 1px)
  display: flex
  align-items: center
  z-index: z(toolbar)
</style>
