/*! tooto - v3.11.5 - 14-03-2023 */
"use strict";
(self["webpackChunktooto"] = self["webpackChunktooto"] || []).push([["progress"],{

/***/ "../assets/dev/js/frontend/handlers/progress.js":
/*!******************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/progress.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class Progress extends tootoModules.frontend.handlers.Base {
  getDefaultSettings() {
    return {
      selectors: {
        progressNumber: '.tooto-progress-bar'
      }
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      $progressNumber: this.$element.find(selectors.progressNumber)
    };
  }
  onInit() {
    super.onInit();
    tootoFrontend.waypoint(this.elements.$progressNumber, () => {
      const $progressbar = this.elements.$progressNumber;
      $progressbar.css('width', $progressbar.data('max') + '%');
    });
  }
}
exports["default"] = Progress;

/***/ })

}]);
//# sourceMappingURL=progress.76cabc81514569f4de82.bundle.js.map