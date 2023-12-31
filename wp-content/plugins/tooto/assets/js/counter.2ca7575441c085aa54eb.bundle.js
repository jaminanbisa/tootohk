/*! tooto - v3.4.4 - 13-09-2021 */
(self["webpackChunktooto"] = self["webpackChunktooto"] || []).push([["counter"],{

/***/ "../assets/dev/js/frontend/handlers/counter.js":
/*!*****************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/counter.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class Counter extends tootoModules.frontend.handlers.Base {
  getDefaultSettings() {
    return {
      selectors: {
        counterNumber: '.tooto-counter-number'
      }
    };
  }

  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      $counterNumber: this.$element.find(selectors.counterNumber)
    };
  }

  onInit() {
    super.onInit();
    tootoFrontend.waypoint(this.elements.$counterNumber, () => {
      const data = this.elements.$counterNumber.data(),
            decimalDigits = data.toValue.toString().match(/\.(.*)/);

      if (decimalDigits) {
        data.rounding = decimalDigits[1].length;
      }

      this.elements.$counterNumber.numerator(data);
    });
  }

}

exports.default = Counter;

/***/ })

}]);
//# sourceMappingURL=counter.2ca7575441c085aa54eb.bundle.js.map