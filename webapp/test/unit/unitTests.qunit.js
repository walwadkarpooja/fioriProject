/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"org/indexit/demo1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
