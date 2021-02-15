var helicopterIMG,helicopterSprite,packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const BOdy = Matter.Body;

function preload()
{
    helicopterIMG = loadImage("helicopter.png")
    packageIMG = loadImage("package.png")
}

function setup(){
    createCancas(800,600);
    rectMode(CENTRE);

    packageSprite = createSprite(width/2,80,30,20);
    packageSprite.AddImage(packageIMG)
    packageSprite.scale=5.3;
     helicopterSprite = createSprite(width/2,250,40,50);
     helicopterSprite.AddImage(helicopterIMG)
     helicopterSprite.scale=7.8;

     
    // create the ground
     groundSprite = createSprite(width/2,height=30,width=20);
     groundSprite.shapeColor=(255);


     engine=Emngine.create();
     world=engine.world;

     packageBody = Bodies.circle(width/2,250,15,{restitution:0.6 , isStstic:True})
        World.add(world,packageBody)

     

       Engine.run(enginr)


     }


     function draw(){
         rectMode(CENTRE);
        background(0);
        packageSprite.x = packageBody.position.x
        packageSprite.y = packageBody.position.y
         

        drawcSprite();



     } 



     function keyPreesed(){
      if(keyCode===DOWN_ARROW) {
          Matter.Body.setStatic(packageBody,false)
     }
      
    } 