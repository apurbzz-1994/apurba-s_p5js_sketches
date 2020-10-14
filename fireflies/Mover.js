function Mover(x,y,m){
	this.x = x;
	this.y = y;
	this.m = m;
	this.topSpeed = 24;
	this.c = color(255,255,0);
	this.l = createVector(this.x, this.y);
	this.velocity = createVector(random(0.1,2),random(0.1,0.9));
	this.acceleration = createVector(0,0);
	this.radius = this.m*16;

	this.show = function(){
		noStroke();
		fill(255,255,102, 160);
		ellipse(this.l.x, this.l.y, this.radius, this.radius);
		fill(this.c);
		ellipse(this.l.x, this.l.y, this.m*16, this.m*16);
	};

	this.flicker = function(){
		this.radius = random(this.m*16, this.m*16*2);
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
			this.velocity.x *= -0.2;
		}
		else if(this.l.x<0){
			this.l.x = 0;
			this.velocity.x *= -0.2;
		}
		
		if(this.l.y>height){
			this.l.y = height;
			this.velocity.y *= -0.2;
		}
		else if(this.l.y<0){
			this.l.y = 0;
			this.velocity.y *= -0.2;
		}
	};
} 