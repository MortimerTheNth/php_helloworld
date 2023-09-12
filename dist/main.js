/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var fs = __webpack_require__(/*! fs/promises */ \"fs/promises\");\nfunction getTitles() {\n  var titleList = [];\n  var base = \"C:\\\\Users\\\\Surface\\\\Downloads\\\\IMDb-API_sample_data\\\\IMDb-API sample data\\\\Movie\";\n  var files = fs.readdirSync(base);\n  var i = 0;\n  files.forEach(function (file) {\n    var boyo = JSON.parse(fs.readFileSync(base + file + '\\\\Title ' + file + '.json', 'utf8'));\n    titleList.push(boyo);\n    i++;\n    if (i == 10) {\n      console.log(titleList);\n      return;\n    }\n  });\n}\nfunction AddContent(container) {\n  var list = getTitles();\n  for (var i = 0; i < 9; i++) {\n    var mainCont = document.getElementById(container);\n    var newDiv = document.createElement(\"div\");\n    newDiv.className = \"column-item\";\n    var newTitle = document.createElement(\"div\");\n    newTitle.className = \"\".concat(container, \"-title-cont\");\n    var desc = document.createElement(\"p\");\n    desc.innerHTML = list.desc;\n    var desc2 = document.createElement(\"p\");\n    desc2.innerHTML = list.desc2;\n    var title = document.createElement(\"h3\");\n    title.className = \"\".concat(container, \"-title\");\n    title.innerHTML = list.title;\n    var subtitle = document.createElement(\"h4\");\n    subtitle.className = \"\".concat(container, \"-subtitle\");\n    mainCont.style.background = \"url(\".concat(list.image, \")\");\n    newDiv.appendChild(newTitle);\n    newDiv.appendChild(desc);\n    newDiv.appendChild(desc2);\n    newTitle.appendChild(title);\n    newTitle.appendChild(subtitle);\n    mainCont.appendChild(newDiv);\n  }\n}\nvar movies = document.createElement(\"div\");\nmovies.id = \"movies\";\ndocument.body.appendChild(movies);\nAddContent(\"movies\");\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;