/*! tooto-pro - v3.4.1 - 01-09-2021 */
(self["webpackChunktooto_pro"] = self["webpackChunktooto_pro"] || []).push([["nav-menu"],{

/***/ "../modules/nav-menu/assets/js/frontend/handlers/nav-menu.js":
/*!*******************************************************************!*\
  !*** ../modules/nav-menu/assets/js/frontend/handlers/nav-menu.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _default = tootoModules.frontend.handlers.Base.extend({
  stretchElement: null,

  getDefaultSettings() {
    return {
      selectors: {
        menu: '.tooto-nav-menu',
        anchorLink: '.tooto-nav-menu--main .tooto-item-anchor',
        dropdownMenu: '.tooto-nav-menu__container.tooto-nav-menu--dropdown',
        menuToggle: '.tooto-menu-toggle'
      }
    };
  },

  getDefaultElements() {
    var selectors = this.getSettings('selectors'),
        elements = {};
    elements.$menu = this.$element.find(selectors.menu);
    elements.$anchorLink = this.$element.find(selectors.anchorLink);
    elements.$dropdownMenu = this.$element.find(selectors.dropdownMenu);
    elements.$dropdownMenuFinalItems = elements.$dropdownMenu.find('.menu-item:not(.menu-item-has-children) > a');
    elements.$menuToggle = this.$element.find(selectors.menuToggle);
    elements.$links = elements.$dropdownMenu.find('a.tooto-item');
    return elements;
  },

  bindEvents() {
    if (!this.elements.$menu.length) {
      return;
    }

    this.elements.$menuToggle.on('click', this.toggleMenu.bind(this));

    if (this.getElementSettings('full_width')) {
      this.elements.$dropdownMenuFinalItems.on('click', this.toggleMenu.bind(this, false));
    }

    tootoFrontend.addListenerOnce(this.$element.data('model-cid'), 'resize', this.stretchMenu);
  },

  initStretchElement() {
    this.stretchElement = new tootoModules.frontend.tools.StretchElement({
      element: this.elements.$dropdownMenu
    });
  },

  toggleNavLinksTabIndex(enabled = true) {
    this.elements.$links.attr('tabindex', enabled ? 0 : -1);
  },

  toggleMenu(show) {
    var isDropdownVisible = this.elements.$menuToggle.hasClass('tooto-active');

    if ('boolean' !== typeof show) {
      show = !isDropdownVisible;
    }

    this.elements.$menuToggle.attr('aria-expanded', show);
    this.elements.$dropdownMenu.attr('aria-hidden', !show);
    this.elements.$menuToggle.toggleClass('tooto-active', show);
    this.toggleNavLinksTabIndex(show);

    if (show && this.getElementSettings('full_width')) {
      this.stretchElement.stretch();
    }
  },

  followMenuAnchors() {
    var self = this;
    self.elements.$anchorLink.each(function () {
      if (location.pathname === this.pathname && '' !== this.hash) {
        self.followMenuAnchor(jQuery(this));
      }
    });
  },

  followMenuAnchor($element) {
    const anchorSelector = $element[0].hash;
    let offset = -300,
        $anchor;

    try {
      // `decodeURIComponent` for UTF8 characters in the hash.
      $anchor = jQuery(decodeURIComponent(anchorSelector));
    } catch (e) {
      return;
    }

    if (!$anchor.length) {
      return;
    }

    if (!$anchor.hasClass('tooto-menu-anchor')) {
      var halfViewport = jQuery(window).height() / 2;
      offset = -$anchor.outerHeight() + halfViewport;
    }

    tootoFrontend.waypoint($anchor, function (direction) {
      if ('down' === direction) {
        $element.addClass('tooto-item-active');
      } else {
        $element.removeClass('tooto-item-active');
      }
    }, {
      offset: '50%',
      triggerOnce: false
    });
    tootoFrontend.waypoint($anchor, function (direction) {
      if ('down' === direction) {
        $element.removeClass('tooto-item-active');
      } else {
        $element.addClass('tooto-item-active');
      }
    }, {
      offset,
      triggerOnce: false
    });
  },

  stretchMenu() {
    if (this.getElementSettings('full_width')) {
      this.stretchElement.stretch();
      this.elements.$dropdownMenu.css('top', this.elements.$menuToggle.outerHeight());
    } else {
      this.stretchElement.reset();
    }
  },

  onInit() {
    tootoModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);

    if (!this.elements.$menu.length) {
      return;
    }

    const elementSettings = this.getElementSettings(),
          iconValue = elementSettings.submenu_icon.value;
    let subIndicatorsContent = '';

    if (iconValue) {
      // The value of iconValue can be either className inside the editor or a markup in the frontend.
      subIndicatorsContent = iconValue.indexOf('<') > -1 ? iconValue : `<i class="${iconValue}"></i>`;
    } // subIndicators param - Added for backwards compatibility:
    // If the old 'indicator' control value = 'none', the <span class="sub-arrow"> wrapper element is removed


    this.elements.$menu.smartmenus({
      subIndicators: '' !== subIndicatorsContent,
      subIndicatorsText: subIndicatorsContent,
      subIndicatorsPos: 'append',
      subMenusMaxWidth: '1000px'
    });
    this.initStretchElement();
    this.stretchMenu();

    if (!tootoFrontend.isEditMode()) {
      this.followMenuAnchors();
    }
  },

  onElementChange(propertyName) {
    if ('full_width' === propertyName) {
      this.stretchMenu();
    }
  }

});

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=nav-menu.e248eec66bc3d5587cf6.bundle.js.map