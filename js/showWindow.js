define(['jquery'], function ($) {
	function ShowWindow() {
	}

	ShowWindow.prototype = {
		alert: function (content) {
			var bounding = $('body').append(
				'<div>'
			)
		},
		confirm: function () {

		},
		prompt: function () {

		}
	};
	return {
		showWindow: ShowWindow
	}
});