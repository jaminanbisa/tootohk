import { Card, CardHeader, CardBody, Heading, CardImage, CardOverlay, Grid, Button } from '@tooto/app-ui';

import '../../../../kit-library/assets/js/components/kit-list-item.scss';

const NewPageKitListItem = () => {
	return (
		<Card className="e-onboarding__kit-library-card e-kit-library__kit-item">
			<CardHeader>
				<Heading
					tag="h3"
					title={ __( 'Blank Canvas', 'tooto' ) }
					variant="h5"
					className="eps-card__headline"
				>
					{ __( 'Blank Canvas', 'tooto' ) }
				</Heading>
			</CardHeader>
			<CardBody>
				<CardImage alt={ __( 'Blank Canvas', 'tooto' ) } src={ tootoCommon.config.urls.assets + 'images/app/onboarding/Blank_Preview.jpg' || '' }>
					<CardOverlay>
						<Grid container direction="column" className="e-kit-library__kit-item-overlay">
							<Button
								className="e-kit-library__kit-item-overlay-overview-button"
								text={ __( 'Create New tooto Page', 'tooto' ) }
								icon="eicon-single-page"
								url={ tootoAppConfig.onboarding.urls.createNewPage }
							/>
						</Grid>
					</CardOverlay>
				</CardImage>
			</CardBody>
		</Card>
	);
};

export default React.memo( NewPageKitListItem );
