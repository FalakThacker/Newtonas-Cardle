var roof,rope1,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,bobDiameter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(450,100,350,30);
	World.add(world, roof);

	bobObject1 = new Bob(250,350);
	bobObject2 = new Bob(300,350);
	bobObject3 = new Bob(350,350);
	bobObject4 = new Bob(400,350);
	bobObject5 = new Bob(450,350);
	bobObject6 = new Bob(500,350);


	rope1 = new Rope(bobObject1.body,roof.body,-100,0);
	 World.add(world, rope1);

	rope2 = new Rope(bobObject2.body,roof.body,-50,0);
	World.add(world, rope2);

	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	World.add(world, rope3);

	rope4 = new Rope(bobObject4.body,roof.body,+50,0);
	World.add(world, rope4);

	rope5 = new Rope(bobObject5.body,roof.body,+100,0);
	World.add(world, rope5);

	rope6 = new Rope(bobObject6.body,roof.body,+150,0);
	World.add(world, rope6);


	Engine.run(engine);
  
}


function draw() {

  background("white");
  Engine.update(engine);

 
  roof.display();
 
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  bobObject6.display();
 
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  
 
}
function keyPressed(){
if(keyCode===32){
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-730,y:0});
}

}
