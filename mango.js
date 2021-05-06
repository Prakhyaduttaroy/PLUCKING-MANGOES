class Mango
{
    constructor(x, y, width, height)
     {
         this.x = x
         this.y = y
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1,
            
        }
        this.body = Bodies.circle(x, y, 50, options);
        World.add(world, this.body);
this.r = 50;
        this.image = loadImage("mango.png");
}
display(){


        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();


}
}