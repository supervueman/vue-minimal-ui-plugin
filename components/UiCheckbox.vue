<template>
  <label
    class="ui-checkbox"
    :style="{ 'min-width': minWidth }"
  >
    <input
      type="checkbox"
      :checked="checked"
      @input="input"
      @change="change"
      :disabled="disabled"
      :name="name"
    />
    <span class="ui-checkbox--item">
      <svg width="19" height="14" viewBox="0 0 19 14" fill="none">
        <path
          d="M2 6L8.3 12L17.3 2"
          stroke="white"
          stroke-width="2.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <span v-if="label" class="ui-checkbox--label">{{ label }}</span>
  </label>
</template>

<script>
  export default {
    name: "UiCheckbox",

    mixins: ["themeMixin"],

    model: {
      event: "change",
    },

    props: {
      dataValue: {
        type: String | Number | Object | Array | Boolean,
        default: null,
      },
      label: {
        type: String,
        default: "",
      },
      checked: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      name: {
        type: String,
        default: "",
      },
      minWidth: {
        type: String,
        default: "",
      },
    },

    methods: {
      change($event) {
        this.$emit("change", {
          checked: $event.target.checked,
          value: this.dataValue,
        });
        this.$emit("changeActive", $event.target.checked);
      },
      input($event) {
        this.$emit("input", $event.target.checked);
      },
    },
  };
</script>

<style lang="scss">
  .ui-checkbox {
    display: flex;
    align-items: center;
    position: relative;
    min-height: 20px;
    padding-left: 20px;
    input[type="checkbox"] {
      visibility: hidden;
      display: none;
    }
    &--item {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 0;
      top: 0;
      width: 20px;
      height: 20px;
      border-radius: $border-radius;
      border: 1px solid $brand-darken-color-1;
      cursor: pointer;
      transition: background-color 0.3s $cubic;
      svg {
        width: 16px;
        height: 16px;
        opacity: 0;
        transition: opacity 0.15s $cubic;
      }
    }
    &--label {
      margin-left: $gap / 2;
      cursor: pointer;
    }
    input[type="checkbox"]:checked + &--item {
      background-color: $brand-darken-color-1;
      svg {
        opacity: 1;
      }
    }

    input[type="checkbox"]:disabled + &--item {
      background-color: $light-gray-color;
      border-color: $light-gray-color;
      svg {
        opacity: 1;
      }
    }
  }
</style>
