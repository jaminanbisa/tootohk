import InlineLink from 'tooto-app/ui/molecules/inline-link';
import InfoModal from './info-modal';

export default function ExportInfoModal( props ) {
	return (
		<InfoModal { ...props } title={ __( 'Export a Website Kit', 'tooto' ) }>
			<InfoModal.Section>
				<InfoModal.Heading>{ __( 'What’s a Website Kit?', 'tooto' ) }</InfoModal.Heading>
				<InfoModal.Text>
					<>
						{ __( 'A Website Kit is a .zip file that contains all the parts of a complete site. It’s an easy way to get a site up and running quickly.', 'tooto' ) }
						<br /><br />
						<InlineLink url="https://go.tooto.com/app-what-are-kits">{ __( ' Learn more about Website Kits', 'tooto' ) }</InlineLink>
					</>
				</InfoModal.Text>
			</InfoModal.Section>

			<InfoModal.Section>
				<InfoModal.Heading>{ __( 'How does exporting work?', 'tooto' ) }</InfoModal.Heading>
				<InfoModal.Text>
					<>
						{ __( 'To turn your site into a Website Kit, select the templates, content, settings and plugins you want to include. Once it’s ready, you’ll get a .zip file that you can import to other sites.', 'tooto' ) }
						<br /><br />
						<InlineLink url="http://go.tooto.com/app-export-kit">{ __( 'Learn More', 'tooto' ) }</InlineLink>
					</>
				</InfoModal.Text>
			</InfoModal.Section>
		</InfoModal>
	);
}
