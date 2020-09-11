<template>
  <div class="ui-expansion-panels">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'UiExpansionPanels',
  };
</script>

<style lang="sass" scoped>
.ui-expansion-panels
  display: flex
  flex-direction: column
  overflow: hidden
  width: 100%
</style>
