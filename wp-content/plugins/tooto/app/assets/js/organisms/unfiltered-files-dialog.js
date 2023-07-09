import { useState, useEffect } from 'react';

import Dialog from 'tooto-app/ui/dialog/dialog';

import useAjax from 'tooto-app/hooks/use-ajax';

export default function UnfilteredFilesDialog( props ) {
	const { show, setShow, onReady, onCancel, onDismiss, onLoad, onEnable, onClose } = props,
		{ ajaxState, setAjax } = useAjax(),
		[ enableUnfilteredFiles, setEnableUnfilteredFiles ] = useState( false ),
		[ isEnableError, setIsEnableError ] = useState( false );

	// Sending the enable unfiltered files request.
	useEffect( () => {
		if ( enableUnfilteredFiles ) {
			setShow( false );

			setAjax( {
				data: {
					action: 'tooto_ajax',
					actions: JSON.stringify( {
						enable_unfiltered_files_upload: {
							action: 'enable_unfiltered_files_upload',
						},
					} ),
				},
			} );
			if ( onEnable ) {
				onEnable();
			}
		}
	}, [ enableUnfilteredFiles ] );

	// Enabling unfiltered files ajax status.
	useEffect( () => {
		switch ( ajaxState.status ) {
			case 'success':
				onReady();
				break;
			case 'error':
				setIsEnableError( true );
				setShow( true );
				break;
		}
	}, [ ajaxState ] );

	useEffect( () => {
		if ( show && onLoad ) {
			onLoad();
		}
	}, [ show ] );

	if ( ! show ) {
		return null;
	}

	return (
		<>
			{
				isEnableError
				? <Dialog
						title={ __( 'Something went wrong.', 'tooto' ) }
						text={ props.errorModalText }
						approveButtonColor="link"
						approveButtonText={ __( 'Continue', 'tooto' ) }
						approveButtonOnClick={ onReady }
						dismissButtonText={ __( 'Go Back', 'tooto' ) }
						dismissButtonOnClick={ onCancel }
						onClose={ onCancel }
				/>
				: <Dialog
						title={ __( 'First, enable unfiltered file uploads.', 'tooto' ) }
						text={ props.confirmModalText }
						approveButtonColor="link"
						approveButtonText={ __( 'Enable', 'tooto' ) }
						approveButtonOnClick={ () => setEnableUnfilteredFiles( true ) }
						dismissButtonText={ __( 'Skip', 'tooto' ) }
						dismissButtonOnClick={ onDismiss || onReady }
						onClose={ onClose || onDismiss || onReady }
				/>
			}
		</>
	);
}

UnfilteredFilesDialog.propTypes = {
	show: PropTypes.bool,
	setShow: PropTypes.func.isRequired,
	onReady: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
	onDismiss: PropTypes.func,
	confirmModalText: PropTypes.string.isRequired,
	errorModalText: PropTypes.string.isRequired,
	onLoad: PropTypes.func,
	onEnable: PropTypes.func,
	onClose: PropTypes.func,
};

UnfilteredFilesDialog.defaultProps = {
	show: false,
	onReady: () => {},
	onCancel: () => {},
};
