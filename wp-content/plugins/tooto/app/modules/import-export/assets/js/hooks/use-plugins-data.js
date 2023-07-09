import { useMemo } from 'react';

export const PLUGINS_KEYS = Object.freeze( {
	tooto: 'tooto',
	tooto_PRO: 'tooto Pro',
} );

export default function usePluginsData( plugins ) {
	const getPluginsData = () => {
		if ( ! plugins ) {
			return [];
		}

		const tootoPlugins = [],
			generalPlugins = [];

		plugins.forEach( ( plugin ) => {
			switch ( plugin.name ) {
				case PLUGINS_KEYS.tooto:
					// Making sure that the core plugin is always first.
					tootoPlugins.unshift( plugin );
					break;
				case PLUGINS_KEYS.tooto_PRO:
					// Making sure that the pro plugin is always second.
					tootoPlugins.push( plugin );
					break;
				default:
					generalPlugins.push( plugin );
			}
		} );

		// Making sure that the tooto plugins are always first.
		return tootoPlugins.concat( generalPlugins );
	};

	return {
		pluginsData: useMemo( () => getPluginsData(), [ plugins ] ),
	};
}
