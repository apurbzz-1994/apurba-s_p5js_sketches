function Attractor(l,m){
	this.l = l;
	this.m = m;
	this.g = 0.1;

	this.display = function(){
		stroke(79,210,130);
		strokeWeight(1);
		fill(79,210,130,100);
		ellipse(this.l.x, this.l.y, this.m*20, this.m*20);
	};

	this.attract = function(k){
		var dir = p5.Vector.sub(this.l, k.l);
		var dst = dir.mag();
		dst = constrain(dst,5.0,25.0);
		var cons = (this.g*this.m*k.m)/(dst*dst);

		dir.normalize();
		dir.mult(cons);
		return dir;
	};
}