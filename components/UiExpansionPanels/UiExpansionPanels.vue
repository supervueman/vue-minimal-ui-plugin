<template>
  <div class="ui-expansion-panels">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'UiExpansionPanels',

    props: {
      flat: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss">
  .ui-expansion-panels {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
</style>
