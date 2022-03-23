
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ground;
let top_wall;
let left_wall;
let right_wall;
let ball;
let btnR;
let btnL;
let btnU;
let btnD;
let mwl;
let mwr;

function preload() {
}

function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;

	let ball_options = {
	  restitution : 0.75,
	}
	let mw_options = {
	  isStatic : true,
	}

	ground = new Ground(400, 593, 800, 10);
	top_wall = new Ground(400, 7, 800, 10);
	left_wall = new Ground(7, 300, 10, 600);
    right_wall = new Ground(793, 300, 10, 600);
    
	ball = Bodies.circle(200, 100, 20, ball_options);
	World.add(world, ball);
	btnR = createButton("RIGHT");
	btnR.size(75, 50);
	btnR.position(200, 25);
	btnR.mouseClicked(hforceR);
	btnL = createButton("LEFT");
	btnL.size(75, 50);
	btnL.position(300, 25);
	btnL.mouseClicked(hforceL);
	btnU = createButton("UP");
	btnU.size(75, 50);
	btnU.position(400, 25);
	btnU.mouseClicked(vforceU);
	btnD = createButton("DOWN");
	btnD.size(75, 50);
	btnD.position(500, 25);
	btnD.mouseClicked(vforceD);
	mwl = Bodies.rectangle(550, 542, 15, 90, mw_options);
	World.add(world, mwl);
	mwr = Bodies.rectangle(675, 542, 15, 90, mw_options);
	World.add(world, mwr);

	rectMode(CENTER);
	ellipseMode(RADIUS);
	Engine.run(engine);
}


function draw() {

  background(0);
  ground.show();
  top_wall.show();
  left_wall.show();
  right_wall.show();

  ellipse(ball.position.x, ball.position.y, 20);
  rect(mwl.position.x, mwl.position.y, 15, 90);
  rect(mwr.position.x, mwr.position.y, 15, 90);
  Engine.update(engine);

  drawSprites();
}

function hforceR() {
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.03, y:0});
}

function hforceL() {
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:-0.03, y:0});
}

function vforceU() {
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.03});
}

function vforceD() {
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:0.03});
}