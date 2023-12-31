/*! tooto - v3.4.4 - 13-09-2021 */
(self["webpackChunktooto"] = self["webpackChunktooto"] || []).push([["alert"],{

/***/ "../assets/dev/js/frontend/handlers/alert.js":
/*!***************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/alert.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class Alert extends tootoModules.frontend.handlers.Base {
  getDefaultSettings() {
    return {
      selectors: {
        dismissButton: '.tooto-alert-dismiss'
      }
    };
  }

  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      $dismissButton: this.$element.find(selectors.dismissButton)
    };
  }

  bindEvents() {
    this.elements.$dismissButton.on('click', this.onDismissButtonClick.bind(this));
  }

  onDismissButtonClick() {
    this.$element.fadeOut();
  }

}

exports.default = Alert;

/***/ })

}]);
//# sourceMappingURL=alert.f04b9d16129bc8aa4cdc.bundle.js.map