var movers = [];
var numMovers = 6;
var a;
var img;
var imgTwo;
var rot = 0;


function preload(){
	img = loadImage("planet.gif");
	imgTwo = loadImage("satellite_large.gif");
	imgThree = loadImage("satellite_small.gif");
}

function setup(){
	createCanvas(600,600);
	angleMode(DEGREES);
	for(var i=0;i<numMovers;i++){
		movers[i] = new Mover(random(width),random(height),random(0.1,2), imgTwo);
	}
	
	for(var i= numMovers;i<27;i++){
		movers[i] = new Mover(random(width),random(height),random(0.1,2), imgThree);
	}



	a = new Attractor(0);
	

	//createP("Hi! I'm Apurba, and welcome to my About Me site. I'm currently studying Electronics Enginnering, though I'm not a big fan of engineering really. The only reason I like engineeing to the smallest extent is because my undergrad thesis kinda freaks people out-Schrodinger-Poisson coupled analysis of Quantum Well Field Effect Transistors.");
}

function draw(){
	background(255);

	

	for(var i=0;i<movers.length;i++){
		var force = a.attract(movers[i]);
		movers[i].applyForce(force);
		movers[i].update();
		movers[i].display();
	}
	
	a.show();

}
