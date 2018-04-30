/*

Index.html contains a ul which has formatted to be a gallery.

A gallery is a row of images that rotate, showing each one for a set period of time before showing the next image. After the last image, the gallery starts over.

Follow along, reading each set of instructions carefully to build out this gallery.

*/



/*

Step 1:
Using JavaScript, get the 'js-gallery' list and save it to a variable. Then pull an array of the 'js-gallery-item' elements from your 'js-gallery'.

Hint: think about DOM methods that we can call on DOM elements we've already pulled from the page

*/



/*

Step 2:
Transitioning our gallery from one slide to the next works like this:
We need to know the width of every slide (they're all the same). We get the gallery and translate it to the left (so negative) by the width of one slide, every few seconds until the last one. Then at the last one, we translate it back to the starting point (which is 0).

To start, create a variable called slideCount that is equal to the number of slides and another variable called slideWidth that is equal to the width of a single slide.

To get the width, try getBoundingClientRect() or offsetWidth.

*/



/*

Step 3:
We need to set a timer to run ever 5 seconds. There are many ways to set timers with JavaScript, the one we care about here is the setInterval() function.

setInterval() takes two arguments: a reference to a function and the interval in milliseconds between when setInterval should call that function.

What's the difference between referencing and calling a function?

Also, it may seem counterintuitive but we want to save the result of calling setInterval() to a variable.

Create a function called transitionSlide that, for now, just `console.log`'s 'Called!' ever 5000 miliseconds

*/



/*

Step 4:
Now we're going to edit our transitionSlide function so that it will transition the slides in our gallery.

Declare a variable called currentSlide and set it equal to 1.

Inside transitionSlide() we need to do two things:
1. We need to create an if/else statement where:
  (a) IF currentSlide is less than slideCount we do the following:
    - take our gallery and change it's transform style property so that it's equal to translateX( delta ), where delta is the width of a single slide times the value of currentSlide.
    - increment currentSlide
  (b) ELSE:
    - set the transform style property so that translateX() is 0
    - set currentSlide back to 1

Hint: delta should always be a negative number

*/
