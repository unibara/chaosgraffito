// ruhe im chaos , unibara, 2023. 🥴
// beispiele liegen https://github.com/unibara/chaosgraffito bei!

// note: das ganze ist nicht so schön... vielleicht schreibe ich das bis zum nächsten commit um

let phase_bezier = true;
let x = 0;

let y_1 = 0;
let y_2 = 0;
let y = 0;

let distance_r_r2 = randomness(0,200);


let c_r = randomness(0, 255);
let c_g = randomness(0, 255);
let c_b = randomness(0, 255);

let c_r2 = randomness(0, 255);
let c_g2 = randomness(0, 255);
let c_b2 = randomness(0, 255);

let c_r3 = randomness(0, 255);
let c_g3 = randomness(0, 255);
let c_b3 = randomness(0, 255);

let c_r4 = randomness(0, 255);
let c_g4 = randomness(0, 255);
let c_b4 = randomness(0, 255);


let weight = randomness(0, 20);

function randomness(min, max) {
  return Math.random() * (max - min) + min;
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(c_r - 10, c_g - 10, c_b - 10);
  strokeWeight(weight);
  for (x = 0; x <= width; x += 50) {
    stroke((c_r + 100)%255, c_g + 30, c_b + 10);
    fill((c_r + 100)%255 - 20, c_g - 20, c_b - 30);
    
    y_4 = 2 * cos(x + sin(millis() / 10000)) * 100 
    y_3 = -2 * sin(x + cos(millis() / 10000)) * 100
    y_2 = -1.5 * cos(x + sin(millis() / 10000)) * 100 
    y_1 = sin(x + cos(millis() / 10000)) * 100
    
    ellipse(x, y_1 + height/2 - distance_r_r2, 20, 20);
    
    stroke(c_r2 + 10, c_g2 + 30, (c_r2 + 100)%255 + 30);
    fill(c_r2 - 30, c_g2 - 20, (c_r2 + 100)%255 - 10);
    ellipse(x, y_2 + height/2 + 2 * distance_r_r2, 20, 20);
    
    stroke(c_r3 + 10, c_g3 + 30, (c_r3 + 100)%255 + 30);
    fill(c_r3 - 30, c_g3 - 20, (c_r3 + 100)%255 - 10);
    ellipse(x, y_3 + height/2 - 100, 20, 20);
    
    stroke(c_r4 + 10, c_g4 + 30, (c_r4 + 100)%255 + 30);
    fill(c_r4 - 30, c_g4 - 20, (c_r4 + 100)%255 - 10);
    ellipse(x - 100, y_4 + height/2 + 400, 20, 20);

    
  }
}
