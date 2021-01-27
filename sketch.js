var sword , swordImg ;
var fruit1 , fruit2 , fruit3 , fruit4 ;
var fruit1Img , fruit2Img , fruit3Img , fruit4Img ;
var fruit ;
var fruitGrp ;
var score = 0 ;
var enemy , enemyGrp , enemyImg1 , enemyImg2 ;
 var PLAY = 1 , END = 0 , gameState = 1;
var gameOverImg ;
var cut , over ;
var fruitY , fruitYGrp ;
var enemyY , enemyYGrp ;

function preload(){
  
  swordImg = loadImage("sword.png"); 
  fruit1Img = loadImage("fruit1.png"); 
  fruit2Img = loadImage("fruit2.png"); 
  fruit3Img = loadImage("fruit3.png"); 
  fruit4Img = loadImage("fruit4.png"); 
  enemyImg1 = loadImage ("alien1.png");
  enemyImg2 = loadImage ("alien2.png");
  gameOverImg = loadImage ("gameover.png");
  cut = loadSound ("knifeSwooshSound.mp3");
  over = loadSound ("gameover.mp3");
}

function setup(){
  
  createCanvas(400, 400);
  
   sword = createSprite(40,200,20,20);
  sword.addImage(swordImg);
  sword.scale = 0.5;
  
  fruitGrp = createGroup();
  enemyGrp = createGroup ();
  
   fruitYGrp = createGroup();
  enemyYGrp = createGroup ();
  
  sword.setCollider("rectangle" , 0 ,0 , 50,80);
  //sword.debug = true;
  
  
  
}
  
 function draw(){ 
   background(900, 500, 0);
   text("Score: "+ score, 300,50);
  
   
   sword.y = World.mouseY ;
  sword.x = World.mouseX ;
  
   if (gameState === PLAY){
     fruits(); 
     enemies ();
     
    
   if (score >= 10){
     fruitsY ();
     enemiesY();
     
     if (fruitYGrp.isTouching(sword)){
     fruitYGrp.destroyEach() ;
     score = score + 2;
        cut.play();
     }
     
     
   if(enemyYGrp.isTouching(sword)){
       gameState = END ;
     
    
     }
   }
   
     
      if (fruitGrp.isTouching(sword)){
     fruitGrp.destroyEach() ;
     score = score + 2;
        cut.play();
   }
     
     
     
   }
   
  
   
   if(enemyGrp.isTouching(sword)){
       gameState = END ;
     enemyGrp.destroyEach();
     fruitGrp.destroyEach();
    
     }
   
   
   
   
   
   
   
   if(gameState === END){
     sword.addImage (gameOverImg);
     enemyGrp.y = 0;
     fruitGrp.y = 0;
     
     enemyGrp.destroyEach();
     fruitGrp.destroyEach();
     
     enemyYGrp.destroyEach();
     fruitYGrp.destroyEach();
     
      over.play();
     sword.x = 200;
     sword.y = 200;
     background(10);
     
     
   }
   
   
   
   
  
   
   
   
   

   
   drawSprites();
   
   
   }
 
function fruits() {
  if (frameCount % 100 === 0){
      var fruit = createSprite (200,200,5,5);
    
   // fruit.velocityY = -4
    
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fruit.addImage(fruit1Img);
              break;
      case 2: fruit.addImage(fruit2Img);
              break;
      case 3: fruit.addImage(fruit3Img);
              break;
      case 4: fruit.addImage(fruit4Img);
              break;
              
              default: break;
              
             
      
      }
   fruit.scale = 0.15;
    fruit.velocityY = (3 + (score / 4)) ;
    fruit.x = Math.round(random(20,380));
    fruit.y = Math.round(random(10,50));
    
    fruitGrp.add(fruit);
  }
  
  }
  
 

function enemies ()
{
  if(frameCount % 200 ===0){
    var enemy = createSprite(200,200,10,10);
    
    var rndm = Math.round(random(1,2));
    switch(rndm) {
        
      case 1 : enemy.addImage(enemyImg1);
        break ;
        
        case 2 : enemy.addImage(enemyImg2);
        break;
        
        default  : break ;
        }
        
    enemy.x = Math.round(random(20,380));
    enemy.y = Math.round (random(10,50));
    
    enemy.velocityY = (3 + (score/8));
    enemy.scale = 0.8;
    
    enemyGrp.add(enemy);
    
  }
  }


  function fruitsY() {
  if (frameCount % 80 === 0){
      var fruitY = createSprite (200,200,5,5);
    
   // fruit.velocityY = -4
    
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fruitY.addImage(fruit1Img);
              break;
      case 2: fruitY.addImage(fruit2Img);
              break;
      case 3: fruitY.addImage(fruit3Img);
              break;
      case 4: fruitY.addImage(fruit4Img);
              break;
              
              default: break;
              
             
      
      }
   fruitY.scale = 0.15;
    fruitY.velocityY = -(5 + (score / 10)) ;
    fruitY.x = Math.round(random(20,380));
    fruitY.y = Math.round(random(350,400));
    
    fruitYGrp.add(fruitY);
  }
  
  }
  
  function enemiesY ()
{
  if(frameCount % 300 ===0){
    var enemyY = createSprite(200,200,10,10);
    
    var rndm = Math.round(random(1,2));
    switch(rndm) {
        
      case 1 : enemyY.addImage(enemyImg1);
        break ;
        
        case 2 : enemyY.addImage(enemyImg2);
        break;
        
        default  : break ;
        }
        
    enemyY.x = Math.round(random(20,380));
    enemyY.y = Math.round (random(350,400));
    
    enemyY.velocityY = -(3 + (score/8));
    enemyY.scale = 0.8;
    
    enemyYGrp.add(enemyY);
    
  }
  }
  
  
  
  
  
  
  

