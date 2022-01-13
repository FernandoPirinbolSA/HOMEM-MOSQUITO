
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var homemMosquito, capitaoFormiga
var predio1, predio2, predio3, predio4, predio5
var predioimg

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	predio5 = createSprite(435, 380 , 170, 150);
	predio5.shapeColor = "pink";
	predio4 = createSprite(380,340,70,130);
	predio4.shapeColor = "green";
	predio3 = createSprite(335, 300, 70, 130);
	predio3.shapeColor = "yellow";
	predio2 = createSprite(275,250,70,130);
	predio2.shapeColor = "blue";
	predio1 = createSprite(200, 200, 70, 130);
	homemMosquito = createSprite(200, 200, 10, 10);
	homemMosquito.shapeColor = "red";
	capitaoFormiga = createSprite(450, 450, 10, 10);
	capitaoFormiga.shapeColor = "yellow";
	

	//Crie os Corpos aqui.


	Engine.run(engine);
  
} 

function draw() {
  rectMode(CENTER);
  background(0);
  if(keyDown(UP_ARROW)){
    homemMosquito.y = homemMosquito.y  -3
  }
  if(keyDown(DOWN_ARROW)){
    homemMosquito.y = homemMosquito.y  +3
  }
  if(keyDown(LEFT_ARROW)){
    homemMosquito.x = homemMosquito.x  -3
  }
  if(keyDown(RIGHT_ARROW)){
    homemMosquito.x = homemMosquito.x  +3
  }
  if(homemMosquito.isTouching(predio5)){
    textSize(22);
    text("hm mosquito- DESISTA! cp formiga- VOCÊ NÃO VAI ME DERROTAR.",60,80);
  
  }
  if(homemMosquito.isTouching(capitaoFormiga)){
    textSize(22);
    text("SOCO** VOCÊ VENCEU",130,105);
  }
  drawSprites();
 
}



