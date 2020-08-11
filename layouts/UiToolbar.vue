<template>
  <header
    class="ui-toolbar"
    :class="{'ui-toolbar_dark': dark, 'ui-toolbar_light': light, 'ui-toolbar_brand': brand, 'ui-toolbar_fixed': fixed}"
  >
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "UiToolbar",

  mixins: ["themeProps"],

  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
.ui-toolbar {
  top: 0;
  left: 0;
  width: calc(100% - 1px);
  display: flex;
  align-items: center;
  z-index: z(toolbar);
  &_fixed {
    position: fixed;
  }
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
