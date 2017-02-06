/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _jqueryScrollify = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./node_modules/jquery-scrollify/jquery-scrollify.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _jqueryScrollify2 = _interopRequireDefault(_jqueryScrollify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	$(function () {
	  $(".section").css({ "height": $(window).height() });
	  $.scrollify({
	    section: ".section",
	    sectionName: "section-name",
	    interstitialSection: "",
	    easing: "easeOutQuad",
	    scrollSpeed: 1100,
	    offset: 0,
	    updateHash: true,
	    scrollbars: true,
	    before: function before() {},
	    after: function after() {},
	    afterResize: function afterResize() {},
	    afterRender: function afterRender() {}
	  });
	  console.log($.scrollify.stop);
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map