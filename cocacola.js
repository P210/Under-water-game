class Cocacola{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=105;
        this.height=105;
        this.image=loadImage("images/coca cola.png");
    }
    display(){
      imageMode(CENTER);
      image(this.image,this.x,this.y,105,105);
    }
}