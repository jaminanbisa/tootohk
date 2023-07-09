import Notice from 'tooto-app/ui/molecules/notice';
import Button from 'tooto-app/ui/molecules/button';

import './failed-plugins-notice.scss';

export default function FailedPluginsNotice( { failedPlugins } ) {
	const getButton = () => (
		<Button
			text={ __( 'Learn more', 'tooto' ) }
			variant="outlined"
			color="secondary"
			size="sm"
			target="_blank"
			url="https://go.tooto.com/app-import-plugin-installation-failed/"
		/>
	);

	return (
		<Notice className="e-app-import-failed-plugins-notice" label={ __( 'Important:', 'tooto' ) } color="warning" button={ getButton() }>
			{
				__( "There are few plugins that we couldn't install:", 'tooto' ) + ' ' +
				failedPlugins.map( ( { name } ) => name ).join( ' | ' )
			}
		</Notice>
	);
}

FailedPluginsNotice.propTypes = {
	failedPlugins: PropTypes.array,
};
