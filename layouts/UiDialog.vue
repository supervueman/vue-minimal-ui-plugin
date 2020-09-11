<template>
  <transition name="ui-dialog">
    <div
      v-show="value"
      class="ui-dialog"
      :class="{ 'ui-dialog_active': value }"
    >
      <div
        class="ui-dialog--content shadow"
        :style="{
          'max-width': maxWidth,
          'min-width': minWidth,
          'max-height': maxHeight
        }"
      >
        <slot></slot>
      </div>
      <div class="ui-dialog--downlay" @click="closeDialog"></div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "UiDialog",

    props: {
      maxWidth: {
        type: String,
        default: "500px"
      },
      minWidth: {
        type: String,
        default: ""
      },
      maxHeight: {
        type: String,
        default: ""
      },
      value: {
        type: Boolean,
        default: false
      },
      outClick: {
        type: Boolean,
        default: false
      }
    },

    methods: {
      closeDialog() {
        if (this.outClick) {
          this.$emit("input", false);
        }
      }
    }
  };
</script>

<style lang="sass" scoped>
.ui-dialog
  position: fixed
  width: 100%
  height: 100%
  margin: auto
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: z(modal)
  display: flex
  align-items: center
  justify-content: center
  &--content
    z-index: 2
    width: 100%
    transform: translateY(-40%)
    transition: transform 0.3s $cubic
    overflow-y: auto
  &--downlay
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: $light-color
    opacity: 0.3
    z-index: 1
  &-enter-active,
  &-leave-active
    transition: opacity 0.3s $cubic
  &-enter,
  &-leave-to
    opacity: 0
  &_active
    .ui-dialog
      &--content
        transform: translateY(0)
</style>
