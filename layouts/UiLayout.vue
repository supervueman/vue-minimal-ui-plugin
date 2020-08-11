<template>
  <div
    class="ui-layout"
    :class="{'ui-layout_dark': dark, 'ui-layout_light': light, 'ui-layout_brand': brand}"
    :style="{'max-width': maxWidth, 'min-width': minWidth, 'max-height': maxHeight, 'min-height': minHeight, 'overflow-x': overflowX, 'overflow-y': overflowY}"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UiLayout",

  mixins: ["themeProps"],
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

<style lang="scss" scoped>
.ui-layout {
  width: 100%;
  &_brand {
    background-color: $brand-color;
    color: $light-color;
  }
  &_light {
    background-color: $light-color;
    color: $dark-color;
  }
  &_dark {
    background-color: $dark-color;
    color: $light-color;
  }
}
</style>
