var x = 0;
var y = 0;
var xspeed = 10;
var yspeed = 10;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background (250);
  mySound.setVolume(0.1);
  mySound.play();
}

function preload() {
 mySound = loadSound('sound.mp3');
}


function draw() {

	var d = dist(windowWidth/5, windowHeight/5,0,0);
  var red = random(100,250);
  var blue = random(100,250);
  var green = random(100,250);

  	fill (red, blue, green);
    noStroke();
  	ellipse (x, y, d, d);

 	 x = x + xspeed;

  	 if (x > windowWidth || x < 0)  {
     	xspeed = -xspeed;
  	}

  	y = y + yspeed;

  	if (y > windowHeight || y < 0) {
	 	  yspeed = -yspeed;
  	}

}
