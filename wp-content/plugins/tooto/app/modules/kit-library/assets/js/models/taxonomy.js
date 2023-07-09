import BaseModel from './base-model';

export const taxonomyType = [
	{
		key: 'categories',
		label: __( 'Categories', 'tooto' ),
		isOpenByDefault: true,
	},
	{
		key: 'tags',
		label: __( 'Tags', 'tooto' ),
	},
	{
		key: 'features',
		label: __( 'Features', 'tooto' ),
	},
	{
		key: 'subscription_plans',
		label: __( 'Kits by plan', 'tooto' ),
	},
];

export default class Taxonomy extends BaseModel {
	text = '';
	type = 'tag';

	/**
	 * Create a tag from server response
	 *
	 * @param {Taxonomy} taxonomy
	 */
	static createFromResponse( taxonomy ) {
		return new Taxonomy().init( {
			text: taxonomy.text,
			type: taxonomy.type,
		} );
	}
}
