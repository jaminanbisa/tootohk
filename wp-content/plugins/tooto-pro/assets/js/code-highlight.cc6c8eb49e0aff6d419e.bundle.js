/*! tooto-pro - v3.4.1 - 01-09-2021 */
(self["webpackChunktooto_pro"] = self["webpackChunktooto_pro"] || []).push([["code-highlight"],{

/***/ "../modules/code-highlight/assets/js/frontend/handler.js":
/*!***************************************************************!*\
  !*** ../modules/code-highlight/assets/js/frontend/handler.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class codeHighlightHandler extends tootoModules.frontend.handlers.Base {
  onInit(...args) {
    super.onInit(...args);
    Prism.highlightAllUnder(this.$element[0], false);
  }

  onElementChange() {
    // Handle the changes for "Word Wrap" feature
    Prism.highlightAllUnder(this.$element[0], false);
  }

}

exports.default = codeHighlightHandler;

/***/ })

}]);
//# sourceMappingURL=code-highlight.cc6c8eb49e0aff6d419e.bundle.js.map