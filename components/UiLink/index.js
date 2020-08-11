import './_link.scss';

export default {
  props: {
    tag: {
      type: String,
      default: 'a'
    },
    to: {
      type: String,
      default: '/'
    },
    target: {
      type: String,
      default: ''
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
    }
  },
  render(createElement) {
    const attrs = {};
    const on = {};

    if (this.tag === 'a') {
      attrs.href = this.to;
      attrs.target = this.target;
    } else if(this.tag === 'div') {
      on.click = $event => {
        this.$emit('click', $event);
      };
    } else {
      on.click = $event => {
        this.$emit('click', $event);
      };
      attrs.to = this.to;
    }

    return createElement(
      this.tag,
      {
        class: {
          'ui-link': true,
          'ui-link_brand': this.brand,
          'ui-link_dark': this.dark,
          'ui-link_light': this.light
        },
        attrs,
        on
      },
      this.$slots.default
    );
  }
};
