import { Dialog } from '@tooto/app-ui';
import { useSettingsContext } from '../context/settings-context';

const { useEffect, useRef } = React;

export default function ConnectDialog( props ) {
	const { settings } = useSettingsContext();
	const approveButtonRef = useRef();

	useEffect( () => {
		jQuery( approveButtonRef.current ).tootoConnect( {
			success: ( e, data ) => props.onSuccess( data ),
			error: () => props.onError( __( 'Unable to connect', 'tooto' ) ),
			parseUrl: ( url ) => url.replace( '%%page%%', props.pageId ),
		} );
	}, [] );

	return (
		<Dialog
			title={ __( 'Connect to Template Library', 'tooto' ) }
			text={ __( 'Access this template and our entire library by creating a free personal account', 'tooto' ) }
			approveButtonText={ __( 'Get Started', 'tooto' ) }
			approveButtonUrl={ settings.library_connect_url }
			approveButtonOnClick={ () => props.onClose() }
			approveButtonColor="primary"
			approveButtonRef={ approveButtonRef }
			dismissButtonText={ __( 'Cancel', 'tooto-pro' ) }
			dismissButtonOnClick={ () => props.onClose() }
			onClose={ () => props.onClose() }
		/>
	);
}

ConnectDialog.propTypes = {
	onClose: PropTypes.func.isRequired,
	onError: PropTypes.func.isRequired,
	onSuccess: PropTypes.func.isRequired,
	pageId: PropTypes.string,
};
