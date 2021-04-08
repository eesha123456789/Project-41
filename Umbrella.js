class Umbrella{
    constructor(x,y,radius){
        var umbrella_options={
            isStatic: true
        }
        this.radius=radius
        this.umbrella=Bodies.circle(x,y,radius,umbrella_options);
        this.image=loadImage('Walking Frame/walking_1.png')
        World.add(world,this.umbrella);
    }
    display(){
        var pos=this.umbrella.position
        ellipse(pos.x,pos.y,0,0)
        imageMode(CENTER)
        image(this.image, pos.x - 5, pos.y+50, 250, 250)
        
    }

}