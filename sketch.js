const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var puntos=0
var motor, mundo;
var caja1, pig1;
var caja2, pig2;
var caja3;
var caja4;
var caja5;
var caja6;
var fondo;
var tronco;
var liga;
var estado=1;
var pig4;
var base5;

function preload(){
  if(hour()>07&&hour()<20){
  fondo=loadImage("bg.png")
  }
  else{
    fondo=loadImage("noche.jpg")
  }
}

function setup(){
    var canvas = createCanvas(1200,400);
  //console.log(hour())
    motor = Engine.create();
    mundo = motor.world;
    ground = new Piso(600,height,1200,20)
  plataforma=new Piso(100,275,200,230)
  
 

    caja1 = new Caja(700,320,70,70);
    caja2 = new Caja(920,320,70,70);
    pig1 = new Pig(810, 350);
    base1 = new Base(810,260,300, PI/2);
//  tronco=new Base(80,70,120,PI/2)

    caja3 = new Caja(700,240,70,70);
    caja4 = new Caja(920,240,70,70);
    pig3 = new Pig(810, 220);

    base2 =  new Base(810,180,300, PI/2);

    caja5 = new Caja(810,160,70,70);
    base3 = new Base(760,120,130, PI/1);
    base4 = new Base(870,120,130, -PI/1);
  pig4= new Pig(815,150);
  base5=new Base(810,65,200,PI/2);

    ave_bird = new Bird(100,100);
  liga= new resortera(ave_bird.body,{x:170,y:83});
 }

function draw(){
    background(fondo);
  text(mouseX+" , "+mouseY,300,50)
  fill("white")
  textSize(20 )
  text("puntaje: "+puntos,180,40)
    Engine.update(motor);
   // console.log(caja2.body.position.x);
    //console.log(caja2.body.position.y);
   // console.log(caja2.body.angle);
    caja1.display();
    caja2.display();
    ground.display();
    pig1.display();
   pig1.puntaje();
    base1.display();
    caja3.display();
    caja4.display();
    pig3.display();
  pig3.puntaje();
  pig4.display();
  pig4.puntaje();
  
    base2.display();
  //tronco.display();
  liga.display();
  plataforma.display();

    caja5.display();
    base3.display();
    base4.display();
  base5.display();

    ave_bird.display();
}
function mouseDragged() {
  if (estado==1) 
    Matter.Body.setPosition(ave_bird.body, { x: mouseX, y: mouseY });
}
function mouseReleased() { 
  liga.fly(); 
  estado=2; 
}
function keyPressed(){
  if (keyCode==82){     
    Matter.Body.setPosition(ave_bird.body, { x: 180, y: 80 });
  liga.atach(ave_bird.body);  
  }
  estado=1
}