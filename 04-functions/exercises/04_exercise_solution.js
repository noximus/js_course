/*

Card Game of War Exercise Part 1.

*/

var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

/*

Given the above suits and ranks array, write a function called
createDeck that will take both as parameters and return a new array
with all 52 possible card combinations. The returned 'Deck of Cards'
should be an array with 52 strings in it, each representing a card
(i.e. 'ace of Hearts')

Call createDeck and save the result into a variable called
deckOfCards.

*/

// declare our function
function createDeck( suits, ranks ) {
  // declare the array we weill eventually return
  var finalDeck = []

  // first, loop through the suits
  for (var i = 0; i < suits.length; i++) {

    // second, loop through the ranks
    for (var j = 0; j < ranks.length; j++) {
      // create a string representing a card and push it into
      // our final array
      // i.e. 'ace of hearts'
      finalDeck.push( ranks[j] + ' of ' + suits[i] )
    }

  }

  // return our deck
  return finalDeck

}

// remembering to call our function
var deckOfCards = createDeck( suits, ranks )

// Uncomment the following line to see it work:
// console.log( deckOfCards )

/*

Write a function called getRandomCard that will return one random
card from deckOfCards whenever it is called.

Don't worry about removing the card from deckOfCards.

*/

// declare our function getRandomCard
function getRandomCard( deck ) {
  // generate a random index between 0 and 52
  var randomIndex = Math.floor(Math.random() * deck.length)

  // return a random card from our deck, using the random
  // index we just created
  return deck[ randomIndex ]
}

// call our function and save the return value to a variable
var randomCard = getRandomCard( deckOfCards )

// Uncomment the following line to see it work:
// console.log( randomCard )



/*

Write a function called dealHand that takes a number as it's only
parameter. This number represents the number of cards that dealHand
should return.

If no number is passed in, then dealHand should still return one
card. If dealHand is only returning one card, it returns that card
as a string; if dealHand is returning more than one card, it returns
the cards as an array.

*/

// declare our function, passing in the number of cards we want
// ( i.e. the hand length ) and our deck of cards
function dealHand( handLength, deck ) {
  // initialize our hand variable, which we will eventually return
  // and set hand equal to 1, if a hand length isn't provided
  var hand
  handLength = handLength || 1

  if ( handLength === 1 ) {
    // if handLength is one, then we just want to return a random card
    // as a string

    hand = getRandomCard( deck )

  } else {
    // if handLength is not one, then we want to return an array of
    // cards. initialize hand as an empty array. then push cards into
    // our hand array

    hand = []
    for (var i = 0; i < handLength; i++) {
      hand.push( getRandomCard( deck ) )
    }

  }

  // return our hand, whether it's a string or an array
  return hand
}

// Uncomment the following lines to see it work:
// console.log( dealHand( null, deckOfCards ) )
// console.log( dealHand( 7, deckOfCards ) )


/*

Create two variables, playerOneCards and playerTwoCards, and
initialize them as empty arrays.

Deal both playerOneCards and playerTwoCards 7 cards each.

*/

var playerOneCards = dealHand( 7, deckOfCards )
var playerTwoCards = dealHand( 7, deckOfCards )


/*

Write a function called showHand that takes a player's cards as an
array and prints each card.

*/

// declare our function
function showHand( hand ) {
  // the Array.join() method will join all elements in an array into a string.
  // we can pass an optional delimiter, which is a string that will separate
  // each array item
  console.log( 'You have the following cards: \n - ' + hand.join('\n - ') )
}

// Uncomment the following line to see it work:
// showHand( playerOneCards )



/*

Get pumped:
Next class we're going to talk about objects, which will let us
create cards that are easier to use because they contain attributes
like suit and rank. Then, we'll be able to take two random cards and
compare their score with each other!

*/

// decalare our function
function getPumped() {
  // take it up to 11
  console.log( 'WHOOOOOOOOO' )
}

// Uncomment the following line to see it work:
// getPumped()
