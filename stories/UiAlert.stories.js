import UiAlert from '../components/UiAlert.vue';

export default {
  title: 'Example/UiAlert',
  component: UiAlert,
};

export const basic = () => ({
  components: {
    UiAlert
  },
  template: '<UiAlert :is-active="true" text="Alert"/>'
});

export const errorAlert = () => ({
  components: {
    UiAlert
  },
  template: '<UiAlert :is-active="true" text="Error" alertType="error"/>'
});

export const warningAlert = () => ({
  components: {
    UiAlert
  },
  template: '<UiAlert :is-active="true" text="Warning" alertType="warning"/>'
});

export const sucessAlert = () => ({
  components: {
    UiAlert
  },
  template: '<UiAlert :is-active="true" text="Success" alertType="success"/>'
});

export const errorAlertFill = () => ({
  components: {
    UiAlert
  },
  template: '<UiAlert :is-active="true" text="Error" alertType="error" fill/>'
});

export const warningAlertFill = () => ({
  components: {
    UiAlert
  },
  template: '<UiAlert :is-active="true" text="Warning" alertType="warning" fill/>'
});

export const sucessAlertFill = () => ({
  components: {
    UiAlert
  },
  template: '<UiAlert :is-active="true" text="Success" alertType="success" fill/>'
});
