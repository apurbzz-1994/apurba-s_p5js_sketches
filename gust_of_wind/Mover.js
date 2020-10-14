function Mover(x,y,m){
	this.x = x;
	this.y = y;
	this.m = m;
	this.topSpeed = 24;
	this.c = color(100,231,40);
	this.l = createVector(this.x, this.y);
	this.velocity = createVector(0,0);
	this.acceleration = createVector(0,0);

	this.show = function(){
		noStroke();
		fill(this.c);
		ellipse(this.l.x, this.l.y, this.m*16, this.m*16);
	};

	this.applyForce = function(f){
		var force = p5.Vector.div(f,this.m);
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
			this.l.y = height;
			this.velocity.y *= -1;
		}
	};
} 