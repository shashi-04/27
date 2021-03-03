class Bob {

    constructor(x,y,r){
        var options={
            isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
        }
        this.body=Bodies.circle(x,y,r,options);
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world,this.body)

    }
    display(){
        var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)

			ellipse(0,0,this.r, this.r);
			pop()
    }
}