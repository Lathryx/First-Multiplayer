var socket;
var sizzle;

function setup() {
sizzle = 3;

//var size = createElement('p', 'Size : ' + sizzle);
//size.position(width / 2, height + 30);

  createCanvas(900, 500);
background(60, 60, 80);

  socket = io.connect('https://agile-atoll-76150.herokuapp.com/');
  socket.on('mouseCords', newDrawing);

  function newDrawing(data) {
    stroke(225, 60, 125);
    strokeWeight(data.s);
    line(data.x, data.y, data.px, data.py);
  }
}



function mouseDragged() {
  stroke(75, 125, 255);
  strokeWeight(sizzle);
  line(mouseX, mouseY, pmouseX, pmouseY);

  var data = {
    x: mouseX,
    y: mouseY,
    px: pmouseX,
    py: pmouseY,
    s: sizzle
  }
  socket.emit('mouseCords', data);
}

function draw() {
  if (keyIsDown(107) || keyIsDown(187)) {
    sizzle += 1;
    //size.html('Size : ' + sizzle);
  }

  if (keyIsDown(109) || keyIsDown(189)) {
    sizzle -= 1;
    //size.html('Size : ' + sizzle);
  }
}
