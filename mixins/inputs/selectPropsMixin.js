export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    objMode: {
      type: Boolean,
      default: false,
    },
    itemText: {
      type: String || Number,
      default: "",
    },
    returnObject: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  }
};
