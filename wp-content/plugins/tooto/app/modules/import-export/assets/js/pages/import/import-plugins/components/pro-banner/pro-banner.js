import { useState } from 'react';

import MessageBanner from '../../../../../ui/message-banner/message-banner';
import GoProButton from 'tooto-app/molecules/go-pro-button';
import Dialog from 'tooto-app/ui/dialog/dialog';

import './pro-banner.scss';

export default function ProBanner( { onRefresh } ) {
	const [ showInfoDialog, setShowInfoDialog ] = useState( false ),
		openGoProExternalPage = () => window.open( 'https://go.tooto.com/go-pro-import-export/', '_blank' ),
		onDialogDismiss = () => setShowInfoDialog( false ),
		onDialogApprove = () => {
			setShowInfoDialog( false );

			onRefresh();
		},
		handleGoPro = () => {
			setShowInfoDialog( true );

			openGoProExternalPage();
		};

	return (
		<>
			<MessageBanner
				heading={ __( 'Install tooto Pro', 'tooto' ) }
				description={ __( "Without tooto Pro, importing components like templates, widgets and popups won't work.", 'tooto' ) }
				button={ <GoProButton onClick={ handleGoPro } /> }
			/>

			{
				showInfoDialog &&
				<Dialog
					title={ __( 'Is your tooto Pro ready?', 'tooto' ) }
					text={ __( 'If you’ve purchased, installed & activated tooto Pro, we can continue importing all the parts of this site.', 'tooto' ) }
					approveButtonColor="primary"
					approveButtonText={ __( 'Yes', 'tooto' ) }
					approveButtonOnClick={ onDialogApprove }
					dismissButtonText={ __( 'Not yet', 'tooto' ) }
					dismissButtonOnClick={ onDialogDismiss }
					onClose={ onDialogDismiss }
				/>
			}
		</>
	);
}

ProBanner.propTypes = {
	status: PropTypes.string,
	onRefresh: PropTypes.func,
};

ProBanner.defaultProps = {
	status: '',
};
