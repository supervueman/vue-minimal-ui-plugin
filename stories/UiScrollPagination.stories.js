import UiScrollPagination from '../components/UiScrollPagination.vue';

export default {
  title: 'Components/UiScrollPagination',
  component: UiScrollPagination,
};

export const base = () => ({
  components: {
    UiScrollPagination
  },
  template: `
    <div>
      <UiScrollPagination max-height="80px" max-width="50px" @scroll="test">
        <div style="color: black" v-for="item in list">{{item}}</div>
      </UiScrollPagination>
    </div>
  `,
  data: () => ({
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  }),
  methods: {
    test() {
      alert('Scrolling...');
    }
  }
});
