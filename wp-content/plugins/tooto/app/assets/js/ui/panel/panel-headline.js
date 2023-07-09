import { arrayToClassName } from 'tooto-app/utils/utils.js';

import Card from 'tooto-app/ui/card/card';

export default function PanelHeadline( props ) {
	return (
		<Card.Headline className={ arrayToClassName( [ 'eps-panel__headline', props.className ] ) }>
			{ props.children }
		</Card.Headline>
	);
}

PanelHeadline.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any.isRequired,
};

PanelHeadline.defaultProps = {
	className: '',
};
