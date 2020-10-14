function Attractor(x,y,m){
	this.x = x;
	this.y = y;
	this.m = m;
	this.g = 0.1;
	this.radius = this.m*30;
	this.l = createVector(this.x, this.y);

	this.display = function(){
		noStroke();
		fill(255,255,102, 160);
		ellipse(this.l.x, this.l.y, this.radius, this.radius);
		fill(255,255,0);
		ellipse(this.l.x, this.l.y, this.m*25, this.m*25);
	};

	this.attract = function(b){
		var force = p5.Vector.sub(this.l, b.l);
		var dst = force.mag();
		dst = constrain(dst, 25, 50);
		var c = (this.g*this.m*b.m)/(dst*dst);
		force.normalize();
		force.mult(c);
		b.applyForce(force);
	};

	this.flicker = function(){
		this.radius = random(this.m*30,this.m*30*1.2);
};
}