import { useContext, useMemo, useCallback } from 'react';

import { ImportContext } from '../../../../../context/import-context/import-context-provider';

import PluginsSelection from '../../../../../shared/plugins-selection/plugins-selection';
import Heading from 'tooto-app/ui/atoms/heading';

import { PLUGIN_STATUS_MAP } from '../../../../../hooks/use-plugins';
import { PLUGINS_KEYS } from '../../../../../hooks/use-plugins-data';

const layout = [ 3, 1, 1 ];

export default function PluginsToImport( { plugins } ) {
	if ( ! plugins?.length ) {
		return null;
	}

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const importContext = useContext( ImportContext ),
		getPluginsToImport = () => {
			const { name, status } = plugins[ 0 ];

			// If tooto Pro is the first plugin and is not inactive, it should not be displayed.
			if ( PLUGINS_KEYS.tooto_PRO === name && PLUGIN_STATUS_MAP.INACTIVE !== status ) {
				return plugins.splice( 1 );
			}

			return plugins;
		},
		// eslint-disable-next-line react-hooks/rules-of-hooks
		handleOnSelect = useCallback( ( selectedPlugins ) => importContext.dispatch( { type: 'SET_PLUGINS', payload: selectedPlugins } ), [] ),
		// eslint-disable-next-line react-hooks/rules-of-hooks
		pluginsToImport = useMemo( () => getPluginsToImport(), [ plugins ] ),
		// eslint-disable-next-line react-hooks/rules-of-hooks
		initialSelected = useMemo( () => pluginsToImport.map( ( plugin, index ) => index ), [ plugins ] ),
		isAllRequiredPluginsSelected = pluginsToImport.length === importContext.data.plugins.length;

	if ( ! pluginsToImport.length ) {
		return null;
	}

	return (
		<div className="e-app-import-plugins__section">
			<Heading variant="h5" tag="h3" className="e-app-import-plugins__section-heading">
				{
					isAllRequiredPluginsSelected
					? __( 'Plugins to add:', 'tooto' )
					: __( 'Missing Required Plugins:', 'tooto' )
				}
			</Heading>

			<PluginsSelection
				plugins={ pluginsToImport }
				initialSelected={ initialSelected }
				onSelect={ handleOnSelect }
				layout={ layout }
			/>
		</div>
	);
}

PluginsToImport.propTypes = {
	plugins: PropTypes.array,
};
