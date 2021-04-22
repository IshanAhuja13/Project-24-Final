
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1, ground1, stone1, rubber1, iron1;
var sand1, sand2, sand3, sand4, sand5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer1 = new Hammer(50,50);
	ground1 = new Ground(200, height, 1200, 20);
	stone1 = new Stone( 60, 100, 30, 30);
	rubber1 = new Rubber(60, 90, 20);
	iron1 = new Iron(120, 100, 40, 40);
	sand1 = new Sand(180, 100, 20);
	sand2 = new Sand(220, 100, 20);
	sand3 = new Sand(260, 100, 20);
	sand4 = new Sand(300, 100, 20);
	sand5 = new Sand(340, 100, 20);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);

  hammer1.display();
  ground1.display();
  stone1.display();
  rubber1.display();
  iron1.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  
  drawSprites();
 
}



