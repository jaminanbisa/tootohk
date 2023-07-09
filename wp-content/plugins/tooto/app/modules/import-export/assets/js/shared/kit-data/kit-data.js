import { memo } from 'react';

import SiteArea from './components/site-area/site-area';
import Included from './components/included/included';
import DataTable from 'tooto-app/molecules/data-table';

import useKitData from './hooks/use-kit-data';

import './kit-data.scss';

const siteEditorPath = tootoAppConfig.hasPro ? '#/site-editor' : '#/site-editor/promotion';

function KitData( { data } ) {
	const { templates, siteSettings, content, plugins } = useKitData( data ),
		{ tootoHomePageUrl, recentlyEditedtootoPageUrl } = data?.configData || tootoAppConfig[ 'import-export' ],
		siteSettingsUrl = tootoHomePageUrl || recentlyEditedtootoPageUrl,
		headers = [
			__( 'Site Area', 'tooto' ),
			__( 'Included', 'tooto' ),
		],
		rowsData = [
			{
				siteArea: __( 'tooto Templates', 'tooto' ),
				link: tootoAppConfig.base_url + siteEditorPath,
				included: templates,
			},
			{
				siteArea: __( 'Site Settings', 'tooto' ),
				link: siteSettingsUrl ? siteSettingsUrl + '#e:run:panel/global/open' : '',
				included: siteSettings,
			},
			{
				siteArea: __( 'Content', 'tooto' ),
				link: tootoAppConfig.admin_url + 'edit.php?post_type=page',
				included: content,
			},
			{
				siteArea: __( 'Plugins', 'tooto' ),
				link: tootoAppConfig.admin_url + 'plugins.php',
				included: plugins,
			},
		],
		rows = rowsData
			.map( ( { siteArea, included, link } ) => {
				if ( ! included.length ) {
					// eslint-disable-next-line array-callback-return
					return;
				}

				return [
					<SiteArea key={ siteArea } text={ siteArea } link={ link } />,
					<Included key={ included } data={ included } />,
				];
			} )
			.filter( ( row ) => row );

	if ( ! rows.length ) {
		return null;
	}

	return (
		<DataTable
			className="e-app-import-export-kit-data"
			headers={ headers }
			rows={ rows }
			layout={ [ 1, 3 ] }
		/>
	);
}

KitData.propTypes = {
	data: PropTypes.object,
};

export default memo( KitData );
