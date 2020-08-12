import UiCheckbox from '../components/UiCheckbox.vue';

export default {
	component: UiCheckbox,
	title: 'UiCheckbox'
};

export const base = () => ({
	components: {
		UiCheckbox
	},
	template: `
		<div>
			<UiCheckbox label="Label" v-model="isShow"/>
			<h3 v-if="isShow">Show text</h3>
		</div>`,

	data: () => ({
		isShow: true
	})
});
