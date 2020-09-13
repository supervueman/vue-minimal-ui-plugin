<template>
  <div
    class="card--content"
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
.card--content
  width: 100%
  padding-right: $gap
  padding-left: $gap
</style>
