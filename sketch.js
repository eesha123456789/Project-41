const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine, world
var thunderFrames = 0
var rainDrops =[]
var maxDrops=180
var lightning1, lightning2, lightning3, lightning4, umbrella, lightningbolt, rand

function preload(){
   //batmanImg=loadAnimation('Walking Frame/walking_1.png','Walking Frame/walking_2.png','Walking Frame/walking_3.png','Walking Frame/walking_4.png','Walking Frame/walking_5.png','Walking Frame/walking_6.png','Walking Frame/walking_7.png','Walking Frame/walking_8.png')
   //batmanImg=loadImage('Walking Frame/walking_1.png')
   lightning1=loadImage('thunderbolt/1.png') 
   lightning2=loadImage('thunderbolt/2.png') 
   lightning3=loadImage('thunderbolt/3.png') 
   lightning4=loadImage('thunderbolt/4.png')   
}

function setup(){
   engine=Engine.create();
   world=engine.world;
   createCanvas(500,800)
   /*batman=createSprite(width/2,800)
   batman.addImage(batmanImg)
   batman.scale=0.6*/

   umbrella = new Umbrella(width/2,625,50)

   if(frameCount%150===0){
     for(var i=0; i<maxDrops; i++){
       rainDrops.push(new Drop(random(0,500), random(0,800)))
   }
  }
}

function draw(){
  Engine.update(engine)
  background(0);

  rand=Math.round(random(1,4));
  if(frameCount%50===0)
  {
    thunderFrames=frameCount
    lightningbolt=createSprite(random(10,475),random(10,30),10,10);
  switch(rand){
     case 1:lightningbolt.addImage(lightning1);
       break;
     case 2:lightningbolt.addImage(lightning2);
       break;
     case 3:lightningbolt.addImage(lightning3);
       break;
     case 4:lightningbolt.addImage(lightning4);
       break;
     default: break;
   }
}   
if(thunderFrames + 15===frameCount && lightningbolt){
  lightningbolt.destroy()
}

umbrella.display()

for(var i = 0; i<maxDrops; i++){
   rainDrops[i].update();
   rainDrops[i].display();
 }

 drawSprites()

}
