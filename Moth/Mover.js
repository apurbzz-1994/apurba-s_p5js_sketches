function Mover(x,y,m){
	this.x = x;
	this.y = y;
	this.m = m;
	this.topSpeed = 20;
	this.l = createVector(this.x, this.y);
	this.velocity = createVector(0,0);//perlin noise
	this.acceleration = createVector(0,0);

	this.display = function(){
		noStroke();
		fill(200);
		//awkward triangle
		triangle(this.l.x, this.l.y+random(40), this.l.x, this.l.y, this.l.x-random(40), this.l.y-random(50));
	};

	this.applyForce = function(f){
		var force = p5.Vector.div(f, this.m);
		this.acceleration.add(force);
	};

	this.update = function(){
		this.velocity.add(this.acceleration);
		this.velocity.limit(this.topSpeed);
		this.l.add(this.velocity);
		this.acceleration.mult(0);	
	};

	this.checkEdges = function(){
		this.l.x = constrain(this.l.x,50,width-50);
		this.l.y = constrain(this.l.y,50,width-50);
	};

}