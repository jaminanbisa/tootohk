/*! tooto-pro - v3.4.1 - 01-09-2021 */
(self["webpackChunktooto_pro"] = self["webpackChunktooto_pro"] || []).push([["slides"],{

/***/ "../modules/slides/assets/js/frontend/handlers/slides.js":
/*!***************************************************************!*\
  !*** ../modules/slides/assets/js/frontend/handlers/slides.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class SlidesHandler extends tootoModules.frontend.handlers.SwiperBase {
  getDefaultSettings() {
    return {
      selectors: {
        slider: '.tooto-slides-wrapper',
        slide: '.swiper-slide',
        slideInnerContents: '.swiper-slide-contents',
        activeSlide: '.swiper-slide-active',
        activeDuplicate: '.swiper-slide-duplicate-active'
      },
      classes: {
        animated: 'animated',
        kenBurnsActive: 'tooto-ken-burns--active',
        slideBackground: 'swiper-slide-bg'
      },
      attributes: {
        dataSliderOptions: 'slider_options',
        dataAnimation: 'animation'
      }
    };
  }

  getDefaultElements() {
    const selectors = this.getSettings('selectors'),
          elements = {
      $swiperContainer: this.$element.find(selectors.slider)
    };
    elements.$slides = elements.$swiperContainer.find(selectors.slide);
    return elements;
  }

  getSwiperOptions() {
    const elementSettings = this.getElementSettings(),
          swiperOptions = {
      autoplay: this.getAutoplayConfig(),
      grabCursor: true,
      initialSlide: this.getInitialSlide(),
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: 'yes' === elementSettings.infinite,
      speed: elementSettings.transition_speed,
      effect: elementSettings.transition,
      observeParents: true,
      observer: true,
      handletootoBreakpoints: true,
      on: {
        slideChange: () => {
          this.handleKenBurns();
        }
      }
    };
    const showArrows = 'arrows' === elementSettings.navigation || 'both' === elementSettings.navigation,
          pagination = 'dots' === elementSettings.navigation || 'both' === elementSettings.navigation;

    if (showArrows) {
      swiperOptions.navigation = {
        prevEl: '.tooto-swiper-button-prev',
        nextEl: '.tooto-swiper-button-next'
      };
    }

    if (pagination) {
      swiperOptions.pagination = {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      };
    }

    if (true === swiperOptions.loop) {
      swiperOptions.loopedSlides = this.getSlidesCount();
    }

    if ('fade' === swiperOptions.effect) {
      swiperOptions.fadeEffect = {
        crossFade: true
      };
    }

    return swiperOptions;
  }

  getAutoplayConfig() {
    const elementSettings = this.getElementSettings();

    if ('yes' !== elementSettings.autoplay) {
      return false;
    }

    return {
      stopOnLastSlide: true,
      // Has no effect in infinite mode by default.
      delay: elementSettings.autoplay_speed,
      disableOnInteraction: 'yes' === elementSettings.pause_on_interaction
    };
  }

  initSingleSlideAnimations() {
    const settings = this.getSettings(),
          animation = this.elements.$swiperContainer.data(settings.attributes.dataAnimation);
    this.elements.$swiperContainer.find('.' + settings.classes.slideBackground).addClass(settings.classes.kenBurnsActive); // If there is an animation, get the container of the slide's inner contents and add the animation classes to it

    if (animation) {
      this.elements.$swiperContainer.find(settings.selectors.slideInnerContents).addClass(settings.classes.animated + ' ' + animation);
    }
  }

  async initSlider() {
    const $slider = this.elements.$swiperContainer,
          settings = this.getSettings(),
          elementSettings = this.getElementSettings(),
          animation = $slider.data(settings.attributes.dataAnimation);

    if (!$slider.length) {
      return;
    }

    if (1 >= this.getSlidesCount()) {
      return;
    }

    const Swiper = tootoFrontend.utils.swiper;
    this.swiper = await new Swiper($slider, this.getSwiperOptions()); // Expose the swiper instance in the frontend

    $slider.data('swiper', this.swiper); // The Ken Burns effect will only apply on the specific slides that toggled the effect ON,
    // since it depends on an additional class besides 'tooto-ken-burns--active'

    this.handleKenBurns();

    if (elementSettings.pause_on_hover) {
      this.togglePauseOnHover(true);
    }

    if (!animation) {
      return;
    }

    this.swiper.on('slideChangeTransitionStart', function () {
      const $sliderContent = $slider.find(settings.selectors.slideInnerContents);
      $sliderContent.removeClass(settings.classes.animated + ' ' + animation).hide();
    });
    this.swiper.on('slideChangeTransitionEnd', function () {
      const $currentSlide = $slider.find(settings.selectors.slideInnerContents);
      $currentSlide.show().addClass(settings.classes.animated + ' ' + animation);
    });
  }

  onInit() {
    tootoModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);

    if (2 > this.getSlidesCount()) {
      this.initSingleSlideAnimations();
      return;
    }

    this.initSlider();
  }

  getChangeableProperties() {
    return {
      pause_on_hover: 'pauseOnHover',
      pause_on_interaction: 'disableOnInteraction',
      autoplay_speed: 'delay',
      transition_speed: 'speed'
    };
  }

  updateSwiperOption(propertyName) {
    if (0 === propertyName.indexOf('width')) {
      this.swiper.update();
      return;
    }

    const elementSettings = this.getElementSettings(),
          newSettingValue = elementSettings[propertyName],
          changeableProperties = this.getChangeableProperties();
    let propertyToUpdate = changeableProperties[propertyName],
        valueToUpdate = newSettingValue; // Handle special cases where the value to update is not the value that the Swiper library accepts

    switch (propertyName) {
      case 'autoplay_speed':
        propertyToUpdate = 'autoplay';
        valueToUpdate = {
          delay: newSettingValue,
          disableOnInteraction: 'yes' === elementSettings.pause_on_interaction
        };
        break;

      case 'pause_on_hover':
        this.togglePauseOnHover('yes' === newSettingValue);
        break;

      case 'pause_on_interaction':
        valueToUpdate = 'yes' === newSettingValue;
        break;
    } // 'pause_on_hover' is implemented by the handler with event listeners, not the Swiper library


    if ('pause_on_hover' !== propertyName) {
      this.swiper.params[propertyToUpdate] = valueToUpdate;
    }

    this.swiper.update();
  }

  onElementChange(propertyName) {
    if (1 >= this.getSlidesCount()) {
      return;
    }

    const changeableProperties = this.getChangeableProperties();

    if (changeableProperties.hasOwnProperty(propertyName)) {
      this.updateSwiperOption(propertyName);
    }
  }

  onEditSettingsChange(propertyName) {
    if (1 >= this.getSlidesCount()) {
      return;
    }

    if ('activeItemIndex' === propertyName) {
      this.swiper.slideToLoop(this.getEditSettings('activeItemIndex') - 1);
    }
  }

}

exports.default = SlidesHandler;

/***/ })

}]);
//# sourceMappingURL=slides.6d3f738223ac9b3c9b7a.bundle.js.map