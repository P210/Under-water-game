class Turtle{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=250;
        this.height=250;
        this.image=loadImage("images/turtle.png");
    }
    movehor(pos){
        this.x=this.x+pos;
    }
    movever(pos){
        this.y=this.y+pos;
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,250,250);

    }
}
