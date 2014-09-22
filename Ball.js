
// Ball object
var Ball = function (){
	var self = this;

	self.increaseSpeedThreshold = 10; // number of hit after which speed is increased
	self.x = 50;
	self.y = 50;
	self.r = 5;
	self.c = "white";
	self.vx = 4;
	self.vy = 8;
	
	// Function for drawing ball on canvas
	self.draw = function() {
		ctx.beginPath();
		ctx.fillStyle = self.c;
		ctx.arc(self.x, self.y, self.r, 0, Math.PI*2, false);
		ctx.fill();
	};
	
	// Function to increase speed after every 5 points
	self.increaseBallSpeed = function (points) {
		if(points % self.increaseSpeedThreshold == 0) {
			if(Math.abs(self.vx) < 15) {
				self.vx += (self.vx < 0) ? -1 : 1;
				self.vy += (self.vy < 0) ? -2 : 2;
			}
		}
	}
	
	self.move = function(){
		self.x += self.vx;
		self.y += self.vy;
	};
};