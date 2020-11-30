
//background
let sketch0 = function(p0){

  let mySky;

  p0.preload = function(){
    // mySky = p0.loadImage("Sky.jpg");
    thisH1 = p0.createElement("h1", 'Just you, <br>  yourself <br> and pixels');
    thisH1.position(50, 0);
    thisH1.style('font-family', 'mittwoch, serif')
    thisH1.style('font-size', '100px')
    thisH1.style('height', '10px')

  }

  p0.setup = function(){
    let initialCanvas = p0.createCanvas(windowWidth, windowHeight);
    initialCanvas.position(0, 0);
    initialCanvas..style('z-index', '-5')


  }

  p0.draw = function(){
    p0.background("LemonChiffon");
    // p0.image(mySky, 0, 0, p0.width, p0.height);

  }

  // p0.windowResized = function windowResized() {
  //   resizeCanvas(windowWidth,windowHeight);
  // }
}


//Frame 1
let sketch1 = function(p){
  let capture;
  let slider1, slider2, slider3
  let frame1;
  let x1 = 640
  let y1 = 480
  let w = 300;
  let h = 300;
  let xpos = 570
  let ypos = 300

  p.preload = function(){
    frame1 = p.loadImage("frame-01.png");
  }

  p.setup = function(){
    let firstCanvas = p.createCanvas(500, 400);
    firstCanvas.position(570, 300);


    //VIDEO
    capture = p.createCapture(p.VIDEO);
    capture.hide();

    //SLIDERS
    slider1 = p.createSlider(0,255, 255/2);
    slider1.hide();
    slider2 = p.createSlider(0,255, 255/2);
    slider2.hide();
    slider3 = p.createSlider(0,255, 255/2);
    slider3.hide();

  }

  p.draw = function(){
      p.background('#171414');
    p.image(capture, x1, y1);

    p.noStroke();
    p.fill("LemonChiffon");

    capture.loadPixels();
    let pixelSize = 5;
    for (let x = 0; x < x1; x += pixelSize) {
     for (let y= 0; y < y1; y += pixelSize){
       const i = y * x1 + x;
       const darkness = (255 - capture.pixels[i * 4]) / 255;
       const d = pixelSize * darkness;

      p.ellipse(x, y, d, d);

     }
    }

    // slider1.show();
    // slider1.position(xpos + 10 , ypos + (w - 30));
    // slider2.show();
    // slider2.position(xpos + 10, ypos + (w - 45));
    // slider3.show();
    // slider3.position(xpos + 10, ypos + (w - 60));



    // if (capture.loadedmetadata) {
    //   p.tint(slider1.value(), slider2.value(), slider3.value());
    //   p.image(capture, -300, -200, capture.width*1.3, capture.height*1.3);
    // }

    p.noTint()
    p.image(frame1, 0, 0, 500, 400);
  }
}


//Frame 2
let sketch2 = function(p2){
  let frame2;
  let x2 = 640;
  let y2 = 480;

  p2.preload = function(){
    frame2 = p2.loadImage("frame-02-05.png");
  }

  p2.setup = function(){
    let secondCanvas = p2.createCanvas(300, 250);
    secondCanvas.position(500, 100);
    capture2 = p2.createCapture(p2.VIDEO);
    capture2.hide();

  }

  p2.draw = function(){
    p2.image(capture2,x2, y2);
    p2.background('LemonChiffon');
    p2.noStroke();
    p2.fill(0);
    capture2.loadPixels();
    let pixelSize = 5;


    for (let x = 0; x < x2; x += pixelSize){
      for (let y = 0; y < y2; y += pixelSize){
         let i = y * x2 + x;
         let darkness = (255 - capture2.pixels[i * 4]) / 255;
         let d = pixelSize * darkness;
         p2.rect(x, y, d, d);


      }
    }


    p2.image(frame2, 0, 0, 300, 250);
  }
}


//Frame 3
let sketch3 = function(p3){
  let frame1;
  let x3 = 640;
  let y3= 480;

  p3.preload = function(){
    frame1 = p3.loadImage("frame-03.png");
  }

  p3.setup = function(){
    let thirdCanvas = p3.createCanvas(500, 400);
    thirdCanvas.position(750, 150);
    capture3 = p3.createCapture(p3.VIDEO);
    capture3.hide();
  }

  p3.draw = function(){
    // p3.background('LemonChiffon');
   p3.noStroke();
   p3.fill("Tomato");
    p3.image(capture3,0, 0, x3, y3);

    p3.background("LemonChiffon");
    capture3.loadPixels();
    const circleSize = 5;
    for (let y = 0; y < y3; y += circleSize) {
     for (let x = 0; x < x3; x += circleSize) {
     const i = y * x3 + x;
     const darkness = (255 - capture3.pixels[i * 4]) / 255;
     const radius = circleSize * darkness;
     p3.ellipse(x, y, radius, radius);
   }

    //Frame
    p3.image(frame1, 0, 0, 500, 400);
  }
}
}


let p0 = new p5(sketch0);
let p = new p5(sketch1);
let p2 = new p5(sketch2);
let p3 = new p5(sketch3)
