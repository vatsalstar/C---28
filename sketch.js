const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground,tree,boy,mango1,mango2,mango3,mango4,mango5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

   ground =new Ground(600,690,1200,25);
   tree = new Tree(900,400,500,900);
   boy = new Boy(250,550,300,500);
   mango1 =new Mango1(500,500,20,20);
   mango2 =new Mango2(600,500,20,20);
   mango3 =new Mango3(700,200,20,20);
   mango4 =new Mango4(650,300,20,20);
   mango5 =new Mango5(750,350,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#87CEEB");

  ground.display();
  tree.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
}



