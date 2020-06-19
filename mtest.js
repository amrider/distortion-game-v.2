let x = 0
let mtestx = 0
let mtestx2 = 0
var button


function setup() {
  createElement('h1','The Vertical Distortion Game')
  createP('Richard Breazeale, M.D.')
  createDiv('If you see distortion in the vertical white line below, then click the button (below) until the distortion goes away')
  //createP('The score is measured in pixels.')
  createCanvas(400, 400);
  button = createButton('Click here')//naming the button
  button.mousePressed(drawAgain)
  background(0);
  noLoop();
}

function draw() {
  background(0)
  fill (255)

  //fill in the vertical line with increasing
  //spaces between one pixel-wide dots
  for(y=0;y<height;y=y+1+x){
    noStroke()
  fill(255)
ellipse(200,y,1,1)
}
//fixation dots

  ellipse (175, 200, 5, 1)
  ellipse (225, 200, 5, 1)

//note how many cycles in console log to give m-score
  //console.log(x)
  text('Vertical distortion score is ' + x +' pixels.', 10, 20)
  //h1 = createP('The vertical distortion score is ' + x + ' pixels')

x=x+1//control the number of pixel spaces to add with
//each redraw
}
function drawAgain(){
  redraw(1);
}
//function mousePressed() {
  // drawAgain()
 //}
