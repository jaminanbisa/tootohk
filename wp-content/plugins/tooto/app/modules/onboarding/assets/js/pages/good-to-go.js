import Grid from 'tooto-app/ui/grid/grid';
import Layout from '../components/layout/layout';
import Card from '../components/card';
import FooterButtons from '../components/layout/footer-buttons';

export default function GoodToGo() {
	const pageId = 'goodToGo',
		skipButton = {
			text: __( 'Skip', 'tooto' ),
			href: tootoAppConfig.onboarding.urls.createNewPage,
		},
		kitLibraryLink = tootoAppConfig.onboarding.urls.kitLibrary + '&referrer=onboarding';

	return (
		<Layout pageId={ pageId }>
			<h1 className="e-onboarding__page-content-section-title">
				{ __( 'That\'s a wrap! What\'s next?', 'tooto' ) }
			</h1>
			<div className="e-onboarding__page-content-section-text">
				{ __( 'There are two ways to get started with tooto:', 'tooto' ) }
			</div>
			<Grid container alignItems="center" justify="space-between" className="e-onboarding__cards-grid e-onboarding__page-content">
				<Card
					name="blank"
					image={ tootoCommon.config.urls.assets + 'images/app/onboarding/Blank_Canvas.svg' }
					imageAlt={ __( 'Click here to create a new page and open it in tooto Editor', 'tooto' ) }
					text={ __( 'Edit a blank canvas with the tooto Editor', 'tooto' ) }
					link={ tootoAppConfig.onboarding.urls.createNewPage }
				/>
				<Card
					name="template"
					image={ tootoCommon.config.urls.assets + 'images/app/onboarding/Library.svg' }
					imageAlt={ __( 'Click here to go to tooto\'s Kit Library', 'tooto' ) }
					text={ __( 'Browse from +100 templates or import your own', 'tooto' ) }
					link={ kitLibraryLink }
					clickAction={ () => {
						// The location is reloaded to make sure the Kit Library's state is re-created.
						location.href = kitLibraryLink;
						location.reload();
					} }
				/>
			</Grid>
			<FooterButtons skipButton={ skipButton } className="e-onboarding__good-to-go-footer" />
		</Layout>
	);
}
