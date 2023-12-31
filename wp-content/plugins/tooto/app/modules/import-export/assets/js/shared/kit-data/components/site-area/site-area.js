import Text from 'tooto-app/ui/atoms/text';
import Icon from 'tooto-app/ui/atoms/icon';
import InlineLink from 'tooto-app/ui/molecules/inline-link';
import { appsEventTrackingDispatch } from 'tooto-app/event-track/apps-event-tracking';

export default function SiteArea( { text, link } ) {
	const eventTracking = ( command, eventType = 'click' ) => {
		appsEventTrackingDispatch(
			command,
			{
				site_area: text,
				page_source: 'import complete',
				event_type: eventType,
			},
		);
	};

	return (
		<InlineLink url={ link } color="secondary" underline="none" onClick={ () => eventTracking( 'kit-library/open-site-area' ) }>
			<Text className="e-app-import-export-kit-data__site-area">
				{ text } { link && <Icon className="eicon-editor-external-link" /> }
			</Text>
		</InlineLink>
	);
}

SiteArea.propTypes = {
	text: PropTypes.string,
	link: PropTypes.string,
};
