'use strict';

var features = require( './../lib' ),
	config = require( './existing_config.json' );

// Add the feature options to an existing ESLint config...
config.ecmaFeatures = features;

console.dir( config );
