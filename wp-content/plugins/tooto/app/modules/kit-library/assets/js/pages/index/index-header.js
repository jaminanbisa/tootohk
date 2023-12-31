import Header from '../../components/layout/header';
import { ModalProvider, Heading, Text, Button } from '@tooto/app-ui';
import { useMemo, useState, useRef } from 'react';
import { useNavigate } from '@reach/router';
import PopoverDialog from 'tooto-app/ui/popover-dialog/popover-dialog';
import { appsEventTrackingDispatch } from 'tooto-app/event-track/apps-event-tracking';

import './index-header.scss';

export default function IndexHeader( props ) {
	const navigate = useNavigate();
	const [ isInfoModalOpen, setIsInfoModalOpen ] = useState( false );
	const importRef = useRef();
	const eventTracking = ( command, element = null, eventType = 'click', modalType = null ) => {
		appsEventTrackingDispatch(
			command,
			{
				element,
				event_type: eventType,
				page_source: 'home page',
				element_position: 'app_header',
				modal_type: modalType,
			},
		);
	};
	const onClose = ( e ) => {
		const element = e.target.classList.contains( 'eps-modal__overlay' ) ? 'overlay' : 'x';
		eventTracking( 'kit-library/modal-close', element, null, 'info' );
	};
	const buttons = useMemo( () => [
		{
			id: 'info',
			text: __( 'Info', 'tooto-pro' ),
			hideText: true,
			icon: 'eicon-info-circle-o',
			onClick: () => {
				eventTracking( 'kit-library/seek-more-info' );
				setIsInfoModalOpen( true );
			},
		},
		{
			id: 'refetch',
			text: __( 'Refetch', 'tooto-pro' ),
			hideText: true,
			icon: `eicon-sync ${ props.isFetching ? 'eicon-animation-spin' : '' }`,
			onClick: () => {
				eventTracking( 'kit-library/refetch' );
				props.refetch();
			},
		},
		{
			id: 'import',
			text: __( 'Import', 'tooto-pro' ),
			hideText: true,
			icon: 'eicon-upload-circle-o',
			elRef: importRef,
			onClick: () => {
				eventTracking( 'kit-library/kit-import' );
				navigate( '/import?referrer=kit-library' );
			},
		},
	], [ props.isFetching, props.refetch ] );

	return (
		<>
			<Header buttons={ buttons } />
			<PopoverDialog
				targetRef={ importRef }
				wrapperClass="e-kit-library__tooltip"
			>
				{ __( 'Import Kit', 'tooto' ) }
			</PopoverDialog>
			<ModalProvider title={ __( 'Welcome to the Library', 'tooto' ) }
				show={ isInfoModalOpen }
				setShow={ setIsInfoModalOpen }
				onOpen={ () => eventTracking( 'kit-library/modal-open', null, 'load', 'info' ) }
				onClose={ ( e ) => onClose( e ) }
			>
				<div className="e-kit-library-header-info-modal-container">
					<Heading tag="h3" variant="h3">{ __( 'What\'s a Website Kit?', 'tooto' ) }</Heading>
					<Text>{ __( 'A Website Kit is full, ready-made design that you can apply to your site. It includes all the pages, parts, settings and content that you\'d expect in a fully functional website.', 'tooto' ) }</Text>
				</div>
				<div className="e-kit-library-header-info-modal-container">
					<Heading tag="h3" variant="h3">{ __( 'What\'s going on in the Kit Library?', 'tooto' ) }</Heading>
					<Text>
						{ __( 'Search & filter for kits by category and tags, or browse through individual kits to see what\'s inside.', 'tooto' ) }
						<br />
						{ __( 'Once you\'ve picked a winner, apply it to your site!', 'tooto' ) }
					</Text>
				</div>
				<div>
					<Heading tag="h3" variant="h3">{ __( 'Happy browsing!', 'tooto' ) }</Heading>
					<Text>
						<Button
							url="https://go.tooto.com/app-kit-library-how-to-use-kits/"
							target="_blank"
							rel="noreferrer"
							text={ __( 'Learn more', 'tooto' ) }
							color="link"
							onClick={ () => {
								eventTracking( 'kit-library/seek-more-info', 'text link', null, 'info' );
							} }
						/>{ ' ' }
						{ __( 'about using templates', 'tooto' ) }
					</Text>
				</div>
			</ModalProvider>
		</>
	);
}

IndexHeader.propTypes = {
	refetch: PropTypes.func.isRequired,
	isFetching: PropTypes.bool,
};
