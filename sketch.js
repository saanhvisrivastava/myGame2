var form,player;
var gameState=0;
var bg;
var player1,girl;
var sand;

function preload(){
  girl=loadAnimation("images/girl1.png","images/girl2.png");
  sand=loadImage("images/desertsand.jpg");
  
}

function setup(){
  createCanvas(displayWidth,displayHeight-30);
  bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight-30);
 bg.scale=5;
  bg.addImage("background",sand);
   player1=createSprite(30,displayHeight-100,20,60);
   player1.addAnimation("girl1",girl);
 form=new Form();

}
function draw(){
  background("pink");
  if(gameState===1){
   drawSprites();
    }
   
  if(keyIsDown(RIGHT_ARROW)){
    player1.x=player1.x+5;
  }
  

form.display();
}


