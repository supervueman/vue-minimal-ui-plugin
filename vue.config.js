module.exports = {
	css: {
		loaderOptions: {
			sass: {
				additionalData: '@import "./sass/_index.sass"',
				sourceMap: true,
			}
		}
	}
};
