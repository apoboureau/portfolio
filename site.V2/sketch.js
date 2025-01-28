let d = 50000
let nb = 100
let x
let y
let w
let h
let hW
let hH
let angle=90
let palette = ["0"]
var drop = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i = 0 ; i < 2000; i++) {
    drop[i] = new Drop();
}
}

function draw() {
  background("#FFFFFF");
  for(var i = 9; i < 300; i++) {
  drop[i].show();
  drop[i].update();
}
}

function Drop() {
  this.x = random(40, width);
  this.y = random(5, height);
  
  this.show = function() {

    ellipse(this.x, this.y, random(4, 20), random(15, 15));   
  }
  this.update = function() {
    this.speed = random(5, 1);
    this.gravity = 0.7;
    this.y = this.y + this.speed*this.gravity;  
    
    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;
      
 } let diam = random(1,d)
let a = atan2(mouseY - height / 2, mouseX - width / 2)
  for (let i = 0; i < 10; i ++) {  
    let c = color("#CEFF62");
fill(c);
    ellipse(hW, hH,diam,d);
    rotate(a);
    }
    

}
  }