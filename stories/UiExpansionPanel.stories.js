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