<template>
  <div
    v-bind="$attrs"
    class="textarea"
    :class="{ 'textarea--error': errorMessage && hasError }"
  >
    <div class="textarea--inner">
      <span class="textarea--label">
        {{ label }}
      </span>

      <textarea
        class="textarea--item"
        :class="{ 'textarea--error': hasError }"
        :name="name"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :required="required"
        :value="value"
        :disabled="disabled"
        :style="{ height: height, resize: resize ? '' : 'none' }"
        @input="$emit('input', $event.target.value)"
      />
    </div>

    <div
      v-if="errorMessage && hasError"
      class="textarea--footer"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
  import inputPropsMixin from "../mixins/inputs/inputPropsMixin";

  export default {
    name: 'UiTextarea',

    mixins: [inputPropsMixin],

    props: {
      value: {
        type: String,
        default: ''
      },
      maxLength: {
        type: String,
        default:  '1000'
      },
      hasError: {
        type: Boolean,
        default: false
      },
      resize: {
        type: Boolean,
        default: false
      },
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>

<style lang="sass" scoped>
.textarea
  padding-bottom: 12px
  color: $dark-color
  position: relative
  &--inner
    width: 100%
    position: relative
    height: 93%
  &--item
    font-size: 14px
    outline: none
    width: 100%
    height: 60px
    padding: $gap / 2
    border: 1px solid $light-gray-color
    border-right-width: 4px
    border-radius: $border-radius
    background-color: $light-color
    appearance: none
    display: flex
    align-items: center
    transition: border-color 0.3s $cubic
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button
      -webkit-appearance: none
    @include on-event
      border-right-color: $brand-lighten-color-2
    &:disabled
      background-color: $light-gray-color-2
      border-color: $light-gray-color
  &--label
    display: block
    margin-bottom: 5px
    font-weight: bold
  &--footer
    font-size: 10px
    position: absolute
    bottom: 0
    left: 0
    color: $error-color
  &--error
    border-right-color: $error-color
    color: $error-color
</style>
