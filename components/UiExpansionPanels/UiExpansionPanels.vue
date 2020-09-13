<template>
  <div class="expansion-panels">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'UiExpansionPanels',
  };
</script>

<style lang="sass" scoped>
.expansion-panels
  display: flex
  flex-direction: column
  overflow: hidden
  width: 100%
</style>
