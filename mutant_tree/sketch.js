var tree = []; //stores branch objects
var leaves= []; //stores leaf objects
var count = 0;

function setup(){
	createCanvas(800,800);
	var b = createVector(width/2, height);
	var e = createVector(width/2, height-200);
	tree[0] = new Branch(b,e);
	createP("Coded with love using P5.JS by Apurba");
}


function draw(){
	background(255);

	if(count<4){
		for(var i=tree.length-1;i>=0;i--){
			if(!tree[i].grown){
				tree.push(tree[i].makeLeftBranch());
				tree.push(tree[i].makeRightBranch());
				tree[i].grown = true;
			}

	}
	count++;
	}

	for(var i=0;i<tree.length;i++){
		if(!tree[i].grown){
			//var p = tree[i].end.copy();
			var l = new Leaf(tree[i].end,random(1,3));
			leaves.push(l);
	}

	for(var i=0;i<tree.length;i++){
		tree[i].show();
	}
	
	for(var i=0;i<leaves.length;i++){
		leaves[i].display();
		leaves[i].checkEdges();
		leaves[i].update();
		leaves[i].accelerate();
	}

}
}

