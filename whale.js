class Whale{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=300;
        this.height=300;
        this.image=loadImage("images/whale.png")
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,300,300);
}
}