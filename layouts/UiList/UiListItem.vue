<template>
  <li class="ui-list-item">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "UiListItem"
};
</script>

<style lang="scss" scoped>
.ui-list-item {
  list-style-type: none;
  padding-top: $gap;
  padding-bottom: $gap;
  text-transform: uppercase;
}
</style>
