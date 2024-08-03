/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/cube3d.js":
/*!**************************!*\
  !*** ./assets/cube3d.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar colors = {\n  green: new three__WEBPACK_IMPORTED_MODULE_0__.Color(0x009b48),\n  red: new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xb90000),\n  blue: new three__WEBPACK_IMPORTED_MODULE_0__.Color(0x0045ad),\n  orange: new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xff5900),\n  white: new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xffffff),\n  yellow: new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xffd500),\n  inner: new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xd9d9d9)\n};\nvar materials = {\n  green: new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({\n    color: colors.green\n  }),\n  red: new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({\n    color: colors.red\n  }),\n  blue: new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({\n    color: colors.blue\n  }),\n  orange: new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({\n    color: colors.orange\n  }),\n  white: new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({\n    color: colors.white\n  }),\n  yellow: new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({\n    color: colors.yellow\n  }),\n  inner: new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({\n    color: colors.inner\n  })\n};\nvar piece_len = 2;\nvar piece_dist = 0.2;\nvar offset_x = -2.2;\nvar offset_y = 2.2;\nvar offset_z = 2.2;\nvar scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\nvar camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(30, innerWidth / innerHeight);\ncamera.position.set(10, 10, 25);\ncamera.lookAt(scene.position);\nvar renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n  antialias: true,\n  alpha: true\n});\nrenderer.setSize(innerWidth, innerHeight);\ndocument.body.appendChild(renderer.domElement);\nvar ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight('white', 3);\nscene.add(ambientLight);\nvar ULF_corner = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.inner, materials.orange, materials.white, materials.inner, materials.green, materials.inner]);\nULF_corner.position.set(offset_x, offset_y, offset_z);\nscene.add(ULF_corner);\nvar UF_edge = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.inner, materials.inner, materials.white, materials.inner, materials.green, materials.inner]);\nUF_edge.position.set(piece_len + piece_dist + offset_x, 0 + offset_y, 0 + offset_z);\nscene.add(UF_edge);\nvar URF_corner = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.red, materials.inner, materials.white, materials.inner, materials.green, materials.inner]);\nURF_corner.position.set(2 * (piece_len + piece_dist) + offset_x, 0 + offset_y, 0 + offset_z);\nscene.add(URF_corner);\nvar LF_edge = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.inner, materials.orange, materials.inner, materials.inner, materials.green, materials.inner]);\nLF_edge.position.set(0 + offset_x, -(piece_len + piece_dist) + offset_y, 0 + offset_z);\nscene.add(LF_edge);\nvar F_center = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.inner, materials.inner, materials.inner, materials.inner, materials.green, materials.inner]);\nF_center.position.set(piece_len + piece_dist + offset_x, -(piece_len + piece_dist) + offset_y, 0 + offset_z);\nscene.add(F_center);\nvar RF_edge = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.red, materials.inner, materials.inner, materials.inner, materials.green, materials.inner]);\nRF_edge.position.set(2 * (piece_len + piece_dist) + offset_x, -(piece_len + piece_dist) + offset_y, 0 + offset_z);\nscene.add(RF_edge);\nvar DLF_corner = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.inner, materials.orange, materials.inner, materials.yellow, materials.green, materials.inner]);\nDLF_corner.position.set(0 + offset_x, -(2 * (piece_len + piece_dist)) + offset_y, 0 + offset_z);\nscene.add(DLF_corner);\nvar DF_edge = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.inner, materials.inner, materials.inner, materials.yellow, materials.green, materials.inner]);\nDF_edge.position.set(piece_len + piece_dist + offset_x, -(2 * (piece_len + piece_dist)) + offset_y, 0 + offset_z);\nscene.add(DF_edge);\nvar DRF_corner = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.red, materials.inner, materials.inner, materials.yellow, materials.green, materials.inner]);\nDRF_corner.position.set(2 * (piece_len + piece_dist) + offset_x, -(2 * (piece_len + piece_dist)) + offset_y, 0 + offset_z);\nscene.add(DRF_corner);\nvar UL_edge = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.inner, materials.orange, materials.white, materials.inner, materials.inner, materials.inner]);\nUL_edge.position.set(0 + offset_x, 0 + offset_y, -(piece_len + piece_dist) + offset_z);\nscene.add(UL_edge);\nvar U_center = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.inner, materials.inner, materials.white, materials.inner, materials.inner, materials.inner]);\nU_center.position.set(piece_len + piece_dist + offset_x, 0 + offset_y, -(piece_len + piece_dist) + offset_z);\nscene.add(U_center);\nvar UR_edge = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.red, materials.inner, materials.white, materials.inner, materials.inner, materials.inner]);\nUR_edge.position.set(2 * (piece_len + piece_dist) + offset_x, 0 + offset_y, -(piece_len + piece_dist) + offset_z);\nscene.add(UR_edge);\nvar L_center = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.inner, materials.orange, materials.inner, materials.inner, materials.inner, materials.inner]);\nL_center.position.set(0 + offset_x, -(piece_len + piece_dist) + offset_y, -(piece_len + piece_dist) + offset_z);\nscene.add(L_center);\nvar R_center = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.red, materials.inner, materials.inner, materials.inner, materials.inner, materials.inner]);\nR_center.position.set(2 * (piece_len + piece_dist) + offset_x, -(piece_len + piece_dist) + offset_y, -(piece_len + piece_dist) + offset_z);\nscene.add(R_center);\nvar DL_edge = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.inner, materials.orange, materials.inner, materials.yellow, materials.inner, materials.inner]);\nDL_edge.position.set(0 + offset_x, -(2 * (piece_len + piece_dist)) + offset_y, -(piece_len + piece_dist) + offset_z);\nscene.add(DL_edge);\nvar D_center = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.inner, materials.inner, materials.inner, materials.yellow, materials.inner, materials.inner]);\nD_center.position.set(piece_len + piece_dist + offset_x, -(2 * (piece_len + piece_dist)) + offset_y, -(piece_len + piece_dist) + offset_z);\nscene.add(D_center);\nvar DR_edge = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.red, materials.inner, materials.inner, materials.yellow, materials.inner, materials.inner]);\nDR_edge.position.set(2 * (piece_len + piece_dist) + offset_x, -(2 * (piece_len + piece_dist)) + offset_y, -(piece_len + piece_dist) + offset_z);\nscene.add(DR_edge);\nvar ULB_corner = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.inner, materials.orange, materials.white, materials.inner, materials.inner, materials.blue]);\nULB_corner.position.set(0 + offset_x, 0 + offset_y, -(2 * (piece_len + piece_dist)) + offset_z);\nscene.add(ULB_corner);\nvar UB_edge = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.inner, materials.inner, materials.white, materials.inner, materials.inner, materials.blue]);\nUB_edge.position.set(piece_len + piece_dist + offset_x, 0 + offset_y, -(2 * (piece_len + piece_dist)) + offset_z);\nscene.add(UB_edge);\nvar URB_corner = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.red, materials.inner, materials.white, materials.inner, materials.inner, materials.blue]);\nURB_corner.position.set(2 * (piece_len + piece_dist) + offset_x, 0 + offset_y, -(2 * (piece_len + piece_dist)) + offset_z);\nscene.add(URB_corner);\nvar LB_edge = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.inner, materials.orange, materials.inner, materials.inner, materials.inner, materials.blue]);\nLB_edge.position.set(0 + offset_x, -(piece_len + piece_dist) + offset_y, -(2 * (piece_len + piece_dist)) + offset_z);\nscene.add(LB_edge);\nvar B_center = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.inner, materials.inner, materials.inner, materials.inner, materials.inner, materials.blue]);\nB_center.position.set(piece_len + piece_dist + offset_x, -(piece_len + piece_dist) + offset_y, -(2 * (piece_len + piece_dist)) + offset_z);\nscene.add(B_center);\nvar RB_edge = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.red, materials.inner, materials.inner, materials.inner, materials.inner, materials.blue]);\nRB_edge.position.set(2 * (piece_len + piece_dist) + offset_x, -(piece_len + piece_dist) + offset_y, -(2 * (piece_len + piece_dist)) + offset_z);\nscene.add(RB_edge);\nvar DLB_corner = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.inner, materials.orange, materials.inner, materials.yellow, materials.inner, materials.blue]);\nDLB_corner.position.set(0 + offset_x, -(2 * (piece_len + piece_dist)) + offset_y, -(2 * (piece_len + piece_dist)) + offset_z);\nscene.add(DLB_corner);\nvar DB_edge = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.inner, materials.inner, materials.inner, materials.yellow, materials.inner, materials.blue]);\nDB_edge.position.set(piece_len + piece_dist + offset_x, -(2 * (piece_len + piece_dist)) + offset_y, -(2 * (piece_len + piece_dist)) + offset_z);\nscene.add(DB_edge);\nvar DRB_corner = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(piece_len, piece_len, piece_len), [materials.red, materials.inner, materials.inner, materials.yellow, materials.inner, materials.blue]);\nDRB_corner.position.set(2 * (piece_len + piece_dist) + offset_x, -(2 * (piece_len + piece_dist)) + offset_y, -(2 * (piece_len + piece_dist)) + offset_z);\nscene.add(DRB_corner);\nvar pieces = [UB_edge, UF_edge, ULB_corner, ULF_corner, UL_edge, URB_corner, URF_corner, UR_edge, U_center, RB_edge, RF_edge, R_center, DB_edge, DF_edge, DLB_corner, DLF_corner, DL_edge, DRB_corner, DRF_corner, DR_edge, D_center, LB_edge, LF_edge, L_center, F_center, B_center];\nvar U_face = [];\nvar R_face = [];\nvar D_face = [];\nvar L_face = [];\nvar F_face = [];\nvar B_face = [];\nvar M_face = [];\nvar S_face = [];\nvar E_face = [];\nvar updateFaces = function updateFaces() {\n  var eps = 0.0001;\n  U_face = [];\n  R_face = [];\n  D_face = [];\n  L_face = [];\n  F_face = [];\n  B_face = [];\n  M_face = [];\n  S_face = [];\n  E_face = [];\n  for (var _i = 0, _pieces = pieces; _i < _pieces.length; _i++) {\n    var piece = _pieces[_i];\n    if (Math.abs(piece.position.y - offset_y) < eps) U_face.push(piece);\n    if (Math.abs(piece.position.y - (-(2 * (piece_len + piece_dist)) + offset_y)) < eps) D_face.push(piece);\n    if (Math.abs(piece.position.x - offset_x) < eps) L_face.push(piece);\n    if (Math.abs(piece.position.x - (2 * (piece_len + piece_dist) + offset_x)) < eps) R_face.push(piece);\n    if (Math.abs(piece.position.z - (-(2 * (piece_len + piece_dist)) + offset_z)) < eps) B_face.push(piece);\n    if (Math.abs(piece.position.z - offset_z) < eps) F_face.push(piece);\n    if (Math.abs(piece.position.x - (piece_len + piece_dist + offset_x)) < eps) M_face.push(piece);\n    if (Math.abs(piece.position.z - (-(piece_len + piece_dist) + offset_z)) < eps) S_face.push(piece);\n    if (Math.abs(piece.position.y - (-(piece_len + piece_dist) + offset_y)) < eps) E_face.push(piece);\n  }\n};\nvar move_R = function move_R(type) {\n  var group = new three__WEBPACK_IMPORTED_MODULE_0__.Group();\n  R_face.forEach(function (p) {\n    group.attach(p);\n  });\n  scene.add(group);\n  switch (type) {\n    case 0:\n      group.rotation.x = -Math.PI / 2;\n      break;\n    case 1:\n      group.rotation.x = Math.PI / 2;\n      break;\n    case 2:\n      group.rotation.x = Math.PI;\n      break;\n  }\n  R_face.forEach(function (p) {\n    scene.attach(p);\n  });\n  group.clear();\n  scene.remove(group);\n  updateFaces();\n};\nupdateFaces();\nmove_R(0);\nvar _loop = function loop() {\n  renderer.render(scene, camera);\n  requestAnimationFrame(_loop);\n};\n_loop();\nrenderer.render(scene, camera);\n\n//# sourceURL=webpack://alg-explorer/./assets/cube3d.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/cube3d.js");
/******/ 	
/******/ })()
;