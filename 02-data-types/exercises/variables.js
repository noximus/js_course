/*
  Variables

  1. Declaring Variables
  2. Invoking/calling Variables
  3. Checking type with typeof()
  4. Type conversion
*/

/*
  Instructions: Uncomment lines of code and run this file using `node variables.js`
*/


//
// 1. Declaring Variables
//    A. Declaring a variable
//    B. Assigning a value to a variable
//

// A. Declaring a variable
// var myFirstVariable

// B. Assigning a value to a variable
// myFirstVariable = 'Hello World'

// Combined:
// var mySecondVariable = 'Hello Moon'



//
// 2. Invoking/Calling our variables
//
// console.log( myFirstVariable ) // => 'Hello World'



//
//3. Checking type with typeof()
//
// var a = 1
// console.log( typeof( a ) ) // => 'number'

// var b = 'hey'
// console.log( typeof( b ) ) // => 'string'

// var c = true
// console.log( typeof( c ) ) // => 'boolean'

// var d
// console.log( typeof( d ) ) // => 'undefined'



//
//4. Type conversion
//
// var e = 5
// console.log( typeof( e ) ) // => 'number'
// e = e.toString()
// console.log( typeof( e ) ) // => 'string'
// e = parseInt(e)
// console.log( typeof( e ) ) // => 'number'
// e = e + '0'
// console.log( typeof( e ), e ) // => 'string' 50
// e = undefined
// console.log( typeof( e ) ) // => 'undefined'


//
// Exercise
//

// 1. Save a string into a variable and console.log it
// 2. Save a number into a variable and console.log it
// 3. Save a boolean into a variable and console.log it
// 4. Add two numbers together and save the result to a variable
// 5. Declare a variable and assign a string of your first name to it; declare another variable and assign a string of your last name to it; declare a third variable and assign it the value of the first variable + the second variable and console.log it

/**
 * ES2015
 *
 * The latest version of Javascript, released in 2015, introduced
 * two new ways to declare variables: `let` and `const`. If you're
 * using version 6.9 or higher of node, then you can start using
 * most of the new features introduced in ES2015, including the
 * `let` and `const`!
 *
 * There are a couple of key distinctions between `let`, `const` and
 * the es2015 `var` variable declaration, but the use is the same:
 */

// let myVar = 'this is a variable wit let'
// const myOtherVar = 'this is a variable wit const'

/**
 * There are a couple of key important difference between es2015
 * variable declarations and es5 variable declarations:
 *
 * 1. `let` is used for variables that you intend to change, while
 *    `const` variables are constant.
 * 2. `const` variables are hoisted while `let`
 *    variables have block-level scope. We'll talk about that more
 *    when we learn about functions
 */
