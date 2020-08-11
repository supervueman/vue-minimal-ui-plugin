<template>
  <div class="ui-date-picker">
    <input
      type="text"
      readonly
    />
    <div></div>
  </div>
</template>

<script>
  export default {
    name: 'UiDatePicker'
  }
</script>

<style scoped lang="scss">
.ui-date-picker {
  input {
    outline: none;
    width: 100%;
    height: 40px;
    padding-left: $gap / 2;
    padding-right: $gap / 2;
    border: 1px solid $light-gray-color;
    border-right-width: 4px;
    border-radius: $border-radius;
    background-color: transparent;
    appearance: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: border-color 0.3s $cubic;
    @include on-event {
      border-right-color: $brand-lighten-color-2;
    }
  }
}
</style>