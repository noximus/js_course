/*

  Control Flow

  Instructions ( How to use this file ):
  Uncomment lines of code and run the file using `node control-flow.js` to see their output. Make sure you recomment out the parts of the file you just executed before moving on!

  1. Linear Control Flow
  2. Conditionals
  3. Loops

*/

//
// 1. Linear Control Flow
//

// console.log( 'This' )
// console.log( 'is' )
// console.log( 'linear' )
// console.log( 'control' )
// console.log( 'flow' )
// console.log( 'in' )
// console.log( 'action.' )


/*
  Running this file with `node control-flow.js` and lines 15-30 uncommented will result in each string being logged to the console in order. Our program runs from the first line to the last and evaluated every line in between, in order.
*/

//
// 2. Conditional Flow
//


// A. If Statements

// console.log( 'This' )
// console.log( 'is' )
// console.log( 'linear' )
// if ( true ) {
//   console.log( 'conditional' )
// }
// console.log( 'control' )
// console.log( 'flow' )
// console.log( 'in' )
// console.log( 'action.' )


// B. If/Else Statements

// console.log( 'This' )
// console.log( 'is' )
// if ( false ) {
//   console.log( 'conditional' )
// } else {
//   console.log( 'still conditional' )
// }
// console.log( 'control' )
// console.log( 'flow' )
// console.log( 'in' )
// console.log( 'action.' )


// C. If/Else If/Else Statements

// console.log( 'This' )
// console.log( 'is' )
// if ( false ) {
//   console.log( 'conditional' )
// } else if ( true ) {
//   console.log( 'still still conditional' )
// } else ( false ) {
//   console.log( 'still conditional' )
// }
// console.log( 'control' )
// console.log( 'flow' )
// console.log( 'in' )
// console.log( 'action.' )


// D. Ternary Statements

// console.log( 'This' )
// console.log( 'is' )
// true ? console.log( 'still still still conditional' ) : console.log( 'still conditional' );
// console.log( 'control' )
// console.log( 'flow' )
// console.log( 'in' )
// console.log( 'action.' )

//
// Exercise #1!
//

//
// 3. Loops
//

// A. `for` loops

// A basic `for` loop
// for (var i = 0; i < 5; i++) {
//   console.log( i )
// }

// A basic `for` loop with an array
// var grades = [87, 95.5, 40, 79, 20]
//
// for (var i = 0; i < grades.length; i++) {
//
//   if ( grades[i] >= 90 ) {
//     console.log( 'A' )
//   } else if ( grades[i] >= 80 ) {
//     console.log( 'B' )
//   } else if ( grades[i] >= 70 ) {
//     console.log( 'C' )
//   } else {
//     console.log( 'D' )
//   }
//
// }

// A more condensed `for` loop for working with arrays
// var grades = [87, 95.5, 40, 79, 20]
//
// for ( grade in grades ) {
//
//   if ( grades[ grade ] >= 90 ) {
//     console.log( 'A' )
//   } else if ( grades[ grade ] >= 80 ) {
//     console.log( 'B' )
//   } else if ( grades[ grade ] >= 70 ) {
//     console.log( 'C' )
//   } else {
//     console.log( 'D' )
//   }
//
// }


// B. `while` loops

// A basic `while loop`
// console.log( 'while loop' )
// var x = 10
// while ( x >= 0  ) {
//   console.log( x )
//   x--;
// }

// console.log( 'for loop' )
// for ( var i = 10; i > 0; i-- ) {
//   console.log( i );
// }

// A `do while` loop
// var i = 0
// do {
//   console.log( i )
//   i++
// } while ( i < 0 );

// var j = 0
// while ( j < 0 ) {
//   console.log( j )
//   j++
// }
