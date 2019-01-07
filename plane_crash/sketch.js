var img,plane ,x=0,y=100 ,w=1900,h=735;


function setup() {
  createCanvas(w, h);      
  img = loadImage('3.jpg');
  plane=loadImage('2.png');

}
function keyPressed() {
  if (keyCode === 32  ) {
    y = y - 30;
  }
    
}
function draw() { 
  background(171,231,255);   // Set the background to black 
 
  image(img,0,0,img.width/5,img.height/5);
  image(img,150,80,img.width/5,img.height/5);
  image(img,400,0,img.width/5,img.height/5);
  image(img,690,0,img.width/5,img.height/5);

  image(plane,x,y,plane.width/10,plane.height/10);
  
  if ( y<=(h-plane.height/10)){
  y+=2;
  }
 if(x<=(w-plane.width/10)){
  x+=3;
 }

}