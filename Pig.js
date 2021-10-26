class Pig extends clase_base {
    constructor(x, y) {
       super(x,y,50,50);
    this.image = loadImage("enemy.png");
      this.visiblity= 225;
  }
  display(){
//   console.log(this.body.speed)
   if(this.body.speed < 3){
    super.display(); 
  }
    else{
     World.remove(mundo, this.body);
      push()
      this.visiblity= this.visiblity-5;
       tint(225,this.visiblity)
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop()
     }
}
  puntaje(){
    if (this.visiblity<0 && this.visiblity>-1005){
      puntos=puntos+1
    }
    
  }
 }