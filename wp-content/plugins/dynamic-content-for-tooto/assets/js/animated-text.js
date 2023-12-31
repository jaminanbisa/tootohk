(
	function ( $ ) {
		var WidgetElements_AnimateTextHandler = function ( $scope,$ ) {
			var elementSettings = get_Dyncontel_ElementSettings( $scope );
			// var id_scope = $scope.attr( 'data-id' );

			var effectIn = elementSettings.animatetext_animationstyle_in;
			var effectOut = elementSettings.animatetext_animationstyle_out;

			var target = $scope.find( '.dce-animatetext' );
			var splitType = elementSettings.animatetext_splittype;
			var repeaterWords = elementSettings.words;

			var texts = [];
			var ids = [];
			var words;

			if ( tootoFrontend.isEditMode() ) {
				words = repeaterWords.models;
			} else {
				words = repeaterWords;
			}

			$.each( words,function ( index,word ) {

				if ( tootoFrontend.isEditMode() ) {
					word = repeaterWords.models[ index ].attributes;
				} else {
					word = repeaterWords[ index ];
				}
				texts.push( word.text_word );
				ids.push( word._id );
			} );

			var animTextRepeat = elementSettings.animatetext_repeat;

			//  Anim IN
			var splitOrigin_in = elementSettings.animatetext_splitorigin_in;
			var speed_in = elementSettings.speed_animation_in.size;
			var amount_in = elementSettings.amount_speed_in.size;
			var delaySteps_in = elementSettings.delay_animation_in.size;
			var anim_easing_in = elementSettings.animFrom_easing_ease_in + '.' + elementSettings.animFrom_easing_in;

			//  Anim OUT
			var splitOrigin_out = elementSettings.animatetext_splitorigin_out;
			var speed_out = elementSettings.speed_animation_out.size;
			var amount_out = elementSettings.amount_speed_out.size;
			var delaySteps_out = elementSettings.delay_animation_out.size;
			var anim_easing_out = elementSettings.animFrom_easing_ease_out + '.' + elementSettings.animFrom_easing_out;

			var splitter;
			var split;
			var oldTextIndex = -1;
			var currentTextIndex = 0;
			var cycle = 1;
			var isLastTextCycle = false;

			var random = function ( min,max ) {
				return (
					Math.random() * (
						max - min
					)
				) + min;
			}

			var changeText = function () {
				if ( currentTextIndex < texts.length - 1 ) {

					oldTextIndex = currentTextIndex;
					currentTextIndex++;
					target.removeClass( 'tooto-repeater-item-' + ids[ oldTextIndex ] );
					target.html( texts[ currentTextIndex ] );
					target.addClass( 'tooto-repeater-item-' + ids[ currentTextIndex ] );

				} else {
					oldTextIndex = -1;
					currentTextIndex = 0;

					if ( animTextRepeat > -1 && cycle >= animTextRepeat ) {
						return;
					}
					cycle++;
				}
				if ( cycle === parseInt( animTextRepeat ) && currentTextIndex === texts.length - 1 ) {
					isLastTextCycle = true;
				}

				animSplitText();
			}

			var animSplitText = function () {

				var tl = new gsap.timeline( {
					paused:true
				} );

				if ( oldTextIndex < 0 ) {
					target.html( texts[ 0 ] );
					target.addClass( 'tooto-repeater-item-' + ids[ 0 ] );
				}

				split = new SplitText( target,{
					type:[
						'chars',
						'words',
						'lines'
					],
				} );

				switch ( splitType ) {
					case 'chars':
						splitter = split.chars;
						break;
					case 'words':
						splitter = split.words;
						break;

					case 'lines':
						splitter = split.lines;
						break;
					default:
						break;
				}

				var staggerOpt_in = {
					ease:"none",//grid:grid,
					axis:null, //'null' 'x' 'y'
					amount:Math.floor( splitter.length / 2 ) * (
						amount_in / 100
					),
					from:splitOrigin_in,
				};

				var staggerOpt_out = {
					ease:"none",//grid:grid,
					axis:null, //'null' 'x' 'y'
					amount:Math.floor( splitter.length / 2 ) * (
						amount_out / 100
					),
					from:splitOrigin_out,
				};

				switch ( effectIn ) {
					case 'fading':
						tl.from( splitter,{
							duration:speed_in,
							opacity:0,
							stagger:staggerOpt_in,
							delay:delaySteps_in,
							ease:anim_easing_in
						} );
						break;

					case 'from_left':
						tl.from( splitter,{
							duration:speed_in,
							x:-100,
							opacity:0,
							delay:delaySteps_in,
							stagger:staggerOpt_in,
							ease:anim_easing_in
						} );
						break;

					case 'from_right':
						tl.from( splitter,{
							duration:speed_in,
							x:100,
							opacity:0,
							delay:delaySteps_in,
							stagger:staggerOpt_in,
							ease:anim_easing_in
						} );
						break;
					case 'from_top':
						tl.from( splitter,{
							duration:speed_in,
							y:-100,
							opacity:0,
							delay:delaySteps_in,
							stagger:staggerOpt_in,
							ease:anim_easing_in
						} );

						break;
					case 'from_bottom':
						tl.from( splitter,{
							duration:speed_in,
							y:100,
							opacity:0,
							delay:delaySteps_in,
							stagger:staggerOpt_in,
							ease:anim_easing_in
						} );
						break;
					case 'zoom_front':
						tl.from( splitter,{
							duration:speed_in,
							scale:1.6,
							opacity:0,
							delay:delaySteps_in,
							stagger:staggerOpt_in,
							ease:anim_easing_in
						} );
						break;
					case 'zoom_back':
						tl.from( splitter,{
							duration:speed_in,
							scale:0.1,
							opacity:0,
							delay:delaySteps_in,
							stagger:staggerOpt_in,
							ease:anim_easing_in
						} );
						break;
					case 'random_position':
						tl.from( splitter,{
							duration:speed_in,
							opacity:0,
							scale:random( 0.1,3 ),
							x:random( -500,500 ),
							y:random( -500,500 ),
							z:random( -500,500 ),
							rotation:random( -120,120 ),
							delay:delaySteps_in,
							stagger:staggerOpt_in,
							ease:anim_easing_in
						} );
						break;
					case 'elastic':
						tl.from( splitter,{
							duration:1,
							y:100,
							rotation:90,
							opacity:0,
							stagger:{
								ease:"none",
								axis:null,
								amount:0.5,
								from:splitOrigin,
							},
							ease:Elastic.easeOut
						},0.03 );
						break;
					default:
						break;
				}

				if ( ! isLastTextCycle ) {
					switch ( effectOut ) {
						case 'fading':
							tl.to( splitter,{
								duration:speed_out,
								opacity:0,
								delay:delaySteps_out,
								stagger:staggerOpt_out,
								ease:anim_easing_out,
								onComplete:changeText
							} );
							break;
						case 'to_left':
							tl.to( splitter,{
								duration:speed_out,
								x:-100,
								opacity:0,
								delay:delaySteps_out,
								stagger:staggerOpt_out,
								ease:anim_easing_out,
								onComplete:changeText
							} );
							break;

						case 'to_right':
							tl.to( splitter,{
								duration:speed_out,
								x:100,
								opacity:0,
								delay:delaySteps_out,
								stagger:staggerOpt_out,
								ease:anim_easing_out,
								onComplete:changeText
							} );
							break;
						case 'to_top':
							tl.to( splitter,{
								duration:speed_out,
								y:-100,
								opacity:0,
								delay:delaySteps_out,
								stagger:staggerOpt_out,
								ease:anim_easing_out,
								onComplete:changeText
							} );
							break;
						case 'to_bottom':
							tl.to( splitter,{
								duration:speed_out,
								y:100,
								opacity:0,
								delay:delaySteps_out,
								stagger:staggerOpt_out,
								ease:anim_easing_out,
								onComplete:changeText
							} );
							break;
						case 'zoom_front':
							tl.to( splitter,{
								duration:speed_out,
								scale:1.6,
								opacity:0,
								delay:delaySteps_out,
								stagger:staggerOpt_out,
								ease:anim_easing_out,
								onComplete:changeText
							} );
							break;
						case 'zoom_back':
							tl.to( splitter,{
								duration:speed_out,
								scale:0.1,
								opacity:0,
								delay:delaySteps_out,
								stagger:staggerOpt_out,
								ease:anim_easing_out,
								onComplete:changeText
							} );
							break;
						case 'random_position':
							tl.to( splitter,{
								duration:speed_out,
								opacity:0,
								scale:random( 0.1,3 ),
								x:random( -500,500 ),
								y:random( -500,500 ),
								z:random( -500,500 ),
								rotation:random( -120,120 ),
								delay:delaySteps_out,
								stagger:staggerOpt_out,
								ease:anim_easing_out,
								onComplete:changeText
							} );

							break;
						case 'elastic':
							tl.to( splitter,{
								duration:0.5,
								opacity:0,
								stagger:{
									ease:"none",
									axis:null,
									amount:0.5,
									from:splitOrigin,
								},
								ease:anim_easing_out,
								onComplete:changeText
							},0.08,2 );
							break;
						default:
							break;
					}
				}

				var analyzeActiveScroll = function ( $el ) {
					if ( $el ) {

						var runAnim = function ( dir ) {
							if ( dir === 'down' ) {
								tl.play();

							} else if ( dir === 'up' ) {
								tl.pause();

							}
						};
						var waypointOptions = {
							offset:'100%',
							triggerOnce:false
						};
						tootoFrontend.waypoint( $( $el ),runAnim,waypointOptions );
					}
				};

				//triggers: animate, rollover, scroll
				if ( elementSettings.animatetext_trigger === 'animation' ) {
					tl.play();
				} else if ( elementSettings.animatetext_trigger === 'rollover' ) {
					target.mouseover( function ( e ) {
						tl.play();
					} );
					target.mouseout( function ( e ) {
						tl.pause();
					} );
				} else if ( elementSettings.animatetext_trigger === 'scroll' ) {
					analyzeActiveScroll( target );
				}
			}
			animSplitText();
		}

		$( window ).on( 'tooto/frontend/init',function () {
			tootoFrontend.hooks.addAction( 'frontend/element_ready/dyncontel-animateText.default',
				WidgetElements_AnimateTextHandler );
		} );
	}
)( jQuery );
