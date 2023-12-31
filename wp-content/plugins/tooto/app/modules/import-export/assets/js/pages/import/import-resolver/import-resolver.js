import React, { useContext, useEffect } from 'react';
import { useNavigate } from '@reach/router';

import { SharedContext } from '../../../context/shared-context/shared-context-provider';
import { ImportContext } from '../../../context/import-context/import-context-provider';

import Layout from '../../../templates/layout';
import PageHeader from '../../../ui/page-header/page-header';
import Conflict from './components/conflict/conflict';
import ActionsFooter from '../../../shared/actions-footer/actions-footer';
import Panel from 'tooto-app/ui/panel/panel';
import Notice from 'tooto-app/ui/molecules/notice';
import InlineLink from 'tooto-app/ui/molecules/inline-link';
import Button from 'tooto-app/ui/molecules/button';
import Box from 'tooto-app/ui/atoms/box';
import List from 'tooto-app/ui/molecules/list';
import { appsEventTrackingDispatch } from 'tooto-app/event-track/apps-event-tracking';

import './import-resolver.scss';

export default function ImportResolver() {
	const sharedContext = useContext( SharedContext ),
		importContext = useContext( ImportContext ),
		navigate = useNavigate(),
		conflicts = importContext.data?.uploadedData?.conflicts || {},
		{ referrer, currentPage } = sharedContext.data || {},
		eventTracking = ( command, sitePart = null ) => {
			if ( 'kit-library' === referrer ) {
				appsEventTrackingDispatch(
					command,
					{
						site_part: sitePart,
						page_source: 'import',
						step: currentPage,
						event_type: 'click',
					},
				);
			}
		},
		getFooter = () => (
			<ActionsFooter>
				<Button
					text={ __( 'Previous', 'tooto' ) }
					variant="contained"
					onClick={ () => {
						eventTracking( 'kit-library/go-back' );
						navigate( 'import/content' );
					} }
				/>

				<Button
					text={ __( 'Next', 'tooto' ) }
					variant="contained"
					color="primary"
					onClick={ () => {
						eventTracking( 'kit-library/approve-selection' );
						const url = importContext.data.plugins.length ? 'import/plugins-activation' : 'import/process';
						importContext.dispatch( { type: 'SET_IS_RESOLVED', payload: true } );
						navigate( url );
					} }
				/>
			</ActionsFooter>
		),
		getLearnMoreLink = () => (
			<InlineLink url="https://go.tooto.com/app-what-are-kits" italic onClick={ () => eventTracking( 'kit-library/seek-more-info' ) }>
				{ __( 'Learn More', 'tooto' ) }
			</InlineLink>
		),
		isHomePageOverride = () => {
			if ( sharedContext.data.includes.includes( 'content' ) ) {
				const pages = importContext.data?.uploadedData?.manifest.content?.page || {};

				return Object.entries( pages ).find( ( pageData ) => pageData[ 1 ].show_on_front );
			}

			return false;
		};

	useEffect( () => {
		if ( ! importContext.data.uploadedData ) {
			navigate( 'import' );
		}
		sharedContext.dispatch( { type: 'SET_CURRENT_PAGE_NAME', payload: ImportResolver.name } );
	}, [] );

	return (
		<Layout type="import" footer={ getFooter() }>
			<section className="e-app-import-resolver">
				<PageHeader
					heading={ __( 'Import a Website Kit to your site', 'tooto' ) }
					description={ [
						<React.Fragment key="description-first-line">
							{ __( 'Parts of this kit overlap with your site’s templates, design and settings. The items you leave checked on this list will replace your current design.', 'tooto' ) } { getLearnMoreLink() }
						</React.Fragment>,
					] }
				/>

				{
					isHomePageOverride() &&
					<Notice className="e-app-import-resolver__notice" label={ __( 'Note:', 'tooto' ) } color="warning">
						{ __( "Your site's homepage will be determined by the kit. You can change this later.", 'tooto' ) }
					</Notice>
				}

				<Panel isOpened={ true }>
					<Panel.Header toggle={ false }>
						<Panel.Headline>{ __( 'Select the items you want to keep and apply:', 'tooto' ) }</Panel.Headline>
					</Panel.Header>

					<Panel.Body padding="20">
						<Box className="e-app-import-resolver-conflicts__container">
							<List separated className="e-app-import-resolver-conflicts">
								{ Object.entries( conflicts ).map( ( [ id, conflict ], index ) => (
									<List.Item padding="20" key={ index } className="e-app-import-resolver-conflicts__item">
										<Conflict
											importedId={ parseInt( id ) }
											conflictData={ conflict[ 0 ] }
											onClick={ ( title ) => eventTracking( 'kit-library/check-item', title ) }
										/>
									</List.Item>
								) ) }
							</List>
						</Box>
					</Panel.Body>
				</Panel>
			</section>
		</Layout>
	);
}
