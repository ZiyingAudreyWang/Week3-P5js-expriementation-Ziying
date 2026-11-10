
let emojis = ["😀", "😍", "🥰", "😭", "😎", "👻", "🐱", "🌸", "🍓", "🌈", "⭐", "💖", "🍒", "🦋", "🐶", "🐧", "🐖", "🦞"];

function setup() {
  createCanvas(710, 400);
  background(20);
  textAlign(CENTER, CENTER);
}

function draw() {
  // Random emojis appear automatically
  if (random(100) < 5) {
    textSize(random(20, 60));
    text(random(emojis), random(width), random(height));
  }
}


function mousePressed() {
  textSize(random(30, 80));
  text(random(emojis), mouseX, mouseY);
}


function mouseDragged() {
  textSize(random(20, 50));
  text(random(emojis), mouseX, mouseY);
}


function keyPressed() {
  if (key === 'c' || key === 'C') {
    background(20);
  }
}

function doubleClicked() {
  background(random(255), random(255), random(255));
}
