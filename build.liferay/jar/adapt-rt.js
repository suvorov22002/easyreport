Liferay.Loader.define("easyreport@0.0.0/adapt-rt", ['module', 'exports', 'require'], function (module, exports, require) {
	var define = undefined;
	var global = window;
	{
		var PATH_CONTEXT = Liferay.ThemeDisplay.getPathContext();

		function adaptStaticURL(url) {
			return PATH_CONTEXT + "/o/easyreport-0.0.0/easyreport/" + url;
		}

		module.exports = {
			adaptStaticURL: adaptStaticURL
		};
	}
});