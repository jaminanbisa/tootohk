( function( $ ) {
	var WidgetElements_ParallaxHandler = function( $scope, $ ) {

		var scene = $scope.find('#scene');
		var parallax = new Parallax( scene[0] );
		
	};
	
	// Make sure you run this code under tooto..
	$( window ).on( 'tooto/frontend/init', function() {
		tootoFrontend.hooks.addAction( 'frontend/element_ready/dyncontel-parallax.default', WidgetElements_ParallaxHandler );
	} );
} )( jQuery );
