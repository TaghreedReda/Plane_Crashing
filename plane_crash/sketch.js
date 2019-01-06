var img,plane ,x=0,y=100;


function setup() {
  createCanvas(900, 540);      
  img = loadImage('3.jpg');
  plane=loadImage('2.png');

}

function draw() { 
  background(171,231,255);   // Set the background to black 
 
  image(img,0,0,img.width/5,img.height/5);
  image(img,150,80,img.width/5,img.height/5);
  image(img,400,0,img.width/5,img.height/5);
  image(img,690,0,img.width/5,img.height/5);

  image(plane,x,y,plane.width/5,plane.height/5);
  if ( y<=470){
  y+=2;
  }
 if(x<=740){
  x+=3;
 }

}