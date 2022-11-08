var bg, bgImg
var player
var grass, water, apple, wall, rock, carrot, sdrink, pizza, burger
var grassImg, waterImg, appleImg, carrotImg, sdrinkImg, pizzaImg, burgerImg
var appleGroup, grassGroup, waterGroup, carrotGroup, pizzaGroup, sdrinkGroup, burgerGroup
var score=0

function preload(){

  bgImg= loadImage("files/greenbg.jpg");
  grassImg= loadImage("files/grass.png")
  waterImg= loadImage("files/water.png")
  appleImg=loadImage("flies/apple.png")
  sdrinkImg=loadImage("files/softdrink.png")
  pizzaImg=loadImage("files/pizza.png")
  burgerImg=loadImage("files/burger.png")
}

function setup() {
 
createCanvas(windowWidth, windowHeight);
  
  //wall= createSprite()
  bg=createSprite(displayWidth, displayHeight)
  bg.addImage(bgImg)

  player= createSprite(displayWidth-100, displayHeight-230, 70, 70)
  player.setCollider("circle",0,0,100,100)
}

appleGroup = new Group();
carrotGroup = new Group();
grassGroup= new Group();
waterGroup= new Group();
pizzaGroup= new Group();
sdrinkGroup= new Group()
burgerGroup= new Group();

function draw() {
  background(bg); 

  //to move the player
  if(keyDown("UP_ARROW")){
    player.y=player.y+10
  }
  if(keyDown("DOWN_ARROW")){
    player.y=player.y-10
  }
  if(keyDown("RIGHT_ARROW")){
    player.x=player.x+10
  }
  if(keyDown("LEFT_ARROW")){
    player.x=player.x-10
  }

//to increase or decrease the score 
if(player.isTouching(appleGroup) || player.isTouching(waterGroup) || player.isTouching(grassGroup) || player.isTouching(carrotGroup)){
  score=score+5
}
if(player.isTouching(pizzaGroup) || player.isTouching(sdrinkGroup) || player.isTouching(burgerGroup)){
  score=score-7
}

if(score>25){
  text("Good going! Keep it up!")
}

if(score<0 || player.isTouching){
  text ("Gameover!")
}
  appleF()
  carrotF()
  waterF()
  pizzaF()
  grassF()
  burgerF()
  sdrinkF()

  drawSprites();
}

function appleF(){
  if(frameCount%50===0){
    apple= creatSprite(random(100,100),random(100,100),50,50)
    apple.addImage(appleImg)
    apple.setCollider("circle",0,0,100,100)
    appleGroup.add(apple)
  }
}

function grassF(){
  if(frameCount%100===0){
    grass= creatSprite(random(50,50),random(50,50),50,50)
    grass.addImage(grassImg)
    grass.setCollider("circle",0,0,100,100)
    grassGroup.add(grass)
  }
}

function waterF(){
  if(frameCount%150===0){
    water= creatSprite(random(150,150),random(150,150),50,50)
    water.addImage(waterImg)
    water.setCollider("circle",0,0,100,100)
    waterGroup.add(water)
  }
}

function carrotF(){
  if(frameCount%200===0){
    carrot= creatSprite(random(200,200),random(200,200),50,50)
    carrot.addImage(carrotImg)
    carrot.setCollider("circle",0,0,100,100)
    carrotGroup.add(carrot)
  }
}

function pizzaF(){
  if(frameCount%50===0){
    pizza= creatSprite(random(50,50),random(50,50),50,50)
    pizza.addImage(pizzaImg)
    pizza.setCollider("circle",0,0,100,100)
    pizzaGroup.add(pizza)
  }
}

function sdrinkF(){
  if(frameCount%100===0){
    sdrink= creatSprite(random(100,100),random(100,100),50,50)
    sdrink.addImage(sdrinkImg)
    sdrink.setCollider("circle",0,0,100,100)
    sdrinkGroup.add(sdrink)
  }
}

function burgerF(){
  if(frameCount%150===0){
    burger= creatSprite(random(150,150),random(150,150),50,50)
    burger.addImage(burgerImg)
    burger.setCollider("circle",0,0,100,100)
    burgerGroup.add(burgerImg)
  }
}