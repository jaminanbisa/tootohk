import Notice from 'tooto-app/ui/molecules/notice';
import Button from 'tooto-app/ui/molecules/button';

import './connect-pro-notice.scss';

export default function ConnectProNotice() {
	const getButton = () => (
		<Button
			text={ __( 'Let’s do it', 'tooto' ) }
			variant="outlined"
			color="secondary"
			size="sm"
			target="_blank"
			url={ tootoAppConfig.admin_url + 'admin.php?page=tooto-license' }
		/>
	);

	return (
		<Notice className="e-app-import-connect-pro-notice" label={ __( 'Tip:', 'tooto' ) } color="info" button={ getButton() }>
			{ __( 'Make sure your tooto Pro account is connected', 'tooto' ) }
		</Notice>
	);
}
