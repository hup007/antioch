/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;
var scrollCloud;
var scrollMt;
var scrollsplMt;
var scrollTree;
var scrollsplTree;
var scrollHouse;

var clouds;
var mountains;
var trees_x;
var specialTrees_x;
var specialTrees;
var canyon;
var collectable;
var house_x;
var cloud_pos;
var mountain_pos;
var mt_x;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;
	scrollCloud = 0;
	scrollMt = 0;
	scrollTree = 0;
	scrollHouse = 0;
	scrollsplMt = 0;
	scrollsplTree = 0;

	// Initialise arrays of scenery objects.

	trees_x = [];
	for(var i=-9100;i < 9000; i = i+400)
	{
		trees_x.push(i);
	}

	specialTrees_x = [];
	for(var i=-9180;i < 9000;i = i+550) {
		specialTrees_x.push(
			specialTrees = {
				xPos: i,
				width: 50,
				height: random(80,150),
				ground: floorPos_y+5,
				foliageScale: 1.8
			}
		);

	}

	cloud_pos = [];
	
	for(var i=-9000;i < 9000;i= i+300){
		cloud_pos.push(
			clouds = {
				cloudX: i,
				cloudY: 100 + 50*random(-1, 1),
				cloudScale: 1.0 +random(-0.1, 1)
			}
		);
	}
	// mountains = [[255,432,350,350],[675,432,350,350]];
	mountain_pos = [];
	for(var j=-9000;j < 9000; j = j+800){
		mountain_pos.push(
			mountains = {
				posX: j,
				posY: 430,
				height: 250 + 100*random(-1,1),
				colour: random(120,210),
				iceScale: random(0,2,0.5)
			}
		);
	}

	mt_x = [];
	for(var j=-9000;j < 9000; j = j+800){
		mt_x.push(
			mountains = {
				posX: j,
				posY: 430,
				colour: random(80,180)
			}
		)
	}

	canyon = [];
	for(var i=-9000; i<9000; i = i+800){
		canyon.push(
			canyon_x = {
				width: 80+random(-1,1)*10,
				xPos: i,
				depth: 100
			}
		)
	}
	// collectable = [[300,425],[575,425],[800,425]];
	collectable = [];
	for(var c=-9000; c<9000;c = c+265){
		collectable.push(
			collectable_x = {
				xPos: c,
				blueColour: random(0,255)
			}
		)
	}
	house_x = [];
	for(var i=-9000;i < 9000; i=i+800){
		house_x.push(i);
	}
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height/4); // draw some green ground

	push();
	translate(scrollCloud, 0);

	// Draw clouds.
	for(var i=0;i < cloud_pos.length;i++){
		fill(230,230,230);
		ellipse(cloud_pos[i].cloudX, cloud_pos[i].cloudY, 30*cloud_pos[i].cloudScale, 30*cloud_pos[i].cloudScale); 
	
		ellipse(cloud_pos[i].cloudX+30, cloud_pos[i].cloudY, 50*cloud_pos[i].cloudScale, 50*cloud_pos[i].cloudScale);

		ellipse(cloud_pos[i].cloudX+50, cloud_pos[i].cloudY, 50*cloud_pos[i].cloudScale, 50*cloud_pos[i].cloudScale);

		ellipse(cloud_pos[i].cloudX+80, cloud_pos[i].cloudY, 30*cloud_pos[i].cloudScale, 30*cloud_pos[i].cloudScale);

		ellipse(cloud_pos[i].cloudX+100, cloud_pos[i].cloudY, 20*cloud_pos[i].cloudScale, 20*cloud_pos[i].cloudScale);
	}

	pop();
	push();
	translate(scrollMt,0);

	// Draw mountains.
	for(var k=0;k < mountain_pos.length;k++){
		fill(mountain_pos[k].colour, 70, 20);
		triangle(mountain_pos[k].posX,floorPos_y,mountain_pos[k].posX+250,floorPos_y-mountain_pos[k].height,mountain_pos[k].posX+600,floorPos_y);
		// mountain caps
		fill(255);
		triangle(mountain_pos[k].posX*mountain_pos.iceScale,floorPos_y*mountain_pos.iceScale,mountain_pos[k].posX+250,floorPos_y-mountain_pos[k].height,(mountain_pos[k].posX+600)*mountain_pos.iceScale,floorPos_y*mountain_pos.iceScale);
	}

	pop();
	push();
	translate(scrollsplMt,0);

	for(var k=0;k < mt_x.length;k++) {
		fill(mt_x[k].colour,mt_x[k].colour,mt_x[k].colour);
		triangle(mt_x[k].posX, 433, mt_x[k].posX+600, 100, mt_x[k].posX+1024, 433);

		fill(255,255,255);
		beginShape();
		vertex(mt_x[k].posX+450, 183);
		vertex(mt_x[k].posX+600,100);
		vertex(mt_x[k].posX+728,200);
		vertex(mt_x[k].posX+650,180);
		vertex(mt_x[k].posX+590,200);
		vertex(mt_x[k].posX+510,170);
		endShape();
	}

	pop();
	push();
	translate(scrollHouse,0);

	for(var i=0;i < house_x.length;i++) {
		//House
		stroke(0,0,0);
		strokeWeight(3);
		fill(232, 126, 21);
		rect(house_x[i]+10,floorPos_y-150,30,50);

		fill(161, 10, 10);
		rect(house_x[i], floorPos_y-90, 150, 90);
		fill(0,0,0);
		triangle(house_x[i]+75, floorPos_y-150, house_x[i]+160, floorPos_y-90, house_x[i]-10, floorPos_y-90);

		fill(255,255,255);
		rect(house_x[i]+20, floorPos_y-60, 30, 30);
		line(house_x[i]+20,floorPos_y-45,house_x[i]+50,floorPos_y-45);
		line(house_x[i]+35,floorPos_y-60,house_x[i]+35,floorPos_y-30);

		fill(100,0,0)
		rect(house_x[i]+85,floorPos_y-70,40,70);
		
		noStroke();
	}

	pop();
	push();
	translate(scrollTree, 0);
	
	// Draw trees.
	for(var i=0;i < trees_x.length;i++){
		fill(160, 82, 45);
		rect(trees_x[i], floorPos_y-height/4, 40, 150);
		
		//branches
		fill(0,100,0);
		ellipse(trees_x[i] + 40, floorPos_y-height/4, 100*1.5, 80*1.5);
		ellipse(trees_x[i] - 5, floorPos_y-height/4, 100*1.5, 80*1.5);
		ellipse(trees_x[i] + 20, floorPos_y-height/4-30, 100*1.5, 80*1.5);
	}

	pop();
	push();
	translate(scrollsplTree,0);

	// Draw specialTrees.
	for(var i=0;i < specialTrees_x.length;i++) {
		//Foliage
		fill(0, 128, 0);
		ellipse(specialTrees_x[i].xPos-30,specialTrees_x[i].ground-specialTrees_x[i].height-40,50*specialTrees_x[i].foliageScale,50*specialTrees_x[i].foliageScale);

		ellipse(specialTrees_x[i].xPos-10,specialTrees_x[i].ground-specialTrees_x[i].height-50,50*specialTrees_x[i].foliageScale,50*specialTrees_x[i].foliageScale);

		ellipse(specialTrees_x[i].xPos+10,specialTrees_x[i].ground-specialTrees_x[i].height-60,50*specialTrees_x[i].foliageScale,50*specialTrees_x[i].foliageScale);

		ellipse(specialTrees_x[i].xPos+30,specialTrees_x[i].ground-specialTrees_x[i].height-40,50*specialTrees_x[i].foliageScale,50*specialTrees_x[i].foliageScale);

		//Trunk & branches
		fill(153, 77, 0);
	
		beginShape();
		vertex(specialTrees_x[i].xPos,specialTrees_x[i].ground);
		vertex(specialTrees_x[i].xPos+10,specialTrees_x[i].ground-specialTrees_x[i].height);
		vertex(specialTrees_x[i].xPos-20, specialTrees_x[i].ground-specialTrees_x[i].height-30);
	
		vertex(specialTrees_x[i].xPos+15,specialTrees_x[i].ground-specialTrees_x[i].height-6);
		vertex(specialTrees_x[i].xPos+30,specialTrees_x[i].ground-specialTrees_x[i].height-20);
	
		vertex(specialTrees_x[i].xPos+20,specialTrees_x[i].ground-specialTrees_x[i].height);
		vertex(specialTrees_x[i].xPos+specialTrees_x[i].width,specialTrees_x[i].ground);
		endShape();

		/*
		
		*/
	}
	pop();
	push();
	translate(scrollPos, 0)

	// Draw canyons
	
	for(var n = 0;n < canyon.length;n++){
		fill(163, 106, 13);
		rect(canyon[n].xPos,432,canyon[n].width,100);
		fill(205, 133, 63);
		quad(canyon[n].xPos+canyon[n].width,432,canyon[n].xPos+canyon[n].width+30,432+10,canyon[n].xPos+canyon[n].width + 30,432+height,canyon[n].xPos+canyon[n].width,432+height);
		quad(canyon[n].xPos,432,canyon[n].xPos-30,432+10,canyon[n].xPos-30,432+height,canyon[n].xPos,432+height);
		
		fill(101,67,33);
		quad(canyon[n].xPos,floorPos_y+canyon[n].depth,canyon[n].xPos+canyon[n].width,floorPos_y+canyon[n].depth,canyon[n].xPos+canyon[n].width+30,floorPos_y+canyon[n].depth+30,canyon[n].xPos-30,floorPos_y+canyon[n].depth+30);
		fill(0, 155, 0);
		rect(canyon[n].xPos-30,floorPos_y+canyon[n].depth+30,canyon[n].width+60,height-(floorPos_y+canyon[n].depth+30));
	}
	
	// Draw collectable items

	for(var c = 0;c < collectable.length;c++){
		fill(139,0,collectable[c].blueColour);
		ellipse(collectable[c].xPos,430,20,20);
		fill(0, 255, 0);
		rect(collectable[c].xPos,430-36,20-18,20+10);
		console.log(collectable_x.blueColour);
	}

	pop();

	// Draw the game character - this must be last
	fill(200,100,100);
	ellipse(gameChar_x,gameChar_y-50,35);
	rect(gameChar_x-22,gameChar_y-25,9,15);
	rect(gameChar_x+13,gameChar_y-25,9,15);
	fill(160, 82, 45);
	ellipse(gameChar_x,gameChar_y-48,4,4);

	fill(255, 20, 147);
	rect(gameChar_x - 13,gameChar_y - 35,26,30);
	rect(gameChar_x-22,gameChar_y-35,9,10);
	rect(gameChar_x+13,gameChar_y-35,9,10);

	fill(0);
	rect(gameChar_x - 15,gameChar_y - 5,10,10);
	rect(gameChar_x + 5,gameChar_y - 5,10,10);

	ellipse(gameChar_x-5,gameChar_y-55,4,4);
	ellipse(gameChar_x+5,gameChar_y-55,4,4);

	//////// Game character logic ///////
	// Logic to move

	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
			scrollCloud += 2;
			scrollsplMt += 3;
			scrollMt += 2.5;
			scrollTree += 4;
			scrollsplTree += 4.5;
			scrollHouse += 3.5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
			scrollCloud -= 2;
			scrollsplMt -= 3;
			scrollMt -= 2.5;
			scrollTree -= 4;
			scrollsplTree -= 4.5;
			scrollHouse -= 3.5;
		}

	}
}

function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}

}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}
}
