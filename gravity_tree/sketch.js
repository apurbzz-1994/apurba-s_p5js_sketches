
//declaring all necessary data structures
var tree = []; //stores branch objects
var leaves = []; //stores asteroids
var a = [];//stores attractor objects
var count = 0;


function setup(){
	createCanvas(800,600);
	frameRate(30);
	var b = createVector(width/2, height);
	var e = createVector(width/2, height-200);
	tree[0] = new Branch(b,e);
	createP("Coded with love using P5.JS by Apurba");
	//generating asteroids
	for(var i=0;i<210;i++){
		leaves[i] = new Leaf(random(width),random(height),random(1,3));
	}
}


function draw(){
	background(51,28,56);

	//moon
	noStroke();
	fill(255);
	ellipse(120, 400, 140,140);
	fill(230);
	ellipse(110, 400+20, 50, 50);
	ellipse(120+20, 380, 20, 20);



//generate 7 generations of tree
	if(count<5){
		for(var i=tree.length-1;i>=0;i--){
			if(!tree[i].grown){
				tree.push(tree[i].makeLeftBranch());
				tree.push(tree[i].makeRightBranch());
				tree[i].grown = true;
			}

	}
	count++;
	}
//end of generation

//put attractor objects on the top branch
	
	if(frameCount==5){
	for(var i=0;i<tree.length;i++){
		if(!tree[i].grown){
			//var p = tree[i].end.copy();
			var q = new Attractor(tree[i].end,random(3,5));
			a.push(q);
		}
	}
	}


//display generated tree branches
		for(var i=0;i<tree.length;i++){
			tree[i].show();
		}
		

//displaying attractors
	for(var i=0;i<a.length;i++){
		a[i].display();
		}


for(var i=0;i<leaves.length;i++){
	leaves[i].display();
	leaves[i].update();
	leaves[i].checkEdges();
}


for(var i=0;i<a.length;i++){
	for(var j=0; j<leaves.length;j++){
		var f = a[i].attract(leaves[j]);
		leaves[j].applyForce(f);
	}
}
	
	//base
	fill(247,183,86);
	ellipse(width/2, 790, 500,500);

}


