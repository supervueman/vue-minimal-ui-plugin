<template>
  <div
    class="layout"
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
.layout
  width: 100%
</style>
