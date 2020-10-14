var c = []; 

function setup(){
	createCanvas(900,600);
	background(210);

	for(var i=0;i<50;i++){
		c[i] = new noiseCreature(0.01);
	}

}

function draw(){
	//background(210);
	for(var i=0;i<c.length;i++){
		c[i].render();
		c[i].move();
	}
	
}