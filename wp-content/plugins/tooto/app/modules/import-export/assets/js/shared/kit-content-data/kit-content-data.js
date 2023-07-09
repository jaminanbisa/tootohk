const kitContentData = [
	{
		type: 'templates',
		data: {
			title: __( 'Templates', 'tooto' ),
			features: {
				open: [
					__( 'Saved Templates', 'tooto' ),
				],
				locked: [
					__( 'Headers', 'tooto' ),
					__( 'Footers', 'tooto' ),
					__( 'Archives', 'tooto' ),
					__( 'Single Posts', 'tooto' ),
					__( 'Single Pages', 'tooto' ),
					__( 'Search Results', 'tooto' ),
					__( '404 Error Page', 'tooto' ),
					__( 'Popups', 'tooto' ),
					__( 'Global widgets', 'tooto' ),
				],
				tooltip: __( 'To import or export these components, you’ll need tooto Pro.', 'tooto' ),
			},
		},
	},
	{
		type: 'content',
		data: {
			title: __( 'Content', 'tooto' ),
			features: {
				open: [
					__( 'tooto Pages', 'tooto' ),
					__( 'Landing Pages', 'tooto' ),
					__( 'tooto Posts', 'tooto' ),
					__( 'WP Pages', 'tooto' ),
					__( 'WP Posts', 'tooto' ),
					__( 'WP Menus', 'tooto' ),
					__( 'Custom Post Types', 'tooto' ),
				],
			},
		},
	},
	{
		type: 'settings',
		data: {
			title: __( 'Site Settings', 'tooto' ),
			features: {
				open: [
					__( 'Global Colors', 'tooto' ),
					__( 'Global Fonts', 'tooto' ),
					__( 'Theme Style settings', 'tooto' ),
					__( 'Layout Settings', 'tooto' ),
					__( 'Lightbox Settings', 'tooto' ),
					__( 'Background Settings', 'tooto' ),
				],
			},
		},
	},
];

export default kitContentData;
