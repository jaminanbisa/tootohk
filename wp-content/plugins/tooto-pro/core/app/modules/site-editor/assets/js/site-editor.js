import { Router, LocationProvider, Redirect } from '@reach/router';
import Templates from './pages/templates';
import TemplateType from './pages/template-type';
import AddNew from './pages/add-new';
import Conditions from './pages/conditions/conditions';
import Import from './pages/import';
import TemplatesProvider, { Context as TemplatesContext } from './context/templates';
import { Layout, AllPartsButton, NotFound } from '@tooto/site-editor';
import { ErrorBoundary, Grid, Button } from '@tooto/app-ui';
import router from '@tooto/router';
import Component from './data/component';
import useFeatureLock from 'tooto-pro-app/hooks/use-feature-lock';

import './site-editor.scss';

function SiteEditor() {
	const { isLocked } = useFeatureLock( 'site-editor' );

	const basePath = 'site-editor';
	const headerButtons = [
		{
			id: 'import',
			text: __( 'import', 'tooto-pro' ),
			hideText: true,
			icon: 'eicon-download-circle-o',
			onClick: () => router.appHistory.navigate( basePath + '/import' ),
		},
	];

	// Remove Core cache.
	tootoCommon.ajax.invalidateCache( {
		unique_id: 'app_site_editor_template_types',
	} );

	const SiteEditorDefault = () => {
		const { templates } = React.useContext( TemplatesContext );

		if ( Object.keys( templates ).length ) {
			return <Redirect from={ '/' } to={ '/' + basePath + '/templates' } noThrow={ true } />;
		}

		return <Redirect from={ '/' } to={ '/' + basePath + '/add-new' } noThrow={ true } />;
	};

	return (
		<ErrorBoundary
			title={ __( 'Theme Builder could not be loaded', 'tooto-pro' ) }
			learnMoreUrl="https://go.tooto.com/app-theme-builder-load-issue"
		>
			<Layout allPartsButton={ <AllPartsButton url={ '/' + basePath } /> } headerButtons={ headerButtons } titleRedirectRoute={ '/' + basePath } promotion={ isLocked }>
				<Grid container className="e-site-editor__content_container">
					<Grid item className="e-site-editor__content_container_main">
						<TemplatesProvider>
							<LocationProvider history={ router.appHistory }>
								<Router>
									<SiteEditorDefault path={ basePath } />
									<Templates path={ basePath + '/templates' } />
									<TemplateType path={ basePath + '/templates/:type/*id' } />
									<AddNew path={ basePath + '/add-new' } />
									<Conditions path={ basePath + '/conditions/:id' } />
									<Import path={ basePath + '/import' } />
									<NotFound default />
								</Router>
							</LocationProvider>
						</TemplatesProvider>
					</Grid>
					<Grid item className="e-site-editor__content_container_secondary">
						<Button
							text={ __( 'Switch to table view', 'tooto-pro' ) }
							url={ tootoAppProConfig[ 'site-editor' ]?.urls?.legacy_view }
						/>
					</Grid>
				</Grid>
			</Layout>
		</ErrorBoundary>
	);
}

export default class Module {
	constructor() {
		tootoCommon.debug.addURLToWatch( 'tooto-pro/assets' );

		$e.components.register( new Component() );

		router.addRoute( {
			path: '/site-editor/*',
			component: SiteEditor,
		} );
	}
}
