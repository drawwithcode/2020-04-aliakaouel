let capture;
let frame1;
let frame2;
let frame3;
let x2 = 640;
let y2 = 480;
let x3 = 800

function preload(){

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  // capture.size(640, 500);
  capture.hide();
  // capture2 = createCapture(VIDEO);
  // capture2.size(x3, 700);
  // capture2.hide();
  frame1 = new Frameone(650, 200);
  frame2 = new Frameone(500, 50);
  // frame3 = new Frametwo(450, 300);
}

function draw() {
  background("lemonChiffon");
  frame2.show("Tomato");
  frame1.show("black");
  // frame3.show("lemonChiffon");


  thisH1 =createElement("h1", 'Just you, <br>  yourself <br> and pixels');
  thisH1.position(50, 0);
  thisH1.style('font-family', 'mittwoch, serif')
  thisH1.style('font-size', '100px')
  thisH1.style('height', '10px')
}
