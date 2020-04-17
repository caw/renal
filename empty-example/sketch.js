const w = 800;
const h = 600;

const redCount = 500;
const blueCount = 500;

const redArray = Array(redCount)
const blueArray = Array(blueCount)

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

class Molecule {
  constructor() {
    this.diameter = 5;
    this.x = getRandomIntInclusive(100, 700);
    this.y = getRandomIntInclusive(100, 200);
  }
  draw() {
    push();
    fill(this.color);
    strokeWeight(0);
    circle(this.x, this.y, this.diameter);
    pop();
  }
}

class RedMolecule extends Molecule {
  constructor() {
    super();
    this.color = "red"
  }
}

class BlueMolecule extends Molecule {
  constructor() {
    super();
    this.color = "blue";
  }
}


console.log('here')

function setup() {
  createCanvas(w, h);
  background(0);
  push();
  fill(204);
  stroke(0);
  rect(100, 100, 600, 100);
  stroke("red");
  strokeWeight(4);
  line(100, 100, 700, 100);
  line(100, 200, 700, 200);
  pop();
  for (i = 0; i < redArray.length; i++) {
    redArray[i] = new RedMolecule();
  }
  console.log(redArray)
  for (i = 0; i < blueArray.length; i++) {
    blueArray[i] = new BlueMolecule();
  }
  console.log(blueArray)
}

function draw() {
  console.log('in draw')
  for (const r of redArray) { r.draw() };
  for (const b of blueArray) { b.draw() };
}