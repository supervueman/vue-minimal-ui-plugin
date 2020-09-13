<template>
  <div
    class="menu"
    :class="{ 'menu_active': isListView }"
    @click="$emit('click', $event)"
    @mouseover="openList"
    @mouseleave="closeList"
  >
    <input
      class="menu--button item"
      readonly
      :placeholder="label"
      @click="$emit('click-button', $event)"
      @focus="openListClick"
      @blur="closeListClick"
    >

    <transition name="menu--list">
      <div v-show="isListView" class="menu--list list">
        <ul>
          <li
            v-for="(item, i) in items"
            :key="`menu-list-item-${i}`"
            class="menu--list-item"
            @click="$emit('click-list-item', item)"
          >
            <slot name="item" :item="item">
              {{ item }}
            </slot>
          </li>
        </ul>
      </div>
    </transition>

    <div class="menu--icon" @click="$emit('click-icon', $event)">
      <div class="menu--icon-item">
        <slot name="icon">
          <svg>
            <path
              d="M15.6056 1.29714C15.6056 1.42225 15.5426 1.56337 15.4495 1.65646L8.16213 8.94386C8.06805 9.03795 7.92793 9.1 7.80282 9.1C7.67771 9.1 7.53659 9.03694 7.44351 8.94386L0.156136 1.65646C0.0620541 1.56237 0 1.42225 0 1.29714C0 1.17203 0.063055 1.03091 0.156136 0.937824L0.93782 0.156136C1.0319 0.0620537 1.15701 0 1.29713 0C1.42224 0 1.56337 0.0630546 1.65645 0.156136L7.80282 6.30254L13.9492 0.156136C14.0433 0.0620537 14.1834 0 14.3085 0C14.4336 0 14.5747 0.0630546 14.6678 0.156136L15.4495 0.937824C15.5436 1.03191 15.6056 1.17203 15.6056 1.29714Z"
            />
          </svg>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  import dropListMixin from "../../mixins/dropListMixin.js";

  export default {
    name: "UiMenu",

    mixins: [dropListMixin],

    props: {
      label: {
        type: String,
        default: "Меню",
      },
      items: {
        type: Array,
        default: () => [],
      },
      onClick: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      isListView: false,
    }),

    methods: {
      openListClick() {
        if (this.onClick) {
          this.isListView = true;
        }
      },

      closeListClick() {
        if (this.onClick) {
          this.isListView = false;
        }
      },

      openList() {
        if (!this.onClick) {
          this.isListView = true;
        }
      },

      closeList() {
        if (!this.onClick) {
          this.isListView = false;
        }
      },
    },
  };
</script>

<style lang="sass" scoped>
.menu
  background-color: $brand-color
  color: $light-color
  cursor: pointer
  height: 40px
  position: relative
  display: flex
  align-items: center
  border-radius: $border-radius
  &--button
    padding: 0 $gap * 3 0 $gap
    background-color: transparent
    height: 100%
    width: 100%
    border: none
    text-transform: uppercase
    cursor: pointer
    @include on-event
      color: $light-color
      background-color: $brand-lighten-color-1

    &::placeholder
      color: $light-color
  &--list
    position: fixed
    top: 60px
    left: 0
    width: 100%
    border-radius: $border-radius
    z-index: 10
    overflow-x: hidden
    background-color: $brand-color
    ul
      display: block
      padding: 0
      margin: 0
      li
        list-style-type: none
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
      border-bottom: 1px solid $light-color
      color: $light-color
      transition: color 0.3s, background-color 0.3s
      transition-timing-function: $cubic
      font-weight: normal
      cursor: pointer
      @include on-event
        color: $light-color
        background-color: $brand-lighten-color-1
      &_active
        background-color: $brand-lighten-color-1
        color: $light-color

  &--icon
    position: absolute
    top: 0
    right: 0
    width: 40px
    height: 100%
    display: flex
    align-items: center
    justify-content: center
    border-left: 1px solid $light-color
    &-item
      pointer-events: none
      transition: transform 0.3s $cubic
  svg
    width: 16px
    height: 10px
  path
    fill: $light-color
  .list
    display: block
  &_active
    .menu--icon-item
      transform: rotate(180deg)
</style>
