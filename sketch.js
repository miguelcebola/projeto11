var boatup, boat ;
var mar, marimage ;
function preload(){
boatup =  loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
marimage = loadImage("sea.png");

}

function setup(){
  createCanvas(600, 400);

  mar = createSprite(200, 200, 600, 400);
 mar.addImage("mar",marimage);
 mar.scale = 0.2 ;

  boat = createSprite(300, 200, 20, 20);
  boat.addAnimation("up", boatup);
  boat.scale = 0.2;

  
}

function draw() {
  background("white");
    drawSprites();

 
}
