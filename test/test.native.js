/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var bernoulli = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( bernoulli instanceof Error )
};


// FIXTURES //

var BERNOULLI = require( './../lib/bernoulli.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof bernoulli, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a negative number, the function returns `NaN`', opts, function test( t ) {
	var v;
	var i;

	t.strictEqual( isnan( bernoulli( -3.14 ) ), true, 'returns expected value' );

	for ( i = -1; i > -100; i-- ) {
		v = bernoulli( i );
		t.strictEqual( isnan( v ), true, 'returns expected value when provided ' + i );
	}
	t.end();
});

tape( 'if provided `1`, the function returns `0.5`', opts, function test( t ) {
	var v = bernoulli( 1 );
	t.strictEqual( v, 0.5, 'returns expected value' );
	t.end();
});

tape( 'the function returns the nth Bernoulli number for odd numbers', opts, function test( t ) {
	var v;
	var i;
	for ( i = 3; i < 500; i += 2 ) {
		v = bernoulli( i );

		// Odd Bernoulli numbers are equal to zero:
		t.strictEqual( v, 0.0, 'returns the '+i+'th Bernoulli number' );
	}
	t.end();
});

tape( 'the function returns the nth Bernoulli number for even numbers', opts, function test( t ) {
	var v;
	var i;
	for ( i = 0; i < 260; i += 2 ) {
		v = bernoulli( i );
		t.strictEqual( v, BERNOULLI[ i/2 ], 'returns the '+i+'th Bernoulli number' );
	}
	t.end();
});

tape( 'the function returns +/- infinity for large integers', opts, function test( t ) {
	var v;
	var i;
	for ( i = 260; i < 1000; i += 2 ) {
		v = bernoulli( i );
		if ( i % 4 === 0 ) {
			t.strictEqual( v, NINF, 'returns expected value' );
		} else {
			t.strictEqual( v, PINF, 'returns expected value' );
		}
	}
	t.end();
});
