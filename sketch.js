
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	Hammer=new hammer(100,100);
	ground = new Ground(600,height,1200,20)
	
	Stone = new stone(700,320,70,70);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Hammer.display();
 ground.display();
 
 Stone.display();
}



