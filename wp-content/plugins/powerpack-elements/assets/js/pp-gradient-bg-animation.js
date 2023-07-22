( function ( $ ) {
	"use strict";

	var AnimatedGradientBg = function ( $scope, $ ) {

		if ( ! $scope.hasClass( 'pp-animated-gradient-bg-yes' ) ) {
			return;
		}

		var color          = $scope.data( 'color' ),
			angle          = $scope.data( 'angle' ),
			gradientColor  = 'linear-gradient( ' + angle + ',' + color + ' )';
		
		$scope.css( 'background-image', gradientColor );

		if ( tootoFrontend.isEditMode() ) {
			var bg_overlay       = $scope.find( '.tooto-element-overlay ~ .tooto-background-overlay' ),
				animated_bg_wrap = $scope.find( '.pp-animated-gradient-bg' );

			if ( bg_overlay.next( '.pp-animated-gradient-bg' ).length == 0 ) {
				bg_overlay.after( animated_bg_wrap );
			}
		}

	};

	$( window ).on( 'tooto/frontend/init', function () {
		tootoFrontend.hooks.addAction( 'frontend/element_ready/global', AnimatedGradientBg );
	} );
	
}( jQuery ) );
