import Dialog from 'tooto-app/ui/dialog/dialog';

export default function NotFound() {
	const url = React.useMemo( () => ( tootoAppConfig.menu_url.split( '#' )?.[ 1 ] || '/site-editor' ), [] );

	return (
		<Dialog
			title={ __( 'Theme Builder could not be loaded', 'tooto' ) }
			text={ __( 'We’re sorry, but something went wrong. Click on ‘Learn more’ and follow each of the steps to quickly solve it.', 'tooto' ) }
			approveButtonUrl="https://go.tooto.com/app-theme-builder-load-issue/"
			approveButtonColor="link"
			approveButtonTarget="_blank"
			approveButtonText={ __( 'Learn More', 'tooto' ) }
			dismissButtonText={ __( 'Go Back', 'tooto' ) }
			dismissButtonUrl={ url }
		/>
	);
}
