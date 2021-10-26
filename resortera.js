class resortera{
  constructor(bodya, pointb){
    var options ={
     bodyA: bodya,
     pointB: pointb,
      stiffness:0.05,
      length: 10,
      damping:0.5,
    }
    this.pointB=pointb;
    this.cadena= Constraint.create(options);
    //console.log(this.cadena)
    World.add(mundo, this.cadena);
    this.foto1=loadImage("sling1.png")
    this.foto2=loadImage("sling2.png")
    this.foto3=loadImage("sling3.png");
      }
 fly(){
   this.cadena.bodyA=null;
 } 
  atach(body){
    this.cadena.bodyA=body;
    
  }
      display(){
        image(this.foto1,170,70,40,90)
        image(this.foto2,145,70,40,50)
        if(this.cadena.bodyA){
          var puntoA=this.cadena.bodyA.position;
          var puntoB=this.pointB
         push();
        strokeWeight(5);
        stroke(48,22,8);
       line(puntoA.x, puntoA.y, puntoB.x, puntoB.y);
      line(puntoA.x, puntoA.y, puntoB.x+22, puntoB.y);
      image(this.foto3,puntoA.x-20,puntoA.y,50,13)
pop();
       }
}
}