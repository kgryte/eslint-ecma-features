'use strict';

var features = {};

/**
* FEATURE: arrowFunctions
*	Allow arrow functions. See [arrowFunctions]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}.
*/
features.arrowFunctions = true;

/**
* FEATURE: binaryLiterals
*	Allow binary literals. See [binaryLiterals]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}.
*/
features.binaryLiterals = true;

/**
* FEATURE: blockBindings
*	Enable the use of `let` and `const`. See [blockBindings]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}.
*/
features.blockBindings = true;

/**
* FEATURE: classes
*	Enable the use of classes. See [classes]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}.
*/
features.classes = true;

/**
* FEATURE: defaultParams
*	Enable the use of default function parameters. See [defaultParams]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}.
*/
features.defaultParams = true;

/**
* FEATURE: destructuring
*	Allow the use of destructuring. See [destructuring]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}.
*/
features.destructuring = true;

/**
* FEATURE: forOf
*	Allow the use of `for-of` loops. See [forOf]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}.
*/
features.forOf = true;

/**
* FEATURE: generators
*	Allow the use of generators. See [generators]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}.
*/
features.generators = true;

/**
* FEATURE: modules
*	Allow modules. See [modules]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}.
*/
features.modules = true;

/**
* FEATURE: objectLiteralComputedProperties
*	Allow computed object literal property names. See [objectLiteralComputedProperties]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}.
*/
features.objectLiteralComputedProperties = true;

/**
* FEATURE: objectLiteralDuplicateProperties
*	Do not allow duplicate properties. See [objectLiteralDuplicateProperties]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}.
*/
features.objectLiteralDuplicateProperties = false;

/**
* FEATURE: objectLiteralShorthandMethods
*	Allow object literal shorthand methods. See [objectLiteralShorthandMethods]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}.
*/
features.objectLiteralShorthandMethods = true;

/**
* FEATURE: objectLiteralShorthandProperties
*	Allow object literal shorthand properties. See [objectLiteralShorthandProperties]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}.
*/
features.objectLiteralShorthandProperties = true;

/**
* FEATURE: octalLiterals
*	Allow octal literals. See [octalLiterals]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}.
*/
features.octalLiterals = true;

/**
* FEATURE: regexUFlag
*	Allow the new `u` (unicode) regexp flag to be recognized. See [New ECMAScript 6 Flags]{@link http://eslint.org/docs/rules/no-invalid-regexp#new-ecmascript-6-flags}.
*/
features.regexUFlag = true;

/**
* FEATURE: regexYFlag
*	Allow the new `y` (sticky) regexp flag to be recognized. See [New ECMAScript 6 Flags]{@link http://eslint.org/docs/rules/no-invalid-regexp#new-ecmascript-6-flags}.
*/
features.regexYFlag = true;

/**
* FEATURE: restParams
*	Allow using the rest parameters. See [restParams]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}.
*/
features.restParams = true;

/**
* FEATURE: spread
*	Allow using the spread operator. See [spread]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}.
*/
features.spread = true;

/**
* FEATURE: superInFunctions
*	Allow super references in functions. See [superInFunctions]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}.
*/
features.superInFunctions = true;

/**
* FEATURE: templateStrings
*	Allow template strings. See [templateStrings]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}.
*/
features.templateStrings = true;

/**
* FEATURE: unicodeCodePointEscapes
*	Allow code point escapes. See [unicodeCodePointEscapes]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}.
*/
features.unicodeCodePointEscapes = true;

/**
* FEATURE: globalReturn
*	Do not allow return statements in the global scope. See [globalReturn]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}.
*/
features.globalReturn = false;

/**
* FEATURE: jsx
*	Do not enable JSX. See [jsx]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}.
*/
features.jsx = false;


// EXPORTS //

module.exports = features;
