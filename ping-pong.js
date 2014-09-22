
var fps = 60; // Max FPS (frames per second)// RequestAnimFrame: a browser API for getting smooth animations

window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame || 
		window.webkitRequestAnimationFrame || 
		window.mozRequestAnimationFrame || 
		window.oRequestAnimationFrame || 
		window.msRequestAnimationFrame ||  
		function(callback){
			return window.setTimeout(callback, 1000 / fps);
		};
})();

window.cancelRequestAnimFrame = ( function() {
	return window.cancelAnimationFrame ||
		window.webkitCancelRequestAnimationFrame ||
		window.mozCancelRequestAnimationFrame ||
		window.oCancelRequestAnimationFrame ||
		window.msCancelRequestAnimationFrame ||
		clearTimeout
})();

// Initialize canvas and required variables
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d'); // Create canvas context
var tableWidth = 300; // Window's width
var tableHeight = window.innerHeight - 100; // Window's height
var ball = new Ball(); // Ball object
var topPaddle = new Paddle('top', tableWidth, tableHeight);
var bottomPaddle = new Paddle('bottom', tableWidth, tableHeight);
var ballPaddleCollider = new BallPaddleCollider();
var mousePointer = new MousePointer(); // Mouse object to store it's current position
var pingPongs = 0; // Variable to store points
var startBtn =  new Button('Start', tableWidth, tableHeight); // Start button object
var restartBtn = new Button('Restart', tableWidth, tableHeight); // Restart button object
var isGameOver = false; // flag variable, changed when the game is over
var init; // variable to initialize animation

// Add mousemove and mousedown events to the canvas
canvas.addEventListener("mousemove", mousePointer.trackPosition, true);
canvas.addEventListener("mousedown", btnClick, true);

// Set the canvas's height and width to full screen
canvas.width = tableWidth;
canvas.height = tableHeight;

// Function to paint canvas
function paintCanvas() {
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, tableWidth, tableHeight);
};

// Draw everything on canvas
function draw() {
	paintCanvas();
	
	topPaddle.draw();
	bottomPaddle.draw();
	
	ball.draw();
	update();
};

// Function to update positions, score and everything.
// Basically, the main game logic is defined here
function update() {
	
	// Move the paddles on mouse move
	if(mousePointer.hasMoved()) {	
		topPaddle.move(mousePointer.x);
		bottomPaddle.move(mousePointer.x);
	}
	
	// Move the ball
	ball.move();
	
	// Collision with paddles 
	
	// If the ball strikes with paddles,
	// invert the y-velocity vector of ball,
	// increment the points, play the collision sound,
	// save collision's position so that sparks can be
	// emitted from that position, set the flag variable
	if(ballPaddleCollider.doesBallCollidesWithPaddle(ball, topPaddle)) {
		pingPongs = ballPaddleCollider.collideAction(ball, topPaddle, pingPongs);
	}	
	else if(ballPaddleCollider.doesBallCollidesWithPaddle(ball, bottomPaddle)) {
		pingPongs = ballPaddleCollider.collideAction(ball, bottomPaddle, pingPongs);
	}	
	else {
		// Collide with walls, If the ball hits the top/bottom,
		// walls, run gameOver() function
		if(ball.collidesBottomWall(tableHeight)) {
			ball.repositionBottomWall(tableHeight);
			gameOver();
		}		
		else if(ball.collidesTopWall()) {
			ball.repositionTopWall();
			gameOver();
		}
		
		// If ball strikes the vertical walls, invert the 
		// x-velocity vector of ball
		if(ball.collidesRightWall(tableWidth)) {
			ball.inverseXSpeed();
			ball.repostionRightWall(tableWidth);
		}		
		else if(ball.collidesLeftWall()) {
			ball.inverseXSpeed();
			ball.repostionLeftWall();
		}
	}
};

// Function to run when the game overs
function gameOver() {
	
	// Stop the Animation
	cancelRequestAnimFrame(init);
	
	// Set the over flag
	isGameOver = true;
	
	// Show the restart button
	restartBtn.draw();
};

// Function for running the whole animation
function animloop() {
	init = requestAnimFrame(animloop);
	draw();
}

// Function to execute at startup
function startScreen() {
	draw();
	startBtn.draw();
}

// On button click (Restart and start)
function btnClick(e) {
	
	// Variables for storing mouse position on click
	var mx = e.pageX;
	var my = e.pageY;
	
	// Click start button
	if(mx >= startBtn.x && mx <= startBtn.x + startBtn.w) {
		animloop();
		
		// Delete the start button after clicking it
		startBtn = {};
	}
	
	// If the game is over, and the restart button is clicked
	if(isGameOver) {
		if(mx >= restartBtn.x && mx <= restartBtn.x + restartBtn.w) {
			ball.reposition();
			pingPongs = 0;
			
			animloop();
			
			isGameOver = false;
		}
	}
}

// Show the start screen
startScreen();