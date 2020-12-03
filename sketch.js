var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	box1=new Box(400,650,200,10)
	box2=new Box(300,640,10,70)
	box3=new Box(500,640,10,70)

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
ball1=new Ellipse_123(100,630,20,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display()
  box2.display()
  box3.display()
  ball1.display()
  drawSprites();
 
}
function keyPressed() {
 if (keyCode === UP_ARROW) { 
 
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:15,y:-10}); 
 }
}
