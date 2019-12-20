class Plasticbag{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=150;
        this.height=150;
        this.image=loadImage("images/plastic bottle2.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,150,150);
}
}