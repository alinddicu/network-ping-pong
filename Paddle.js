
function Paddle(pos, tableWidth, tableHeight) {
	var self = this;
	
	self.h = 5;
	self.w = 150;
	self.name = pos;
	
	self.x = tableWidth/2 - self.w/2;
	self.y = (self.name == "top") ? 0 : tableHeight - self.h;	
	
	self.draw = function(drawCtx){	
		drawCtx.fillStyle = "white";
		drawCtx.fillRect(self.x, self.y, self.w, self.h);
	};
	
	self.move = function(mousePointerX){
		self.x =  mousePointerX - self.w/2;
	};
};