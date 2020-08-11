<template>
  <div
    class="ui-divider"
    :class="{'ui-divider_dark': dark, 'ui-divider_light': light, 'ui-divider_brand': brand, 'ui-divider_horizontal': horizontal, 'ui-divider_vertical': vertical}"
  >
  </div>
</template>

<script>
  export default {
    name: "UiDivider",

    mixins: ['themeMixin'],

    props: {
      horizontal: {
        type: Boolean,
        default: false
      },
      vertical: {
        type: Boolean,
        default: false
      }
    }
  };
</script>

<style lang="scss" scoped>
  .ui-divider {
    background-color: $gray-color;
    &_horizontal {
      height: 2px;
      width: 100%;
    }
    &_vertical {
      width: 2px;
      /*height: 100%;*/
    }
    &_brand {
      background-color: $brand-color;
    }
    &_light {
      background-color: $light-color;
    }
    &_dark {
      background-color: $dark-color;
    }
  }
</style>
