import UiInput from '../components/UiInput';

export default {
	title: 'Components/UiInput',
	component: UiInput,
};

export const base = () => ({
	components: {
		UiInput
	},
	template: `
		<div>
			<UiInput
				v-model="text"
				label="Label"
			/>
			<h3>Text: {{text}}</h3>
		</div>
	`,

	data: () => ({
		text: ''
	}),
});

export const disabled = () => ({
	components: {
		UiInput
	},
	template: `
		<div>
			<UiInput
				v-model="text"
				label="Label"
				disabled
			/>
		</div>
	`,

	data: () => ({
		text: 'Text'
	}),
});

export const errorMessageInput = () => ({
	components: {
		UiInput
	},
	template: `
		<div>
			<UiInput
				v-model="text"
				label="Label"
				errorMessage="Error"
			/>
		</div>
	`,

	data: () => ({
		text: 'Text'
	}),
});
