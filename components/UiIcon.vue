<template>
  <div
    class="ui-icon"
    :class="{'ui-icon_dark': dark, 'ui-icon_light': light, 'ui-icon_brand': brand}"
    :style="{'max-width': maxWidth, 'height': height, 'width': width}"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UiIcon",

  mixins: ["themeProps"],

  props: {
    maxWidth: {
      type: String,
      default: "25px"
    },
    height: {
      type: String,
      default: "25px"
    },
    width: {
      type: String,
      default: "25px"
    }
  }
};
</script>

<style lang="scss" scoped>
.ui-icon {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img, svg {
    width: 100%;
  }
  path {
    fill: $dark-color;
  }

  &_brand {
    svg {
      width: 100%;
    }
    path {
      fill: $brand-color;
    }
  }
  &_light {
    svg {
      width: 100%;
    }
    path {
      fill: $light-color;
    }
  }
  &_dark {
    svg {
      width: 100%;
    }
    path {
      fill: $dark-color;
    }
  }
}
</style>
