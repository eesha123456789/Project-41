class Drop{
    constructor(x,y){
        var drop_options={
            isStatic: false,
            friction:0.1
        }
        this.radius=5
        this.rain=Bodies.circle(x,y,5,drop_options);
        World.add(world,this.rain);
    }
    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,800), y:random(0,800)})
        }
    }
    display(){
        var pos=this.rain.position
        fill("blue")
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.radius,this.radius)
    }
}