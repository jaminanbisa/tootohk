/*! tooto-pro - v3.4.1 - 01-09-2021 */
(self["webpackChunktooto_pro"] = self["webpackChunktooto_pro"] || []).push([["popup"],{

/***/ "../modules/popup/assets/js/frontend/handlers/forms-action.js":
/*!********************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/handlers/forms-action.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _default = tootoModules.frontend.handlers.Base.extend({
  getDefaultSettings() {
    return {
      selectors: {
        form: '.tooto-form'
      }
    };
  },

  getDefaultElements() {
    var selectors = this.getSettings('selectors'),
        elements = {};
    elements.$form = this.$element.find(selectors.form);
    return elements;
  },

  bindEvents() {
    this.elements.$form.on('submit_success', this.handleFormAction);
  },

  handleFormAction(event, response) {
    if ('undefined' === typeof response.data.popup) {
      return;
    }

    const popupSettings = response.data.popup;

    if ('open' === popupSettings.action) {
      return tootoProFrontend.modules.popup.showPopup(popupSettings);
    }

    setTimeout(() => {
      return tootoProFrontend.modules.popup.closePopup(popupSettings, event);
    }, 1000);
  }

});

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=popup.5ddbdd46f21fc221d760.bundle.js.map