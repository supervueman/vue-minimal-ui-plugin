<template>
  <div class="ui-expansion-panels">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'UiExpansionPanels',
  }
</script>

<style lang="scss" scoped>
  .ui-expansion-panels {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
</style>
