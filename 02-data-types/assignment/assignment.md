# Assignment
There are two short activities due for next class:
1. the activity in `decoder.js`
2. the activity described below

## Distance Formula

The purpose of this assignment is to build a program that will calculate the distance between two points, given two sets of x and y coordinates.

As a refresher (since it's probably been a while since you've done any geometry!), the distance formula works like this: given a point x1, y1 and another point x2, y2 on a graph, we can calculate the distance between these two points by following these steps:

1. subtract x2 from x1 to get deltaX
2. subtract y2 from y1 to get deltaY
3. square both deltaX and deltaY
4. add the square of deltaX to the square of deltaY
5. take the square root of the sum of step 4

If you're a visual person, it looks like [this](http://www.purplemath.com/modules/distform.htm).

## Exercise:
Create a `distance.js` file, so that when run with `node distance.js` it will return the distance between point 1 at [1, 3] and point 2 at [10, 15].

## Bonus:
To take user input in a command line program like `distance.js`, we use node's `process.argv`, which is an array of arguments passed into the program from the command line. Modify your `distance.js` so that it can take two points from the command line and return the distance between them.

Test it with `node distance.js 1,3 10,15`

*hint: maybe check the type of the arguments when they're in the `process.argv` array . . .*

*hint 2: I wonder if there's a way to split a string into multiple parts . . .*

## Extra
1. Read more about truthy and falsey in JS [here](https://dorey.github.io/JavaScript-Equality-Table/)
2. The latest major version of javascript was released in 2015. Most of the new features have been incorporated in node, but browser compatibility is still spotty. We will be adding extra reading for es2015, but will otherwise be learning ES5 (the standard version of javascript). If you would like to see the features added in es2015 with regards to everything we learned today, I recommend the following reading:
* [Variables](https://www.sitepoint.com/preparing-ecmascript-6-let-const/)
* [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
* [String Methods](https://www.sitepoint.com/preparing-ecmascript-6-new-string-methods/)
* [Number Methods](https://www.sitepoint.com/preparing-ecmascript-6-new-number-methods/)
