/**
 * This file is auto loaded by require JS.
 * Require JS has been provided for quick
 * startup, feel free to change this approach
 * as you see fit and add dependencies
 *
 * A List of button and text box ID's are
 * included below to speed up development
 * and reduce the need to scan through the
 * index file to acquire them.

	nameInput
	createCompanyBtn
	bankruptBtn
	addProductBtn
	floatRandomBtn
	encourageMergersBtn

 * Good luck
 *
 **/
requirejs.config({
	paths: {
		"jquery": "vendor/jquery",
		"util": "util",
		"models": "app/models",
		"views": "app/views",
		"controller": "app/controller"
	}
});
define ([ "jquery"
		, "controller"
		, "models/worldModel"
		, "views/worldView"]
		, function ($, controller, model, view) {
	var v = new view(),
		m = new model(v);
	controller.model(m);
});
