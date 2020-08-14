<template>
  <div
    class="ui-expansion-panels--item-content"
    :style="{'height': height !== null && height !== undefined ? `${height}px` : ''}"
  >
    <div
      class="ui-expansion-panels--item-content--inner"
    >
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UiExpansionPanelsItemContent',

    props: {
      height: {
        type: Number,
        default: null
      },
      flat: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ui-expansion-panels--item-content {
    width: 100%;
    transition: height 0.3s $cubic;
    &--inner {
      width: 100%;
      padding: $gap / 2;
    }
  }
</style>
