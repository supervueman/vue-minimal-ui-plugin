import './_button.scss';

export default {
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    to: {
      type: String,
      default: '/'
    },
    target: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    brand: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    fill: {
      type: Boolean,
      default: false
    },
    fab: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    minWidth: {
      type: String,
      default: ''
    },
    maxWidth: {
      type: String,
      default: ''
    },
    maxHeight: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    }
  },
  render(createElement) {
    const attrs = {};
    const on = {};

    switch (this.tag) {
      case 'a':
        attrs.href = this.to;
        attrs.target = this.target;
        break;
      case 'router-link':
        attrs.to = this.to;
        break;
      default:
        attrs.disabled = this.disabled;
        on.click = $event => {
          this.$emit('click', $event);
        };
        break;
    }

    if (this.maxWidth) {
      const maxWidth = `max-width: ${this.maxWidth};`;
      attrs.style = attrs.style ? (attrs.style += maxWidth) : maxWidth;
    }

    if (this.minWidth) {
      const minWidth = `min-width: ${this.minWidth};`;
      attrs.style = attrs.style ? (attrs.style += minWidth) : minWidth;
    }

    if (this.maxHeight) {
      const maxHeight = `max-height: ${this.maxHeight};`;
      attrs.style = attrs.style ? (attrs.style += maxHeight) : maxHeight;
    }

    if (this.width) {
      const width = `width: ${this.width};`;
      attrs.style = attrs.style ? (attrs.style += width) : width;
    }

    return createElement(
      this.tag,
      {
        class: {
          'ui-button': true,
          'ui-button_light': this.light,
          'ui-button_dark': this.dark,
          'ui-button_brand': this.brand,
          'ui-button_fill': this.fill,
          'ui-button_fab': this.fab,
          'ui-button_flat': this.flat
        },
        attrs,
        on
      },
      this.$slots.default
    );
  }
};
