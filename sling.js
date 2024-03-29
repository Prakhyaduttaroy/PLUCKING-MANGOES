class Sling
{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        console.log(bodyA);
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }


display()
{
    if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        
        stroke(48,22,8);
        
            line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
            
       
       
        
        pop();
    } 
   
}
}