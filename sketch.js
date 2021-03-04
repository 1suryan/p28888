
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


mango1 = new Mango
mango2 = new Mango
mango3 = new Mango


	Engine.run(engine);
  
boy = createSprite(250,200,100,100)

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed() {

if(keyCode === 33) {

Matter.body.setPosition(stoneObj.body {x:235, y:420})
launcherObject.attach(stoneObj.body)

}

}

