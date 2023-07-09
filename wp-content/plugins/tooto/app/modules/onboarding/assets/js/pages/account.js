import { useRef, useContext, useState } from 'react';
import { useNavigate } from '@reach/router';
import { OnboardingContext } from '../context/context';
import Connect from '../utils/connect';
import Layout from '../components/layout/layout';
import PageContentLayout from '../components/layout/page-content-layout';

export default function Account() {
	const { state, updateState, getStateObjectToUpdate } = useContext( OnboardingContext ),
		[ noticeState, setNoticeState ] = useState( null ),
		navigate = useNavigate(),
		pageId = 'account',
		nextStep = state.isHelloThemeActivated ? 'siteName' : 'hello',
		actionButtonRef = useRef(),
		alreadyHaveAccountLinkRef = useRef();

	let skipButton;

	if ( 'completed' !== state.steps[ pageId ] ) {
		skipButton = {
			text: __( 'Skip', 'tooto' ),
		};
	}

	let pageTexts = {};

	if ( state.isLibraryConnected ) {
		pageTexts = {
			firstLine: __( 'To get the most out of tooto, we\'ll help you take your first steps:', 'tooto' ),
			listItems: [
				__( 'Set your site\'s theme', 'tooto' ),
				__( 'Give your site a name & logo', 'tooto' ),
				__( 'Choose how to start creating', 'tooto' ),
			],
		};
	} else {
		pageTexts = {
			firstLine: __( 'To get the most out of tooto, we’ll connect your account.', 'tooto' ) +
			' ' + __( 'Then you can:', 'tooto' ),
			listItems: [
				__( 'Choose from countless professional templates', 'tooto' ),
				__( 'Manage your site with our handy dashboard', 'tooto' ),
				__( 'Take part in the community forum, share & grow together', 'tooto' ),
			],
		};
	}

	// If the user is not connected, the on-click action is handled by the <Connect> component, so there is no onclick
	// property.
	const actionButton = {
		role: 'button',
	};

	if ( state.isLibraryConnected ) {
		actionButton.text = __( 'Let’s do it', 'tooto' );

		actionButton.onClick = () => {
			tootoCommon.events.dispatchEvent( {
				event: 'next',
				version: '',
				details: {
					placement: tootoAppConfig.onboarding.eventPlacement,
					step: state.currentStep,
				},
			} );

			updateState( getStateObjectToUpdate( state, 'steps', pageId, 'completed' ) );

			navigate( 'onboarding/' + nextStep );
		};
	} else {
		actionButton.text = __( 'Create my account', 'tooto' );
		actionButton.href = tootoAppConfig.onboarding.urls.signUp + tootoAppConfig.onboarding.utms.connectCta;
		actionButton.ref = actionButtonRef;
		actionButton.onClick = () => {
			tootoCommon.events.dispatchEvent( {
				event: 'create account',
				version: '',
				details: {
					placement: tootoAppConfig.onboarding.eventPlacement,
					source: 'cta',
				},
			} );
		};
	}

	const connectSuccessCallback = ( data ) => {
		const stateToUpdate = getStateObjectToUpdate( state, 'steps', pageId, 'completed' );

		stateToUpdate.isLibraryConnected = true;

		tootoCommon.config.library_connect.is_connected = true;
		tootoCommon.config.library_connect.current_access_level = data.kits_access_level || data.access_level || 0;

		updateState( stateToUpdate );

		tootoCommon.events.dispatchEvent( {
			event: 'indication prompt',
			version: '',
			details: {
				placement: tootoAppConfig.onboarding.eventPlacement,
				step: state.currentStep,
				action_state: 'success',
				action: 'connect account',
			},
		} );

		setNoticeState( {
			type: 'success',
			icon: 'eicon-check-circle-o',
			message: 'Alrighty - your account is connected.',
		} );

		navigate( 'onboarding/' + nextStep );
	};

	const connectFailureCallback = () => {
		tootoCommon.events.dispatchEvent( {
			event: 'indication prompt',
			version: '',
			details: {
				placement: tootoAppConfig.onboarding.eventPlacement,
				step: state.currentStep,
				action_state: 'failure',
				action: 'connect account',
			},
		} );

		setNoticeState( {
			type: 'error',
			icon: 'eicon-warning',
			message: __( 'Oops, the connection failed. Try again.', 'tooto' ),
		} );

		navigate( 'onboarding/' + nextStep );
	};

	return (
		<Layout pageId={ pageId } nextStep={ nextStep }>
			<PageContentLayout
				image={ tootoCommon.config.urls.assets + 'images/app/onboarding/Illustration_Account.svg' }
				title={ __( 'You\'re here! Let\'s set things up.', 'tooto' ) }
				actionButton={ actionButton }
				skipButton={ skipButton }
				noticeState={ noticeState }
			>
				{ actionButton.ref && ! state.isLibraryConnected &&
				<Connect
					buttonRef={ actionButton.ref }
					successCallback={ ( data ) => connectSuccessCallback( data ) }
					errorCallback={ connectFailureCallback }
				/> }
				<span>
					{ pageTexts.firstLine }
				</span>
				<ul>
					{ pageTexts.listItems.map( ( listItem, index ) => {
						return <li key={ 'listItem' + index }>{ listItem }</li>;
					} ) }
				</ul>
			</PageContentLayout>
			{
				! state.isLibraryConnected && (
					<div className="e-onboarding__footnote">
						<p>
							{ __( 'Already have one?', 'tooto' ) + ' ' }
							<a
								ref={ alreadyHaveAccountLinkRef }
								href={ tootoAppConfig.onboarding.urls.connect + tootoAppConfig.onboarding.utms.connectCtaLink }
								onClick={ () => {
									tootoCommon.events.dispatchEvent( {
										event: 'connect account',
										version: '',
										details: {
											placement: tootoAppConfig.onboarding.eventPlacement,
										},
									} );
								} }
							>
								{ __( 'Connect your account', 'tooto' ) }
							</a>
						</p>
						<Connect
							buttonRef={ alreadyHaveAccountLinkRef }
							successCallback={ connectSuccessCallback }
							errorCallback={ connectFailureCallback }
						/>
					</div>
				)
			}
		</Layout>
	);
}
