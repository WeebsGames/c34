//Create variables here
var dog, happyDog, database, foods, foodStock, dogimg1, dogimg2;
function preload()
{
  //load images here
  dogimg1 = loadImage("images/dogImg.png");
  dogimg2 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,50,50)
  dog.addAnimation("dog",dogimg1);
  dog.scale=0.1;

  foodStock=database.ref('food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(0,175,0);
  drawSprites();
  text("food: " + readStock);
  //add styles here

}



