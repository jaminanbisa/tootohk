const karmaCoreConfig = require( '../tooto/karma.conf' );

module.exports = function( config ) {
	karmaCoreConfig( config );

	// Set base path.
	config.basePath = __dirname + '/../tooto/';

	// Change qunit-tests to pro.
	Object.entries( config.files ).some( ( [ key, path ] ) => {
		if ( 'assets/js/qunit-tests.js' === path ) {
			config.files[ key ] = __dirname + '/' + path;
			return true;
		}
		return false;
	} );
};
