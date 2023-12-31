import { Context as ConditionsContext, ConditionsProvider } from '../../context/conditions';
import { Button, Dialog } from '@tooto/app-ui';
import ConditionType from './condition-type';
import ConditionName from './condition-name';
import ConditionSub from './condition-sub';
import ConditionSubId from './condition-sub-id';
import ConditionConflicts from './condition-conflicts';

export default function ConditionsRows( props ) {
	const {
		conditions,
		createConditionItemInState: create,
		updateConditionItemState: update,
		removeConditionItemInState: remove,
		saveConditions: save,
		action,
		resetActionState,
	} = React.useContext( ConditionsContext );

	const rows = Object.values( conditions ).map( ( condition ) =>
		<div key={ condition.id }>
			<div className="e-site-editor-conditions__row">
				<div
					className={ `e-site-editor-conditions__row-controls ${ condition.conflictErrors.length && 'e-site-editor-conditions__row-controls--error' }` }>
					<ConditionType { ...condition } updateConditions={ update } />
					<div className="e-site-editor-conditions__row-controls-inner">
						<ConditionName { ...condition } updateConditions={ update } />
						<ConditionSub { ...condition } updateConditions={ update } />
						<ConditionSubId { ...condition } updateConditions={ update } />
					</div>
				</div>
				<Button
					className="e-site-editor-conditions__remove-condition"
					text={ __( 'Delete', 'tooto-pro' ) }
					icon="eicon-close"
					hideText={ true }
					onClick={ () => remove( condition.id ) }
				/>
			</div>
			<ConditionConflicts conflicts={ condition.conflictErrors } />
		</div>,
	);

	const isSaving = action.current === ConditionsProvider.actions.SAVE && action.loading;

	return (
		<>
			{
				action.error &&
				<Dialog
					text={ action.error }
					dismissButtonText={ __( 'Go Back', 'tooto-pro' ) }
					dismissButtonOnClick={ resetActionState }
					approveButtonText={ __( 'Learn More', 'tooto-pro' ) }
					approveButtonColor="link"
					approveButtonUrl="https://go.tooto.com/app-theme-builder-conditions-load-issue"
					approveButtonTarget="_target"
				/>
			}
			<div className="e-site-editor-conditions__rows">
				{ rows }
			</div>
			<div className="e-site-editor-conditions__add-button-container">
				<Button
					className="e-site-editor-conditions__add-button"
					variant="contained"
					size="lg"
					text={ __( 'Add Condition', 'tooto-pro' ) }
					onClick={ create }
				/>
			</div>
			<div className="e-site-editor-conditions__footer">
				<Button
					variant="contained"
					color="primary"
					size="lg"
					hideText={ isSaving }
					icon={ isSaving ? 'eicon-loading eicon-animation-spin' : '' }
					text={ __( 'Save & Close', 'tooto-pro' ) }
					onClick={ () => save().then( props.onAfterSave ) }
				/>
			</div>
		</>
	);
}

ConditionsRows.propTypes = {
	onAfterSave: PropTypes.func,
};
