/*

Index.html contains a ul which has formatted to be a gallery.

A gallery is a row of images that rotate, showing each one for a set period of time before showing the next image. After the last image, the gallery starts over.

Follow along, reading each set of instructions carefully to build out this gallery.

*/



/*

Step 1:

*/

var gallery = document.querySelector('.js-gallery')
var galleryItems = gallery.querySelectorAll('.js-gallery-item')

/*

Step 2:

*/

var slideCount = galleryItems.length
var slideWidth = galleryItems[0].getBoundingClientRect().width

/*

Step 3:

*/

// var slideInterval = setInterval(transitionSlide, 5000)

/*

Step 4:

*/

// var currentSlide = 1;
//
// function transitionSlide() {
//
//   if ( currentSlide < slideCount ) {
//
//     gallery.style.transform = "translateX(-" + slideWidth * currentSlide + "px)"
//     currentSlide++
//
//   } else {
//
//     gallery.style.transform = "translateX(0)"
//     currentSlide = 1
//
//   }
//
// }

/*

Step 5:
To setup - we need to comment out the timer we created in Step 3 and our transitionSlide function in Step 4.

*/


/*

Step 6:
We're going to create an event and event handler on the .js-nav-list element.

Create a variable called sliderNav and assign it to the .js-nav-list element. Then add an event listener for a click event and pass it a reference to the function transitionSlide (which we're going to rewrite below)

*/

var sliderNav = document.querySelector('.js-nav-list')
sliderNav.addEventListener('click', transitionSlide)



/*

Step 7:
Declare a function called transitionSlide. transitionSlide takes 1 parameter, event (which is the event object).

Our transitionSlide function is going to be divided into three parts: Setup, Checks and Execution.

1. Setup:
We need to get the direction from our event target and save it to a variable, called currentDirection.

2. Checks:
We need to check the current slide and calculate if there is a next slide in that direction. If current slide is the first slide and the current direction is left or if the current slide is the last slide and the direction is right, we shouldn't translate the gallery.

Create a conditional that will handle the cases where (a) the slide direction is left and the current slide is 0 and (b) the slide direction is right and the current slide is the number of slides. Your conditional should just `return` if either of these cases is met. Note: we have to explicit conditions that should be met.

3. Execution:
We can transition our slide!

If the current direction is left, decrement the currentSlide variable, otherwise increment it.

Then translate your slide, just like we did last time. Just like we did last time?


*/

var currentSlide = 1

function transitionSlide( e ) {
  e.preventDefault()

  var currentDirection = e.target.dataset.direction

  if (currentDirection === 'left' && currentSlide === 1) return
  if (currentDirection === 'right' && currentSlide === slideCount) return

  if ( currentDirection === 'left' ) {
    currentSlide--
  } else {
    currentSlide++
  }

  gallery.style.transform = "translateX(-" + slideWidth * (currentSlide - 1) + "px)"
  console.log( currentSlide )

}
