(
	function ( $ ) {
		var WidgetElements_SvgFilterEffectsHandler = function ( $scope,$ ) {
			var elementSettings = get_Dyncontel_ElementSettings( $scope );
			var id_scope = $scope.attr( 'data-id' );
			
			var feDisp = $scope.find( 'feDisplacementMap#displacement-map' )[ 0 ];
			
			var feImage = $scope.find( 'feImage#displacement-image' )[ 0 ];
			
			var scaleMapTo = 0;
			
			var is_running = false;
			var run = $( '#dce-svg-' + id_scope ).attr( 'data-run' );
			
			var animation_delay = 1;
			var animation_speed = 3;
			
			var easing_animation_ease = 'Power3';
			var easing_animation = 'easeInOut';
			var easeFunction = easing_animation_ease + '.' + easing_animation;
			
			var svg_trigger = elementSettings.svg_trigger;
			var tl = gsap.timeline( {
				repeat:-1,
				repeatDelay:animation_delay
			} );
			
			var interrompi = function () {
				tl.pause( 0 );
				is_running = false;
			};
			var ferma = function () {
				
				tl.pause();
				is_running = false;
			};
			var riproduci = function () {
				
				tl.play();
				
				is_running = true;
			};
			var inverti = function () {
				tl.reverse();
				
				is_running = true;
			}
			var riprendi = function () {
				tl.restart();
				
				is_running = true;
			};
			
			var playShapeEl = function () {
				
				function repeatOften() {
					
					if ( run != $( '#dce-svg-' + id_scope ).attr( 'data-run' ) ) {
						
						run = $( '#dce-svg-' + id_scope ).attr( 'data-run' );
						if ( run == 'running' ) {
							riproduci();
						} else {
							ferma();
						}
						
					}
					
					requestAnimationFrame( repeatOften );
					
				}
				
				requestAnimationFrame( repeatOften );
			};
			var mouseenterFn = function () {
				
				var tl = gsap.timeline( { repeat:0 } );
				tl.to( feDisp,{
					duration:animation_speed,
					attr:{ scale:scaleMapTo },
					ease:easeFunction
				},0 );
			};
			var mouseleaveFn = function () {
				var tl = gsap.timeline( { repeat:0 } );
				tl.to( feDisp,{
					duration:animation_speed,
					attr:{ scale:scaleMap },
					ease:easeFunction
				},0 );
			};
			var active_scrollAnalysi = function ( $el ) {
				if ( $el ) {
					var tl = gsap.timeline( {
						repeat:0,
						paused:true,
					} );
					var runAnim = function ( dir ) {
						//
						if ( dir == 'down' ) {
						
						} else if ( dir == 'up' ) {
						
						}
					};
					var waypointOptions = {
						triggerOnce:false,
						continuous:true
					};
					tootoFrontend.waypoint( $( $el ),runAnim,waypointOptions );
				}
			};
			// pulisco tutto
			if ( tootoFrontend.isEditMode() ) {
				if ( tl ) {
					tl.kill( feDisp );
				}
				$( '.tooto-element[data-id=' + id_scope + '] svg' );
			}
		};
		
		$( window ).on( 'tooto/frontend/init',function () {
			tootoFrontend.hooks.addAction( 'frontend/element_ready/dyncontel-filtereffects.default',
				WidgetElements_SvgFilterEffectsHandler );
		} );
	}
)( jQuery );
