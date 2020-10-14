//this is a mover class
function Mover(x,y,m, img){
	this.x = x;
	this.y = y;
	this.m = m;
	this.topSpeed = 20;
	this.img = img;
	this.l = createVector(this.x, this.y);
	this.velocity = createVector(0,0);
	this.acceleration = createVector(0,0);

	this.display = function(){
		//view images for later
		// noStroke();
		// fill(190);
		// ellipse(this.l.x, this.l.y, this.m*10, this.m*10);
		imageMode(CENTER);
		image(this.img, this.l.x, this.l.y);
	};

	this.applyForce = function(f){
		//the argument f is a PVector
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
		if(this.l.x>width){
			this.l.x = width;
			this.velocity.x *= -1;
		}
		else if(this.l.x<0){
			this.l.x = 0;
			this.velocity.x *= -1;
		}
		if(this.l.y>height){
			this.location.y = height;
			this.velocity.y *= -1;
		}
	};

}