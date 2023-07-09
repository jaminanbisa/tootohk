import { Dialog } from '@tooto/app-ui';
import { Context as TemplatesContext } from '../context/templates';

export default function DialogDelete( props ) {
	const { deleteTemplate, findTemplateItemInState } = React.useContext( TemplatesContext );

	const closeDialog = ( shouldUpdate ) => {
		props.setId( null );

		if ( shouldUpdate ) {
			deleteTemplate( props.id );
		}
	};

	if ( ! props.id ) {
		return '';
	}

	const template = findTemplateItemInState( props.id );
	return (
		<Dialog
			title={ __( 'Move Item To Trash', 'tooto-pro' ) }
			text={ __( 'Are you sure you want to move this item to trash:', 'tooto-pro' ) + ` "${ template.title }"` }
			onSubmit={ () => closeDialog( true ) }
			approveButtonText={ __( 'Move to Trash', 'tooto-pro' ) }
			approveButtonOnClick={ () => closeDialog( true ) }
			approveButtonColor="danger"
			dismissButtonText={ __( 'Cancel', 'tooto-pro' ) }
			dismissButtonOnClick={ () => closeDialog() }
			onClose={ () => closeDialog() }
		/>
	);
}

DialogDelete.propTypes = {
	id: PropTypes.number,
	setId: PropTypes.func.isRequired,
};
