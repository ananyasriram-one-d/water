const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var gameState = 0;

var player;
var home;
var home2;
var game;

function preload(){
 bg_img = loadImage("assets/background.png");
}

function setup() {
  createCanvas(displayWidth-10, displayHeight-30);    
  engine = Engine.create();
  world = engine.world;                                               
 
  
  home = new House1(500,500)
  game = new Game();
  game.start();
}

function draw() {
  background(0,0,0);
 // if(gameState === 0){
  //background(255,255,255); 
  //}
//else{
  //  background(bg_img)

 // }
  Engine.update(engine);

  home.display();

  
}