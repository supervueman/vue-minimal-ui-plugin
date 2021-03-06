import UiTextarea from "../components/UiTextarea.vue";

export default {
  title: "Components/UiTextarea",
  component: UiTextarea,
};

export const base = () => ({
  components: {
    UiTextarea
  },
  template: `
    <div>
      <UiTextarea/>
    </div>
  `
});
