const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  can1;
var stand;
var poly, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    can1 = new Can(330,235,30,40);
    can2 = new Can(360,235,30,40);
    can3 = new Can(390,235,30,40);
    can4 = new  Can(420,235,30,40);
    
    can5 = new Can(360,195.30,40)
   can6 = new Can(390,195,30,40)
   can7 = new Can(420,195,30,40)

   stand1 = new Stand(350,235,200,10)
   stand2 = new Stand(350,195,200,10)




   can8 = new Can(390,155,30,40)

    poly = new Poly(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(poly.body,{x:200, y:50});
}

function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);
    display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
if(keyCode===32){
slingshot.attach(poly.body)
}

}

