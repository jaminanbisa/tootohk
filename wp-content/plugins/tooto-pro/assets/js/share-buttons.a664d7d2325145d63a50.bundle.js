/*! tooto-pro - v3.11.6 - 14-03-2023 */
"use strict";
(self["webpackChunktooto_pro"] = self["webpackChunktooto_pro"] || []).push([["share-buttons"],{

/***/ "../modules/share-buttons/assets/js/frontend/handlers/share-buttons.js":
/*!*****************************************************************************!*\
  !*** ../modules/share-buttons/assets/js/frontend/handlers/share-buttons.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = tootoModules.frontend.handlers.Base.extend({
  async onInit() {
    if (!this.isActive()) {
      return;
    }
    tootoModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    const elementSettings = this.getElementSettings(),
      classes = this.getSettings('classes'),
      isCustomURL = elementSettings.share_url && elementSettings.share_url.url,
      shareLinkSettings = {
        classPrefix: classes.shareLinkPrefix
      };
    if (isCustomURL) {
      shareLinkSettings.url = elementSettings.share_url.url;
    } else {
      shareLinkSettings.url = location.href;
      shareLinkSettings.title = tootoFrontend.config.post.title;
      shareLinkSettings.text = tootoFrontend.config.post.excerpt;
      shareLinkSettings.image = tootoFrontend.config.post.featuredImage;
    }

    /**
     * First check of the ShareLink is for detecting if the optimized mode is disabled and the library should be loaded dynamically.
     * Checking if the assetsLoader exist, in case that the library is not loaded due to Ad Blockers and not because the optimized mode is enabled.
     */
    if (!window.ShareLink && tootoFrontend.utils.assetsLoader) {
      await tootoFrontend.utils.assetsLoader.load('script', 'share-link');
    }

    /**
     * The following condition should remain regardless of the share-link dynamic loading.
     * Ad Blockers may block the share script. (/assets/lib/share-link/share-link.js).
     */
    if (!this.elements.$shareButton.shareLink) {
      return;
    }
    this.elements.$shareButton.shareLink(shareLinkSettings);
  },
  getDefaultSettings() {
    return {
      selectors: {
        shareButton: '.tooto-share-btn'
      },
      classes: {
        shareLinkPrefix: 'tooto-share-btn_'
      }
    };
  },
  getDefaultElements() {
    var selectors = this.getSettings('selectors');
    return {
      $shareButton: this.$element.find(selectors.shareButton)
    };
  },
  isActive() {
    return !tootoFrontend.isEditMode();
  }
});
exports["default"] = _default;

/***/ })

}]);
//# sourceMappingURL=share-buttons.a664d7d2325145d63a50.bundle.js.map