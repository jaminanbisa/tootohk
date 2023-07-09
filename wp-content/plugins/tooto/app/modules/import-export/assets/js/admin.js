const revertButton = document.getElementById( 'tooto-import-export__revert_kit' );

if ( revertButton ) {
	revertButton.addEventListener( 'click', ( event ) => {
		event.preventDefault();

		tootoCommon.dialogsManager.createWidget( 'confirm', {
			headerMessage: __( 'Sure you want to make these changes?', 'tooto' ),
			message: __( 'Removing assets or changing your site settings can drastically change the look of your website.', 'tooto' ),
			strings: {
				confirm: __( 'Yes', 'tooto' ),
				cancel: __( 'No, go back', 'tooto' ),
			},
			onConfirm() {
				location.href = revertButton.href;
			},
		} ).show();
	} );
}
