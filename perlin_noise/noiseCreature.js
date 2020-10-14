//a class for perlin noise creatures
function noiseCreature(inc){
	this.xoff = random(20);
	this.yoff = random(1000);
	this.inc = inc;
	this.c = random(0,200);
	this.r = random(5,20);
	
	this.render = function(){


		var x = map(noise(this.xoff),0,1,-50,50);
		var s = map(sin(this.xoff),-1,1,0,width);

		var xPos = x + s;

		var y = map(noise(this.yoff),0,1,0,height);


		noStroke();
		fill(this.c,100);
		ellipse(xPos,y,this.r,this.r);

	};

	this.move = function(){
		this.xoff += this.inc;
		this.yoff += this.inc;

	};
}