class Ellipse_123{
    constructor(x,y,w,h){
        var option={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,

        }
        this.body=Bodies.rectangle(x,y,w,h,option)
        this.w=w
        this.h=h
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        fill(rgb(123,123,123))
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.w,this.h)
    }
}