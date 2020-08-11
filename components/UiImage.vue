<template>
  <div
    class="ui-image"
    :class="{'ui-image_contain': contain, 'ui-image_cover': cover}"
    :style="{'max-width': maxWidth}"
  >
    <img :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  name: 'UiImage',

  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    contain: {
      type: Boolean,
      default: false
    },
    cover: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: '100%'
    }
  }
};
</script>

<style lang="scss" scoped>
.ui-image {
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
  }
  &_contain {
    img {
      height: 100%;
      object-fit: contain;
    }
  }
  &_cover {
    img {
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
