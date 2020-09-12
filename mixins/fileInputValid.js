export default {
  props: {
    value: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: true
    },
    showDetails: {
      type: Boolean,
      default: true
    },
    validExtensions: {
      type: Array,
      default: () => []
    },
    maxFileSize: {
      type: Number,
      default: 10
    },
    maxTotalSize: {
      type: Number,
      default: 50
    },
    maxFileCount: {
      type: Number,
      default: 9
    },
    showContent: {
      type: Boolean,
      default: true
    }
  },

  data: () => ({
    extensionError: {
      key: 'extension-error',
      isError: false,
      value: ''
    },
    fileSizeError: {
      key: 'file-size-error',
      isError: false,
      value: 0
    },
    fileCountError: {
      key: 'file-count-error',
      isError: false,
      value: 0
    },
    totalSizeError: {
      key: 'total-size-error',
      isError: false,
      value: 0
    }
  }),
  computed: {
    validErrors() {
      return [this.extensionError, this.fileSizeError, this.fileCountError, this.totalSizeError];
    }
  },
  methods: {
    filePromiseCollect(uploadFiles, files) {
      const filesPromises = [];

      uploadFiles.forEach(file => {
        this.valid(file);

        // Valid extensions
        if (this.extensionError.isError) return;

        // Valid max file size
        if (this.fileSizeError.isError) return;

        // Valid max total size
        if (this.totalSizeError.isError) return;

        // Valid max files count
        if (filesPromises.length + this.value.length < this.maxFileCount) {
          // Создаем массив из промисов так как reader.onload попадает в очередь
          filesPromises.push(new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
              files.push({
                file,
                base64: `${reader.result}`
              });
              resolve();
            };

            reader.onerror = () => reject();
          }));
        } else {
          this.fileCountError.isError = true;
          this.fileCountError.value = filesPromises.length + this.value.length + 1;
        }
      });
      return filesPromises;
    },

    deleteFile(item, index) {
      const files = this.value.filter((el, i) => i !== index);
      this.$emit('change', files);
      this.$emit('delete', { item, index });
      this.valid(item.file, 'delete');
    },

    /**
     * @function valid
     * @param file
     * @param operation
     * @return void
     * This function called in select file and deleteFile therefore use operation argument
     */

    valid(file, operation = "upload") {
      // Valid max files count
      if (file && this.value.length === this.maxFileCount && operation !== 'upload') {
        this.fileCountError.isError = false;
        this.fileCountError.value = this.value.length;
      }

      // Valid extensions
      const extension = file.name.toLowerCase().split(".").pop();
      if (extension && this.validExtensions.length > 0 && !this.validExtensions.includes(extension) && operation === 'upload') {
        this.extensionError.isError = true;
        this.extensionError.value = extension;
      } else {
        this.extensionError.isError = false;
        this.extensionError.value = '';
      }

      // Valid max file size
      if (file && file.size / 1024 / 1024 > this.maxFileSize && operation === 'upload') {
        this.fileSizeError.isError = true;
        this.fileSizeError.value = file.size / 1024 / 1024;
      } else {
        this.fileSizeError.isError = false;
        this.fileSizeError.value = 0;
      }

      // Valid max total size
      const currentTotalSize = this.value.reduce((acc, el) => (acc + el.file.size), 0) / 1024 / 1024;
      if (currentTotalSize && currentTotalSize >= this.maxTotalSize && operation === 'upload') {
        this.totalSizeError.isError = true;
        this.totalSizeError.value = currentTotalSize + file.size / 1024 / 1024;
      } else {
        this.totalSizeError.isError = false;
        this.totalSizeError.value = currentTotalSize;
      }
      this.$emit('valid', this.validErrors);
    }
  }
};
