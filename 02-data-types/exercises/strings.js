/*
  Strings

  1. String Values
  2. String Concatenation
  3. String Operations
*/

/*
  Instructions: Uncomment lines of code and run this file using `node strings.js`
*/

//
// 1. String Values
//

// console.log( 'hello world' )
// console.log( 'hello "world", hello' )
// console.log( "hello 'world', hello" )
// console.log( "hello "world", hello" )
// console.log( 'hello 'world', hello' )

//
// 2. String Concatenation
//

// console.log( 'hello ' + 'world' )

// console.log( 'I have ' + 20 + ' dogs!' )

// console.log( 20 + '16' )

//
// 3. String Methods
//

// toUpperCase
// console.log( 'hello'.toUpperCase() ) // => 'HELLO'

// toLowerCase
// console.log( 'HeLlo'.toLowerCase() ) // => 'hello'

//
// Exercise
//

// 1. Concatenate your first and last name into a single string and console.log it
// 2. Using `.charAt()` concatenate the 3rd, 5th and 1st letters of your full name together and console.log it



/**
 * ES2015
 *
 * The latest specification of javascript introduced something called string
 * interpolation. String interpolation is common in many other programming
 * languages, like Ruby and Python, as a way of working with variables and
 * dynamic values that you wish to include in a string message.
 *
 * You can see the comparison between es5 and es2015 here:
 */

// var toIncludeInString = 'Zakk'
//
// // ES5
// console.log( 'My name is ' + toIncludeInString ) // => 'My name is Zakk'
//
// // ES2015 with string interpolation
// console.log( `My name is ${toIncludeInString}` ) // => 'My name is Zakk'

/**
 * The results of both console.log's is the same. I think the es2015 method is
 * easier to read. Which you use is totally up to you!
 */

/**
 * ES2015 also introduced a few new string methods, including `.startsWith()`,
 * `.endsWith()`, `.includes()`, and `.repeate()` - all of which you can read about here:
 * http://exploringjs.com/es6/ch_core-features.html#_new-string-methods
 */
