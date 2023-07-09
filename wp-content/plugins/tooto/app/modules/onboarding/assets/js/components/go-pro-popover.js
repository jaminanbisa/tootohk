import { OnboardingContext } from '../context/context';

import PopoverDialog from 'tooto-app/ui/popover-dialog/popover-dialog';
import Checklist from './checklist';
import ChecklistItem from './checklist-item';
import Button from './button';
import { useCallback, useContext } from 'react';

export default function GoProPopover( props ) {
	const { state, updateState } = useContext( OnboardingContext );

	// Handle the Pro Upload popup window.
	const alreadyHaveProButtonRef = useCallback( ( alreadyHaveProButton ) => {
		if ( ! alreadyHaveProButton ) {
			return;
		}

		alreadyHaveProButton.addEventListener( 'click', ( event ) => {
			event.preventDefault();

			tootoCommon.events.dispatchEvent( {
				event: 'already have pro',
				version: '',
				details: {
					placement: tootoAppConfig.onboarding.eventPlacement,
					step: state.currentStep,
				},
			} );

			// Open the Pro Upload screen in a popup.
			window.open(
				alreadyHaveProButton.href + '&mode=popup',
				'tootoUploadPro',
				`toolbar=no, menubar=no, width=728, height=531, top=100, left=100`,
			);

			// Run the callback for when the upload succeeds.
			tootoCommon.elements.$body
				.on( 'tooto/upload-and-install-pro/success', () => {
					updateState( {
						hasPro: true,
						proNotice: {
							type: 'success',
							icon: 'eicon-check-circle-o',
							message: __( 'tooto Pro has been successfully installed.', 'tooto' ),
						},
					} );
				} );
		} );
	}, [] );

	// The buttonsConfig prop is an array of objects. To find the 'Upgrade Now' button, we need to iterate over the object.
	const goProButton = props.buttonsConfig.find( ( button ) => 'go-pro' === button.id ),
		getElProButton = {
			text: __( 'Upgrade Now', 'tooto' ),
			className: 'e-onboarding__go-pro-cta',
			target: '_blank',
			href: 'https://tooto.com/pro/?utm_source=onboarding-wizard&utm_campaign=gopro&utm_medium=wp-dash&utm_content=top-bar-dropdown&utm_term=' + tootoAppConfig.onboarding.onboardingVersion,
			tabIndex: 0,
			onClick: () => {
				tootoCommon.events.dispatchEvent( {
					event: 'get tooto pro',
					version: '',
					details: {
						placement: tootoAppConfig.onboarding.eventPlacement,
						step: state.currentStep,
					},
				} );
			},
		};

	return (
		<PopoverDialog
			targetRef={ goProButton.elRef }
			wrapperClass="e-onboarding__go-pro"
		>
			<div className="e-onboarding__go-pro-content">
				<h2 className="e-onboarding__go-pro-title">{ __( 'Ready to Get tooto Pro?', 'tooto' ) }</h2>
				<Checklist>
					<ChecklistItem>{ __( '90+ Basic & Pro widgets', 'tooto' ) }</ChecklistItem>
					<ChecklistItem>{ __( '300+ Basic & Pro templates', 'tooto' ) }</ChecklistItem>
					<ChecklistItem>{ __( 'Premium Support', 'tooto' ) }</ChecklistItem>
				</Checklist>
				<div className="e-onboarding__go-pro-paragraph">
					{ __( 'And so much more!', 'tooto' ) }
				</div>
				<div className="e-onboarding__go-pro-paragraph">
					<Button buttonSettings={ getElProButton } />
				</div>
				<div className="e-onboarding__go-pro-paragraph">
					<a tabIndex="0" className="e-onboarding__go-pro-already-have" ref={ alreadyHaveProButtonRef } href={ tootoAppConfig.onboarding.urls.uploadPro } rel="opener">
						{ __( 'Already have tooto Pro?', 'tooto' ) }
					</a>
				</div>
			</div>
		</PopoverDialog>
	);
}

GoProPopover.propTypes = {
	buttonsConfig: PropTypes.array.isRequired,
};
