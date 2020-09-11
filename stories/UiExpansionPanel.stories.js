import UiExpansionPanels from '../components/UiExpansionPanels/UiExpansionPanels.vue';
import UiExpansionPanel from '../components/UiExpansionPanels/UiExpansionPanel.vue';

export default {
  title: 'Components/UiExpansionPanels',
  component: UiExpansionPanels,
};

export const basic = () => ({
  components: {
    UiExpansionPanels,
    UiExpansionPanel
  },
  template: `
  <div>
    <UiExpansionPanels>
      <UiExpansionPanel>
        <template #header>
          Panel one
        </template>

        <template #content>
          <h1>Hello</h1>
        </template>
      </UiExpansionPanel>

      <UiExpansionPanel>
        <template #header>
          Panel two
        </template>

        <template #content>
          <h1>Hello again</h1>
        </template>
      </UiExpansionPanel>
    </UiExpansionPanels>
  </div>
  `
});

export const withActivePanel = () => ({
  components: {
    UiExpansionPanels,
    UiExpansionPanel
  },
  template: `
  <div>
    <UiExpansionPanels>
      <UiExpansionPanel active>
        <template #header>
          Panel one
        </template>

        <template #content>
          <h1>Hello</h1>
        </template>
      </UiExpansionPanel>

      <UiExpansionPanel>
        <template #header>
          Panel two
        </template>

        <template #content>
          <h1>Hello again</h1>
        </template>
      </UiExpansionPanel>
    </UiExpansionPanels>
  </div>
  `
});

export const withAsyncData = () => ({
  components: {
    UiExpansionPanels,
    UiExpansionPanel
  },
  template: `
  <div>
    <button @click="setData">Set data</button>
    <UiExpansionPanels>
      <UiExpansionPanel v-for="(item, i) in items" :key="i" :watchItem="item">
        <template #header>
          {{item.header}}
        </template>

        <template #content>
          <h1>{{item.content}}</h1>
        </template>
      </UiExpansionPanel>
    </UiExpansionPanels>
  </div>
  `,
  data: () => ({
    items: [{}, {}]
  }),
  methods: {
    setData() {
      setTimeout(() => {
        this.items = [{
          header: 'Panel one',
          content: 'Hello'
        }, {
          header: 'Panel two',
          content: 'Hello again'
        }];
      }, 2000);
    }
  }
});
