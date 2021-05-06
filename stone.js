class Stone
{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.image = loadImage("stone.png");
        this.body = Bodies.circle(x, y, 50, options);
        World.add(world, this.body);
        this.r = 50;
}


display()

{
    push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();

    
}
}