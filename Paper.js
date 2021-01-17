class Paper
{
    constructor(x,y,radius)
{

    var options=
    {
        isStatic:false,
        density:1.2,
        restitution:0.3,
        friction:0.5
    }

    this.radius=radius
    this.image = loadImage("Sprites/paper.png");
    this.body=Bodies.circle(x,y,this.radius,options);
    World.add(world,this.body)
}

display()
{   
  imageMode(CENTER);
  image(this.image,50,529,50,50);
}
}