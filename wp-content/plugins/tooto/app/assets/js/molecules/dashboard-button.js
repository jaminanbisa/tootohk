import Button from 'tooto-app/ui/molecules/button';

import useAction from 'tooto-app/hooks/use-action';

import { arrayToClassName } from 'tooto-app/utils/utils.js';

export default function DashboardButton( props ) {
	const action = useAction(),
		baseClassName = 'e-app-dashboard-button',
		classes = [ baseClassName, props.className ];

	return (
		<Button
			{ ...props }
			className={ arrayToClassName( classes ) }
			text={ props.text }
			onClick={ action.backToDashboard }
		/>
	);
}

DashboardButton.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string,
};

DashboardButton.defaultProps = {
	className: '',
	variant: 'contained',
	color: 'primary',
	text: __( 'Back to dashboard', 'tooto' ),
};
