jQuery(function () {

    jQuery(window).on('load', function () {

        if (jQuery('#tooto-navigator').length) {
            // CLIPBOARD JS
            var copy_btn = '#tooto-navigator .tooto-navigator__element__infobox__copy, #tooto-navigator .tooto-navigator__element__infobox__copy_mini';
            new ClipboardJS(copy_btn);
            jQuery(copy_btn).on('click', function (e) {
                jQuery(copy_btn).addClass('animated').addClass('tada');
                setTimeout(function(){
                    jQuery(copy_btn).removeClass('animated').removeClass('tada');
                }, 3000);
            });

            // TIPSY
            jQuery('#tooto-navigator .tooltip-target').tipsy({
                // `n` for down, `s` for up
                gravity: 's',
                title: function title() {
                  return this.getAttribute('data-tooltip');
                }
            });

            jQuery('#tooto-navigator').fadeIn();

        }
    });

    jQuery('#wp-admin-bar-tooto-navigator > .ab-item').on('click', function () {
        if (jQuery('#tooto-navigator').length) {
            if (jQuery('#tooto-navigator').is(':visible')) {
                jQuery('#tooto-navigator__close').trigger('click');
            } else {
                jQuery('#tooto-navigator').toggle();
            }
            return false;
        }
    });

    jQuery('#tooto-navigator__close').on('click', function () {
        if (jQuery('body').hasClass('admin-bar') && jQuery('#wp-admin-bar-tooto-navigator .ab-item').length) {
            jQuery('#tooto-navigator').hide();
        } else {
            jQuery('#tooto-navigator').toggleClass('tooto-closed');
            jQuery(this).toggleClass('eicon-close').toggleClass('eicon-preview-medium');
        }
        jQuery('#tooto-navigator .tooto-navigator__element__infobox').hide();
        jQuery('#tooto-navigator .tooto-editing').removeClass('tooto-editing');
        jQuery('.debug-bar-dce-highlight').removeClass('debug-bar-dce-highlight');
        return false;
    });

    jQuery('#tooto-navigator .tooto-navigator__close').on('click', function () {
        jQuery(this).closest('.tooto-navigator__element__infobox').hide();
        jQuery('.debug-bar-dce-highlight').removeClass('debug-bar-dce-highlight');
        jQuery('#tooto-navigator .tooto-navigator__item.tooto-editing').removeClass('tooto-editing');
        return false;
    });

    jQuery('#tooto-navigator__toggle-all').on('click', function () {
        jQuery('#tooto-navigator .tooto-navigator__element__infobox').hide();
        if (jQuery('#tooto-navigator .tooto-navigator__item + ul').first().is(':visible')) {
            jQuery('#tooto-navigator .tooto-navigator__item + ul').hide();
            jQuery('#tooto-navigator .tooto-navigator__item.tooto-active').removeClass('tooto-active');
        } else {
            jQuery('#tooto-navigator .tooto-navigator__item + ul').show();
            jQuery('#tooto-navigator .tooto-navigator__item').addClass('tooto-active');
        }
        return false;
    });

    jQuery('#tooto-navigator').on('mouseleave', function () {
        if (!jQuery('#tooto-navigator .tooto-navigator__item.tooto-editing').length) {
            jQuery('.debug-bar-dce-highlight').removeClass('debug-bar-dce-highlight');
        }
    });
    jQuery('#tooto-navigator .tooto-navigator__item').on('hover', function () {
        if (!jQuery('#tooto-navigator .tooto-navigator__item.tooto-editing').length) {
            jQuery('.debug-bar-dce-highlight').removeClass('debug-bar-dce-highlight');
            jQuery(jQuery(this).data('target')).toggleClass('debug-bar-dce-highlight');
        }
    });
    jQuery('#tooto-navigator .tooto-navigator__element__title, #tooto-navigator .tooto-navigator__element__element-type').on('click', function () {

        // hilight row
        if (!jQuery(this).closest('.tooto-navigator__item').hasClass('tooto-editing')) {
            jQuery('#tooto-navigator .tooto-editing').removeClass('tooto-editing');
        }
        jQuery(this).closest('.tooto-navigator__item').toggleClass('tooto-editing');

        // display element in page
        if (jQuery(this).closest('.tooto-navigator__item').find('.tooto-navigator__element__toggle .fa').hasClass('fa-eye-slash')) {
            jQuery(this).closest('.tooto-navigator__item').find('.tooto-navigator__element__toggle').trigger('click');
        }
        if (jQuery(jQuery(this).parent().data('target')).length) {
            if (jQuery(jQuery(this).parent().data('target')).offset().top) {
                jQuery('html, body').animate({
                    scrollTop: jQuery(jQuery(this).parent().data('target')).offset().top - jQuery('#wpadminbar').height()
                }, 1000);
            }
        }

        // hilight element in page
        if (!jQuery(jQuery(this).parent().data('target')).hasClass('debug-bar-dce-highlight')) {
            jQuery('.debug-bar-dce-highlight').removeClass('debug-bar-dce-highlight');
        }
        if (jQuery(this).closest('.tooto-navigator__item').hasClass('tooto-editing')) {
            jQuery(jQuery(this).closest('.tooto-navigator__item').data('target')).addClass('debug-bar-dce-highlight');
        } else {
            jQuery(jQuery(this).closest('.tooto-navigator__item').data('target')).removeClass('debug-bar-dce-highlight');
        }

        // open element info box
        jQuery(this).closest('.tooto-navigator__item').find('.tooto-navigator__element__info').trigger('click');

        return false;
    });


    jQuery('#tooto-navigator .tooto-navigator__element__list-toggle').on('click', function () {
        jQuery('#tooto-navigator .tooto-navigator__element__infobox').hide();
        jQuery(this).parent().toggleClass('tooto-active');
        jQuery(this).parent().siblings('.tooto-navigator__elements').toggle();
        return false;
    });
    jQuery('#tooto-navigator .tooto-navigator__element__toggle').on('click', function () {
        jQuery(jQuery(this).closest('.tooto-navigator__item').data('target')).toggleClass('dce-visibility-element-hidden');
        var navigator__element = jQuery(this).closest('.tooto-navigator__element');
        navigator__element.toggleClass('tooto-navigator__element--hidden');
        navigator__element.children('.tooto-navigator__item').find('.fa').toggleClass('fa-eye').toggleClass('fa-eye-slash');
        navigator__element.children('.tooto-navigator__element__infobox').find('.fa').toggleClass('fa-eye').toggleClass('fa-eye-slash');
        return false;
    });
    jQuery('#tooto-navigator .tooto-navigator__element__infobox__toggle').on('click', function () {
        jQuery(this).closest('.tooto-navigator__element').find('.tooto-navigator__element__toggle').trigger('click');
        return false;
    });
    jQuery('#tooto-navigator .tooto-navigator__element__info').on('click', function () {
        if (!jQuery(this).closest('.tooto-navigator__element').children('.tooto-navigator__element__infobox:visible').length) {
          jQuery('#tooto-navigator .tooto-navigator__element__infobox').hide();
        }
        jQuery(this).closest('.tooto-navigator__element').children('.tooto-navigator__element__infobox').toggle();
        return false;
    });
    jQuery(document).on('click', '.debug-bar-dce-highlight', function () {
        jQuery(this).removeClass('debug-bar-dce-highlight');
        return false;
    });

});
