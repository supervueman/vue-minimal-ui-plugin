<template>
  <div class="ui-expansion-panels--item">
    <UiExpansionPanelHeader :isActive="isActive" @click="toggle">
      <slot name="header" />
    </UiExpansionPanelHeader>

    <UiExpansionPanelContent
      ref="content"
      :height="height"
      :flat="$parent.flat"
      :class="{ is_init: isInit }"
    >
      <slot name="content" />
    </UiExpansionPanelContent>
  </div>
</template>

<script>
  import UiExpansionPanelHeader from "./UiExpansionPanelHeader";
  import UiExpansionPanelContent from "./UiExpansionPanelContent";

  export default {
    name: "UiExpansionPanelsItem",

    props: {
      watchItem: {
        default: null
      },
      active: {
        type: Boolean,
        default: false
      }
    },

    components: {
      UiExpansionPanelHeader,
      UiExpansionPanelContent
    },

    data: () => ({
      height: null,
      isActive: false,
      isInit: true
    }),

    watch: {
      watchItem: {
        handler() {
          this.setSize();
        }
      }
    },

    mounted() {
      this.isActive = this.active;
      this.setSize();
    },

    methods: {
      setSize() {
        setTimeout(() => {
          this.togglePanel();
          this.isInit = false;
        }, 0);
      },

      togglePanel() {
        if (this.isActive) {
          this.height = this.$refs.content.$el.querySelector(
            ".ui-expansion-panels--item-content--inner"
          ).clientHeight;
        } else {
          this.height = 0;
        }
      },

      toggle() {
        this.isActive = !this.isActive;

        this.togglePanel();
        this.$emit("toggle", this.isActive);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .ui-expansion-panels--item {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    &:last-child {
      border-bottom: none;
    }
  }
  .is_init {
    position: absolute;
    opacity: 0;
  }
</style>
