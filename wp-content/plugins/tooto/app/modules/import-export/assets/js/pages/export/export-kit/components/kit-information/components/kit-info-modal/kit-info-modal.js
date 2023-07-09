import ModalProvider from 'tooto-app/ui/modal/modal';
import Heading from 'tooto-app/ui/atoms/heading';
import Text from 'tooto-app/ui/atoms/text';

export default function KitInfoModal( props ) {
	return (
		<ModalProvider { ...props } className="e-app-export-kit-info-modal" title={ __( 'Website Kit Information', 'tooto' ) }>
			<ModalProvider.Section>
				<Heading className="e-app-export-kit-info-modal__heading" variant="h2" tag="h3">
					{ __( 'What is kit information?', 'tooto' ) }
				</Heading>
				<Text>
					{ __( 'These are the details you’ll use to quickly find and apply this kit in the future, even as your collection grows.', 'tooto' ) }
				</Text>
			</ModalProvider.Section>
		</ModalProvider>
	);
}
