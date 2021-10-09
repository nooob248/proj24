
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin, dustbin2, dustbin3;
var dustbinGroup=createGroup();
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,500,1000,20);
	paper=new Paper(100,400,50,50);
	dustbin=createSprite(600,486,170,10);
	dustbin.shapeColor="white";
	dustbin2=createSprite(510,441,10,100);
	dustbin2.shapeColor="white";
	dustbin3=createSprite(680,441,10,100);
	dustbin3.shapeColor="white";
	
	

	Engine.run(engine);
	keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:120,y:-125});
	}
}

function draw() {
  background(0);
  paper.display();
  ground.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}



