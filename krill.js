class Krill{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=75;
        this.height=75;
        this.image=loadImage("images/sprite1.png","images/sprite0.png");
    }
    display(){
      imageMode(CENTER);
      image(this.image,this.x,this.y,75,75);
    }
}