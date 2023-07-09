/*! tooto - v3.11.5 - 14-03-2023 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!****************************************************!*\
  !*** ../core/editor/assets/js/editor-loader-v2.js ***!
  \****************************************************/


var _window$__UNSTABLE__e;
window.__tootoEditorV1LoadingPromise = new Promise(function (resolve) {
  window.addEventListener('tooto/init', function () {
    resolve();
  }, {
    once: true
  });
});
window.tooto.start();
if (!((_window$__UNSTABLE__e = window.__UNSTABLE__tootoPackages) !== null && _window$__UNSTABLE__e !== void 0 && _window$__UNSTABLE__e.editor)) {
  throw new Error('The "@tooto/editor" package was not loaded.');
}
window.__UNSTABLE__tootoPackages.editor.init(document.getElementById('tooto-editor-wrapper-v2'));
/******/ })()
;
//# sourceMappingURL=editor-loader-v2.js.map