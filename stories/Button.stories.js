import MyButton from './Button.vue';

export default {
  title: 'Example/Button',
  component: MyButton,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick">Button</my-button>',
});

export const Primary = Template.bind({});
