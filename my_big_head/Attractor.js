function Attractor(rot){
	this.l = createVector(width/2, height/2);
	this.mass = 20;
	this.G = 0.4;
	this.rot = rot;
	

	this.attract = function(m){
		//m is a mover object
		var force = p5.Vector.sub(this.l, m.l);
		var dist = force.mag();
		dist = constrain(dist, 5.0, 25.0);

		force.normalize();
		var strength = (this.G*this.mass*m.m)/(dist*dist);
		force.mult(strength);
		return force;

	};

	this.show = function(){
		//add image
		imageMode(CENTER);
		
		push();
			translate(this.l.x, this.l.y);
			rotate(this.rot);
			image(img, 0,0);
			this.rot = this.rot + 1;
		pop();

	};

}