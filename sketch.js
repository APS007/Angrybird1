const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies



function setup() {
  createCanvas(1500,600);
  engine = Engine.create()
  world = engine.world
  ground = new Ground(600,height,1200,20) //(x axis , yaxis, width, height)
  bird = new Bird(100,100)
  pig1 = new Pig(810,350)
  pig2 = new Pig(810,220)
  pig3 = new Pig(400,220)
  log1 = new Log(810,260,300,PI/2)
  log2 = new Log(810,180,300,PI/2)
  log3 = new Log(760,120,150,PI/7)
  log4 = new Log(870,120,150,-PI/7)
  log5 = new Log(390,120,300,PI/2)
  box1 = new Box(700,320,70,70)
  box2 = new Box(920,320,70,70)
  box3 = new Box(700,240,70,70)
  box4 = new Box(920,240,70,70)
  box5 = new Box(810,160,70,70)
  box6 = new Box(500,160,70,70)
  box7 = new Box(280,160,70,70)
}

function draw() {
    background("lightblue") 
  Engine.update(engine)
  ground.display() 
  bird.display()
  pig1.display()
  pig2.display()
  pig3.display()
  log1.display()
  log2.display()
  log3.display()
  log4.display()
  log5.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()

}
