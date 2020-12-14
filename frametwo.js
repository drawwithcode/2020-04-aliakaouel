let windows2;
// let pixelposition;
function preload(){
windows2 = loadImage("images/frame01.png");
}


class Frametwo{
  constructor(a2, b2){
    this.x2 = a2;
    this.y2 = b2;
  }

  show(c2){
    // image(capture, this.x, this.y, 640, 480);
    // capture.hide();
   // background("lemonChiffon");
   fill('black');
   rect(this.x2, this.y2, 500, 480);
   noStroke();
   fill(c2);
   capture2.loadPixels();
    let pixelSize2 = 5;


       for (let x = this.x2; x < this.x2 + 500; x += pixelSize2){
      for (let y = this.y2; y < this.y2 + 480; y += pixelSize2){
         let i = y * x3 + x;
         let darkness = (255 - capture2.pixels[i * 4]) / 255;
         let d2 = pixelSize2 * darkness;
         ellipse(x, y, d2, d2);
      }
    }

    image(windows2,this.x2, this.y2, 500, 300);
  }


}
