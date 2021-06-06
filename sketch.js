
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;
	 ground = new Ground (600,height,1200,20)
	 ball = new Ball (50,height-50)
	//Create the Bodies Here.
	dustbinleft = new Ground(800,height-50,20,100)
	dustbinright = new Ground(950,height-50,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  dustbinright.display();
  dustbinleft.display();
 
}
function keyPressed(){
	if(keyDown('up_arrow')) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:+125,y:-125})

	}

	
}


