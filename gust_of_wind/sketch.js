var movers = [];
var numMovers = 30;
var wind;
var gravity;


function setup(){
	createCanvas(600,600);
	wind = createVector(5,2);
	gravity = createVector(0,0.6);
	for(var i=0;i<numMovers;i++){
		movers[i] = new Mover(random(width), random(height), random(1,5));
	}

	createP('Coded with love using P5.JS by Apurba');
}

function mousePressed(){
	for(var i=0;i<movers.length;i++){
		
		movers[i].applyForce(wind);
	}
}

function draw(){
	background(255);
	for(var i=0;i<movers.length;i++){
		movers[i].show();
		movers[i].update();
		movers[i].checkEdges();
		//movers[i].applyForce(wind);
		movers[i].applyForce(gravity);

		//==applying friction===
		var c = 0.01; //coefficient of friction
		var friction = movers[i].velocity.copy();
		friction.normalize();
		friction.mult(-1);
		friction.mult(c);
		movers[i].applyForce(friction);
	}
}