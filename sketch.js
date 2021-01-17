const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,dustbin1,dustbin3,dustbin2;
var ground;

function preload()
{
	
}

function setup()
{ 
	createCanvas(700, 600);

	engine = Engine.create();
	world = engine.world;

	fill(70)
	ground = Bodies.rectangle(300, 550, 800,10, {isStatic:true} );
     World.add(world, ground);

	//Create the Bodies Here
	paper=new Paper(50,529,10)
	dustbin1=new Dustbin(393,435,20,200);
	dustbin3=new Dustbin(590,435,20,200);
	dustbin2=new Dustbin(491,535,200,20);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("grey");
  rect(300, 550, 800,10);

  paper.display()
  dustbin1.display()
  dustbin3.display()
  dustbin2.display()

  drawSprites();
}

function keyPressed() 
{
	if (keyCode === UP_ARROW) 
	{
	   Matter.Body.applyForce(this.image,this.image.po7sition,{x:13,y:-13});
	}
   }