const w = 800;
const h = 600;

class Molecule {
  constructor() {
    this.diameter = 15;
  }
  draw() {
    fill(this.color)
    circle(this.x, this.y, this.diameter)
  }
}

class RedMolecule extends Molecule {
  constructor() {
    super()
    this.color = "red"
    this.x = 400;
    this.y = 150;
  }
}

const r = new RedMolecule()

function setup() {
  createCanvas(w, h);
  background(0);
  fill(204);
  stroke(0);
  rect(100, 100, 600, 100);
  stroke("red");
  strokeWeight(4);
  line(100, 100, 700, 100);
  line(100, 200, 700, 200);

}

function draw() {
  r.draw();

}