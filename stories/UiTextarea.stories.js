import UiTextarea from '../components/UiTextarea';

export default {
	component: UiTextarea,
	title: 'UiTextarea'
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
