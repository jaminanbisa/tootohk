/*! tooto-pro - v3.4.1 - 01-09-2021 */
(self["webpackChunktooto_pro"] = self["webpackChunktooto_pro"] || []).push([["social"],{

/***/ "../modules/social/assets/js/frontend/handlers/facebook.js":
/*!*****************************************************************!*\
  !*** ../modules/social/assets/js/frontend/handlers/facebook.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class FacebookHandler extends tootoModules.frontend.handlers.Base {
  getConfig() {
    return tootoProFrontend.config.facebook_sdk;
  }

  setConfig(prop, value) {
    tootoProFrontend.config.facebook_sdk[prop] = value;
  }

  parse() {
    // On FB SDK is loaded, parse current element
    FB.XFBML.parse(this.$element[0]);
  }

  loadSDK() {
    const config = this.getConfig(); // Preventing from ajax request to be sent multiple times when loading multiple widgets

    if (config.isLoading || config.isLoaded) {
      return;
    }

    this.setConfig('isLoading', true);
    jQuery.ajax({
      url: 'https://connect.facebook.net/' + config.lang + '/sdk.js',
      dataType: 'script',
      cache: true,
      success: () => {
        FB.init({
          appId: config.app_id,
          version: 'v2.10',
          xfbml: false
        });
        this.setConfig('isLoaded', true);
        this.setConfig('isLoading', false);
        tootoFrontend.elements.$document.trigger('fb:sdk:loaded');
      }
    });
  }

  onInit(...args) {
    super.onInit(...args);
    this.loadSDK();
    const config = this.getConfig();

    if (config.isLoaded) {
      this.parse();
    } else {
      tootoFrontend.elements.$document.on('fb:sdk:loaded', () => this.parse());
    }
  }

}

exports.default = FacebookHandler;

/***/ })

}]);
//# sourceMappingURL=social.b17f5f1767e41333a1dc.bundle.js.map