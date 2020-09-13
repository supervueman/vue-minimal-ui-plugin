<template>
  <div
    class="card"
    :class="{'card_error': type === 'error', 'card_success': type === 'success'}"
    :style="{'max-width': maxWidth, 'min-width' : minWidth, 'max-height' : maxHeight, 'min-height': minHeight}"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "UiCard",

  props: {
    flat: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: ''
    },
    minWidth: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    maxHeight: {
      type: String,
      default: ''
    },
    minHeight: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="sass" scoped>
.card
  border: 1px solid $dark-color
  color: $dark-color
  position: relative
  padding: $gap
  border-radius: $border-radius
  transition: border-color 0.3s $cubic
  &_error
    border-color: $error-color
  &_success
    border-color: $success-color
</style>
