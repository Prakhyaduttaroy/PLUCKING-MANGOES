var tree,stone;
var mango1,mango2,mango3,mango4,mango5;
var sling;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1500, 1000);


	engine = Engine.create();
	world = engine.world;
	tree = new Tree(100,100,10,10);
stone = new Stone(125,735,20,20)
mango1 = new Mango(1000,500,50,50)
mango2 = new Mango(1130,600,50,50)
mango3 = new Mango(1140,520,50,50)
mango4 = new Mango(850,550,50,50)
mango5 = new Mango(1200,500,50,50)
sling = new Sling(stone.body, {x:125,y:735})
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  Engine.update(engine);

    tree.display();
  image(boy,100,700,300,300);
  stone.display();
  mango1.display();
  mango2.display();
mango3.display();
mango4.display();
mango5.display();
sling.display();

detectcollision(stone,mango1);
detectcollision(stone,mango2);
detectcollision(stone,mango3);
detectcollision(stone,mango4);
detectcollision(stone,mango5);




  drawSprites();
 
}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
 sling.fly();
 
}

function detectcollision(Lstone,Lmango){
var mangoBodyPosition = Lmango.body.position
var stoneBodyPosition = Lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<= Lmango.r+Lstone.r)
{
  Matter.Body.setStatic(Lmango.body,false);
}



}
function keyPressed(){
if(keyCode === 32){
  Matter.Body.setPosition(stone.body,{x:235, y:420})
sling.attach(stone.body);

}


}





























