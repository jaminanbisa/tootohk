(function ($) {
    var WidgetElements_AdvancedVideoHandler = function ($scope, $) {
        var elementSettings = get_Dyncontel_ElementSettings($scope);
        var id_scope = $scope.attr('data-id');
        var customControls = elementSettings.dce_video_custom_controls;

        if (customControls) {
            var videoType = elementSettings.video_type;
            var autoplay = Boolean(elementSettings.autoplay);
            var lightbox = Boolean(elementSettings.lightbox);
            var muted = Boolean(elementSettings.mute);
            var loop = Boolean(elementSettings.loop);
            var controls = elementSettings.dce_video_controls;

            var generatePlyrVideo = function () {
                var videoContainer = '.tooto-element-' + id_scope;
                var videoSelector = videoContainer + ' .tooto-wrapper';
                if (videoType == 'hosted') {
                    videoSelector = videoContainer + ' .tooto-video';
                }

                // Lightbox
                if (lightbox) {
                    videoContainer = '#tooto-lightbox-' + id_scope;
                    videoSelector = videoContainer + ' .tooto-video-container > div';
                }
                new Plyr(videoSelector, {
					controls: controls,
                    autoplay: autoplay,
                    muted: muted,
                    loop: { active: loop },
                    disableContextMenu: false,
                    hideControls: false,
                });
            };

            if ($scope.find('.tooto-custom-embed-image-overlay').length) {
                $scope.on('mouseup', '.tooto-custom-embed-image-overlay', function () {
                    if (lightbox) {
                        setTimeout(function () {
                            generatePlyrVideo();
                        }, 1000);

                    } else {
                        setTimeout(function () {
                            generatePlyrVideo();
                        }, 400);
                    }
                });
            } else {
                setTimeout(function () {
					generatePlyrVideo();
				}, 400);
            }
        }
    };

    // Make sure you run this code under tooto..
    $(window).on('tooto/frontend/init', function () {
        tootoFrontend.hooks.addAction('frontend/element_ready/video.default', WidgetElements_AdvancedVideoHandler);
    });
})(jQuery);
