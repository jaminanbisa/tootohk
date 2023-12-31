/*! tooto-pro - v3.11.6 - 14-03-2023 */
"use strict";
(self["webpackChunktooto_pro"] = self["webpackChunktooto_pro"] || []).push([["paypal-button"],{

/***/ "../modules/payments/assets/js/frontend/handlers/paypal-button.js":
/*!************************************************************************!*\
  !*** ../modules/payments/assets/js/frontend/handlers/paypal-button.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class PayPalHandler extends tootoModules.frontend.handlers.Base {
  getDefaultSettings() {
    return {
      selectors: {
        button: '.tooto-button.tooto-paypal-legacy',
        errors: '.tooto-message-danger'
      }
    };
  }
  getDefaultElements() {
    const settings = this.getSettings();
    return {
      wrapper: this.$element[0],
      button: this.$element[0].querySelector(settings.selectors.button),
      errors: this.$element[0].querySelectorAll(settings.selectors.errors)
    };
  }
  handleClick(event) {
    if (0 < this.elements.errors.length) {
      event.preventDefault();
      this.elements.errors.forEach(error => {
        error.classList.remove('tooto-hidden');
      });
    }
  }
  bindEvents() {
    this.elements.button.addEventListener('click', this.handleClick.bind(this));
  }
}
exports["default"] = PayPalHandler;

/***/ })

}]);
//# sourceMappingURL=paypal-button.404e42bdd9fd69769a7e.bundle.js.map