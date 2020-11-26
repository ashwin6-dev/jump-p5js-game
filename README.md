# Jump - A game made with p5.js
A game made using p5.js library. You can play this game here : https://ashwins-code.github.io/jump-p5js-game/Jump/

## What is p5.js? ##

p5.js is a JS library which makes it easy to create 2D canvas graphics for the web. You can find more about it on their website https://p5js.org/.

## Very basic example using p5.js ##

```js

var x;
var y;
var width;
var height;

/* 

p5.js always needs a setup and draw function.

*/

function setup() {
  /*
    This is the first function that is called. It is where you should initialise the things that you need
  */
  
  createCanvas(500, 500) //creates a canvas that is 500px by 500px
  x = 250
  y = 250
  width = 50
  height = 50
}

function draw() {
  /*
    This function is called every frame. This is where you would write your code to draw to the canvas
  */
  
  background("black") // clears the canvas and fills it black
  rect(x, y, width, height) // draws a rectangle of width "width" and height "height" at position (x, y)
  
  x += 0.5
  y += 0.5
  
  // Note: position (0, 0) is the top left corner. This means increasing the the variable "y" moves the rectangle downwards (unlike normal coordinate systems) 
}

```

You can run this code in your browser or in the p5.js Web Editor (found here : https://editor.p5js.org/). You should find a white square moving towards the bottom right corner!
