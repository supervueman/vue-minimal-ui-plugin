<template>
  <li class="list-item">
    <slot />
  </li>
</template>

<script>
export default {
  name: "UiListItem"
};
</script>

<style lang="sass" scoped>
.list-item
  list-style-type: none
  padding-top: $gap
  padding-bottom: $gap
  text-transform: uppercase
</style>
