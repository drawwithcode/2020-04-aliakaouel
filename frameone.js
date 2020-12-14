let windows;
// let pixelposition;
function preload(){
windows = loadImage("images/frame01.png");
}


class Frameone{
  constructor(a, b){
    this.x = a;
    this.y = b;
  }

  show(c){
    // image(capture, this.x, this.y, 640, 480);
    // capture.hide();
   // background("lemonChiffon");
   fill('lemonChiffon');
   rect(this.x, this.y, 500, 480);
   noStroke();
   fill(c);
   capture.loadPixels();
    let pixelSize = 5;


       for (let x = this.x; x < this.x + 500; x += pixelSize){
      for (let y = this.y; y < this.y + 480; y += pixelSize){
         let i = y * x2 + x;
         let darkness = (255 - capture.pixels[i * 4]) / 255;
         let d = pixelSize * darkness;
         ellipse(x, y, d, d);
      }
    }

    // image(windows,this.x, this.y, 500, 300);
  }


}
