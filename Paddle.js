
// Function for creating paddles
function Paddle(pos, tableWidth, tableHeight) {
	var self = this;
	
	// Height and width
	self.h = 5;
	self.w = 150;
	self.name = pos;
	
	// Paddle's position
	self.x = tableWidth/2 - self.w/2;
	self.y = (self.name == "top") ? 0 : tableHeight - self.h;	
	
	self.draw = function(){	
		ctx.fillStyle = "white";
		ctx.fillRect(self.x, self.y, self.w, self.h);
	};
	
	self.move = function(mousePointerX){
		self.x =  mousePointerX - self.w/2;
	};
};