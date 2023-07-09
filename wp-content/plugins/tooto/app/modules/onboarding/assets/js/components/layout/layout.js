import { useRef, useContext, useEffect } from 'react';
import { OnboardingContext } from '../../context/context';

import Header from './header';
import ProgressBar from '../progress-bar/progress-bar';
import Content from '../../../../../../assets/js/layout/content';
import Connect from '../../utils/connect';

export default function Layout( props ) {
	useEffect( () => {
		// Send modal load event for current step.
		tootoCommon.events.dispatchEvent( {
			event: 'modal load',
			version: '',
			details: {
				placement: tootoAppConfig.onboarding.eventPlacement,
				step: props.pageId,
				user_state: tootoCommon.config.library_connect.is_connected ? 'logged' : 'anon',
			},
		} );

		updateState( {
			currentStep: props.pageId,
			nextStep: props.nextStep || '',
			proNotice: null,
		} );
	}, [ props.pageId ] );

	const { state, updateState } = useContext( OnboardingContext ),
		headerButtons = [],
		goProButtonRef = useRef(),
		createAccountButton = {
			id: 'create-account',
			text: __( 'Create Account', 'tooto-pro' ),
			hideText: false,
			elRef: useRef(),
			url: tootoAppConfig.onboarding.urls.signUp + tootoAppConfig.onboarding.utms.connectTopBar,
			target: '_blank',
			rel: 'opener',
			onClick: () => {
				tootoCommon.events.dispatchEvent( {
					event: 'create account',
					version: '',
					details: {
						placement: tootoAppConfig.onboarding.eventPlacement,
						step: state.currentStep,
						source: 'header',
					},
				} );
			},
		};

	if ( state.isLibraryConnected ) {
		headerButtons.push( {
			id: 'my-tooto',
			text: __( 'My tooto', 'tooto-pro' ),
			hideText: false,
			icon: 'eicon-user-circle-o',
			url: 'https://my.tooto.com/?utm_source=onboarding-wizard&utm_medium=wp-dash&utm_campaign=my-account&utm_content=top-bar&utm_term=' + tootoAppConfig.onboarding.onboardingVersion,
			target: '_blank',
			onClick: () => {
				tootoCommon.events.dispatchEvent( {
					event: 'my tooto click',
					version: '',
					details: {
						placement: tootoAppConfig.onboarding.eventPlacement,
						step: state.currentStep,
						source: 'header',
					},
				} );
			},
		} );
	} else {
		headerButtons.push( createAccountButton );
	}

	if ( ! state.hasPro ) {
		headerButtons.push( {
			id: 'go-pro',
			text: __( 'Upgrade', 'tooto' ),
			hideText: false,
			className: 'eps-button__go-pro-btn',
			url: 'https://tooto.com/pro/?utm_source=onboarding-wizard&utm_campaign=gopro&utm_medium=wp-dash&utm_content=top-bar&utm_term=' + tootoAppConfig.onboarding.onboardingVersion,
			target: '_blank',
			elRef: goProButtonRef,
			onClick: () => {
				tootoCommon.events.dispatchEvent( {
					event: 'go pro',
					version: '',
					details: {
						placement: tootoAppConfig.onboarding.eventPlacement,
						step: state.currentStep,
					},
				} );
			},
		} );
	}

	return (
		<div className="eps-app__lightbox">
			<div className="eps-app e-onboarding">
				{ ! state.isLibraryConnected &&
					<Connect
						buttonRef={ createAccountButton.elRef }
					/>
				}
				<Header
					title={ __( 'Getting Started', 'tooto' ) }
					buttons={ headerButtons }
				/>
				<div className={ 'eps-app__main e-onboarding__page-' + props.pageId }>
					<Content className="e-onboarding__content">
						<ProgressBar />
						{ props.children }
					</Content>
				</div>
			</div>
		</div>
	);
}

Layout.propTypes = {
	pageId: PropTypes.string.isRequired,
	nextStep: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.any.isRequired,
};
