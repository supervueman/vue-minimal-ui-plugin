import UiCheckbox from '../components/UiCheckbox.vue';

export default {
	title: 'Components/UiCheckbox',
	component: UiCheckbox,
};

export const base = () => ({
	components: {
		UiCheckbox
	},
	template: `
		<div>
			<UiCheckbox label="Label" @input="isShow = $event"/>
			<h3 v-if="isShow">Show text</h3>
		</div>`,

	data: () => ({
		isShow: true
	})
});
