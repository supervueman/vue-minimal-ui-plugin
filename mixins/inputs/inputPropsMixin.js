export default {
	props: {
		name: {
			type: String,
			default: "",
		},
		placeholder: {
			type: String,
			default: "",
		},
		required: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		label: {
			type: String,
			default: "",
		},
		errorMessage: {
			type: String,
			default: "",
		},
	}
};
