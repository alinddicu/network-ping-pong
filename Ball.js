
var Ball = function (){
	var self = this;

	self.increaseSpeedThreshold = 10;
	self.x = 50;
	self.y = 50;
	self.r = 5;
	self.c = "white";
	self.vx = 4;
	self.vy = 8;
	
	self.draw = function(drawCtx) {
		drawCtx.beginPath();
		drawCtx.fillStyle = self.c;
		drawCtx.arc(self.x, self.y, self.r, 0, Math.PI*2, false);
		drawCtx.fill();
	};
	
	self.increaseBallSpeed = function (points) {
		if(points % self.increaseSpeedThreshold == 0) {
			if(Math.abs(self.vx) < 15) {
				self.vx += (self.vx < 0) ? -1 : 1;
				self.vy += (self.vy < 0) ? -2 : 2;
			}
		}
	};
	
	self.move = function(){
		self.x += self.vx;
		self.y += self.vy;
	};
	
	self.collidesBottomWall = function(tableHeight){
		return self.y + self.r > tableHeight;
	};
	
	self.repositionBottomWall = function(tableHeight){
		self.y = tableHeight;
	};
	
	self.collidesTopWall = function(){
		return self.y < 0;
	};
	
	self.repositionTopWall = function(){
		self.y = self.r;
	}
	
	self.collidesRightWall = function(tableWidth){
		return self.x + self.r > tableWidth;
	};
	
	self.repostionRightWall = function(tableWidth){ 
		self.x = tableWidth - self.r;
	}
	
	self.collidesLeftWall = function(){
		return self.x - self.r < 0;
	};
	
	self.repostionLeftWall = function(){
		self.x = self.r;
	}
	
	self.inverseXSpeed = function(){
		self.vx = -self.vx;
	};
	
	self.reposition = function(){
		self.x = 20;
		self.y = 20;
		self.vx = 4;
		self.vy = 8;
	};
};