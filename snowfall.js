class Snow{
    constructor(x,y,r)
    {
        var options={
            density:4,
           isStaitc:true
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("snow4.webp");
        this.body=Bodies.circle(this.x,this.y,(this.r/2),options);
        World.add(world,this.body)


    }

    display(){
        var spos=this.body.position;
        push();
        translate(spos.x,spos.y);
        rectMode(CENTER);
        fill(0,0,0);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();


    }
}