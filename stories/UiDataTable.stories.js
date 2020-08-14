import {
	action
} from '@storybook/addon-actions';
import {
	linkTo
} from '@storybook/addon-links';

import UiDataTable from '../components/UiDataTable/UiDataTable.vue';



export default {
	title: 'Components/UiDataTable',
	component: UiDataTable,
};

export const base = () => ({
	components: {
		UiDataTable
	},
	template: '<UiDataTable :items="items" :headers="headers"/>',
	data: () => ({
		items: [{
			developer: 'Frontend',
			name: 'Rinat',
			skills: 'JS, Vue js, Nuxt js, Node js, Postgresql, Express js, Nginx, Linux'
		}, {
			developer: 'Frontend',
			name: 'Maxim',
			skills: 'JS, Vue js, Node js, Express js'
		}, {
			developer: 'Backend',
			name: 'Mixalich',
			skills: 'Java EE, Springboot supermaster, Postgresql, Nginx'
		}],
		headers: [{
			text: 'Profession'
		}, {
			text: 'Name'
		}, {
			text: 'Skills'
		}]
	})
});
