var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    b1= createSprite(0,580,360,30)
    b1.shapeColor="red"
    b2= createSprite(295,580,200,30)
    b2.shapeColor="blue"
    b3= createSprite(515,580,200,30)
    b3.shapeColor="yellow"
    b4= createSprite(740,580,220,30)
    b4.shapeColor="green"



    //create box sprite and give velocity
box=createSprite(random(20,750),100,40,40)
box.shapeColor="white"
box.velocityX=4
box.velocityY=9

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites()
box.bounceOff(edges)



    //add condition to check if box touching surface and make it box
    if(b1.isTouching(box)){
        box.shapeColor="red"
        box.velocityX=0
        box.velocityY=0
    }
    if(b2.isTouching(box)){
        box.shapeColor="blue"
        box.velocityX=0
        box.velocityY=0
    }
    if(b3.isTouching(box)){
        box.shapeColor="yellow"
        box.velocityX=0
        box.velocityY=0
    }
    if(b4.isTouching(box)){
        box.shapeColor="green"
        box.velocityX=0
        box.velocityY=0
    }
  drawSprites()
}
