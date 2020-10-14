function Mover(x,y){
	this.x = x;
	this.y = y;
	this.l = createVector(this.x,this.y);
	this.velocity = createVector(0,0);
	this.acceleration = createVector(0,0);
	this.topSpeed = 10;



	this.display = function(x,y){
		stroke(255);
		strokeWeight(1);
		line(x,y,this.l.x, this.l.y);
	};

	this.update = function(){
		var t = createVector(mouseX, mouseY);
		var f = p5.Vector.sub(t, this.l);
		f.normalize();
		f.mult(0.0001);

		this.acceleration = f;

		this.velocity.add(this.acceleration);
		this.velocity.limit(this.topSpeed);
		this.l.add(this.velocity);
	};

	this.checkEdges = function(){
		if(this.l.x>windowWidth){
			this.l.x = windowWidth;
			this.velocity.x *= -1;
		}
		else if(this.l.x<0){
			this.l.x = 0;
			this.velocity.x *= -1;
		}
		if(this.l.y>windowHeight){
			this.l.y = windowHeight;
			this.velocity.y *= -1;
		}
		else if(this.l.y<0){
			this.l.y = 0;
			this.velocity.y *= -1;
		}
	};

}


var m = [];

function setup(){
	createCanvas(windowWidth,windowHeight);
	for(var i=0;i<6;i++){
		m[i] = new Mover(random(width),random(height));
	}

}

function draw(){
	background(0);

	// m.display(300,300);
	// m.update();

	for(var i=0;i<m.length;i++){
		for(var x=100;x<=width-100;x+=100){
			for(var y=100;y<=height-100;y+=100){
			m[i].display(x,y);
			m[i].update();
			m[i].checkEdges();
		}
	}
}
}
