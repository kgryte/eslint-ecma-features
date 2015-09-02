/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	features = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'eslint-ecma-features', function tests() {

	it( 'should export an object', function test() {
		expect( features ).to.be.an( 'object' );
	});

});
