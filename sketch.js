const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world;
var charecter,snow;
var bg,bg_img;
var santa,santa_img;
var snow,song;
var snowGrp;

function preload(){
bg_img=loadImage("snow3.jpg");
santa_img=loadImage("santa.png");
song=loadSound("santaSong.mp3");
snow_img=loadImage("snow4.webp");
snow2_img=loadImage("snow5.webp")
}
function setup() {
  createCanvas(1280,605);

  
  engine=Engine.create();
  world=engine.world;
  
  santa=createSprite(100,80,50,50);
  santa.addImage("snata",santa_img);
  santa.scale=0.25;

  snow=new Snow(100,100,100);
  snowGrp=new Group();
  
  //createSprite(400, 200, 50, 50);
  
}

function draw() {
  background(bg_img); 
  Engine.run(engine);
  if(keyDown(RIGHT_ARROW)){
    santa.velocityX=2;
    song.play();
  }
  
  drawSprites();
  //console.log(mouseX);
  if(santa.x===960){
    santa.x=-100;
  }
  spawnsnow();
  spawnsnow2();
  
}

function spawnsnow(){

  if(frameCount%30===0){
    snow=createSprite(300,0);
    snow.addAnimation("doorImage",snow_img);
    snow.scale=0.1;
    snow.velocityY=5;
  
    snow.lifetime=120;
    snowGrp.add(snow);
    snow.x=Math.round(random(10,1100));

  }   
  }

  function spawnsnow2(){

    if(frameCount%40===0){
      snow2=createSprite(300,0);
      snow2.addAnimation("Image",snow2_img);
      snow2.scale=0.1;
      snow2.velocityY=5;
    
      snow2.lifetime=120;
      snowGrp.add(snow2);
      snow2.x=Math.round(random(10,1100));
  
    }   
    }
  
  



