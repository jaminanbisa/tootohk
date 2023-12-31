(
	function ( $ ) {
		var WidgetElements_CursorTrackerHandler = function ( $scope,$ ) {
			var elementSettings = get_Dyncontel_ElementSettings( $scope );
			var id_scope = $scope.attr( 'data-id' );
			var cursorTarget = $scope.find( '#cursors-' + id_scope );

			var init_cursortracker = function () {

				var progressTracker = elementSettings.cursortracker_scroll;
				let delay = elementSettings.delay.size;

				if ( progressTracker ) {
					var progressPath = document.querySelector( '.progress-wrap path.dce-cursortrack-path1' );
					var pathLength = progressPath.getTotalLength();
					progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
					progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
					progressPath.style.strokeDashoffset = pathLength;
					progressPath.getBoundingClientRect();
					progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

					window.removeEventListener( 'scroll',updateProgress );

					var updateProgress = function () {
						var scroll = $( window ).scrollTop();
						var height = $( document ).height() - $( window ).height();
						var progress = pathLength - (
							scroll * pathLength / height
						);
						progressPath.style.strokeDashoffset = progress;
					};
					updateProgress();
					window.addEventListener( 'scroll',updateProgress );
				}

				if ( tootoFrontend.isEditMode() && $( 'body > .cursors' ).length ) {
					$( 'body > .cursors' ).remove();
				}
				cursorTarget.prependTo( "body" );

				var container = document.getElementsByTagName( "body" )[ 0 ];
				var cursors = cursorTarget[ 0 ];

				function positionCircle( elem, delay ) {
					var relX = elem.clientX;
					var relY = elem.clientY;

					gsap.to( cursors,{
						duration: delay,
						x:relX + "px",
						y:relY + "px"
					} );
				}

				//Page cursors
				container.addEventListener( "mouseenter",function ( n ) {
					gsap.to( cursors,{
						duration:0.5,
						scale:1
					} );
				} );
				container.addEventListener( "mouseleave",function ( n ) {
					gsap.to( cursors,{
						duration:0.5,
						scale:0
					} );
				} );
				container.addEventListener( "mousemove",function ( e ) {
					positionCircle( e, delay );
				} );

				var t = document.getElementById( "cursor" ),
					e = document.getElementById( "cursor2" ),
					i = document.getElementById( "cursor3" );

				function n( t ) {
					cursors.classList.add( "hover" );
				}

				function s( t ) {
					cursors.classList.remove( "hover" );
				}

				s();
				for (
					var r = document.querySelectorAll( ".cursor-target" ),
						a = r.length - 1; a >= 0; a--
				) {
					o( r[ a ] );
				}

				function o( t ) {
					t.addEventListener( "mouseover",n ), t.addEventListener( "mouseout",s );
				}
			};

			$( ".cursors" ).show();

			var responsive_cursorTracker = elementSettings.responsive_cursorTracker;
			var deviceMode = $( 'body' ).attr( 'data-tooto-device-mode' );

			if ( $.inArray( deviceMode,responsive_cursorTracker ) >= 0 ) {
				init_cursortracker();
			} else {
				cursorTarget.remove();
			}
		};

		// Make sure you run this code under tooto..
		$( window ).on( 'tooto/frontend/init',function () {
			tootoFrontend.hooks.addAction( 'frontend/element_ready/dyncontel-cursorTracker.default',
				WidgetElements_CursorTrackerHandler );
		} );
	}
)( jQuery );
