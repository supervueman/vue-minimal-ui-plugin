import ieBrowserDefine from "../_helper/ieBrowserDefine";

export default {
  watch: {
    isListView: [{
      handler: 'onListChange'
    }],
    items: [{
      handler: 'onListChange'
    }]
  },

  data: () => ({
    top: 0,
    left: 0,
    width: 0
  }),

  mounted() {
    this.onChangeListPosition();
  },

  methods: {
    onListChange() {
      if (this.isListView) {
        setTimeout(() => {
          this.onChangeListPosition();

          window.addEventListener('scroll', this.onChangeListPosition);
        }, 50);
      } else {
        window.removeEventListener('scroll', this.onChangeListPosition);
      }
    },

    onChangeListPosition() {
      const list = this.$el.querySelector('.list');

      if (list) {
        const targetElement = this.$el.querySelector('.item'),
          hScreen = window.innerHeight,
          wElem = targetElement.getBoundingClientRect().width;
        let offsetX = targetElement.getBoundingClientRect().x,
          offsetY = targetElement.getBoundingClientRect().y;

        if (ieBrowserDefine.name === 'MSIE') {
          offsetX = targetElement.getBoundingClientRect().left;
          offsetY = targetElement.getBoundingClientRect().top;
        }

        if (offsetY * 100 / hScreen < 50) {
          list.style.top = `${offsetY + 40}px`;
          this.top = `${offsetY + 40}px`;
        } else {
          const hList = list.getBoundingClientRect().height;
          list.style.top = `${offsetY - hList}px`;
          this.top = `${offsetY - hList}px`;
        }
        list.style.left = `${offsetX}px`;
        list.style.width = `${wElem}px`;
        this.left = `${offsetX}px`;
        this.width = `${wElem}px`;
      }
    }
  }
};
