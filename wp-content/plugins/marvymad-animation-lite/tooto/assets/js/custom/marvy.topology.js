(function( $ ) {
    'use strict';
    var VisualTopologyAnimation = {
        initTopology: function () {
            tootoFrontend.hooks.addAction('frontend/element_ready/section', VisualTopologyAnimation.initTopologyWidget);
        },
        initTopologyWidget: function ($scope) {
            var sectionId = $scope.data('id');
            var target = '.tooto-element-' + sectionId;
            var settings = {};
            if (window.isEditMode || window.tootoFrontend.isEditMode()) {
                var editorElements = null;
                var topologyAnimationArgs = {};

                if (!window.tooto.hasOwnProperty('elements')) {
                    return false;
                }

                editorElements = window.tooto.elements;

                if (!editorElements.models) {
                    return false;
                }

                $.each(editorElements.models, function (i, el) {
                    if (sectionId === el.id) {
                        topologyAnimationArgs = el.attributes.settings.attributes;
                    } else if (el.id === $scope.closest('.tooto-top-section').data('id')) {
                        $.each(el.attributes.elements.models, function (i, col) {
                            $.each(col.attributes.elements.models, function (i, subSec) {
                                topologyAnimationArgs = subSec.attributes.settings.attributes;
                            });
                        });
                    }
                    settings.switch = topologyAnimationArgs.marvy_enable_topology_animation;
                    settings.color = topologyAnimationArgs.marvy_topology_animation_color;
                    settings.bgColor = topologyAnimationArgs.marvy_topology_animation_background_color;
                });

            } else {
                settings.switch = $scope.data("marvy_enable_topology_animation");
                settings.color = $scope.data("marvy_topology_animation_color");
                settings.bgColor = $scope.data("marvy_topology_animation_background_color");
            }

            if (settings.switch) {
                topologyAnimation(target, settings, sectionId);
            }
        }
    };

    function topologyAnimation(target,settings,sectionId) {
        var checkElement = document.getElementsByClassName("marvy-topology-section-" + sectionId);
        if (checkElement.length >= 0) {

            var topology_div = document.createElement('div');
            topology_div.classList.add("marvy-topology-section-" + sectionId);

            document.querySelector(target).appendChild(topology_div);
            document.querySelector(target).classList.add("marvy-custom-topology-animation-section-" + sectionId);

            // Set Z-index for section container
            var topologyZindex = document.querySelector('.marvy-custom-topology-animation-section-'+sectionId+' .tooto-container');
            topologyZindex.style.zIndex = '99';

            // Set min height
            var topologyMinHeight = document.querySelector(".tooto-element-"+sectionId);
            topologyMinHeight.closest('.tooto-top-section').style.minHeight = "100px";

            var topoAnimation = VANTA.TOPOLOGY({
                el: ".marvy-topology-section-" + sectionId,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 100.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: settings.color,
                backgroundColor:settings.bgColor
            });
            render(topoAnimation,sectionId);

        }
        return true;
    }

    function render(animation,sectionId) {
        document.querySelector(".tooto-element-"+sectionId).addEventListener('DOMAttrModified', function(e){
            animation.resize();
        }, false);
    }

    $( window ).on('tooto/frontend/init', VisualTopologyAnimation.initTopology);
})( jQuery );
