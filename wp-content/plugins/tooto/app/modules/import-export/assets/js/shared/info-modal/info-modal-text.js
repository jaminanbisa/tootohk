import { arrayToClassName } from 'tooto-app/utils/utils.js';

import Text from 'tooto-app/ui/atoms/text';

export default function InfoModalText( props ) {
	return (
		<Text variant="sm" className={ arrayToClassName( [ 'e-app-import-export-info-modal__text', props.className ] ) }>
			{ props.children }
		</Text>
	);
}

InfoModalText.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any.isRequired,
};

InfoModalText.defaultProps = {
	className: '',
};
