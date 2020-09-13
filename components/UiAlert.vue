<template>
  <transition name="alert">
    <div
      v-if="isActive"
      :class="{
        'alert_success': alertType === 'success',
        'alert_warning': alertType === 'warning',
        'alert_error': alertType === 'error',
      }"
      class="alert"
    >
      {{ text }}
    </div>
  </transition>
</template>

<script>
export default {
  name: "UiAlert",

  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ""
    },
    alertType: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="sass" scoped>
.alert
  max-width: 300px
  padding: $gap
  transition-timing-function: $cubic
  border: 1px solid $dark-color
  color: $dark-color
  background-color: $light-color
  z-index: z(notification)
  &_success
    background-color: $success-color
    color: $light-color
  &_warning
    background-color: $warning-color
    color: $light-color
  &_error
    background-color: $error-color
    color: $light-color

  &-enter-active, &-leave-active
    transition: opacity 1s
  &-enter, &-leave-to
    opacity: 0
</style>
