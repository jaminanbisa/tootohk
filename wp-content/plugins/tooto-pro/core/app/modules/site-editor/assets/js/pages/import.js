import { DropZone, Dialog } from '@tooto/app-ui';
import { Context as TemplatesContext, TemplatesProvider } from '../context/templates';
import BackButton from '../molecules/back-button';

export default function Import() {
	const { importTemplates, action, resetActionState } = React.useContext( TemplatesContext ),
		[ importedTemplate, setImportedTemplate ] = React.useState( null ),
		isImport = React.useMemo( () => action.current === TemplatesProvider.actions.IMPORT, [ action ] ),
		isUploading = React.useMemo( () => isImport && action.loading, [ action ] ),
		hasError = React.useMemo( () => isImport && action.error, [ action ] );

	const upload = React.useCallback( ( file ) => {
		if ( isUploading ) {
			return;
		}

		readFile( file )
			.then( ( fileData ) => importTemplates( { fileName: file.name, fileData } ) )
			.then( ( response ) => {
				// For now it show a dialog for the first template ONLY!
				setImportedTemplate( response.data[ 0 ] );
			} );
	}, [] );

	return (
		<section className="site-editor__import">
			{
				importedTemplate &&
					<Dialog
						title={ __( 'Your template was imported', 'tooto-pro' ) }
						approveButtonText={ __( 'Preview', 'tooto-pro' ) }
						approveButtonUrl={ importedTemplate.url }
						approveButtonTarget="_blank"
						dismissButtonText={ __( 'Edit', 'tooto-pro' ) }
						dismissButtonUrl={ importedTemplate.editURL }
						dismissButtonTarget="_top"
						onClose={ () => setImportedTemplate( null ) }
					/>
			}
			{
				hasError &&
					<Dialog
						title={ action.error }
						approveButtonText={ __( 'Learn More', 'tooto-pro' ) }
						approveButtonUrl="https://go.tooto.com/app-theme-builder-import-issue"
						approveButtonTarget="_blank"
						approveButtonColor="link"
						dismissButtonText={ __( 'Go Back', 'tooto-pro' ) }
						dismissButtonOnClick={ resetActionState }
						onClose={ resetActionState }
					/>
			}
			<BackButton />
			<DropZone
				heading={ __( 'Import Template To Your Library', 'tooto-pro' ) }
				text={ __( 'Drag & Drop your .JSON or .zip template file', 'tooto-pro' ) }
				secondaryText={ __( 'or', 'tooto-pro' ) }
				onFileSelect={ upload }
				isLoading={ isUploading }
				filetypes={ [ 'zip', 'json' ] }
			/>
		</section>
	);
}

function readFile( file ) {
	return new Promise( ( ( resolve ) => {
		const fileReader = new FileReader();

		fileReader.readAsDataURL( file );

		fileReader.onload = ( event ) => {
			// Replace the mime type that prepended to the base64 with empty string and return a
			// resolved promise only with the base64 string.
			resolve( event.target.result.replace( /^[^,]+,/, '' ) );
		};
	} ) );
}
