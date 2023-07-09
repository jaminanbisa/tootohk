import SiteTemplates from '../organisms/site-templates';
import { AddNewButton, Grid } from '@tooto/app-ui';
import useFeatureLock from 'tooto-pro-app/hooks/use-feature-lock';

export default function Templates() {
	const { isLocked, ConnectButton } = useFeatureLock( 'site-editor' );

	return (
		<section className="e-site-editor__site-templates">
			<Grid container justify="space-between" alignItems="start" className="page-header">
				<h1>{ __( 'Your Site\'s Global Parts', 'tooto-pro' ) }</h1>
				{
					isLocked
						? <ConnectButton />
						: <AddNewButton url="/site-editor/add-new" />
				}
			</Grid>
			<hr className="eps-separator" />
			<SiteTemplates />
		</section>
	);
}
