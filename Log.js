class Log{
  constructor(x,y,height,angle){
      var options = {
          restitution:0.5,
          density:3,
          friction:3
      }
      this.image = loadImage("sprites/wood2.png")
      this.body = Bodies.rectangle (x,y,20,height,options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      World.add(world,this.body);
  }
  display(){
      var pos = this.body.position
      var angle = this.body.angle
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      imageMode(CENTER)
      fill("Brown")
      image(this.image,0,0,this.width,this.height)
      pop()
  }
}