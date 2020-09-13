<template>
  <div
    class="ui-card--actions"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "UiCardActions"
};
</script>

<style lang="sass" scoped>
.ui-card--actions
  width: 100%
  padding-right: $gap
  padding-left: $gap
  padding-bottom: $gap
</style>
