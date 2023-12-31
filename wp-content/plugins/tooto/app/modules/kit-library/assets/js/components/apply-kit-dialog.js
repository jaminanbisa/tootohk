import { useCallback } from 'react';
import { useNavigate } from '@reach/router';
import { Dialog } from '@tooto/app-ui';

export default function ApplyKitDialog( props ) {
	const navigate = useNavigate();

	const startImportProcess = useCallback( ( applyAll = false ) => {
		let url = '/import/process' +
			`?file_url=${ encodeURIComponent( props.downloadLink ) }` +
			`&nonce=${ props.nonce }&referrer=kit-library`;

		if ( applyAll ) {
			url += '&action_type=apply-all';
		}

		navigate( url );
	}, [ props.downloadLink, props.nonce ] );

	return (
		<Dialog
			// Translators: %s is the kit name.
			title={ __( 'Apply %s?', 'tooto' ).replace( '%s', props.title ) }
			text={ <>
				{ __( 'You can use everything in this kit, or Customize to only include some items.', 'tooto' ) }
				<br /><br />
				{ __( 'By applying the entire kit, you\'ll override any styles, settings or content already on your site.', 'tooto' ) }
			</> }
			approveButtonText={ __( 'Apply All', 'tooto' ) }
			approveButtonColor="primary"
			approveButtonOnClick={ () => startImportProcess( true ) }
			dismissButtonText={ __( 'Customize', 'tooto' ) }
			dismissButtonOnClick={ () => startImportProcess( false ) }
			onClose={ props.onClose }
		/>
	);
}

ApplyKitDialog.propTypes = {
	downloadLink: PropTypes.string.isRequired,
	nonce: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
	title: PropTypes.string,
};

ApplyKitDialog.defaultProps = {
	title: 'Kit',
};
