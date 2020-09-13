<template>
  <div
    class="input"
    :class="{
      'input_error': errorMessage,
      'input_active': isListView,
    }"
  >
    <label class="input--inner">
      <span
        v-if="label"
        class="input--label"
      >
        {{ label }}
      </span>

      <input
        :value="value"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        class="input--item item"
        @input="search"
        @focus="isListView = true"
        @blur="isListView = false"
      >
    </label>

    <div
      v-if="errorMessage"
      class="input--footer"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
  import inputPropsMixin from "../mixins/inputs/inputPropsMixin.js";

  function debounce(func, ms) {
    let oldDate = Number(new Date().getTime());
    let timeout;

    function wrapper() {
      const newDate = Number(new Date().getTime());

      if (newDate - oldDate < ms) {
        clearTimeout(timeout);
      }

      oldDate = newDate;

      timeout = setTimeout(() => {
        func();
      }, ms);
    }
    return wrapper;
  }

  export default {
    name: "UiInputSearch",

    mixins: [inputPropsMixin],

    model: {
      prop: "selectedItems",
      event: "change",
    },

    props: {
      value: {
        type: String | Number,
        default: "",
      },
      searchMethod: {
        type: Function,
        default: () => {},
      },
      timing: {
        type: Number,
        default: 1000,
      },
    },

    data: () => ({
      debounce: () => {},
      isListView: false,
    }),

    created() {
      this.debounce = debounce(this.searchMethod, this.timing);
    },

    methods: {
      search($event) {
        this.$emit("input", $event.target.value);
        this.debounce();
      },
    },
  };
</script>

<style lang="sass" scoped>
  .input
    padding-bottom: 12px
    color: $dark-color
    position: relative
    &--inner
      display: block
      width: 100%
      position: relative
    &--icon
      position: absolute
      bottom: 9px
      right: 15px
      margin-top: auto
      margin-bottom: auto
      width: 19px
      height: 19px
      display: flex
      align-items: center
      justify-content: center
      pointer-events: none
      transform-origin: 50% 50%
      transition: transform 0.3s $cubic
    &--icon_default
      width: 100%
      height: 100%
    &--item
      outline: none
      width: 100%
      height: 40px
      padding-left: $gap / 2
      padding-right: $gap / 2
      border: 1px solid $light-gray-color
      border-right-width: 4px
      border-radius: $border-radius
      background-color: $light-color
      appearance: none
      display: flex
      align-items: center
      transition: border-color 0.3s $cubic
      @include on-event
        border-right-color: $brand-lighten-color-2
      &:disabled
        background-color: $light-gray-color-2
        border-color: $light-gray-color
    &--list
      position: fixed
      top: 60px
      left: 0
      width: 100%
      background-color: $light-color
      border: 1px solid $light-gray-color
      border-radius: $border-radius
      z-index: 10
      max-height: 370px
      overflow-x: hidden
      overflow-y: auto
      &::-webkit-scrollbar
        width: 4px
      &-enter-active,
      &-leave-active
        transition: opacity 0.3s $cubic
      &-enter,
      &-leave-to
        opacity: 0
      &-item
        padding: $gap / 2
        border-bottom: 1px solid $light-gray-color
        color: $text-color
        transition: color 0.3s, background-color 0.3s
        transition-timing-function: $cubic
        font-weight: normal
        cursor: pointer
        &:last-child
          border-bottom: none
        @include on-event
          color: $light-color
          background-color: $brand-lighten-color-1
        &_active
          background-color: $brand-lighten-color-1
          color: $light-color

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
    &_active
      .input
        &--icon
          transform: rotate(180deg)
    &_error
      .input--item
        border-right-color: $error-color
        color: $error-color
</style>
