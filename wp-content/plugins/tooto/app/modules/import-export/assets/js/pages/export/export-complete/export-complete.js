import { useContext, useEffect, useRef } from 'react';
import { useNavigate } from '@reach/router';

import { ExportContext } from '../../../context/export-context/export-context-provider';

import Layout from '../../../templates/layout';
import ActionsFooter from '../../../shared/actions-footer/actions-footer';
import WizardStep from '../../../ui/wizard-step/wizard-step';
import KitData from '../../../shared/kit-data/kit-data';
import InlineLink from 'tooto-app/ui/molecules/inline-link';
import DashboardButton from 'tooto-app/molecules/dashboard-button';

import './export-complete.scss';

export default function ExportComplete() {
	const exportContext = useContext( ExportContext ),
		navigate = useNavigate(),
		downloadLink = useRef( null ),
		getFooter = () => (
			<ActionsFooter>
				<DashboardButton text={ __( 'Close', 'tooto' ) } />
			</ActionsFooter>
		),
		downloadFile = () => {
			if ( ! downloadLink.current ) {
				const link = document.createElement( 'a' );

				link.href = 'data:text/plain;base64,' + exportContext.data.exportedData.file;
				link.download = 'tooto-kit.zip';

				downloadLink.current = link;
			}

			downloadLink.current.click();
		},
		getDownloadLink = () => (
			<InlineLink onClick={ downloadFile } italic>
				{ __( 'Click here', 'tooto' ) }
			</InlineLink>
		);

	useEffect( () => {
		if ( exportContext.data.exportedData ) {
			downloadFile();
		} else {
			navigate( '/export' );
		}
	}, [ exportContext.data.downloadUrl ] );

	return (
		<Layout type="export" footer={ getFooter() }>
			<WizardStep
				image={ tootoAppConfig.assets_url + 'images/go-pro.svg' }
				heading={ __( 'Your export is ready!', 'tooto' ) }
				description={ __( 'Now you can import this kit and use it on other sites.', 'tooto' ) }
				notice={ (
					<>
						{ __( 'Download not working?', 'tooto' ) } { getDownloadLink() } { __( 'to download', 'tooto' ) }
					</>
				) }
			>
				<KitData data={ exportContext.data?.exportedData?.manifest } />
			</WizardStep>
		</Layout>
	);
}
