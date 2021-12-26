const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("background.png");
  baseimage = loadImage("base.png");
  playerimage = loadImage("player.png");
  bowImg = loadImage("player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);


  var options = {
    isStatic: true
  }

  //crear el cuerpo base del jugador

  playerBase = Bodies.rectangle(width/8,height/1.5, 10, 10, options);
  World.add(world, playerBase);


  //crear el cuerpo del jugador

  playerArcher = Bodies.rectangle(playerBase.position.x, playerBase.position.y-125, 10, 10, options);
  World.add(world, playerArcher);

}

function draw() {
  background(backgroundImg);


  //mostrar la imagen del jugador utilizando la función image()
  rect(playerBase.position.x, playerBase.position.y, 10, 10);

  push();
  imageMode(CENTER);
  image(baseimage, playerBase.position.x, playerBase.position.y, width/8, height/8);
  pop();

  //mostrar la imagen de la base del jugador utilizando la función image()


  rect(playerArcher.position.x, playerArcher.position.y, 10, 10);

  push();
  imageMode(CENTER);
  image(playerimage, playerArcher.position.x, playerArcher.position.y, width/10, height/3.5);
  pop();

  Engine.update(engine);

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("TIRO CON ARCO ÉPICO", width / 2, 100);
}
