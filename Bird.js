class Bird extends clase_base {
    constructor(x, y) {
      super(x,y,50,50);
    this.image = loadImage("bird.png");
      this.humo= loadImage("smoke.png");
      this.xy = []
    }
    display(){
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    
      if(this.body.velocity.x > 10 && this.body.position.x > 200){
      
        var position = [this.body.position.x, this.body.position.y];
      this.xy.push(position);
    
  }

     

for(var i=0; i<this.xy.length; i++){
      image(this.humo, this.xy[i][0], this.xy[i][1]);
    }
     }
     }