(function( $ ) {
	$.fn.tootoWaypoint = function(callback) {
		if ( typeof callback === 'function' ) {
			callback.call( this );
		}
	};
})( jQuery );
