<template>
  <div>
    <!--  Validation start  -->
    <div class="ui-file-input--footer" v-if="showDetails">
      <div
        v-for="(item, i) in validErrors"
        :key="`error-${i}`"
      >
        <div v-if="item.isError">
          <span v-if="item.key === 'extension-error'">Недопустимый формат файла: {{item.value}}. Допустимые форматы файлов:
            <span v-for="(format, i) in validExtensions" :key="format">
              {{format}}
              <span v-if="i !== validExtensions.length - 1">, </span>
            </span>.
          </span>
          <span v-if="item.key === 'file-size-error'">Размер файла: {{Math.round(item.value * 100) / 100}}Мб. Допустимый размер файла: {{maxFileSize}}Мб.</span>
          <span v-if="item.key === 'total-size-error'">Общий размер файлов: {{Math.round(item.value) / 100}}Мб. Максимально допустимый размер файлов: {{maxTotalSize}}Мб.</span>
          <span v-if="item.key === 'file-count-error'">Количество файлов: {{item.value}}. Допустимое количество файлов: {{maxFileCount}}Мб.</span>
        </div>
      </div>
    </div>
    <!--  Validation end  -->

    <label
      class="ui-drag-and-drop"
      :class="{'ui-drag-and-drop-hover': isHoverFiles}"
      for="fileDrag"
      @drop.prevent="addFile"
      @dragover.prevent
      @dragenter="fileEnter"
      @dragleave="fileLeave"
    >
      <span
        class="ui-drag-and-drop--label"
        :class="{'ui-drag-and-drop--label-hover': isHoverFiles}"
      >
        {{message}}
      </span>
      <input
        type="file"
        id="fileDrag"
        :multiple="multiple"
        class="ui-drag-and-drop--input"
        @change="addFile"
      />
    </label>

    <div class="ui-drag-and-drop--list">
      <div v-for="(item, index) in value" :key="`index: ${index}`" class="ui-drag-and-drop--list-item" :style="getColumns">
        <DeleteIcon @click="deleteFile(item, index)" class="ui-drag-and-drop--list-item--icon"/>
        <div class="ui-drag-and-drop--list-item--text">
          <slot name="file" :item="item">{{item.file.name}}</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import valid from "@/refactor/ui-kit/mixins/fileInputValid.js";

export default {
  name: "UiDragAndDropFile",
  mixins: [valid],
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    columns: {
      type: String,
      default: '2'
    },
    message: {
      type: String,
      default: 'Перетащите в данную область свои файлы'
    }
  },
  data() {
    return {
      files: [],
      isHoverFiles: false
    }
  },
  computed: {
    getColumns() {
      return `width: calc(100% / ${this.columns})`
    }
  },
  methods: {
    addFile(e) {
      const files = [];
      const uploadFiles = [];
      // drop or change
      if (e && e.dataTransfer && e.dataTransfer.files) {
        uploadFiles.push(...e.dataTransfer.files)
      } else {
        uploadFiles.push(...e.target.files)
      }

      if (this.multiple) {
        files.push(...this.value);
      }

      Promise.all(this.filePromiseCollect(uploadFiles, files)).then(() => {
        this.$emit('change', files);
        e.target.value = '';
      });
      this.isHoverFiles = false;
    },
    fileLeave() {
      this.isHoverFiles = false;
    },
    fileEnter() {
      this.isHoverFiles = true;
    }
  }
};
</script>

<style lang="sass" scoped>
.ui-drag-and-drop
  display: flex
  align-items: center
  justify-content: center
  text-align: center
  color: $brand-color
  width: 100%
  border: 1px dashed $brand-color
  border-radius: 3px
  background: white
  cursor: pointer
  &--label
    font-size: 14px
    color: $brand-color
    pointer-events: none
    &-hover
      opacity: 0.5

  &--input
    display: none

  &-hover
    border: 1px solid $brand-color

  &--list
    margin-top: $gap / 2
    display: flex
    flex-wrap: wrap
    flex: 1
    width: 100%
    &-item
      display: flex
      align-items: center
      margin-bottom: $gap / 2
      padding-right: $gap / 2
      &--text
        white-space: nowrap
        text-overflow: ellipsis
        overflow: hidden

      &--icon
        flex-shrink: 0
        margin-right: $gap / 2
        cursor: pointer
</style>
