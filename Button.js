
var Button = function(label, tableWidth, tableHeight) {	
	var self = this;
	
	self.w = 100;
	self.h = 50;
	self.x = tableWidth/2 - 50;
	self.y = tableHeight/2 - 25;
	
	self.draw = function(drawCtx) {
		drawCtx.strokeStyle = "white";
		drawCtx.lineWidth = "2";
		drawCtx.strokeRect(self.x, self.y, self.w, self.h);
		
		drawCtx.font = "18px Arial, sans-serif";
		drawCtx.textAlign = "center";
		drawCtx.textBaseline = "middle";
		drawCtx.fillStlye = "white";
		drawCtx.fillText(label, tableWidth/2, tableHeight/2 );
	}
};