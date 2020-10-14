function Leaf(x,y,m){
	this.x = x;
	this.y = y;
	this.l = createVector(this.x, this.y);
	this.velocity = createVector(0,0);
	this.acceleration = createVector(0,0);
	this.m = m;

	this.display = function(){
		noStroke();
		fill(255, 255, 26, 120);
		ellipse(this.l.x, this.l.y, 10*this.m,10*this.m);
	};


	this.applyForce = function(f){
		var force = p5.Vector.div(f,this.m);
		this.acceleration.add(force);
	};

	this.update = function(){
		this.velocity.add(this.acceleration);
		this.velocity.limit(20);
		this.l.add(this.velocity);
		this.acceleration.mult(0);
	};


	this.checkEdges = function(){
		if(this.l.x>width){
			this.l.x = width;
			this.velocity.x *= -0.3;
		}
		else if(this.l.x<0){
			this.l.x = 0;
			this.velocity.x *= -0.3;
		}
		
		if(this.l.y>height){
			this.l.y = height;
			this.velocity.y *= -0.3;
		}
		else if(this.l.y<0){
			this.l.y = 0;
			this.velocity.y *= -0.3;
		}
	};


}