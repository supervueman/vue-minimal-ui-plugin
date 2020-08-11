<template>
  <button type="button" class="button"><slot></slot></button>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({})
export default class MyButton extends Vue {
  @Prop({type: Boolean, default: false}) private readonly bool!: boolean;
}
</script>

<style lang="scss">
.button {
  color: red;
  border-color: $brand-color;
}
</style>
