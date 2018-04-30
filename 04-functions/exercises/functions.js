/*

  Functions

  Instructions ( How to use this file ):
  Uncomment lines of code and run the file using `node control-flow.js` to see their output. Make sure you recomment out the parts of the file you just executed before moving on!

  1. Declaring a function
  2. Using Parameters and Arguments
  3. Return values
  4. Using Scope
  5. Using Functions

*/


/*

  1. Declaring a function

*/

// Function declaration
// function myFirstFunction() {
//   console.log( 'this is my first function' )
// }
//
// myFirstFunction
// myFirstFunction()


// ----------
// Referencing our function:
// myFirstFunction

// Calling our function
// myFirstFunction()


/*

  2. Using Parameters and Arguments

*/


// // ----------
// var number = 0
// function addOneToNumber() {
//   number += 1
// }
//
// function addTwoToNumber() {
//   number += 2
// }


// // ----------
// function addNumbers( numOne, numTwo ) {
//   console.log(numOne + numTwo)
// }
//
// addNumbers( 1, 2 )


/*

  3. Return values

*/

// function addOne( numOne, numTwo ) {
//   return numOne + numTwo
// }
//
// var myNum = addOne( 5, 10 )
// console.log( myNum )



// // Side effect
// var number = 0
//
// function addNumber( adder ) {
//   number += adder
// }
//
// addNumber( 5 )
// // => number = 5
//
// // Output
// function addNumbers( num1, num2 ) {
//   return num1 + num2
// }
//
// var number = addNumbers( 5, 10 )
// console.log( number ) // => 15



/*

  4. Using Scope

*/

// Scope Example 1:
// var a = 1
//
// function addThree( ) {
//   console.log( a + 3 )
// }




// Scope Example 2:
// function myFunction() {
//   var a = 1
// }
//
// console.log( a )


// Scope Example 3:
// var a = 1
//
// function myFunction() {
//   console.log( a )
// }

// Scope Example 4:
// var a = 1
// function firstFunction() {
//   // do we expect this to work?
//   var b = 2
//
//   console.log( a )
//   console.log( b )
//
//   function internalFunction() {
//     var c = 3
//
//     // do we expect this to work?
//     console.log( a )
//     console.log( b )
//     console.log( c )
//   }
//
//   // do we expect this to work?
//   console.log( a )
//   console.log( b )
//   console.log( c )
// }
// // do we expect this to work?
// console.log( a )
// console.log( b )
// console.log( c )


/*

  5. Using Functions

*/


// Functions as variables
var myFunction = function () {
  console.log( 'myFunction variable' )
}

myFunction()


/*

  6. Functional Programming

*/


// Pure functions
function isCurrentYearLeapYear() {

   const year = new Date().getFullYear()

   if(year % 4 !== 0) {
     return false
   } else if(year % 100 != 0) {
     return true
   } else if(year % 400 != 0) {
     return false
   } else {
     return true
   }

}

console.log( 'is it a leap year? ', isCurrentYearLeapYear() )
