export default {
  computed: {
    parseItems() {
      if (this.objMode && !this.itemText) {
        throw new Error(
          "[UiInputSearch]: Property 'itemText' required in 'objMode'!"
        );
      }
      if (this.objMode && this.itemText) {
        return this.items.map(el => el[this.itemText]);
      }
      return this.items;
    }
  }
};
