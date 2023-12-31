/*! tooto - v3.11.5 - 14-03-2023 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../assets/dev/js/admin/maintenance-mode.js":
/*!**************************************************!*\
  !*** ../assets/dev/js/admin/maintenance-mode.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


module.exports = tootoModules.ViewModule.extend({
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        modeSelect: '.tooto_maintenance_mode_mode select',
        maintenanceModeTable: '#tab-maintenance_mode table',
        maintenanceModeDescriptions: '.tooto-maintenance-mode-description',
        excludeModeSelect: '.tooto_maintenance_mode_exclude_mode select',
        excludeRolesArea: '.tooto_maintenance_mode_exclude_roles',
        templateSelect: '.tooto_maintenance_mode_template_id select',
        editTemplateButton: '.tooto-edit-template',
        maintenanceModeError: '.tooto-maintenance-mode-error'
      },
      classes: {
        isEnabled: 'tooto-maintenance-mode-is-enabled'
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var elements = {},
      selectors = this.getSettings('selectors');
    elements.$modeSelect = jQuery(selectors.modeSelect);
    elements.$maintenanceModeTable = elements.$modeSelect.parents(selectors.maintenanceModeTable);
    elements.$excludeModeSelect = elements.$maintenanceModeTable.find(selectors.excludeModeSelect);
    elements.$excludeRolesArea = elements.$maintenanceModeTable.find(selectors.excludeRolesArea);
    elements.$templateSelect = elements.$maintenanceModeTable.find(selectors.templateSelect);
    elements.$editTemplateButton = elements.$maintenanceModeTable.find(selectors.editTemplateButton);
    elements.$maintenanceModeDescriptions = elements.$maintenanceModeTable.find(selectors.maintenanceModeDescriptions);
    elements.$maintenanceModeError = elements.$maintenanceModeTable.find(selectors.maintenanceModeError);
    return elements;
  },
  handleModeSelectChange: function handleModeSelectChange() {
    var settings = this.getSettings(),
      elements = this.elements;
    elements.$maintenanceModeTable.toggleClass(settings.classes.isEnabled, !!elements.$modeSelect.val());
    elements.$maintenanceModeDescriptions.hide();
    elements.$maintenanceModeDescriptions.filter('[data-value="' + elements.$modeSelect.val() + '"]').show();
  },
  handleExcludeModeSelectChange: function handleExcludeModeSelectChange() {
    var elements = this.elements;
    elements.$excludeRolesArea.toggle('custom' === elements.$excludeModeSelect.val());
  },
  handleTemplateSelectChange: function handleTemplateSelectChange() {
    var elements = this.elements;
    var templateID = elements.$templateSelect.val();
    if (!templateID) {
      elements.$editTemplateButton.hide();
      elements.$maintenanceModeError.show();
      return;
    }
    var editUrl = tootoAdmin.config.home_url + '?p=' + templateID + '&tooto';
    elements.$editTemplateButton.prop('href', editUrl).show();
    elements.$maintenanceModeError.hide();
  },
  bindEvents: function bindEvents() {
    var elements = this.elements;
    elements.$modeSelect.on('change', this.handleModeSelectChange.bind(this));
    elements.$excludeModeSelect.on('change', this.handleExcludeModeSelectChange.bind(this));
    elements.$templateSelect.on('change', this.handleTemplateSelectChange.bind(this));
  },
  onAdminInit: function onAdminInit() {
    this.handleModeSelectChange();
    this.handleExcludeModeSelectChange();
    this.handleTemplateSelectChange();
  },
  onInit: function onInit() {
    tootoModules.ViewModule.prototype.onInit.apply(this, arguments);
    tootoCommon.elements.$window.on('tooto/admin/init', this.onAdminInit);
  }
});

/***/ }),

/***/ "../assets/dev/js/admin/menu-handler.js":
/*!**********************************************!*\
  !*** ../assets/dev/js/admin/menu-handler.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "../node_modules/@babel/runtime/helpers/get.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var MenuHandler = /*#__PURE__*/function (_tootoModules$Vie) {
  (0, _inherits2.default)(MenuHandler, _tootoModules$Vie);
  var _super = _createSuper(MenuHandler);
  function MenuHandler() {
    (0, _classCallCheck2.default)(this, MenuHandler);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(MenuHandler, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          currentSubmenuItems: '#adminmenu .current'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var settings = this.getSettings();
      return {
        $currentSubmenuItems: jQuery(settings.selectors.currentSubmenuItems),
        $adminPageMenuLink: jQuery("a[href=\"".concat(settings.path, "\"]"))
      };
    }

    // This method highlights the currently visited submenu item for the slug provided as an argument to this handler.
    // This method also accepts a jQuery instance of a custom submenu item to highlight. If provided, the provided
    // item will be the one highlighted.
  }, {
    key: "highlightSubMenuItem",
    value: function highlightSubMenuItem() {
      var $element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var $submenuItem = $element || this.elements.$adminPageMenuLink;
      if (this.elements.$currentSubmenuItems.length) {
        this.elements.$currentSubmenuItems.removeClass('current');
      }
      $submenuItem.addClass('current');

      // Need to add the 'current' class to the link element's parent `<li>` element as well.
      $submenuItem.parent().addClass('current');
    }
  }, {
    key: "highlightTopLevelMenuItem",
    value: function highlightTopLevelMenuItem($elementToHighlight) {
      var $elementToRemove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var activeClasses = 'wp-has-current-submenu wp-menu-open current';
      $elementToHighlight.parent().addClass(activeClasses).removeClass('wp-not-current-submenu');
      if ($elementToRemove) {
        $elementToRemove.removeClass(activeClasses);
      }
    }
  }, {
    key: "onInit",
    value: function onInit() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(MenuHandler.prototype), "onInit", this).call(this);
      var settings = this.getSettings();
      if (window.location.href.includes(settings.path)) {
        this.highlightSubMenuItem();
      }
    }
  }]);
  return MenuHandler;
}(tootoModules.ViewModule);
exports["default"] = MenuHandler;

/***/ }),

/***/ "../assets/dev/js/admin/new-template/template-controls.js":
/*!****************************************************************!*\
  !*** ../assets/dev/js/admin/new-template/template-controls.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var TemplateControls = /*#__PURE__*/function () {
  function TemplateControls() {
    (0, _classCallCheck2.default)(this, TemplateControls);
  }
  (0, _createClass2.default)(TemplateControls, [{
    key: "setDynamicControlsVisibility",
    value: function setDynamicControlsVisibility(lookupControlIdPrefix, controls) {
      if (undefined === controls) {
        return;
      }
      var controlsArray = Object.entries(controls);
      for (var _i = 0, _controlsArray = controlsArray; _i < _controlsArray.length; _i++) {
        var _controlsArray$_i = (0, _slicedToArray2.default)(_controlsArray[_i], 2),
          controlId = _controlsArray$_i[0],
          controlSettings = _controlsArray$_i[1];
        this.setVisibilityForControl(lookupControlIdPrefix, controlSettings, controlId);
      }
    }
  }, {
    key: "setVisibilityForControl",
    value: function setVisibilityForControl(lookupControlIdPrefix, controlSettings, controlId) {
      var _controlSettings$cond,
        _this = this;
      var conditions = Object.entries((_controlSettings$cond = controlSettings.conditions) !== null && _controlSettings$cond !== void 0 ? _controlSettings$cond : {});
      conditions.forEach(function (condition) {
        _this.changeVisibilityBasedOnCondition(lookupControlIdPrefix, condition, controlId);
      });
    }
  }, {
    key: "changeVisibilityBasedOnCondition",
    value: function changeVisibilityBasedOnCondition(lookupControlIdPrefix, condition, controlId) {
      var _condition = (0, _slicedToArray2.default)(condition, 2),
        conditionKey = _condition[0],
        conditionValue = _condition[1];
      var targetControlWrapper = document.getElementById(lookupControlIdPrefix + controlId + '__wrapper');
      var lookupControl = document.getElementById(lookupControlIdPrefix + conditionKey);
      targetControlWrapper.classList.toggle('tooto-hidden', !lookupControl || conditionValue !== lookupControl.value);
    }
  }]);
  return TemplateControls;
}();
exports["default"] = TemplateControls;

/***/ }),

/***/ "../assets/dev/js/editor/utils/files-upload-handler.js":
/*!*************************************************************!*\
  !*** ../assets/dev/js/editor/utils/files-upload-handler.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var FilesUploadHandler = /*#__PURE__*/function () {
  function FilesUploadHandler() {
    (0, _classCallCheck2.default)(this, FilesUploadHandler);
  }
  (0, _createClass2.default)(FilesUploadHandler, null, [{
    key: "isUploadEnabled",
    value: function isUploadEnabled(mediaType) {
      var unfilteredFilesTypes = ['svg', 'application/json'];
      if (!unfilteredFilesTypes.includes(mediaType)) {
        return true;
      }
      return tootoCommon.config.filesUpload.unfilteredFiles;
    }
  }, {
    key: "setUploadTypeCaller",
    value: function setUploadTypeCaller(frame) {
      frame.uploader.uploader.param('uploadTypeCaller', 'tooto-wp-media-upload');
    }
  }, {
    key: "getUnfilteredFilesNotEnabledDialog",
    value: function getUnfilteredFilesNotEnabledDialog(callback) {
      var onConfirm = function onConfirm() {
        tootoCommon.ajax.addRequest('enable_unfiltered_files_upload', {}, true);
        tootoCommon.config.filesUpload.unfilteredFiles = true;
        callback();
      };
      return tooto.helpers.getSimpleDialog('e-enable-unfiltered-files-dialog', __('Enable Unfiltered File Uploads', 'tooto'), __('Before you enable unfiltered files upload, note that such files include a security risk. tooto does run a process to remove possible malicious code, but there is still risk involved when using such files.', 'tooto'), __('Enable', 'tooto'), onConfirm);
    }
  }, {
    key: "getUnfilteredFilesNotEnabledImportTemplateDialog",
    value: function getUnfilteredFilesNotEnabledImportTemplateDialog(callback) {
      return tootoCommon.dialogsManager.createWidget('confirm', {
        id: 'e-enable-unfiltered-files-dialog-import-template',
        headerMessage: __('Enable Unfiltered File Uploads', 'tooto'),
        message: __('Before you enable unfiltered files upload, note that such files include a security risk. tooto does run a process to remove possible malicious code, but there is still risk involved when using such files.', 'tooto') + '<br /><br />' + __('If you do not enable uploading unfiltered files, any SVG or JSON (including lottie) files used in the uploaded template will not be imported.', 'tooto'),
        position: {
          my: 'center center',
          at: 'center center'
        },
        strings: {
          confirm: __('Enable and Import', 'tooto'),
          cancel: __('Import Without Enabling', 'tooto')
        },
        onConfirm: function onConfirm() {
          tootoCommon.ajax.addRequest('enable_unfiltered_files_upload', {
            success: function success() {
              // This utility is used in both the admin and the Editor.
              tootoCommon.config.filesUpload.unfilteredFiles = true;
              callback();
            }
          }, true);
        },
        onCancel: function onCancel() {
          return callback();
        }
      });
    }
  }]);
  return FilesUploadHandler;
}();
exports["default"] = FilesUploadHandler;

/***/ }),

/***/ "../assets/dev/js/utils/events.js":
/*!****************************************!*\
  !*** ../assets/dev/js/utils/events.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.Events = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var Events = /*#__PURE__*/function () {
  function Events() {
    (0, _classCallCheck2.default)(this, Events);
  }
  (0, _createClass2.default)(Events, null, [{
    key: "dispatch",
    value:
    /**
     * Dispatch an tooto event.
     *
     * Will dispatch both native event & jQuery event (as BC).
     * By default, `bcEvent` is `null`.
     *
     * @param {Object}      context - The context that will dispatch the event.
     * @param {string}      event   - Event to dispatch.
     * @param {*}           data    - Data to pass to the event, default to `null`.
     * @param {string|null} bcEvent - BC event to dispatch, default to `null`.
     *
     * @return {void}
     */
    function dispatch(context, event) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var bcEvent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      // Make sure to use the native context if it's a jQuery instance.
      context = context instanceof jQuery ? context[0] : context;

      // Dispatch the BC event only if exists.
      if (bcEvent) {
        context.dispatchEvent(new CustomEvent(bcEvent, {
          detail: data
        }));
      }

      // jQuery's `.on()` listens also to native custom events, so there is no need
      // to dispatch also a jQuery event.
      context.dispatchEvent(new CustomEvent(event, {
        detail: data
      }));
    }
  }]);
  return Events;
}();
exports.Events = Events;
var _default = Events;
exports["default"] = _default;

/***/ }),

/***/ "../core/common/assets/js/utils/environment.js":
/*!*****************************************************!*\
  !*** ../core/common/assets/js/utils/environment.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var matchUserAgent = function matchUserAgent(UserAgentStr) {
    return userAgent.indexOf(UserAgentStr) >= 0;
  },
  userAgent = navigator.userAgent,
  // Solution influenced by https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser

  // Opera 8.0+
  isOpera = !!window.opr && !!opr.addons || !!window.opera || matchUserAgent(' OPR/'),
  // Firefox 1.0+
  isFirefox = matchUserAgent('Firefox'),
  // Safari 3.0+ "[object HTMLElementConstructor]"
  isSafari = /^((?!chrome|android).)*safari/i.test(userAgent) || /constructor/i.test(window.HTMLElement) || function (p) {
    return '[object SafariRemoteNotification]' === p.toString();
  }(!window.safari || typeof safari !== 'undefined' && safari.pushNotification),
  // Internet Explorer 6-11
  isIE = /Trident|MSIE/.test(userAgent) && ( /* @cc_on!@*/ false || !!document.documentMode),
  // Edge 20+
  isEdge = !isIE && !!window.StyleMedia || matchUserAgent('Edg'),
  // Google Chrome (Not accurate)
  isChrome = !!window.chrome && matchUserAgent('Chrome') && !(isEdge || isOpera),
  // Blink engine
  isBlink = matchUserAgent('Chrome') && !!window.CSS,
  // Apple Webkit engine
  isAppleWebkit = matchUserAgent('AppleWebKit') && !isBlink,
  environment = {
    appleWebkit: isAppleWebkit,
    blink: isBlink,
    chrome: isChrome,
    edge: isEdge,
    firefox: isFirefox,
    ie: isIE,
    mac: matchUserAgent('Macintosh'),
    opera: isOpera,
    safari: isSafari,
    webkit: matchUserAgent('AppleWebKit')
  };
var _default = environment;
exports["default"] = _default;

/***/ }),

/***/ "../core/experiments/assets/js/admin/behaviors/experiments-dependency.js":
/*!*******************************************************************************!*\
  !*** ../core/experiments/assets/js/admin/behaviors/experiments-dependency.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../node_modules/@babel/runtime/helpers/toConsumableArray.js"));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));
var STATE_ACTIVE = 'active';
var STATE_INACTIVE = 'inactive';
var STATE_DEFAULT = 'default';
var ExperimentsDependency = /*#__PURE__*/function () {
  function ExperimentsDependency(_ref) {
    var selects = _ref.selects,
      submit = _ref.submit;
    (0, _classCallCheck2.default)(this, ExperimentsDependency);
    (0, _defineProperty2.default)(this, "elements", {});
    this.elements = {
      /**
       * @type {HTMLSelectElement[]}
       */
      selects: selects,
      /**
       * @type {HTMLInputElement}
       */
      submit: submit
    };
  }
  (0, _createClass2.default)(ExperimentsDependency, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;
      this.elements.selects.forEach(function (select) {
        select.addEventListener('change', function (e) {
          return _this.onExperimentStateChange(e);
        });
      });
    }
  }, {
    key: "onExperimentStateChange",
    value: function onExperimentStateChange(e) {
      var experimentId = e.currentTarget.dataset.experimentId,
        experimentNewState = this.getExperimentActualState(experimentId);
      switch (experimentNewState) {
        case STATE_ACTIVE:
          if (this.shouldShowDependenciesDialog(experimentId)) {
            this.showDependenciesDialog(experimentId);
          }
          break;
        case STATE_INACTIVE:
          this.deactivateDependantExperiments(experimentId);
          break;
        default:
          break;
      }
    }
  }, {
    key: "getExperimentData",
    value: function getExperimentData(experimentId) {
      return tootoAdminConfig.experiments[experimentId];
    }
  }, {
    key: "getExperimentDependencies",
    value: function getExperimentDependencies(experimentId) {
      var _this2 = this;
      return this.getExperimentData(experimentId).dependencies.map(function (dependencyId) {
        return _this2.getExperimentData(dependencyId);
      });
    }
  }, {
    key: "getExperimentSelect",
    value: function getExperimentSelect(experimentId) {
      return this.elements.selects.find(function (select) {
        return select.matches("[data-experiment-id=\"".concat(experimentId, "\"]"));
      });
    }
  }, {
    key: "setExperimentState",
    value: function setExperimentState(experimentId, state) {
      this.getExperimentSelect(experimentId).value = state;
    }
  }, {
    key: "getExperimentActualState",
    value: function getExperimentActualState(experimentId) {
      var state = this.getExperimentSelect(experimentId).value;
      if (state !== STATE_DEFAULT) {
        return state;
      }

      // Normalize the "default" state to the actual state value.
      return this.isExperimentActiveByDefault(experimentId) ? STATE_ACTIVE : STATE_INACTIVE;
    }
  }, {
    key: "isExperimentActive",
    value: function isExperimentActive(experimentId) {
      return this.getExperimentActualState(experimentId) === STATE_ACTIVE;
    }
  }, {
    key: "isExperimentActiveByDefault",
    value: function isExperimentActiveByDefault(experimentId) {
      return this.getExperimentData(experimentId).default === STATE_ACTIVE;
    }
  }, {
    key: "areAllDependenciesActive",
    value: function areAllDependenciesActive(dependencies) {
      var _this3 = this;
      return dependencies.every(function (dependency) {
        return _this3.isExperimentActive(dependency.name);
      });
    }
  }, {
    key: "deactivateDependantExperiments",
    value: function deactivateDependantExperiments(experimentId) {
      var _this4 = this;
      Object.entries(tootoAdminConfig.experiments).forEach(function (_ref2) {
        var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
          id = _ref3[0],
          experimentData = _ref3[1];
        var isDependant = experimentData.dependencies.includes(experimentId);
        if (isDependant) {
          _this4.setExperimentState(id, STATE_INACTIVE);
        }
      });
    }
  }, {
    key: "shouldShowDependenciesDialog",
    value: function shouldShowDependenciesDialog(experimentId) {
      var dependencies = this.getExperimentDependencies(experimentId);
      return !this.areAllDependenciesActive(dependencies);
    }
  }, {
    key: "showDependenciesDialog",
    value: function showDependenciesDialog(experimentId) {
      var _this5 = this;
      var experiment = this.getExperimentData(experimentId),
        dependencies = this.getExperimentDependencies(experimentId);
      var dependenciesList = this.joinDepenednciesNames(dependencies.map(function (d) {
        return d.title;
      }), ', ', ' & ');

      // Translators: %1$s: Experiment title, %2$s: Experiment dependencies list
      var message = __('In order to use %1$s, first you need to activate %2$s.', 'tooto').replace('%1$s', "<strong>".concat(experiment.title, "</strong>")).replace('%2$s', "<strong>".concat(dependenciesList, "</strong>"));
      tootoCommon.dialogsManager.createWidget('confirm', {
        id: 'e-experiments-dependency-dialog',
        headerMessage: __('First, activate another experiment.', 'tooto'),
        message: message,
        position: {
          my: 'center center',
          at: 'center center'
        },
        strings: {
          confirm: __('Activate', 'tooto'),
          cancel: __('Cancel', 'tooto')
        },
        hide: {
          onOutsideClick: false,
          onBackgroundClick: false,
          onEscKeyPress: false
        },
        onConfirm: function onConfirm() {
          dependencies.forEach(function (dependency) {
            _this5.setExperimentState(dependency.name, STATE_ACTIVE);
          });
          _this5.elements.submit.click();
        },
        onCancel: function onCancel() {
          _this5.setExperimentState(experimentId, STATE_INACTIVE);
        }
      }).show();
    }
  }, {
    key: "joinDepenednciesNames",
    value: function joinDepenednciesNames(array, glue) {
      var finalGlue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      if ('' === finalGlue) {
        return array.join(glue);
      }
      if (!array.length) {
        return '';
      }
      if (1 === array.length) {
        return array[0];
      }
      var clone = (0, _toConsumableArray2.default)(array),
        lastItem = clone.pop();
      return clone.join(glue) + finalGlue + lastItem;
    }
  }]);
  return ExperimentsDependency;
}();
exports["default"] = ExperimentsDependency;

/***/ }),

/***/ "../core/experiments/assets/js/admin/module.js":
/*!*****************************************************!*\
  !*** ../core/experiments/assets/js/admin/module.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "../node_modules/@babel/runtime/helpers/get.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _experimentsDependency = _interopRequireDefault(__webpack_require__(/*! ./behaviors/experiments-dependency */ "../core/experiments/assets/js/admin/behaviors/experiments-dependency.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ExperimentsModule = /*#__PURE__*/function (_tootoModules$Vie) {
  (0, _inherits2.default)(ExperimentsModule, _tootoModules$Vie);
  var _super = _createSuper(ExperimentsModule);
  function ExperimentsModule() {
    (0, _classCallCheck2.default)(this, ExperimentsModule);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(ExperimentsModule, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          experimentIndicators: '.e-experiment__title__indicator',
          experimentForm: '#tooto-settings-form',
          experimentSelects: '.e-experiment__select',
          experimentsButtons: '.e-experiment__button'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var _this$getSettings = this.getSettings(),
        selectors = _this$getSettings.selectors;
      return {
        $experimentIndicators: jQuery(selectors.experimentIndicators),
        $experimentForm: jQuery(selectors.experimentForm),
        $experimentSelects: jQuery(selectors.experimentSelects),
        $experimentsButtons: jQuery(selectors.experimentsButtons)
      };
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;
      this.elements.$experimentsButtons.on('click', function (event) {
        return _this.onExperimentsButtonsClick(event);
      });
    }
  }, {
    key: "onExperimentsButtonsClick",
    value: function onExperimentsButtonsClick(event) {
      var submitButton = jQuery(event.currentTarget);
      this.elements.$experimentSelects.val(submitButton.val());
      this.elements.$experimentForm.find('#submit').trigger('click');
    }
  }, {
    key: "addTipsy",
    value: function addTipsy($element) {
      $element.tipsy({
        gravity: 's',
        offset: 8,
        title: function title() {
          return this.getAttribute('data-tooltip');
        }
      });
    }
  }, {
    key: "addIndicatorsTooltips",
    value: function addIndicatorsTooltips() {
      var _this2 = this;
      this.elements.$experimentIndicators.each(function (index, experimentIndicator) {
        return _this2.addTipsy(jQuery(experimentIndicator));
      });
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _this3 = this;
      (0, _get2.default)((0, _getPrototypeOf2.default)(ExperimentsModule.prototype), "onInit", this).call(this);
      this.experimentsDependency = new _experimentsDependency.default({
        selects: this.elements.$experimentSelects.toArray(),
        submit: this.elements.$experimentForm.find('#submit').get(0)
      });
      this.experimentsDependency.bindEvents();
      if (this.elements.$experimentIndicators.length) {
        import( /* webpackIgnore: true */"".concat(tootoCommon.config.urls.assets, "lib/tipsy/tipsy.min.js?ver=1.0.0")).then(function () {
          return _this3.addIndicatorsTooltips();
        });
      }
    }
  }]);
  return ExperimentsModule;
}(tootoModules.ViewModule);
exports["default"] = ExperimentsModule;

/***/ }),

/***/ "../modules/landing-pages/assets/js/admin/landing-pages.js":
/*!*****************************************************************!*\
  !*** ../modules/landing-pages/assets/js/admin/landing-pages.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "../node_modules/@babel/runtime/helpers/get.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _menuHandler = _interopRequireDefault(__webpack_require__(/*! tooto-admin/menu-handler */ "../assets/dev/js/admin/menu-handler.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var LandingPagesHandler = /*#__PURE__*/function (_AdminMenuHandler) {
  (0, _inherits2.default)(LandingPagesHandler, _AdminMenuHandler);
  var _super = _createSuper(LandingPagesHandler);
  function LandingPagesHandler() {
    (0, _classCallCheck2.default)(this, LandingPagesHandler);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(LandingPagesHandler, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      var pageName = 'e-landing-page',
        adminMenuSelectors = {
          // The escaping is done because jQuery requires it for selectors.
          landingPagesTablePage: 'a[href="edit.php?post_type=' + pageName + '"]',
          landingPagesAddNewPage: 'a[href="edit.php?post_type=tooto_library&page=' + pageName + '"]'
        };
      return {
        selectors: {
          addButton: '.page-title-action:first',
          pagesMenuItemAndLink: '#menu-pages, #menu-pages > a',
          landingPagesMenuItem: "".concat(adminMenuSelectors.landingPagesTablePage, ", ").concat(adminMenuSelectors.landingPagesAddNewPage),
          templatesMenuItem: '.menu-icon-tooto_library'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings('selectors'),
        elements = (0, _get2.default)((0, _getPrototypeOf2.default)(LandingPagesHandler.prototype), "getDefaultElements", this).call(this);
      elements.$landingPagesMenuItem = jQuery(selectors.landingPagesMenuItem);
      elements.$templatesMenuItem = jQuery(selectors.templatesMenuItem);
      elements.$pagesMenuItemAndLink = jQuery(selectors.pagesMenuItemAndLink);
      return elements;
    }
  }, {
    key: "onInit",
    value: function onInit() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(LandingPagesHandler.prototype), "onInit", this).call(this);
      var settings = this.getSettings(),
        isLandingPagesTablePage = !!window.location.href.includes(settings.paths.landingPagesTablePage),
        isLandingPagesTrashPage = !!window.location.href.includes(settings.paths.landingPagesTrashPage),
        isLandingPagesCreateYourFirstPage = !!window.location.href.includes(settings.paths.landingPagesAddNewPage);

      // If the current page is a Landing Pages Page (the Posts Table page, "Create Your First.." page, or a native
      // WordPress dashboard page edit screen when using WordPress' Classic Editor).
      if (isLandingPagesTablePage || isLandingPagesTrashPage || isLandingPagesCreateYourFirstPage || settings.isLandingPageAdminEdit) {
        // Make sure the active admin top level menu item is 'Templates', and not 'Pages'.
        this.highlightTopLevelMenuItem(this.elements.$templatesMenuItem, this.elements.$pagesMenuItemAndLink);
        this.highlightSubMenuItem(this.elements.$landingPagesMenuItem);

        // Overwrite the 'Add New' button at the top of the page to open in tooto with the library module open.
        jQuery(settings.selectors.addButton).attr('href', tootoAdminConfig.urls.addNewLandingPageUrl);
      }
    }
  }]);
  return LandingPagesHandler;
}(_menuHandler.default);
exports["default"] = LandingPagesHandler;

/***/ }),

/***/ "../modules/landing-pages/assets/js/admin/module.js":
/*!**********************************************************!*\
  !*** ../modules/landing-pages/assets/js/admin/module.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _landingPages = _interopRequireDefault(__webpack_require__(/*! ./landing-pages */ "../modules/landing-pages/assets/js/admin/landing-pages.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var _default = /*#__PURE__*/function (_tootoModules$Mod) {
  (0, _inherits2.default)(_default, _tootoModules$Mod);
  var _super = _createSuper(_default);
  function _default() {
    var _this;
    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    tootoCommon.elements.$window.on('tooto/admin/init', function () {
      _this.runHandler();
    });
    return _this;
  }
  (0, _createClass2.default)(_default, [{
    key: "runHandler",
    value: function runHandler() {
      var _tootoAdmin$confi, _tootoAdmin$confi2;
      var pageName = 'e-landing-page',
        paths = {
          landingPagesTablePage: 'edit.php?post_type=' + pageName,
          landingPagesAddNewPage: 'edit.php?post_type=tooto_library&page=' + pageName,
          landingPagesTrashPage: 'edit.php?post_status=trash&post_type=' + pageName
        },
        args = {
          path: (_tootoAdmin$confi = tootoAdmin.config.landingPages) !== null && _tootoAdmin$confi !== void 0 && _tootoAdmin$confi.landingPagesHasPages ? paths.landingPagesTablePage : paths.landingPagesAddNewPage,
          isLandingPageAdminEdit: (_tootoAdmin$confi2 = tootoAdmin.config.landingPages) === null || _tootoAdmin$confi2 === void 0 ? void 0 : _tootoAdmin$confi2.isLandingPageAdminEdit,
          paths: paths
        };

      // This class modifies elements in the WordPress admin that are rendered "wrong" by the WordPress core
      // and could not be modified in the backend.
      new _landingPages.default(args);
    }
  }]);
  return _default;
}(tootoModules.Module);
exports["default"] = _default;

/***/ }),

/***/ "@wordpress/i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = wp.i18n;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \******************************************************************/
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \****************************************************************/
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \***********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/createClass.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "../node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "../node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/get.js":
/*!*****************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/get.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var superPropBase = __webpack_require__(/*! ./superPropBase.js */ "../node_modules/@babel/runtime/helpers/superPropBase.js");
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _get.apply(this, arguments);
}
module.exports = _get, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \****************************************************************/
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/inherits.js":
/*!**********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/inherits.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "../node_modules/@babel/runtime/helpers/setPrototypeOf.js");
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \*****************************************************************/
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \*****************************************************************/
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \*******************************************************************/
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "../node_modules/@babel/runtime/helpers/typeof.js")["default"]);
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \****************************************************************/
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js");
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "../node_modules/@babel/runtime/helpers/nonIterableRest.js");
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/superPropBase.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "../node_modules/@babel/runtime/helpers/iterableToArray.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "../node_modules/@babel/runtime/helpers/nonIterableSpread.js");
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "../node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "../node_modules/@babel/runtime/helpers/typeof.js")["default"]);
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "../node_modules/@babel/runtime/helpers/toPrimitive.js");
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/typeof.js":
/*!********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************!*\
  !*** ../assets/dev/js/admin/admin.js ***!
  \***************************************/
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js"));
var _module = _interopRequireDefault(__webpack_require__(/*! tooto/modules/landing-pages/assets/js/admin/module */ "../modules/landing-pages/assets/js/admin/module.js"));
var _module2 = _interopRequireDefault(__webpack_require__(/*! tooto/core/experiments/assets/js/admin/module */ "../core/experiments/assets/js/admin/module.js"));
var _environment = _interopRequireDefault(__webpack_require__(/*! ../../../../core/common/assets/js/utils/environment */ "../core/common/assets/js/utils/environment.js"));
var _events = _interopRequireDefault(__webpack_require__(/*! tooto-utils/events */ "../assets/dev/js/utils/events.js"));
var _filesUploadHandler = _interopRequireDefault(__webpack_require__(/*! ../editor/utils/files-upload-handler */ "../assets/dev/js/editor/utils/files-upload-handler.js"));
var _templateControls = _interopRequireDefault(__webpack_require__(/*! ./new-template/template-controls.js */ "../assets/dev/js/admin/new-template/template-controls.js"));
(function ($) {
  var tootoAdmin = tootoModules.ViewModule.extend({
    maintenanceMode: null,
    config: tootoAdminConfig,
    getDefaultElements: function getDefaultElements() {
      var elements = {
        $switchMode: $('#tooto-switch-mode'),
        $goToEditLink: $('#tooto-go-to-edit-page-link'),
        $switchModeInput: $('#tooto-switch-mode-input'),
        $switchModeButton: $('#tooto-switch-mode-button'),
        $tootoLoader: $('.tooto-loader'),
        $builderEditor: $('#tooto-editor'),
        $importButton: $('#tooto-import-template-trigger'),
        $importNowButton: $('#e-import-template-action'),
        $importArea: $('#tooto-import-template-area'),
        $importForm: $('#tooto-import-template-form'),
        $importFormFileInput: $('#tooto-import-template-form input[type="file"]'),
        $settingsForm: $('#tooto-settings-form'),
        $settingsTabsWrapper: $('#tooto-settings-tabs-wrapper'),
        $menuGetHelpLink: $('a[href="admin.php?page=go_knowledge_base_site"]'),
        $menuGoProLink: $('a[href="admin.php?page=go_tooto_pro"]'),
        $reMigrateGlobalsButton: $('.tooto-re-migrate-globals-button')
      };
      elements.$settingsFormPages = elements.$settingsForm.find('.tooto-settings-form-page');
      elements.$activeSettingsPage = elements.$settingsFormPages.filter('.tooto-active');
      elements.$settingsTabs = elements.$settingsTabsWrapper.children();
      elements.$activeSettingsTab = elements.$settingsTabs.filter('.nav-tab-active');
      return elements;
    },
    toggleStatus: function toggleStatus() {
      var istootoMode = this.istootoMode();
      tootoCommon.elements.$body.toggleClass('tooto-editor-active', istootoMode).toggleClass('tooto-editor-inactive', !istootoMode);
    },
    bindEvents: function bindEvents() {
      var self = this;
      self.elements.$switchModeButton.on('click', function (event) {
        event.preventDefault();
        if (self.istootoMode()) {
          tootoCommon.dialogsManager.createWidget('confirm', {
            message: __('Please note that you are switching to WordPress default editor. Your current layout, design and content might break.', 'tooto'),
            headerMessage: __('Back to WordPress Editor', 'tooto'),
            strings: {
              confirm: __('Continue', 'tooto'),
              cancel: __('Cancel', 'tooto')
            },
            defaultOption: 'confirm',
            onConfirm: function onConfirm() {
              self.elements.$switchModeInput.val('');
              self.toggleStatus();
            }
          }).show();
        } else {
          self.elements.$switchModeInput.val(true);
          var $wpTitle = $('#title');
          if (!$wpTitle.val()) {
            $wpTitle.val('tooto #' + $('#post_ID').val());
          }
          if (wp.autosave) {
            wp.autosave.server.triggerSave();
          }
          self.animateLoader();
          $(document).on('heartbeat-tick.autosave', function () {
            tootoCommon.elements.$window.off('beforeunload.edit-post');
            location.href = self.elements.$goToEditLink.attr('href');
          });
          self.toggleStatus();
        }
      });
      self.elements.$goToEditLink.on('click', function () {
        self.animateLoader();
      });
      $('.e-notice--dismissible').on('click', '.e-notice__dismiss, .e-notice-dismiss', function (event) {
        event.preventDefault();
        var $wrapperElm = $(this).closest('.e-notice--dismissible');
        $.post(ajaxurl, {
          action: 'tooto_set_admin_notice_viewed',
          notice_id: $wrapperElm.data('notice_id')
        });
        $wrapperElm.fadeTo(100, 0, function () {
          $wrapperElm.slideUp(100, function () {
            $wrapperElm.remove();
          });
        });
      });
      $('#tooto-clear-cache-button').on('click', function (event) {
        event.preventDefault();
        var $thisButton = $(this);
        $thisButton.removeClass('success').addClass('loading');
        $.post(ajaxurl, {
          action: 'tooto_clear_cache',
          _nonce: $thisButton.data('nonce')
        }).done(function () {
          $thisButton.removeClass('loading').addClass('success');
        });
      });
      $('#tooto-library-sync-button').on('click', function (event) {
        event.preventDefault();
        var $thisButton = $(this);
        $thisButton.removeClass('success').addClass('loading');
        $.post(ajaxurl, {
          action: 'tooto_reset_library',
          _nonce: $thisButton.data('nonce')
        }).done(function () {
          $thisButton.removeClass('loading').addClass('success');
        });
      });
      $('#tooto-recreate-kit-button').on('click', function (event) {
        event.preventDefault();
        var $thisButton = $(this);
        $thisButton.removeClass('success error').addClass('loading').next('.e-recreate-kit-error-message').remove();
        $.post(ajaxurl, {
          action: 'tooto_recreate_kit',
          _nonce: $thisButton.data('nonce')
        }).done(function () {
          $thisButton.removeClass('loading').addClass('success');
        }).fail(function (_ref) {
          var _responseJSON$data;
          var responseJSON = _ref.responseJSON;
          $thisButton.removeClass('loading').addClass('error');
          if ((_responseJSON$data = responseJSON.data) !== null && _responseJSON$data !== void 0 && _responseJSON$data.message) {
            $thisButton.after("<div class=\"e-recreate-kit-error-message\">".concat(responseJSON.data.message, "</div>"));
          }
        });
      });
      $('#tooto-replace-url-button').on('click', function (event) {
        event.preventDefault();
        var $this = $(this),
          $tr = $this.parents('tr'),
          $from = $tr.find('[name="from"]'),
          $to = $tr.find('[name="to"]');
        $this.removeClass('success').addClass('loading');
        $.post(ajaxurl, {
          action: 'tooto_replace_url',
          from: $from.val(),
          to: $to.val(),
          _nonce: $this.data('nonce')
        }).done(function (response) {
          $this.removeClass('loading');
          if (response.success) {
            $this.addClass('success');
          }
          tootoCommon.dialogsManager.createWidget('alert', {
            message: response.data
          }).show();
        });
      });
      $('#tooto_upgrade_fa_button').on('click', function (event) {
        event.preventDefault();
        var $updateButton = $(this);
        $updateButton.addClass('loading');
        tootoCommon.dialogsManager.createWidget('confirm', {
          id: 'confirm_fa_migration_admin_modal',
          message: __('I understand that by upgrading to Font Awesome 5,', 'tooto') + '<br>' + __('I acknowledge that some changes may affect my website and that this action cannot be undone.', 'tooto'),
          headerMessage: __('Font Awesome 5 Migration', 'tooto'),
          strings: {
            confirm: __('Continue', 'tooto'),
            cancel: __('Cancel', 'tooto')
          },
          defaultOption: 'confirm',
          onConfirm: function onConfirm() {
            $updateButton.removeClass('error').addClass('loading');
            var _$updateButton$data = $updateButton.data(),
              _nonce = _$updateButton$data._nonce,
              action = _$updateButton$data.action,
              redirectUrl = _$updateButton$data.redirectUrl;
            $.post(ajaxurl, {
              action: action,
              _nonce: _nonce
            }).done(function (response) {
              $updateButton.removeClass('loading').addClass('success');
              var messageElement = document.createElement('p');
              messageElement.appendChild(document.createTextNode(response.data.message));
              $('#tooto_upgrade_fa_button').parent().append(messageElement);
              if (redirectUrl) {
                location.href = decodeURIComponent(redirectUrl);
                return;
              }
              history.go(-1);
            }).fail(function () {
              $updateButton.removeClass('loading').addClass('error');
            });
          },
          onCancel: function onCancel() {
            $updateButton.removeClass('loading').addClass('error');
          }
        }).show();
      });
      self.elements.$settingsTabs.on({
        click: function click(event) {
          event.preventDefault();
          event.currentTarget.focus(); // Safari does not focus the tab automatically
        },
        focus: function focus() {
          // Using focus event to enable navigation by tab key
          var hrefWithoutHash = location.href.replace(/#.*/, '');
          history.pushState({}, '', hrefWithoutHash + this.hash);
          self.goToSettingsTabFromHash();
        }
      });
      $('select.tooto-rollback-select').on('change', function () {
        var $this = $(this),
          $rollbackButton = $this.next('.tooto-rollback-button'),
          placeholderText = $rollbackButton.data('placeholder-text'),
          placeholderUrl = $rollbackButton.data('placeholder-url');
        $rollbackButton.html(placeholderText.replace('{VERSION}', $this.val()));
        $rollbackButton.attr('href', placeholderUrl.replace('VERSION', $this.val()));
      }).trigger('change');
      $('.tooto-rollback-button').on('click', function (event) {
        event.preventDefault();
        var $this = $(this);
        tootoCommon.dialogsManager.createWidget('confirm', {
          headerMessage: __('Rollback to Previous Version', 'tooto'),
          message: __('Are you sure you want to reinstall previous version?', 'tooto'),
          strings: {
            confirm: __('Continue', 'tooto'),
            cancel: __('Cancel', 'tooto')
          },
          onConfirm: function onConfirm() {
            $this.addClass('loading');
            location.href = $this.attr('href');
          }
        }).show();
      });
      self.elements.$reMigrateGlobalsButton.on('click', function (event) {
        event.preventDefault();
        var $this = $(event.currentTarget);
        tootoCommon.dialogsManager.createWidget('confirm', {
          headerMessage: __('Migrate to v3.0', 'tooto'),
          message: __('Please note that this process will revert all changes made to Global Colors and Fonts since upgrading to v3.x.', 'tooto'),
          strings: {
            confirm: __('Continue', 'tooto'),
            cancel: __('Cancel', 'tooto')
          },
          onConfirm: function onConfirm() {
            $this.removeClass('success').addClass('loading');
            tootoCommon.ajax.addRequest('re_migrate_globals', {
              success: function success() {
                return $this.removeClass('loading').addClass('success');
              }
            });
          }
        }).show();
      });
      $('.tooto_css_print_method select').on('change', function () {
        var $descriptions = $('.tooto-css-print-method-description');
        $descriptions.hide();
        $descriptions.filter('[data-value="' + $(this).val() + '"]').show();
      }).trigger('change');
      $('.tooto_google_font select').on('change', function () {
        $('.tooto_font_display').toggle('1' === $(this).val());
      }).trigger('change');
    },
    onInit: function onInit() {
      tootoModules.ViewModule.prototype.onInit.apply(this, arguments);
      this.initTemplatesImport();
      this.initMaintenanceMode();
      this.goToSettingsTabFromHash();
      this.openLinksInNewTab();
      this.addUserAgentClasses();
      this.roleManager.init();
      if (tootoCommon.config.experimentalFeatures['landing-pages']) {
        new _module.default();
      }
      this.templateControls = new _templateControls.default();
      new _module2.default();
    },
    addUserAgentClasses: function addUserAgentClasses() {
      var body = document.querySelector('body');
      Object.entries(_environment.default).forEach(function (_ref2) {
        var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
          key = _ref3[0],
          value = _ref3[1];
        if (!value) {
          return;
        }
        body.classList.add('e--ua-' + key);
      });
    },
    /**
     * Open Links in New Tab
     *
     * Adds a `target="_blank"` attribute to the Admin Dashboard menu items specified in the `elements` array,
     * if the elements are found in the DOM. The items in the `elements` array should be jQuery instances.
     *
     * @since 3.6.0
     */
    openLinksInNewTab: function openLinksInNewTab() {
      var elements = [this.elements.$menuGetHelpLink, this.elements.$menuGoProLink];
      elements.forEach(function ($element) {
        // Only add the attribute if the element is found.
        if ($element.length) {
          $element.attr('target', '_blank');
        }
      });
    },
    initTemplatesImport: function initTemplatesImport() {
      if (!tootoCommon.elements.$body.hasClass('post-type-tooto_library')) {
        return;
      }
      var self = this,
        $importForm = self.elements.$importForm,
        $importButton = self.elements.$importButton,
        $importArea = self.elements.$importArea,
        $importNowButton = self.elements.$importNowButton,
        $importFormFileInput = self.elements.$importFormFileInput;
      self.elements.$formAnchor = $('.wp-header-end');
      $('#wpbody-content').find('.page-title-action').last().after($importButton);
      self.elements.$formAnchor.after($importArea);
      $importButton.on('click', function () {
        $('#tooto-import-template-area').toggle();
      });
      $importForm.on('submit', function (event) {
        $importNowButton[0].disabled = true;
        $importNowButton[0].value = __('Importing...', 'tooto');
        if ($importFormFileInput[0].files.length && !tootoCommon.config.filesUpload.unfilteredFiles) {
          event.preventDefault();
          var enableUnfilteredFilesModal = _filesUploadHandler.default.getUnfilteredFilesNotEnabledImportTemplateDialog(function () {
            $importForm.trigger('submit');
          });
          enableUnfilteredFilesModal.show();
        }
      });
    },
    initMaintenanceMode: function initMaintenanceMode() {
      var MaintenanceMode = __webpack_require__(/*! tooto-admin/maintenance-mode */ "../assets/dev/js/admin/maintenance-mode.js");
      this.maintenanceMode = new MaintenanceMode();
    },
    istootoMode: function istootoMode() {
      return !!this.elements.$switchModeInput.val();
    },
    animateLoader: function animateLoader() {
      this.elements.$goToEditLink.addClass('tooto-animate');
    },
    goToSettingsTabFromHash: function goToSettingsTabFromHash() {
      var hash = location.hash.slice(1);
      if (hash) {
        this.goToSettingsTab(hash);
      }
    },
    goToSettingsTab: function goToSettingsTab(tabName) {
      var $pages = this.elements.$settingsFormPages;
      if (!$pages.length) {
        return;
      }
      var $activePage = $pages.filter('#' + tabName);
      this.elements.$activeSettingsPage.removeClass('tooto-active');
      this.elements.$activeSettingsTab.removeClass('nav-tab-active');
      var $activeTab = this.elements.$settingsTabs.filter('#tooto-settings-' + tabName);
      $activePage.addClass('tooto-active');
      $activeTab.addClass('nav-tab-active');
      this.elements.$settingsForm.attr('action', 'options.php#' + tabName);
      this.elements.$activeSettingsPage = $activePage;
      this.elements.$activeSettingsTab = $activeTab;
    },
    translate: function translate(stringKey, templateArgs) {
      return tootoCommon.translate(stringKey, null, templateArgs, this.config.i18n);
    },
    roleManager: {
      selectors: {
        body: 'tooto-role-manager',
        row: '.tooto-role-row',
        label: '.tooto-role-label',
        excludedIndicator: '.tooto-role-excluded-indicator',
        excludedField: 'input[name="tooto_exclude_user_roles[]"]',
        controlsContainer: '.tooto-role-controls',
        toggleHandle: '.tooto-role-toggle',
        arrowUp: 'dashicons-arrow-up',
        arrowDown: 'dashicons-arrow-down'
      },
      toggle: function toggle($trigger) {
        var self = this,
          $row = $trigger.closest(self.selectors.row),
          $toggleHandleIcon = $row.find(self.selectors.toggleHandle).find('.dashicons'),
          $controls = $row.find(self.selectors.controlsContainer);
        $controls.toggleClass('hidden');
        if ($controls.hasClass('hidden')) {
          $toggleHandleIcon.removeClass(self.selectors.arrowUp).addClass(self.selectors.arrowDown);
        } else {
          $toggleHandleIcon.removeClass(self.selectors.arrowDown).addClass(self.selectors.arrowUp);
        }
        self.updateLabel($row);
      },
      updateLabel: function updateLabel($row) {
        var self = this,
          $indicator = $row.find(self.selectors.excludedIndicator),
          excluded = $row.find(self.selectors.excludedField).is(':checked');
        if (excluded) {
          $indicator.html($indicator.data('excluded-label'));
        } else {
          $indicator.html('');
        }
        self.setAdvancedState($row, excluded);
      },
      setAdvancedState: function setAdvancedState($row, state) {
        var self = this,
          $controls = $row.find('input[type="checkbox"]').not(self.selectors.excludedField);
        $controls.each(function (index, input) {
          $(input).prop('disabled', state);
        });
      },
      bind: function bind() {
        var self = this;
        $(document).on('click', self.selectors.label + ',' + self.selectors.toggleHandle, function (event) {
          event.stopPropagation();
          event.preventDefault();
          self.toggle($(this));
        }).on('change', self.selectors.excludedField, function () {
          self.updateLabel($(this).closest(self.selectors.row));
        });
      },
      init: function init() {
        var self = this;
        if (!$('body[class*="' + self.selectors.body + '"]').length) {
          return;
        }
        self.bind();
        $(self.selectors.row).each(function (index, row) {
          self.updateLabel($(row));
        });
      }
    }
  });
  $(function () {
    window.tootoAdmin = new tootoAdmin();
    _events.default.dispatch(tootoCommon.elements.$window, 'tooto/admin/init');
  });
})(jQuery);
})();

/******/ })()
;
//# sourceMappingURL=admin.js.map