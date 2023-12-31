var Widget_DCE_Dynamicposts_grid_filters_Handler = function ($scope, $) {
	var elementSettings = get_Dyncontel_ElementSettings($scope);
	var grid_container = $scope.find('.dce-posts-container.dce-skin-grid .dce-posts-wrapper');
	var $layoutMode = elementSettings[DCE_dynposts_skinPrefix+'grid_type'];
	grid_container.isotope({
		itemSelector: '.dce-post-item',
		layoutMode: 'masonry' === $layoutMode ? 'masonry' : 'fitRows',
		sortBy: 'original-order',
		percentPosition: true,
		masonry: {
			columnWidth: '.dce-post-item'
		}
	});
	$scope.find('.dce-filters .filters-item').on('click', 'a', function (e) {
		$(this).parent().siblings().removeClass('filter-active');
		$(this).parent().addClass('filter-active');
		var filterValue = $(this).attr('data-filter');
		grid_container.isotope({
			filter: filterValue,
		});
		// Match Height when layout is complete
		if( elementSettings.grid_filters_match_height ) {
			grid_container.on( 'layoutComplete', function(event, laidOutItems ) {
				jQuery.fn.matchHeight._update();
			});
		}
		return false;
	});
};

jQuery(window).on('tooto/frontend/init', function () {
    tootoFrontend.hooks.addAction('frontend/element_ready/dce-dynamicposts-v2.grid-filters', Widget_DCE_Dynamicposts_grid_filters_Handler);
	tootoFrontend.hooks.addAction('frontend/element_ready/dce-woo-products-cart.grid-filters', Widget_DCE_Dynamicposts_grid_filters_Handler);
	tootoFrontend.hooks.addAction('frontend/element_ready/dce-dynamic-woo-products.grid-filters', Widget_DCE_Dynamicposts_grid_filters_Handler);
	tootoFrontend.hooks.addAction('frontend/element_ready/dce-woo-product-upsells.grid-filters', Widget_DCE_Dynamicposts_grid_filters_Handler);
	tootoFrontend.hooks.addAction('frontend/element_ready/dce-woo-product-crosssells.grid-filters', Widget_DCE_Dynamicposts_grid_filters_Handler);
	tootoFrontend.hooks.addAction('frontend/element_ready/dce-show-favorites.grid-filters', Widget_DCE_Dynamicposts_grid_filters_Handler);
	tootoFrontend.hooks.addAction('frontend/element_ready/dce-my-posts.grid-filters', Widget_DCE_Dynamicposts_grid_filters_Handler);
	tootoFrontend.hooks.addAction('frontend/element_ready/dce-sticky-posts.grid-filters', Widget_DCE_Dynamicposts_grid_filters_Handler);
	tootoFrontend.hooks.addAction('frontend/element_ready/dce-search-results.grid-filters', Widget_DCE_Dynamicposts_grid_filters_Handler);
});
