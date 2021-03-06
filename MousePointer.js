
function MousePointer(){
	var self = this;
	
	self.x = 0;
	self.y = 0;
	
	self.trackPosition = function(e) {
		self.x = e.pageX;
		self.y = e.pageY;
	};
	
	self.hasMoved = function(){
		return self.x && self.y;
	};
};