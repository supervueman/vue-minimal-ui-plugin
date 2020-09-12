<template>
  <div
    class="ui-layout"
    :style="{'max-width': maxWidth, 'min-width': minWidth, 'max-height': maxHeight, 'min-height': minHeight, 'overflow-x': overflowX, 'overflow-y': overflowY}"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "UiLayout",

  props: {
    maxWidth: {
      type: String,
      default: ''
    },
    minWidth: {
      type: String,
      default: ''
    },
    maxHeight: {
      type: String,
      default: ''
    },
    minHeight: {
      type: String,
      default: ''
    },
    overflowX: {
      type: String,
      default: ''
    },
    overflowY: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="sass" scoped>
.ui-layout
  width: 100%
</style>
