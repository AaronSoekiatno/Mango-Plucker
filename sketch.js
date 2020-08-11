const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyImg;
var mtree,stone,grnd;
var mango1,mango2,mango3,mango4,mango5,mango6,mangoImg;

function preload(){
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	grnd = new ground(400,690,800,20);
	boy = createSprite(160,625,10,10);
	boy.addImage("kid",boyImg);
	boy.scale = 0.09;
	mtree = new tree(600,490,300,400);


	mango1 = new mango(490,450,50,50,50);	
	mango2 = new mango(545,475,50,50,50);
	mango3 = new mango(620,350,40,50,50);
	mango4 = new mango(565,390,45,45,50);
	mango5 = new mango(685,440,40,40,50);
	mango6 = new mango(630,420,50,40,50);

	stone = new rock(100,600,30,30,25);
	sling = new string(stone.body,{x:110,y:580})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  
	grnd.display();
	mtree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	sling.display();
	stone.display();
	
	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);

	drawSprites();
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function detectCollision(lstone,lmango){
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.radius+lstone.radius){
		console.log("in if condition");
		Matter.Body.setStatic(lmango.body,false);
}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:100,y:600})
		sling.attach(stone.body);
	}
}

