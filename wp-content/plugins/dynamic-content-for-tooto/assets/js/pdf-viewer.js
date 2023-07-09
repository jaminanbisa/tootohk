(function ($) {
    var WidgetElements_PdfViewer = function ($scope, $) {
		let scope = $scope[0];
        var elementSettings = get_Dyncontel_ElementSettings($scope);
		var url = '';

		if ( 'url' === elementSettings.source && elementSettings.source_url.url ) {
			url = elementSettings.source_url.url;
        } else if( 'media_file' === elementSettings.source && elementSettings.source_media ) {
			url = elementSettings.source_media;
		}
		if( ! url ){
			return;
		}

		// Loaded via <script> tag, create shortcut to access PDF.js exports.
		var pdfjsLib = window['pdfjs-dist/build/pdf'];

		// The workerSrc property shall be specified.
		pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.9.359/pdf.worker.min.js';

		// Following code adapted from: https://code.tutsplus.com/tutorials/how-to-create-a-pdf-viewer-in-javascript--cms-32505
		var myState = {
			pdf: null,
			currentPage: 1,
			zoom: 1
		}

		pdfjsLib.getDocument(url).promise.then((pdf) => {
			myState.pdf = pdf;
			render();
		});

		if ( 'yes' === elementSettings.navigation_controls ) {
			scope.getElementsByClassName('dce-pdf-go-previous')[0].addEventListener('click', (e) => {
				if(myState.pdf == null || myState.currentPage == 1)
					return;
				myState.currentPage -= 1;
				scope.getElementsByClassName("dce-pdf-current-page")[0].value = myState.currentPage;
				render();
			});

			scope.getElementsByClassName('dce-pdf-go-next')[0].addEventListener('click', (e) => {
				if(myState.pdf == null || myState.currentPage === myState.pdf.numPages)
					return;
				myState.currentPage += 1;
				scope.getElementsByClassName("dce-pdf-current-page")[0].value = myState.currentPage;
				render();
			});

			scope.getElementsByClassName('dce-pdf-current-page')[0].addEventListener('keypress', (e) => {
				if(myState.pdf == null) return;

				// Get key code
				var code = (e.keyCode ? e.keyCode : e.which);

				// If key code matches that of the Enter key
				if(code == 13) {
					var desiredPage =
						scope.getElementsByClassName('dce-pdf-current-page')[0].valueAsNumber;

					if(desiredPage >= 1 && desiredPage <= myState.pdf._pdfInfo.numPages) {
						myState.currentPage = desiredPage;
						scope.getElementsByClassName("dce-pdf-current-page")[0].value = desiredPage;
						render();
					}
				}
			});
		}

		if ( 'yes' === elementSettings.zoom_controls ) {
			scope.getElementsByClassName('dce-pdf-zoom-in')[0].addEventListener('click', (e) => {
				if(myState.pdf == null) return;
				myState.zoom += 0.5;
				render();
			});

			scope.getElementsByClassName('dce-pdf-zoom-out')[0].addEventListener('click', (e) => {
				if(myState.pdf == null) return;
				myState.zoom -= 0.5;
				render();
			});
		}

        function render() {
            myState.pdf.getPage(myState.currentPage).then((page) => {

                var canvas = scope.getElementsByClassName("dce-pdf-renderer")[0];
                var ctx = canvas.getContext('2d');

                var viewport = page.getViewport({scale: myState.zoom});

                canvas.width = viewport.width;
                canvas.height = viewport.height;

                page.render({
                    canvasContext: ctx,
                    viewport: viewport
                });
            });
        }
	};

    // Make sure you run this code under tooto..
    $(window).on('tooto/frontend/init', function () {
        tootoFrontend.hooks.addAction('frontend/element_ready/dce-pdf-viewer.default', WidgetElements_PdfViewer);
    });
})(jQuery);
