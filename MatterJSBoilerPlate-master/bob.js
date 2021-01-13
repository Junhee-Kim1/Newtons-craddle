class Bob{
    constructor(x, y, r) {
        var options = {
            'restitution':1,
            'density':1.0
            
        }
        this.body = Bodies.circle(x, y, r);
        this.r = r;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
}