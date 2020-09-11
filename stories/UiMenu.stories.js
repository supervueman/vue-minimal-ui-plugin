import UiMenu from '../components/UiMenu/UiMenu.vue';

export default {
  title: 'Components/UiMenu',
  component: UiMenu,
};

export const base = () => ({
  components: {
    UiMenu
  },
  template: '<UiMenu :items="items"/>',
  data: () => ({
    items: ["Договор", "Акт сдачи-приемки оказанных социальных услуг", "Доп соглашение"]
  })
});
