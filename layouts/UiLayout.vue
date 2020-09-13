<template>
  <div
    class="ui-layout"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "UiLayout"
};
</script>

<style lang="sass" scoped>
.ui-layout
  width: 100%
</style>
