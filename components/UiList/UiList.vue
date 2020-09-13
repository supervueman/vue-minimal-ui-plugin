<template>
  <ul class="ui-list" :class="classProp" :style="{ 'max-height': maxHeight }">
    <li
      v-for="(item, index) in items"
      :key="`item-list-${index}`"
      :class="{
        'ui-list--item_active': selectedItem === item || indexSelected === index,
        'ui-list--item': isHover,
        'ui-list--item-no-hover': !isHover,
        'ui-list--item-border': isBorder
      }"
    >
      <div class="d-flex justify-between align-center">
        <div
          class="d-flex align-center flex-2"
          :style="{ padding: paddingProp }"
          @click="$emit('click-item', { item, index })"
        >
          <span v-if="iconStatus" class="ui-list--item--icon">
            <slot name="iconStatus" />
          </span>
          <slot name="item" :item="item" :index="index">
            {{ item }}
          </slot>
        </div>

        <span v-if="iconAction" class="p-half">
          <slot name="iconAction" :item="item" :index="index" />
        </span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "UiList",

  props: {
    items: {
      type: Array,
      default: () => []
    },
    selectedItem: {
      type: Object,
      default: () => {}
    },
    indexSelected: {
      type: Number,
      default: NaN
    },
    iconStatus: {
      type: Boolean,
      default: false
    },
    iconAction: {
      type: Boolean,
      default: false
    },
    classProp: {
      type: String,
      default: ""
    },
    isHover: {
      type: Boolean,
      default: true
    },
    maxHeight: {
      type: String,
      default: ""
    },
    isBorder: {
      type: Boolean,
      default: true
    },
    paddingProp: {
      type: String,
      default: "10px"
    }
  }
}
</script>

<style lang="sass" scoped>
  .ui-list
    /*overflow-x: hidden*/
    border-radius: $border-radius
    height: 100%
    &--item
      cursor: pointer
      transition: color 0.3s, background-color 0.3s
      transition-timing-function: $cubic
      @include on-event
        color: $light-color
        background: $brand-color
      &:last-child
        border-bottom: none
      &--icon
        margin-right: $gap / 2
      &_active
        color: $light-color
        background: $brand-color
    &--item-border
      border-bottom: 1px solid $light-gray-color
    &--item-no-hover
      &:last-child
        border-bottom: none
      &--icon
        margin-right: $gap / 2
      &_active
        color: $light-color
        background: $brand-color
</style>
