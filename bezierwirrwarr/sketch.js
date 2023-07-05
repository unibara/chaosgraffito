// bezierwirrwarr, unibara, 2023. 🌪️
// beispiele liegen https://github.com/unibara/chaosgraffito bei!

let phase_bezier = true;
let x = 0;
let y = 0;

function randomness(min, max) {
  return Math.random() * (max - min) + min;
}

function setup() {
  createCanvas(800, 800);
  let weight = randomness(0, 20);
  let c_r = randomness(0, 255);
  let c_g = randomness(0, 255);
  let c_b = randomness(0, 255);

  background(c_r - 10, c_g - 10, c_b - 10);
  stroke(c_r + 30, c_g + 30, c_b + 30);
  fill(c_r - 20, c_g - 20, c_b - 20)
  strokeWeight(weight);
}

function draw() {
  while (phase_bezier) {
    for (x = 0; x <= width; x += 30) {
      for (y = 0; y <= height; y += 30) {
        ellipse(x, y, 20, 20);
      }
      ellipse(x, y, 20, 20);
    }
    for (let i = 0; i < 20; i++) {
      let p1 = randomness(1, 800) ;
      let p2 = randomness(1, 800) ;
      let p3 = randomness(1, 800) ;
      let p4 = randomness(1, 800) ;
      let p5 = randomness(1, 800) ;
      let p6 = randomness(1, 800) ;
      let p7 = randomness(1, 800) ;
      let p8 = randomness(1, 800) ;

      bezier(p1, p2, p3, p4, p5, p6, p7, p8)

    }
    phase_bezier = false;
  }
}
