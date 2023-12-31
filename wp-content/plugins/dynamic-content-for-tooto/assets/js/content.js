(function ($) {
    var WidgetElements_ContentHandler = function ($scope, $) {
      var dcecontent = $scope.find('.dce-content');
      var dcecontentWrap = $scope.find('.dce-content-wrapper');
      var dceunfold = $scope.find('.unfold-btn a');
      var dceunfoldfa = $scope.find('.unfold-btn i.fa-old');
      var elementSettings = get_Dyncontel_ElementSettings($scope);

      if (elementSettings.enable_unfold) {
        var originalHeightUnfold = dcecontentWrap.outerHeight();
        var heightUnfold = elementSettings.height_content.size;

        if (originalHeightUnfold > heightUnfold) {
          dcecontent.addClass('unfolded');
          dcecontent.height(heightUnfold);

          $('.unfold-btn').click(function() {
              $(dcecontent).animate({ height: originalHeightUnfold }, 1000 )
              $('.unfold-btn').remove();
          });
        }

      }
      function onResize() {
        originalHeightUnfold = dcecontentWrap.outerHeight();
      }
      window.addEventListener("resize", onResize);
    };

    // Make sure you run this code under tooto..
    $(window).on('tooto/frontend/init', function () {
      tootoFrontend.hooks.addAction('frontend/element_ready/dyncontel-content.default', WidgetElements_ContentHandler);
    });
})(jQuery);
