<template>
  <div
    class="ui-card--content"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "UiCardContent"
};
</script>

<style lang="sass" scoped>
.ui-card--content
  width: 100%
  padding-right: $gap
  padding-left: $gap
</style>
