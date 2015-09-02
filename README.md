ECMA Features
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [ESLint](http://eslint.org/) JavaScript language options.


## Installation

``` bash
$ npm install eslint-ecma-features
```


## Usage

``` javascript
var features = require( 'eslint-ecma-features' );
```

#### features

[ESLint](http://eslint.org/) JavaScript language options.

``` javascript
console.dir( features );
/*
	{
		'arrowFunctions': true,
		'binaryLiterals': true,
		...
	}
*/
```


## Examples

``` javascript
var features = require( 'eslint-ecma-features' ),
	config = require( './existing_config.json' );

// Add the feature options to an existing ESLint config...
config.ecmaFeatures = features;

console.dir( config );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/eslint-ecma-features.svg
[npm-url]: https://npmjs.org/package/eslint-ecma-features

[travis-image]: http://img.shields.io/travis/kgryte/eslint-ecma-features/master.svg
[travis-url]: https://travis-ci.org/kgryte/eslint-ecma-features

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/eslint-ecma-features/master.svg
[codecov-url]: https://codecov.io/github/kgryte/eslint-ecma-features?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/eslint-ecma-features.svg
[dependencies-url]: https://david-dm.org/kgryte/eslint-ecma-features

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/eslint-ecma-features.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/eslint-ecma-features

[github-issues-image]: http://img.shields.io/github/issues/kgryte/eslint-ecma-features.svg
[github-issues-url]: https://github.com/kgryte/eslint-ecma-features/issues
