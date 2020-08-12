<template>
  <header
    class="ui-toolbar"
    :class="{'ui-toolbar_fixed': fixed}"
  >
    <slot></slot>
  </header>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component({})
export default class UiToolbar extends Vue {
  @Prop({type: Boolean, default: false})
  private readonly fixed!: boolean;
};
</script>

<style lang="scss" scoped>
.ui-toolbar {
  top: 0;
  left: 0;
  width: calc(100% - 1px);
  display: flex;
  align-items: center;
  z-index: z(toolbar);
  &_fixed {
    position: fixed;
  }
}
</style>
