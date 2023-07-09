import { Text, Button } from '@tooto/app-ui';
import { appsEventTrackingDispatch } from 'tooto-app/event-track/apps-event-tracking';

import './envato-promotion.scss';

export default function EnvatoPromotion( props ) {
	const eventTracking = ( command, eventType = 'click' ) => {
		appsEventTrackingDispatch(
			command,
			{
				page_source: 'home page',
				element_position: 'library_bottom_promotion',
				category: props.category && ( '/favorites' === props.category ? 'favorites' : 'all kits' ),
				event_type: eventType,
			},
		);
	};

	return (
		<Text className="e-kit-library-bottom-promotion" variant="xl">
			{ __( 'Looking for more Kits?', 'tooto' ) } { ' ' }
			<Button
				variant="underlined"
				color="link"
				url="https://go.tooto.com/app-envato-kits/"
				target="_blank"
				rel="noreferrer"
				text={ __( 'Check out tooto Template Kits on ThemeForest', 'tooto' ) }
				onClick={ () => eventTracking( 'kit-library/check-kits-on-theme-forest' ) }
			/>
		</Text>
	);
}
 EnvatoPromotion.propTypes = {
	category: PropTypes.string,
 };
