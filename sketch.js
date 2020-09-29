
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree,stone,mango1,mango2,mango3,mango4;
var boy,boyImage;
var slingShot,engine,world;
var tree1, treeImage;

function preload()
{
  boyImage = loadImage("boy.png");
  treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(1000,500);


	engine = Engine.create();
	world = engine.world;

	

ground = new Ground(500,450,1000,20);
//tree = new Tree(800,250,350,480);
stone = new Stone(400,100,70);
mango1 = new Mango(800,150,30);
mango2 = new Mango(700,140,30);
mango3 = new Mango(880,130,30);
mango4 = new Mango(850,170,30);
slingShot = new SlingShot(stone.body,{x:125,y:360});
	Engine.run(engine);
}



function draw() {
  Engine.update(engine);
  background("yellow");
  ground.display();
  //tree.display();
  tree1 = createSprite(800,250,350,480);
  tree1.addImage(treeImage);
  tree1.scale = 0.4;
  drawSprites();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  boy = createSprite(170,400,150,100);
  boy.addImage(boyImage);
  boy.scale = 0.1;
  
  slingShot.display(); 
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function detectCollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
Matter.Body.seStatic(lmango.body, false);
  }
}


function keyPressed(){
  if(keyCode===32){
Matter.Body.setPosition(stone.body,{x:400,y:400})
slingShot.attach(stone.body);
  }

}