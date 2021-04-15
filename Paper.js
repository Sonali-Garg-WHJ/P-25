class Paper
{
    constructor(x,y,r){
        var option = {
            'isStatic':false,
            'restitution':0.3,
            'density':1.2,
            'friction':0

        }
        this.image = loadImage("paper.png");
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,option);

        World.add(world,this.body);

    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill(255);
        imageMode(CENTER);
        image(this.image, 0,0,this.r,this.r);
        
        pop();
    }

}