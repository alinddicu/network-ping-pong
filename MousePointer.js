
function MousePointer(){
	var self = this;
	
	self.x = 0;
	self.y = 0;
	
	// Track the position of mouse cursor
	self.trackPosition = function(e) {
		self.x = e.pageX;
		self.y = e.pageY;
	};
	
	self.hasMoved = function(){
		return mousePointer.x && mousePointer.y;
	};
};