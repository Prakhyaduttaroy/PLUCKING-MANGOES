class Tree
{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.image = loadImage("tree.png");
}
display(){


image(this.image,800,400,500,500);
}
}