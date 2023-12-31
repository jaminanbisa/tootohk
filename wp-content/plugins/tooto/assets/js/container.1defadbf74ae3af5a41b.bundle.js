/*! tooto - v3.11.5 - 14-03-2023 */
"use strict";
(self["webpackChunktooto"] = self["webpackChunktooto"] || []).push([["container"],{

/***/ "../assets/dev/js/frontend/handlers/container/handles-position.js":
/*!************************************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/container/handles-position.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
/**
 * TODO: Try to merge with `section/handles-position.js` and create a generic solution using `.tooto-element`.
 */
class HandlesPosition extends tootoModules.frontend.handlers.Base {
  isActive() {
    return tootoFrontend.isEditMode();
  }
  isFirstContainer() {
    return this.$element[0] === document.querySelector('.tooto-edit-mode .e-con:first-child');
  }
  isOverflowHidden() {
    return 'hidden' === this.$element.css('overflow');
  }
  getOffset() {
    if ('body' === tooto.config.document.container) {
      return this.$element.offset().top;
    }
    const $container = jQuery(tooto.config.document.container);
    return this.$element.offset().top - $container.offset().top;
  }
  setHandlesPosition() {
    const document = tooto.documents.getCurrent();
    if (!document || !document.container.isEditable()) {
      return;
    }
    const isOverflowHidden = this.isOverflowHidden();
    if (!isOverflowHidden && !this.isFirstContainer()) {
      return;
    }
    const offset = isOverflowHidden ? 0 : this.getOffset(),
      $handlesElement = this.$element.find('> .tooto-element-overlay > .tooto-editor-section-settings'),
      insideHandleClass = 'e-handles-inside';
    if (offset < 25) {
      this.$element.addClass(insideHandleClass);
      if (offset < -5) {
        $handlesElement.css('top', -offset);
      } else {
        $handlesElement.css('top', '');
      }
    } else {
      this.$element.removeClass(insideHandleClass);
    }
  }
  onInit() {
    if (!this.isActive()) {
      return;
    }
    this.setHandlesPosition();
    this.$element.on('mouseenter', this.setHandlesPosition.bind(this));
  }
}
exports["default"] = HandlesPosition;

/***/ }),

/***/ "../assets/dev/js/frontend/handlers/container/shapes.js":
/*!**************************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/container/shapes.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
// TODO: Copied from `section/shapes.js`.
class Shapes extends tootoModules.frontend.handlers.Base {
  getDefaultSettings() {
    const contentWidth = this.getElementSettings('content_width'),
      container = 'boxed' === contentWidth ? '> .e-con-inner > .tooto-shape-%s' : '> .tooto-shape-%s';
    return {
      selectors: {
        container
      },
      svgURL: tootoFrontend.config.urls.assets + 'shapes/'
    };
  }
  getDefaultElements() {
    const elements = {},
      selectors = this.getSettings('selectors');
    elements.$topContainer = this.$element.find(selectors.container.replace('%s', 'top'));
    elements.$bottomContainer = this.$element.find(selectors.container.replace('%s', 'bottom'));
    return elements;
  }
  isActive() {
    return tootoFrontend.isEditMode();
  }
  getSvgURL(shapeType, fileName) {
    let svgURL = this.getSettings('svgURL') + fileName + '.svg';
    if (tooto.config.additional_shapes && shapeType in tooto.config.additional_shapes) {
      svgURL = tooto.config.additional_shapes[shapeType];
      if (-1 < fileName.indexOf('-negative')) {
        svgURL = svgURL.replace('.svg', '-negative.svg');
      }
    }
    return svgURL;
  }
  buildSVG(side) {
    const baseSettingKey = 'shape_divider_' + side,
      shapeType = this.getElementSettings(baseSettingKey),
      $svgContainer = this.elements['$' + side + 'Container'];
    $svgContainer.attr('data-shape', shapeType);
    if (!shapeType) {
      $svgContainer.empty(); // Shape-divider set to 'none'
      return;
    }
    let fileName = shapeType;
    if (this.getElementSettings(baseSettingKey + '_negative')) {
      fileName += '-negative';
    }
    const svgURL = this.getSvgURL(shapeType, fileName);
    jQuery.get(svgURL, data => {
      $svgContainer.empty().append(data.childNodes[0]);
    });
    this.setNegative(side);
  }
  setNegative(side) {
    this.elements['$' + side + 'Container'].attr('data-negative', !!this.getElementSettings('shape_divider_' + side + '_negative'));
  }
  onInit() {
    if (!this.isActive(this.getSettings())) {
      return;
    }
    super.onInit(...arguments);
    ['top', 'bottom'].forEach(side => {
      if (this.getElementSettings('shape_divider_' + side)) {
        this.buildSVG(side);
      }
    });
  }
  onElementChange(propertyName) {
    const shapeChange = propertyName.match(/^shape_divider_(top|bottom)$/);
    if (shapeChange) {
      this.buildSVG(shapeChange[1]);
      return;
    }
    const negativeChange = propertyName.match(/^shape_divider_(top|bottom)_negative$/);
    if (negativeChange) {
      this.buildSVG(negativeChange[1]);
      this.setNegative(negativeChange[1]);
    }
  }
}
exports["default"] = Shapes;

/***/ })

}]);
//# sourceMappingURL=container.1defadbf74ae3af5a41b.bundle.js.map