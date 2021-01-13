
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(width/2,height/4,width/7,20);

	var bobX = width/2;
	var bobY = height/4+500;
	bodDiameter=40;

	bob1=new Bob(bobX-bobDiameter*2,bobY,bobDiameter);
	bob2=new Bob(bobX-bobDiameter,bobY,bobDiameter);
	bob3=new Bob(bobX,bobY,bobDiameter);
	bob4=new Bob(bobX+bobDiameter,bobY,bobDiameter);
	bob5=new Bob(bobX+bobDiameter*2,bobY,bobDiameter);
	Engine.run(engine);

	rope1=new rope(bob1.Body, roof.Body,-bobDiameter*2,0)
	rope2=new rope(bob2.Body, roof.Body,-bobDiameter,0)
	rope3=new rope(bob1.Body, roof.Body,0,0)
	rope4=new rope(bob1.Body, roof.Body,bobDiameter,0)
	rope5=new rope(bob1.Body, roof.Body,bobDiameter*2,0)

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
roof.display();

ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();



  drawSprites();
 
}



