<template>
  <div
    class="ui-card"
    :class="{'ui-card_flat': flat, 'ui-card_error': type === 'error', 'ui-card_success': type === 'success'}"
    :style="{'max-width': maxWidth, 'min-width' : minWidth, 'max-height' : maxHeight, 'min-height': minHeight}"
  >
    <slot></slot>
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
.ui-card
  border: 1px solid $dark-color
  color: $dark-color
  position: relative
  padding: $gap
  border-radius: $border-radius
  transition: border-color 0.3s $cubic
  &--inner
    border: 1px solid $dark-color
    width: 100%
    padding: $gap 0
  &_flat
    border: none
    .ui-card
      &--inner
        border: none
        padding: 0
      &_header
        padding-right: 0
        padding-left: 0
      &_content
        padding-right: 0
        padding-left: 0
      &_actions
        padding-right: 0
        padding-left: 0
  &_error
    border-color: $error-color
  &_success
    border-color: $success-color
</style>
