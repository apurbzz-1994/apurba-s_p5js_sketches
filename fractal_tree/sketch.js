var angleOne;
var angleTwo;
var lenSlide;
var multFact;

function setup(){
	//background(51);
	angleMode(DEGREES);
	createCanvas(1200,600);
	angleOne= createSlider(0, 360, 45, 0.01);
	angleTwo= createSlider(0, 360, 45, 0.01);
	lenSlide = createSlider(1.5,5,4,0.01);
	multFact = createSlider(0.1, 0.72, 0.67, 0.01);
}

function draw(){
	background(51);
	//angle = slider.value();
	stroke(255);
	translate(width/2,height);
	branch(200);
}

function branch(len){
	line(0,0,0,-len);
	translate(0,-len);
	if(len>lenSlide.value()){
		push();
		rotate(angleOne.value());
		branch(len * multFact.value());
		pop();
		
		push();
		rotate(-angleTwo.value());
		branch(len * multFact.value());
		pop();
	}
}
