var path,boy,sword;
var pathImg,boyImg,swordImg;
var treasureCollection = 0;
var swordGroup;

//Esttados de Jogo
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("fimdeJogo.png");
}

function setup(){
  

 createCanvas(windowWidth,windowHeight);


path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;


boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  

swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  

   if(path.y > height ){
     path.y = height/2;
    }
  
    createSword();

    
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
        boy.addAnimation("SahilRunning",endImg);
        boy.x=width/2;
        boy.y=height/2;
        boy.scale=0.6;
        
        
        swordGroup.destroyEach();
        
        swordGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  
  }




function createSword(){
  if (World.frameCount % 230 == 0) {
  var sword = createSprite(Math.round(random(50, width-50),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 4;
  sword.lifetime = 200;
  swordGroup.add(sword);
  }
}