let input;
let bgcolor = "000000";
let facecolor = "FFFFFF";
let eyecolor = "FFFFFF";
let mouthcolor = "FFFFFF";
let lefteyesize = 10;
let righteyesize = 10;
let mouthsize = 10;

function setup() {
  createCanvas(200, 200);
  createP("Enter your username").style("display", "block");
  input = createInput();
  input.style("display", "block");
  input.input(change);
  button = createButton("Save Avatar");
  button.style("display", "block");
  button.mousePressed(saveFile);
}

function change() {
  const hash = CryptoJS.MD5(input.value()).toString();

  bgcolor = hash.substring(0, 4);
  facecolor = hash.substring(4, 8);
  eyecolor = hash.substring(8, 12);
  mouthcolor = hash.substring(12, 16);
  lefteyesize = map(parseInt(hash.substring(16, 20), 16) % 50, 0, 50, 10, 50);
  righteyesize = map(parseInt(hash.substring(20, 24), 16) % 50, 0, 50, 10, 50);
  mouthsize = map(parseInt(hash.substring(24, 28), 16) % 50, 0, 50, 10, 30);
}

function saveFile() {
  saveCanvas(input.value(), "png");
}

function draw() {
  translate(width / 2, height / 2);
  background(`#${bgcolor}`);
  fill(`#${facecolor}`);
  ellipse(0, 0, 100);
  fill(`#${eyecolor}`);
  ellipse(-20, 0, lefteyesize);
  ellipse(20, 0, righteyesize);
  fill(`#${mouthcolor}`);
  ellipse(0, 30, mouthsize);
}
