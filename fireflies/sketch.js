var movers = [];
var numMovers = 80;
var wind;
var gravity;


function setup(){
	createCanvas(600,600);
	wind = createVector(5,2);
	gravity = createVector(0,0.6);
	for(var i=0;i<numMovers;i++){
		movers[i] = new Mover(random(width), random(height), random(0.4,1));
	}

	createP('Coded with love using P5.JS by Apurba');
}



function draw(){
	background(70);

	fill(200);
	ellipse(520,120,50,50);
	ellipse(520-30, 125, 34,34);
	ellipse(520+30, 125, 34,34);

	ellipse(420,125,50,50);
	ellipse(420-30, 130, 34,34);
	ellipse(420+30, 130, 34,34);

	ellipse(120,125,50,50);
	ellipse(120-30, 130, 34,34);
	ellipse(120+30, 130, 34,34);

	fill(250);
	ellipse(300,125, 60, 60);
	

	for(var i=0;i<movers.length;i++){
		movers[i].show();
		movers[i].update();
		movers[i].checkEdges();
		movers[i].flicker();
	
	}
}