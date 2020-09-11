<template>
  <div
    class="ui-card--media"
    :style="{'max-width': maxWidth}"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UiCardMedia",

  props: {
    maxWidth: {
      type: String,
      default: '100%'
    }
  }
};
</script>

<style lang="sass" scoped>
.ui-card--media
  width: 100%
  overflow: hidden
</style>
