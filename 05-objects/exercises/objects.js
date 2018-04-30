/*

Objects

Instructions ( How to use this file ):
Uncomment lines of code and run the file using `node control-flow.js` to see
their output. Make sure you recomment out the parts of the file you just
executed before moving on!

1. Anatomy of an Object
2. Working with Objects
3. JSON
4. Object Oriented Programming

*/


/*

1. Anatomy of an Object

*/

// Declaring our first object
// var Person = {
//   'first name': 'Zakk',
//   lastName: 'Fleischmann',
//   favoriteColors: 'green',
//   favoriteNumbers: [7, 8 ,9],
//   height: {
//     feet: 6,
//     inches: 4
//   },
//   sayHello: function( name ) {
//     console.log( 'Hello, ' + (name || 'you') + '! Hope you are well!' )
//   }
// }


/*

2. Working with Objects

*/

// Getting values from our object
// Person['first name'] // Bracket notation
// Person.lastName // Dot notation

// Setting values from our object (with reassignment)
// Person.favoriteColors = 'just green'
// Person.height.feet = 10
// Person['height']['inches'] = 6

// console.log( Person.height )

// Calling methods
// Person.sayHello()

// Creating new methods
// Person.grow = function( inches ) {
//   var currentHeight = Person.height.feet * 12 + Person.height.inches + inches
//
//   Person.height = {
//     feet: Math.floor( currentHeight / 12 ),
//     inches: currentHeight % 12
//   }
//
// }
//
// console.log( Person.height )
// console.log( Person.grow( 1 ) )
// console.log( Person.height )

/*

2. JSON

*/

// var jsonData = {
//   "Foods": [
//     {"name":"aubergine", "color":"purple", "price": 1.59},
//     {"name":"apple", "color":"red", "price": 0.78},
//     {"name":"nuts", "color":"brown", "price": 2.23}
//   ]
// }
//
// console.log( jsonData.Foods[1] ) // {"name":"apple", "color":"red", "price": 0.78}


/*

4. Object Oriented Programming

*/

// Part 1
// var Car = {
//   model: '',
//   make: '',
//   year: '',
//   color: '',
//   engineStart: false,
//   turnOn: function() {
//     this.engineStart = true
//   },
//   turnOff: function() {
//     this.engineStart = false
//   },
//   drive: {
//     forward: function() { console.log( 'drive forward' ) },
//     left: function() { console.log( 'drive left' ) },
//     right: function() { console.log( 'drive right' ) },
//     reverse: function() { console.log( 'drive reverse' ) }
//   }
// }

// Part 2
function Car ( model, make, year, color ) {

  this.model = model
  this.make = make
  this.year = year
  this.color = color
  this.engineStart = false

  this.turnOn = function() {
    return this.engineStart = true
  }

  this.turnOff = function() {
    return this.engineStart = false
  }

  this.drive = {
    forward: function() { console.log( 'drive forward' )},
    left: function() { console.log( 'drive left' )},
    right: function() { console.log( 'drive right' )},
    reverse: function() { console.log( 'drive reverse' )}
  }

}

var MyCarolla = new Car('Carolla', 'Toyota', 2016, 'Red' )

var MyPrius = new Car()
MyPrius.model = 'Prius'
MyPrius.make = 'Toyota'
MyPrius.year = 2009
MyPrius.color = 'Grey'

console.log( MyCarolla )
console.log( MyPrius )

// Part 3
// var Car = function( model, make, year, color ) {
//
//   return {
//     model: model,
//     make: make,
//     year: year,
//     color: color,
//     engineStart: false,
//     turnOn: function() {
//       Car.engineStart = true
//       console.log('engine is now on')
//     },
//     turnOff: function() {
//       Car.engineStart = false
//       console.log('engine is now off')
//     },
//     drive: {
//       forward: function() { console.log( 'drive forward' )},
//       left: function() { console.log( 'drive left' )},
//       right: function() { console.log( 'drive right' )},
//       reverse: function() { console.log( 'drive reverse' )}
//     }
//   }
// }
//
// var MyCarolla = Car( 'Carolla', 'Toyota', 2016, 'Red' )
// var MyPrius = Car( 'Prius', 'Toyota', 2009, 'Grey' )
//
// console.log( MyCarolla.turnOn() )
// console.log( MyCarolla.engineStart )
//
// console.log( MyPrius.turnOn() )
// console.log( MyPrius.engineStart )
//
// console.log( Car )

// Part 4
// var Car = function( model, make, year, color ) {
//
//   return {
//     model: model,
//     make: make,
//     year: year,
//     color: color,
//     engineStart: false,
//     turnOn: function() {
//       this.engineStart = true;
//       console.log('engine is now on');
//     },
//     turnOff: function() {
//       this.engineStart = false;
//       console.log('engine is now off');
//     },
//     drive: {
//       forward: function() { console.log( 'drive forward' )},
//       left: function() { console.log( 'drive left' )},
//       right: function() { console.log( 'drive right' )},
//       reverse: function() { console.log( 'drive reverse' )}
//     }
//   }
// }
//
// var MyCarolla = new Car( 'Carolla', 'Toyota', 2016, 'Red' )
// var MyPrius = new Car( 'Prius', 'Toyota', 2009, 'Grey' )
//
// console.log( MyCarolla.turnOn() )
// console.log( MyCarolla.engineStart )
//
// console.log( MyPrius.turnOn() )
// console.log( MyPrius.engineStart )
