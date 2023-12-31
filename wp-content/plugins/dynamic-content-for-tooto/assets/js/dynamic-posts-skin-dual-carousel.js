var galleryThumbs = null;
var Widget_DCE_Dynamicposts_dualcarousel_Handler = function ($scope, $) {
    var smsc = null;
	var elementSettings = get_Dyncontel_ElementSettings($scope);
	var elementSwiper = $scope.find('.dce-dualcarousel-gallery-thumbs');
	var slidesPerView = Number(elementSettings[DCE_dynposts_skinPrefix+'thumbnails_slidesPerView']);
	var tootoBreakpoints = tootoFrontend.config.breakpoints;
	var dceSwiperOptions = {
		spaceBetween: Number(elementSettings[DCE_dynposts_skinPrefix+'dualcarousel_gap']) || 0,
		slidesPerView: slidesPerView || 'auto',
	    autoHeight: true,
	    watchOverflow: true,
	    watchSlidesProgress: true,
	    centeredSlides: true,
	    loop: true,
	};

    var responsivePoints = dceSwiperOptions.breakpoints = {};
    responsivePoints[tootoBreakpoints.lg] = {
        slidesPerView: Number(elementSettings[DCE_dynposts_skinPrefix+'thumbnails_slidesPerView']) || 'auto',
        spaceBetween: Number(elementSettings[DCE_dynposts_skinPrefix+'dualcarousel_gap']) || 0,
    };
    responsivePoints[tootoBreakpoints.md] = {
        slidesPerView: Number(elementSettings[DCE_dynposts_skinPrefix+'thumbnails_slidesPerView_tablet']) || Number(elementSettings[DCE_dynposts_skinPrefix+'thumbnails_slidesPerView']) || 'auto',
        spaceBetween: Number(elementSettings[DCE_dynposts_skinPrefix+'dualcarousel_gap_tablet']) || Number(elementSettings[DCE_dynposts_skinPrefix+'dualcarousel_gap']) || 0,
    };
    responsivePoints[tootoBreakpoints.xs] = {
        slidesPerView: Number(elementSettings[DCE_dynposts_skinPrefix+'thumbnails_slidesPerView_mobile']) || Number(elementSettings[DCE_dynposts_skinPrefix+'thumbnails_slidesPerView_tablet']) || Number(elementSettings[DCE_dynposts_skinPrefix+'thumbnails_slidesPerView']) || 'auto',
        spaceBetween: Number(elementSettings[DCE_dynposts_skinPrefix+'dualcarousel_gap_mobile']) || Number(elementSettings[DCE_dynposts_skinPrefix+'dualcarousel_gap_tablet']) || Number(elementSettings[DCE_dynposts_skinPrefix+'spaceBetween']) || 0,
    };
    dceSwiperOptions = $.extend(dceSwiperOptions, responsivePoints);
    
    if(smsc) {
		smsc.remove();
	}
    if(galleryThumbs) {
		galleryThumbs.destroy();
	}

	if ( 'undefined' === typeof Swiper ) {
		const asyncSwiper = tootoFrontend.utils.swiper;

		new asyncSwiper( elementSwiper[0], dceSwiperOptions ).then( ( newSwiperInstance ) => {
			galleryThumbs = newSwiperInstance;
		} );
	  } else {
		galleryThumbs = new Swiper( elementSwiper[0], dceSwiperOptions );
	  }

    Widget_DCE_Dynamicposts_carousel_Handler($scope, $);


};

jQuery(window).on('tooto/frontend/init', function () {
    tootoFrontend.hooks.addAction('frontend/element_ready/dce-dynamicposts-v2.dualcarousel', Widget_DCE_Dynamicposts_dualcarousel_Handler);
	tootoFrontend.hooks.addAction('frontend/element_ready/dce-woo-products-cart.dualcarousel', Widget_DCE_Dynamicposts_dualcarousel_Handler);
	tootoFrontend.hooks.addAction('frontend/element_ready/dce-dynamic-woo-products.dualcarousel', Widget_DCE_Dynamicposts_dualcarousel_Handler);
	tootoFrontend.hooks.addAction('frontend/element_ready/dce-woo-product-upsells.dualcarousel', Widget_DCE_Dynamicposts_dualcarousel_Handler);
	tootoFrontend.hooks.addAction('frontend/element_ready/dce-woo-product-crosssells.dualcarousel', Widget_DCE_Dynamicposts_dualcarousel_Handler);
	tootoFrontend.hooks.addAction('frontend/element_ready/dce-show-favorites.dualcarousel', Widget_DCE_Dynamicposts_dualcarousel_Handler);
	tootoFrontend.hooks.addAction('frontend/element_ready/dce-my-posts.dualcarousel', Widget_DCE_Dynamicposts_dualcarousel_Handler);
	tootoFrontend.hooks.addAction('frontend/element_ready/dce-sticky-posts.dualcarousel', Widget_DCE_Dynamicposts_dualcarousel_Handler);
	tootoFrontend.hooks.addAction('frontend/element_ready/dce-search-results.dualcarousel', Widget_DCE_Dynamicposts_dualcarousel_Handler);
});
