const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground,groundimg,ground2;
var bg,bgimg;
var boy1,boy1img,boy2,boy2img,boy3,boy3img;
var JumpSound;
var snow1,snow2;

function preload (){

bg = loadImage("snow3.jpg");
boy1img = loadImage("boy1.png");
boy2img = loadImage("boy2.png");

snow1 = loadImage("snow4.webp");
snow2 = loadImage("snow5.webp")

JumpSound = loadSound("jumpSound.mp3");
}
function setup() {
 createCanvas(1200,600);

 engine = Engine.create();
 world  = engine.world;
 
  boy1 = createSprite(550,300,20,20);
 boy1.addImage(boy1img);
 boy1.scale = 0.9

 boy2 = createSprite(450,300,20,20);
 boy2.addImage(boy2img);
  boy2.scale = 0.9
  
ground2 = createSprite(600,400,1200,20);
}

function draw() {
  background(bg);  


  background(bg);  
  Engine.update(engine);
  ground2.visible = false

  boy1.velocityY = boy1.velocityY + 0.8
  boy2.velocityY = boy2.velocityY + 0.8

  boy1.collide(ground2);
  boy2.collide(ground2);

  if(keyDown("space")&& boy1.y >= 295) {
  boy1.velocityY = -17
  boy2.velocityY = -17
  JumpSound.play();
  }
  spawnSnow()
    drawSprites();
}

function spawnSnow(){
  
    var snow = createSprite(random(10,1190),0,10,40);
    snow.velocityY = 3
    
  
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: snow.addImage(snow1);
               break;
       case 2: snow.addImage(snow2);
               break;
       default: break;
     }
    
             
      snow.scale = 0.03;
     snow.lifetime = 200;

    
    
  }
 