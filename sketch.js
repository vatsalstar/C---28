const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy;
var stone;
var mango1,mango2,mango3,mango4,mango5;

function preload()
boy = loadImage("sprites/boy.png")
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	var boy = new boy(110,200,10,10);
	var stone = new stone(110,190,7,7);
	var mango1 = new mango(200,150,20,20);
	var mango2 = new mango(220,100,20,20);
	var mango3 = new mango(190,190,20,20);
	var mango4 = new mango(170,210,20,20);
	var mango5 = new mango(240,140,20,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  drawSprites();
 
}



