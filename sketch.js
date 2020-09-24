const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, groundOption, ball, ballOption;

function setup() {
  createCanvas(600,400);
 
  engine = Engine.create();
  world = engine.world;
  
  groundOption = {
    isStatic : true
  }

  ballOption = {
    restitution : 1.0
  }

  ground = Bodies.rectangle(300, 380, 600, 20, groundOption);

  ball = Bodies.circle(300, 200, 30, ballOption);

  World.add(world, ground);
  World.add(world, ball);


}

function draw() {
  background(0);  

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30, 30);
 
  drawSprites();
}