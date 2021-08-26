class CannonBall{
    constructor(x,y,radius){
        var options={
            restitution:0.8,
            friction:1.0,
            density:1.0,
            isStatic:true 
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.r=radius;
        this.image=loadImage("assets/cannonball.png")
        World.add(world,this.body);

    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        push ()
        translate(pos.x,pos.y);
        rotate(angle);
       imageMode(CENTER);
       image(this.image,0,0,this.r,this.r);
       pop ()
    }
    shoot(){
        var velocity=p5.Vector.fromAngle(cannon.angle);
        velocity.mult(20);
        Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y});
        Matter.Body.setStatic(this.body,false);
    }
}