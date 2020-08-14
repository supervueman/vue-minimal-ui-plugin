import UiSelect from '../components/UiSelect.vue';

export default {
	title: 'Components/UiSelect',
	component: UiSelect,
};

export const base = () => ({
	components: {
		UiSelect
	},
	template: `
		<UiSelect
			v-model="selectedItem"
			:items="items"
		/>`,
	data: () => ({
		items: ["Договор", "Акт сдачи-приемки оказанных социальных услуг", "Доп соглашение"],
		selectedItem: []
	})
});

export const multiple = () => ({
	components: {
		UiSelect
	},
	template: `
		<div>
			<UiSelect
				v-model="selectedItems"
				:items="items"
				multiple
			/>
		</div>`,
	data: () => ({
		items: ["Договор", "Акт сдачи-приемки оказанных социальных услуг", "Доп соглашение"],
		selectedItems: []
	})
});
