
// Ball object
var Ball = function (){
	this.increaseSpeedThreshold = 10; // number of hit after which speed is increased
	this.x = 50;
	this.y = 50;
	this.r = 5;
	this.c = "white";
	this.vx = 4;
	this.vy = 8;
	
	// Function for drawing ball on canvas
	this.draw = function() {
		ctx.beginPath();
		ctx.fillStyle = this.c;
		ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
		ctx.fill();
	};
	
	// Function to increase speed after every 5 points
	this.increaseBallSpeed = function (points) {
		if(points % this.increaseSpeedThreshold == 0) {
			if(Math.abs(this.vx) < 15) {
				this.vx += (this.vx < 0) ? -1 : 1;
				this.vy += (this.vy < 0) ? -2 : 2;
			}
		}
	}
};