class rock{
    constructor(x,y,width,height,radius){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2,
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.image = loadImage("stone.png");
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}