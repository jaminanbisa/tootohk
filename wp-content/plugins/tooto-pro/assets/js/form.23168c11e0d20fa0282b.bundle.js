/*! tooto-pro - v3.4.1 - 01-09-2021 */
(self["webpackChunktooto_pro"] = self["webpackChunktooto_pro"] || []).push([["form"],{

/***/ "../modules/forms/assets/js/frontend/handlers/fields/data-time-field-base.js":
/*!***********************************************************************************!*\
  !*** ../modules/forms/assets/js/frontend/handlers/fields/data-time-field-base.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class DataTimeFieldBase extends tootoModules.frontend.handlers.Base {
  getDefaultSettings() {
    return {
      selectors: {
        fields: this.getFieldsSelector()
      },
      classes: {
        useNative: 'tooto-use-native'
      }
    };
  }

  getDefaultElements() {
    const {
      selectors
    } = this.getDefaultSettings();
    return {
      $fields: this.$element.find(selectors.fields)
    };
  }

  addPicker(element) {
    const {
      classes
    } = this.getDefaultSettings(),
          $element = jQuery(element);

    if ($element.hasClass(classes.useNative)) {
      return;
    }

    element.flatpickr(this.getPickerOptions(element));
  }

  onInit(...args) {
    super.onInit(...args);
    this.elements.$fields.each((index, element) => this.addPicker(element));
  }

}

exports.default = DataTimeFieldBase;

/***/ }),

/***/ "../modules/forms/assets/js/frontend/handlers/fields/date.js":
/*!*******************************************************************!*\
  !*** ../modules/forms/assets/js/frontend/handlers/fields/date.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _dataTimeFieldBase = _interopRequireDefault(__webpack_require__(/*! ./data-time-field-base */ "../modules/forms/assets/js/frontend/handlers/fields/data-time-field-base.js"));

class DateField extends _dataTimeFieldBase.default {
  getFieldsSelector() {
    return '.tooto-date-field';
  }

  getPickerOptions(element) {
    const $element = jQuery(element);
    return {
      minDate: $element.attr('min') || null,
      maxDate: $element.attr('max') || null,
      allowInput: true
    };
  }

}

exports.default = DateField;

/***/ }),

/***/ "../modules/forms/assets/js/frontend/handlers/fields/time.js":
/*!*******************************************************************!*\
  !*** ../modules/forms/assets/js/frontend/handlers/fields/time.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _dataTimeFieldBase = _interopRequireDefault(__webpack_require__(/*! ./data-time-field-base */ "../modules/forms/assets/js/frontend/handlers/fields/data-time-field-base.js"));

class TimeField extends _dataTimeFieldBase.default {
  getFieldsSelector() {
    return '.tooto-time-field';
  }

  getPickerOptions() {
    return {
      noCalendar: true,
      enableTime: true,
      allowInput: true
    };
  }

}

exports.default = TimeField;

/***/ }),

/***/ "../modules/forms/assets/js/frontend/handlers/form-redirect.js":
/*!*********************************************************************!*\
  !*** ../modules/forms/assets/js/frontend/handlers/form-redirect.js ***!
  \*********************************************************************/
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
    this.elements.$form.on('form_destruct', this.handleSubmit);
  },

  handleSubmit(event, response) {
    if ('undefined' !== typeof response.data.redirect_url) {
      location.href = response.data.redirect_url;
    }
  }

});

exports.default = _default;

/***/ }),

/***/ "../modules/forms/assets/js/frontend/handlers/form-sender.js":
/*!*******************************************************************!*\
  !*** ../modules/forms/assets/js/frontend/handlers/form-sender.js ***!
  \*******************************************************************/
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
        form: '.tooto-form',
        submitButton: '[type="submit"]'
      },
      action: 'tooto_pro_forms_send_form',
      ajaxUrl: tootoProFrontend.config.ajaxurl
    };
  },

  getDefaultElements() {
    const selectors = this.getSettings('selectors'),
          elements = {};
    elements.$form = this.$element.find(selectors.form);
    elements.$submitButton = elements.$form.find(selectors.submitButton);
    return elements;
  },

  bindEvents() {
    this.elements.$form.on('submit', this.handleSubmit);
    const $fileInput = this.elements.$form.find('input[type=file]');

    if ($fileInput.length) {
      $fileInput.on('change', this.validateFileSize);
    }
  },

  validateFileSize(event) {
    const $field = jQuery(event.currentTarget),
          files = $field[0].files;

    if (!files.length) {
      return;
    }

    const maxSize = parseInt($field.attr('data-maxsize')) * 1024 * 1024,
          maxSizeMessage = $field.attr('data-maxsize-message');
    const filesArray = Array.prototype.slice.call(files);
    filesArray.forEach(file => {
      if (maxSize < file.size) {
        $field.parent().addClass('tooto-error').append('<span class="tooto-message tooto-message-danger tooto-help-inline tooto-form-help-inline" role="alert">' + maxSizeMessage + '</span>').find(':input').attr('aria-invalid', 'true');
        this.elements.$form.trigger('error');
      }
    });
  },

  beforeSend() {
    const $form = this.elements.$form;
    $form.animate({
      opacity: '0.45'
    }, 500).addClass('tooto-form-waiting');
    $form.find('.tooto-message').remove();
    $form.find('.tooto-error').removeClass('tooto-error');
    $form.find('div.tooto-field-group').removeClass('error').find('span.tooto-form-help-inline').remove().end().find(':input').attr('aria-invalid', 'false');
    this.elements.$submitButton.attr('disabled', 'disabled').find('> span').prepend('<span class="tooto-button-text tooto-form-spinner"><i class="fa fa-spinner fa-spin"></i>&nbsp;</span>');
  },

  getFormData() {
    const formData = new FormData(this.elements.$form[0]);
    formData.append('action', this.getSettings('action'));
    formData.append('referrer', location.toString());
    return formData;
  },

  onSuccess(response) {
    const $form = this.elements.$form;
    this.elements.$submitButton.removeAttr('disabled').find('.tooto-form-spinner').remove();
    $form.animate({
      opacity: '1'
    }, 100).removeClass('tooto-form-waiting');

    if (!response.success) {
      if (response.data.errors) {
        jQuery.each(response.data.errors, function (key, title) {
          $form.find('#form-field-' + key).parent().addClass('tooto-error').append('<span class="tooto-message tooto-message-danger tooto-help-inline tooto-form-help-inline" role="alert">' + title + '</span>').find(':input').attr('aria-invalid', 'true');
        });
        $form.trigger('error');
      }

      $form.append('<div class="tooto-message tooto-message-danger" role="alert">' + response.data.message + '</div>');
    } else {
      $form.trigger('submit_success', response.data); // For actions like redirect page

      $form.trigger('form_destruct', response.data);
      $form.trigger('reset');

      if ('undefined' !== typeof response.data.message && '' !== response.data.message) {
        $form.append('<div class="tooto-message tooto-message-success" role="alert">' + response.data.message + '</div>');
      }
    }
  },

  onError(xhr, desc) {
    const $form = this.elements.$form;
    $form.append('<div class="tooto-message tooto-message-danger" role="alert">' + desc + '</div>');
    this.elements.$submitButton.html(this.elements.$submitButton.text()).removeAttr('disabled');
    $form.animate({
      opacity: '1'
    }, 100).removeClass('tooto-form-waiting');
    $form.trigger('error');
  },

  handleSubmit(event) {
    const self = this,
          $form = this.elements.$form;
    event.preventDefault();

    if ($form.hasClass('tooto-form-waiting')) {
      return false;
    }

    this.beforeSend();
    jQuery.ajax({
      url: self.getSettings('ajaxUrl'),
      type: 'POST',
      dataType: 'json',
      data: self.getFormData(),
      processData: false,
      contentType: false,
      success: self.onSuccess,
      error: self.onError
    });
  }

});

exports.default = _default;

/***/ }),

/***/ "../modules/forms/assets/js/frontend/handlers/form-steps.js":
/*!******************************************************************!*\
  !*** ../modules/forms/assets/js/frontend/handlers/form-steps.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class FormSteps extends tootoModules.frontend.handlers.Base {
  getDefaultSettings() {
    return {
      selectors: {
        form: '.tooto-form',
        fieldsWrapper: '.tooto-form-fields-wrapper',
        fieldGroup: '.tooto-field-group',
        stepWrapper: '.tooto-field-type-step',
        stepField: '.e-field-step',
        submitWrapper: '.tooto-field-type-submit',
        submitButton: '[type="submit"]',
        buttons: '.e-form__buttons',
        buttonWrapper: '.e-form__buttons__wrapper',
        button: '.e-form__buttons__wrapper__button',
        indicator: '.e-form__indicators__indicator',
        indicatorProgress: '.e-form__indicators__indicator__progress',
        indicatorProgressMeter: '.e-form__indicators__indicator__progress__meter',
        formHelpInline: '.tooto-form-help-inline'
      },
      classes: {
        hidden: 'tooto-hidden',
        column: 'tooto-column',
        fieldGroup: 'tooto-field-group',
        tootoButton: 'tooto-button',
        step: 'e-form__step',
        buttons: 'e-form__buttons',
        buttonWrapper: 'e-form__buttons__wrapper',
        button: 'e-form__buttons__wrapper__button',
        indicators: 'e-form__indicators',
        indicator: 'e-form__indicators__indicator',
        indicatorIcon: 'e-form__indicators__indicator__icon',
        indicatorNumber: 'e-form__indicators__indicator__number',
        indicatorLabel: 'e-form__indicators__indicator__label',
        indicatorProgress: 'e-form__indicators__indicator__progress',
        indicatorProgressMeter: 'e-form__indicators__indicator__progress__meter',
        indicatorSeparator: 'e-form__indicators__indicator__separator',
        indicatorInactive: 'e-form__indicators__indicator--state-inactive',
        indicatorActive: 'e-form__indicators__indicator--state-active',
        indicatorCompleted: 'e-form__indicators__indicator--state-completed',
        indicatorShapeCircle: 'e-form__indicators__indicator--shape-circle',
        indicatorShapeSquare: 'e-form__indicators__indicator--shape-square',
        indicatorShapeRounded: 'e-form__indicators__indicator--shape-rounded',
        indicatorShapeNone: 'e-form__indicators__indicator--shape-none'
      }
    };
  }

  getDefaultElements() {
    const {
      selectors
    } = this.getSettings(),
          elements = {
      $form: this.$element.find(selectors.form)
    };
    elements.$fieldsWrapper = elements.$form.children(selectors.fieldsWrapper);
    elements.$stepWrapper = elements.$fieldsWrapper.children(selectors.stepWrapper);
    elements.$stepField = elements.$stepWrapper.children(selectors.stepField);
    elements.$fieldGroup = elements.$fieldsWrapper.children(selectors.fieldGroup);
    elements.$submitWrapper = elements.$fieldsWrapper.children(selectors.submitWrapper);
    elements.$submitButton = elements.$submitWrapper.children(selectors.submitButton);
    return elements;
  }

  onInit(...args) {
    super.onInit(...args);

    if (!this.isStepsExist()) {
      return;
    }

    this.data = {
      steps: [],
      indicatorsWithObjectTags: []
    };
    this.state = {
      currentStep: 0,
      stepsType: '',
      stepsShape: ''
    };
    this.buildSteps();
    this.elements = { ...this.elements,
      ...this.createStepsIndicators(),
      ...this.createStepsButtons()
    };
    this.initProgressBar();
    this.extractResponsiveSizeFromSubmitWrapper();
  }

  bindEvents() {
    if (!this.isStepsExist()) {
      return;
    }

    this.elements.$form.on({
      submit: () => this.resetForm(),
      keydown: e => {
        if (13 === e.keyCode && !this.isLastStep() && 'textarea' !== e.target.localName) {
          e.preventDefault();
          this.applyStep('next');
        }
      },
      error: () => this.onFormError()
    });
  }

  isStepsExist() {
    return this.elements.$stepWrapper.length;
  }

  initProgressBar() {
    const stepsSettings = this.getElementSettings();

    if ('progress_bar' === stepsSettings.step_type) {
      this.setProgressBar();
    }
  }

  buildSteps() {
    this.elements.$stepWrapper.each((index, el) => {
      const {
        selectors,
        classes
      } = this.getSettings(),
            $currentStep = jQuery(el);
      $currentStep.addClass(classes.step).removeClass(classes.fieldGroup, classes.column);

      if (index) {
        $currentStep.addClass(classes.hidden);
      }

      this.setStepData($currentStep.children(selectors.stepField));
      $currentStep.append($currentStep.nextUntil(this.elements.$stepWrapper).not(this.elements.$submitWrapper));
    });
  }

  setStepData($stepElement) {
    const dataAttributes = ['label', 'previousButton', 'nextButton', 'iconUrl', 'iconLibrary', 'icon'],
          stepData = {};
    dataAttributes.forEach(attr => {
      const attrValue = $stepElement.attr('data-' + attr);

      if (attrValue) {
        stepData[attr] = attrValue;
      }
    });
    this.data.steps.push(stepData);
  }

  createStepsIndicators() {
    const stepsSettings = this.getElementSettings(),
          stepsElements = {};

    if ('none' !== stepsSettings.step_type) {
      const {
        selectors,
        classes
      } = this.getSettings(),
            indicatorsTypeClass = classes.indicators + '--type-' + stepsSettings.step_type,
            indicatorsClasses = [classes.indicators, indicatorsTypeClass];
      stepsElements.$indicatorsWrapper = jQuery('<div>', {
        class: indicatorsClasses.join(' ')
      });
      stepsElements.$indicatorsWrapper.append(this.buildIndicators());
      this.elements.$fieldsWrapper.before(stepsElements.$indicatorsWrapper);

      if ('progress_bar' === stepsSettings.step_type) {
        stepsElements.$progressBar = stepsElements.$indicatorsWrapper.find(selectors.indicatorProgress);
        stepsElements.$progressBarMeter = stepsElements.$indicatorsWrapper.find(selectors.indicatorProgressMeter);
      } else {
        stepsElements.$indicators = stepsElements.$indicatorsWrapper.find(selectors.indicator);
        stepsElements.$currentIndicator = stepsElements.$indicators.eq(this.state.currentStep);
      }
    }

    this.saveIndicatorsState();
    return stepsElements;
  }

  buildIndicators() {
    const stepsSettings = this.getElementSettings();
    return 'progress_bar' === stepsSettings.step_type ? this.buildProgressBar() : this.buildIndicatorsFromStepsData();
  }

  buildProgressBar() {
    const {
      classes
    } = this.getSettings(),
          $progressBar = jQuery('<div>', {
      class: classes.indicatorProgress
    }),
          $progressBarMeter = jQuery('<div>', {
      class: classes.indicatorProgressMeter
    });
    $progressBar.append($progressBarMeter);
    return $progressBar;
  }

  getProgressBarValue() {
    const totalSteps = this.data.steps.length,
          currentStep = this.state.currentStep,
          percentage = currentStep ? (currentStep + 1) / totalSteps * 100 : 100 / totalSteps;
    return Math.floor(percentage) + '%';
  }

  setProgressBar() {
    const progressBarValue = this.getProgressBarValue();
    this.updateProgressMeterCSSVariable(progressBarValue);
    this.elements.$progressBarMeter.text(progressBarValue);
  }

  updateProgressMeterCSSVariable(value) {
    this.$element[0].style.setProperty('--e-form-steps-indicator-progress-meter-width', value);
  }

  saveIndicatorsState() {
    const stepsSettings = this.getElementSettings();
    this.state.stepsType = stepsSettings.step_type;

    if (!['none', 'text', 'progress_bar'].includes(stepsSettings.step_type)) {
      this.state.stepsShape = stepsSettings.step_icon_shape;
    }
  }

  buildIndicatorsFromStepsData() {
    const indicators = [];
    this.data.steps.forEach((stepObj, index) => {
      if (index) {
        indicators.push(this.getStepSeparator());
      }

      indicators.push(this.getStepIndicatorElement(stepObj, index));
    });
    return indicators;
  }

  getStepIndicatorElement(stepObj, index) {
    const {
      classes
    } = this.getSettings(),
          stepsSettings = this.getElementSettings(),
          indicatorStateClass = this.getIndicatorStateClass(index),
          indicatorClasses = [classes.indicator, indicatorStateClass],
          $stepIndicator = jQuery('<div>', {
      class: indicatorClasses.join(' ')
    });

    if (stepsSettings.step_type.includes('icon')) {
      $stepIndicator.append(this.getStepIconElement(stepObj));
    }

    if (stepsSettings.step_type.includes('number')) {
      $stepIndicator.append(this.getStepNumberElement(index));
    }

    if (stepsSettings.step_type.includes('text')) {
      $stepIndicator.append(this.getStepLabelElement(stepObj.label));
    }

    return $stepIndicator;
  }

  getIndicatorStateClass(index) {
    const {
      classes
    } = this.getSettings();

    if (index < this.state.currentStep) {
      return classes.indicatorCompleted;
    } else if (index > this.state.currentStep) {
      return classes.indicatorInactive;
    }

    return classes.indicatorActive;
  }

  getIndicatorShapeClass() {
    const stepsSettings = this.getElementSettings(),
          {
      classes
    } = this.getSettings();
    return classes['indicatorShape' + this.firstLetterToUppercase(stepsSettings.step_icon_shape)];
  }

  firstLetterToUppercase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  getStepNumberElement(index) {
    const {
      classes
    } = this.getSettings(),
          numberClasses = [classes.indicatorNumber, this.getIndicatorShapeClass()];
    return jQuery('<div>', {
      class: numberClasses.join(' '),
      text: index + 1
    });
  }

  getStepIconElement(stepObj) {
    const {
      classes
    } = this.getSettings(),
          iconClasses = [classes.indicatorIcon, this.getIndicatorShapeClass()],
          $icon = jQuery('<div>', {
      class: iconClasses.join(' ')
    });

    if (stepObj.icon) {
      $icon.html(stepObj.icon);
    } else {
      let $iconElement;

      if (stepObj.iconLibrary) {
        $iconElement = jQuery('<i>', {
          class: stepObj.iconLibrary
        });
      } else {
        // Using the attributes inline when creating the object, otherwise the data attribute will not work.
        $iconElement = jQuery(`<object type="image/svg+xml" data="${stepObj.iconUrl}"></object>`); // Updating an indicator svg fill color, when loaded inside an object tag with a separated scope.

        $iconElement.on('load', event => {
          event.target.contentDocument.querySelector('svg').style.fill = $iconElement.css('fill');
        }); // Storing the indicators elements that contain object tags in order to change their fill color on steps change.

        this.data.indicatorsWithObjectTags.push($iconElement);
      }

      $icon.append($iconElement);
    }

    return $icon;
  }

  getStepLabelElement(label) {
    const {
      classes
    } = this.getSettings();
    return jQuery('<label>', {
      class: classes.indicatorLabel,
      text: label
    });
  }

  getStepSeparator() {
    const {
      classes
    } = this.getSettings();
    return jQuery('<div>', {
      class: classes.indicatorSeparator
    });
  }

  createStepsButtons() {
    const {
      selectors
    } = this.getSettings(),
          stepsElements = {};
    this.injectButtonsToSteps(stepsElements);
    stepsElements.$buttonsContainer = this.elements.$stepWrapper.find(selectors.buttons);
    stepsElements.$buttonsWrappers = stepsElements.$buttonsContainer.children(selectors.buttonWrapper);
    return stepsElements;
  }

  injectButtonsToSteps() {
    const totalSteps = this.elements.$stepWrapper.length;
    this.elements.$stepWrapper.each((index, el) => {
      const $el = jQuery(el),
            $container = this.getButtonsContainer();
      let $nextButton;

      if (index) {
        $container.append(this.getStepButton('previous', index));
        $nextButton = index === totalSteps - 1 ? this.getSubmitButton() : this.getStepButton('next', index);
      } else {
        $nextButton = this.getStepButton('next', index);
      }

      $container.append($nextButton);
      $el.append($container);
    });
  }

  getButtonsContainer() {
    const {
      classes
    } = this.getSettings(),
          stepsSettings = this.getElementSettings(),
          buttonColumnWidthClasses = [classes.buttons, classes.column, 'tooto-col-' + stepsSettings.button_width];
    return jQuery('<div>', {
      class: buttonColumnWidthClasses.join(' ')
    });
  }

  extractResponsiveSizeFromSubmitWrapper() {
    let sizeClasses = [];
    this.elements.$submitWrapper.removeClass((index, className) => {
      var _className$match;

      sizeClasses = (_className$match = className.match(/tooto-(sm|md)-[0-9]+/g)) === null || _className$match === void 0 ? void 0 : _className$match.join(' ');
      return sizeClasses;
    });
    this.elements.$buttonsContainer.addClass(sizeClasses);
  }

  getStepButton(buttonType, index) {
    const {
      classes
    } = this.getSettings(),
          $button = this.getButton(buttonType, index).on('click', () => this.applyStep(buttonType)),
          buttonWrapperClasses = [classes.fieldGroup, classes.buttonWrapper, 'tooto-field-type-' + buttonType];
    return jQuery('<div>', {
      class: buttonWrapperClasses.join(' ')
    }).append($button);
  }

  getSubmitButton() {
    const {
      classes
    } = this.getSettings();
    this.elements.$submitButton.addClass(classes.button); // TODO: When a solution for the conditions will be found, check if can remove the tooto-col-x manipulation.

    return this.elements.$submitWrapper.attr('class', (index, className) => {
      return this.replaceClassNameColSize(className, '');
    }).removeClass(classes.column).removeClass(classes.buttons).addClass(classes.buttonWrapper);
  }

  replaceClassNameColSize(className, value) {
    return className.replace(/tooto-col-([0-9]+)/g, value);
  }

  getButton(buttonType, index) {
    const {
      classes
    } = this.getSettings(),
          submitSizeClass = this.elements.$submitButton.attr('class').match(/tooto-size-([^\W\d]+)/g),
          buttonClasses = [classes.tootoButton, submitSizeClass, classes.button, classes.button + '-' + buttonType];
    return jQuery('<button>', {
      type: 'button',
      text: this.getButtonLabel(buttonType, index),
      class: buttonClasses.join(' ')
    });
  }

  getButtonLabel(buttonType, index) {
    const stepsSettings = this.getElementSettings(),
          stepData = this.data.steps[index],
          buttonName = buttonType + 'Button',
          buttonSettingsProp = `step_${buttonType}_label`;
    return stepData[buttonName] || stepsSettings[buttonSettingsProp];
  }

  applyStep(direction) {
    const nextIndex = 'next' === direction ? this.state.currentStep + 1 : this.state.currentStep - 1;

    if ('next' === direction && !this.isFieldsValid(this.elements.$stepWrapper)) {
      return false;
    }

    this.goToStep(nextIndex);
    this.state.currentStep = nextIndex;

    if ('progress_bar' === this.state.stepsType) {
      this.setProgressBar();
    } else if ('none' !== this.state.stepsType) {
      this.updateIndicatorsState(direction);
    }
  }

  goToStep(index) {
    const {
      classes
    } = this.getSettings();
    this.elements.$stepWrapper.eq(this.state.currentStep).addClass(classes.hidden);
    this.elements.$stepWrapper.eq(index).removeClass(classes.hidden).children(this.getSettings('selectors.fieldGroup')).first().find(':input').first().trigger('focus');
  }

  isFieldsValid($stepWrapper) {
    let isValid = true;
    $stepWrapper.eq(this.state.currentStep).find('.tooto-field-group :input').each((index, el) => {
      if (!el.checkValidity()) {
        el.reportValidity();
        return isValid = false;
      }
    });
    return isValid;
  }

  isLastStep() {
    return this.state.currentStep === this.data.steps.length - 1;
  }

  resetForm() {
    this.state.currentStep = 0;
    this.resetSteps();

    if ('progress_bar' === this.state.stepsType) {
      this.setProgressBar();
    } else if ('none' !== this.state.stepsType) {
      this.elements.$currentIndicator = this.elements.$indicators.eq(this.state.currentStep);
      this.resetIndicators();
    }
  }

  resetSteps() {
    const {
      classes
    } = this.getSettings();
    this.elements.$stepWrapper.addClass(classes.hidden).eq(0).removeClass(classes.hidden);
  }

  resetIndicators() {
    const {
      classes
    } = this.getSettings(),
          stateTypes = ['inactive', 'active', 'completed'],
          stateClasses = stateTypes.map(state => classes.indicator + '--state-' + state);
    this.elements.$indicators.removeClass(stateClasses.join(' ')).not(this.elements.$indicators.eq(0)).addClass(classes.indicatorInactive);
    this.elements.$indicators.eq(0).addClass(classes.indicatorActive);
  }

  updateIndicatorsState(direction) {
    const {
      classes
    } = this.getSettings(),
          indicatorsClasses = {
      current: {
        remove: classes.indicatorActive,
        add: 'next' === direction ? classes.indicatorCompleted : classes.indicatorInactive
      },
      next: {
        remove: 'next' === direction ? classes.indicatorInactive : classes.indicatorCompleted,
        add: classes.indicatorActive
      }
    };
    this.elements.$currentIndicator.removeClass(indicatorsClasses.current.remove).addClass(indicatorsClasses.current.add);
    this.elements.$currentIndicator = this.elements.$indicators.eq(this.state.currentStep);
    this.elements.$currentIndicator.removeClass(indicatorsClasses.next.remove).addClass(indicatorsClasses.next.add); // Updating an indicator svg fill color, if loaded inside an object tag.

    this.data.indicatorsWithObjectTags.forEach($element => {
      $element.contents().children('svg').css('fill', $element.css('fill'));
    });
  }

  updateValue(updatedValue) {
    const actionsMap = {
      step_type: () => this.updateStepsType(),
      step_icon_shape: () => this.updateStepsShape(),
      step_next_label: () => this.updateStepButtonsLabel('next'),
      step_previous_label: () => this.updateStepButtonsLabel('previous')
    };

    if (actionsMap[updatedValue]) {
      actionsMap[updatedValue]();
    }
  }

  updateStepsType() {
    const stepsSettings = this.getElementSettings();

    if (this.elements.$indicatorsWrapper) {
      this.elements.$indicatorsWrapper.remove();
    }

    if ('none' !== stepsSettings.step_type) {
      this.rebuildIndicators();
    }

    this.state.stepsType = stepsSettings.step_type;
  }

  rebuildIndicators() {
    this.elements = { ...this.elements,
      ...this.createStepsIndicators()
    };
    this.initProgressBar();
  }

  updateStepsShape() {
    const stepsSettings = this.getElementSettings(),
          {
      selectors,
      classes
    } = this.getSettings(),
          shapeClassStart = classes.indicator + '--shape-',
          currentShapeClass = shapeClassStart + this.state.stepsShape,
          newShapeClass = shapeClassStart + stepsSettings.step_icon_shape;
    let elementsTargetType = '';

    if (stepsSettings.step_type.includes('icon')) {
      elementsTargetType = 'icon';
    } else if (stepsSettings.step_type.includes('number')) {
      elementsTargetType = 'number';
    }

    this.elements.$indicators.children(selectors.indicator + '__' + elementsTargetType).removeClass(currentShapeClass).addClass(newShapeClass);
    this.state.stepsShape = stepsSettings.step_icon_shape;
  }

  updateStepButtonsLabel(buttonType) {
    const {
      selectors
    } = this.getSettings(),
          buttonSelector = {
      previous: selectors.button + '-previous',
      next: selectors.button + '-next'
    };
    this.elements.$stepWrapper.each((index, el) => {
      jQuery(el).find(buttonSelector[buttonType]).text(this.getButtonLabel(buttonType, index));
    });
  }

  onFormError() {
    const {
      selectors
    } = this.getSettings(),
          $errorStepElement = this.elements.$form.find(selectors.formHelpInline).closest(selectors.stepWrapper);

    if ($errorStepElement.length) {
      this.goToStep($errorStepElement.index());
    }
  }

  onElementChange(updatedValue) {
    if (!this.isStepsExist()) {
      return;
    }

    this.updateValue(updatedValue);
  }

}

exports.default = FormSteps;

/***/ }),

/***/ "../modules/forms/assets/js/frontend/handlers/recaptcha.js":
/*!*****************************************************************!*\
  !*** ../modules/forms/assets/js/frontend/handlers/recaptcha.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class Recaptcha extends tootoModules.frontend.handlers.Base {
  getDefaultSettings() {
    return {
      selectors: {
        recaptcha: '.tooto-g-recaptcha:last',
        submit: 'button[type="submit"]',
        recaptchaResponse: '[name="g-recaptcha-response"]'
      }
    };
  }

  getDefaultElements() {
    const {
      selectors
    } = this.getDefaultSettings(),
          elements = {
      $recaptcha: this.$element.find(selectors.recaptcha)
    };
    elements.$form = elements.$recaptcha.parents('form');
    elements.$submit = elements.$form.find(selectors.submit);
    return elements;
  }

  bindEvents() {
    this.onRecaptchaApiReady();
  }

  isActive(settings) {
    const {
      selectors
    } = this.getDefaultSettings();
    return settings.$element.find(selectors.recaptcha).length;
  }

  addRecaptcha() {
    const settings = this.elements.$recaptcha.data(),
          isV2 = 'v3' !== settings.type,
          captchaIds = [];
    captchaIds.forEach(id => window.grecaptcha.reset(id));
    const widgetId = window.grecaptcha.render(this.elements.$recaptcha[0], settings);
    this.elements.$form.on('reset error', () => {
      window.grecaptcha.reset(widgetId);
    });

    if (isV2) {
      this.elements.$recaptcha.data('widgetId', widgetId);
    } else {
      captchaIds.push(widgetId);
      this.elements.$submit.on('click', e => this.onV3FormSubmit(e, widgetId));
    }
  }

  onV3FormSubmit(e, widgetId) {
    e.preventDefault();
    window.grecaptcha.ready(() => {
      const $form = this.elements.$form;
      grecaptcha.execute(widgetId, {
        action: this.elements.$recaptcha.data('action')
      }).then(token => {
        if (this.elements.$recaptchaResponse) {
          this.elements.$recaptchaResponse.val(token);
        } else {
          this.elements.$recaptchaResponse = jQuery('<input>', {
            type: 'hidden',
            value: token,
            name: 'g-recaptcha-response'
          });
          $form.append(this.elements.$recaptchaResponse);
        } // Support old browsers.


        const bcSupport = !$form[0].reportValidity || 'function' !== typeof $form[0].reportValidity;

        if (bcSupport || $form[0].reportValidity()) {
          $form.trigger('submit');
        }
      });
    });
  }

  onRecaptchaApiReady() {
    if (window.grecaptcha && window.grecaptcha.render) {
      this.addRecaptcha();
    } else {
      // If not ready check again by timeout..
      setTimeout(() => this.onRecaptchaApiReady(), 350);
    }
  }

}

exports.default = Recaptcha;

/***/ })

}]);
//# sourceMappingURL=form.23168c11e0d20fa0282b.bundle.js.map