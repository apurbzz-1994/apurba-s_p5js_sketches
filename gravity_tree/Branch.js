function Branch(begin,end){
	this.begin = begin;
	this.end = end;
	this.grown = false;

	this.show = function(){
		stroke(60);
		strokeWeight(5);
		line(this.begin.x, this.begin.y, this.end.x, this.end.y);
	};

	this.makeLeftBranch = function(){
		var dir = p5.Vector.sub(this.end, this.begin);
		dir.mult(0.67);
		dir.rotate(PI/4);
		var newEnd = p5.Vector.add(this.end, dir);
		var left = new Branch(this.end, newEnd);
		return left;
	};

		this.makeRightBranch = function(){
		var dir = p5.Vector.sub(this.end, this.begin);
		dir.mult(0.67);
		dir.rotate(-PI/6);
		var newEnd = p5.Vector.add(this.end, dir);
		var right = new Branch(this.end, newEnd);
		return right;
	};

}