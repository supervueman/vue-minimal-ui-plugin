<template>
  <div
    class="card--header"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "UiCardHeader"
};
</script>

<style lang="sass" scoped>
.card--header
  width: 100%
  padding-right: $gap
  padding-left: $gap
  padding-top: $gap
</style>
