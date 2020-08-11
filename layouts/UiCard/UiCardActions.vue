<template>
  <div
    class="ui-card--actions"
    :class="{'ui-card--actions_flat': $parent.flat}"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UiCardActions"
};
</script>

<style lang="scss" scoped>
.ui-card--actions {
  width: 100%;
  padding-right: $gap;
  padding-left: $gap;
  padding-bottom: $gap;
  &_flat {
    padding-right: 0;
    padding-left: 0;
  }
}
</style>
