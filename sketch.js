var bgImg
var TomImg1,TomImg2,TomImg3,JerryImg1,JerryImg2,JerryImg3
var tom, jerry

function preload() {
    bgImg = loadImage("images/garden.png")
    TomImg1 = loadAnimation("images/cat1.png")
    TomImg2 = loadAnimation("images/cat2.png" , "images/cat3.png")
    TomImg3 = loadAnimation("images/cat4.png")

    JerryImg1 = loadAnimation("images/mouse1.png")
    JerryImg2 = loadAnimation("images/mouse2.png" , "images/mouse3.png")
    JerryImg3 = loadAnimation("images/mouse4.png")


    //load the images here
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(800, 600)
    jerry = createSprite(200, 600)
    
    tom.addAnimation("sitting_cat", TomImg1)
    jerry.addAnimation("standing_jerry", JerryImg1)

    tom.scale = 0.2
    jerry.scale = 0.2
    //create tom and jerry sprites here

}

function draw() {
 
    background(bgImg);
    if (tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0
        tom.x = 300
        tom.addAnimation("happy_Tom", TomImg3)
        tom.changeAnimation("happy_Tom")
        jerry.addAnimation("happy_jerry", JerryImg3)
        jerry.changeAnimation("happy_jerry")

    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
    if (keyCode === LEFT_ARROW){
        tom.velocityX = -5
        tom.addAnimation("running_Tom", TomImg2)
        tom.changeAnimation("running_Tom")
        jerry.addAnimation("hahafunni_jerry", JerryImg2)
        jerry.changeAnimation("hahafunni_jerry")
   
    }
    

  //For moving and changing animation write code here


}
