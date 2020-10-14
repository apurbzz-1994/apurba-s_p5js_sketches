var a = [];//stores planets
var b = [];//stores asteroids
var numB = 80;

function setup(){
	createCanvas(windowWidth,windowHeight);
	a[0] = new Attractor(width/2-200,height/2,6);
	a[1] = new Attractor(width/2+150, height/2, 7);

	for(var i=0; i<numB;i++){
		b[i] = new Mover(random(width),random(height), random(20,40));
	}
}

function draw(){
	background(50);
	a[0].display();
	a[1].display();
	//a[0].flicker();
	//a[1].flicker();

	for(var i=0;i<b.length;i++){
		b[i].display();
		b[i].update();
		b[i].checkEdges();
	}

	for(var i=0;i<a.length;i++){
		for(var j=0;j<b.length;j++){
			a[i].attract(b[j]);
		}
	}

}