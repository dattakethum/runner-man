
function preload(){
  //pre-load images
pathImage=loadImage("path.png")
RunnerImage=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track=createSprite(200,200);
  track.addImage(pathImage)
  track.velocityY=2
  Runner=createSprite(200,100)
  Runner.addAnimation("Runner",RunnerImage)
  Runner.scale=0.05
}

function draw() {
  background(0);
if(track.y>400){
  track.y=height/2
}

drawSprites()
}
