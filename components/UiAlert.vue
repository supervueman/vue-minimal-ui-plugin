<template>
  <transition name="ui-alert">
    <div
      class="ui-alert"
      :class="{
        'ui-alert_success': alertType === 'success',
        'ui-alert_warning': alertType === 'warning',
        'ui-alert_error': alertType === 'error',
        'ui-alert_fill': fill
      }"
      v-if="isActive"
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
    },
    fill: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.ui-alert {
  max-width: 300px;
  padding: $gap;
  transition-timing-function: $cubic;
  border: 1px solid $dark-color;
  color: $dark-color;
  background-color: $light-color;
  z-index: z(notification);

  &_success {
    border-color: $success-color;
  }
  &_warning {
    border-color: $warning-color;
  }
  &_error {
    border-color: $error-color;
  }

  &_fill.ui-alert_success {
    background-color: $success-color;
    color: $light-color;
  }
  &_fill.ui-alert_warning {
    background-color: $warning-color;
    color: $light-color;
  }
  &_fill.ui-alert_error {
    background-color: $error-color;
    color: $light-color;
  }

  &-enter-active,
  &-leave-active {
    transition: opacity 1s;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
