
var Button = function(label, tableWidth, tableHeight) {	
	this.w = 100;
	this.h = 50;
	this.x = tableWidth/2 - 50;
	this.y = tableHeight/2 - 25;
	
	this.draw = function() {
		ctx.strokeStyle = "white";
		ctx.lineWidth = "2";
		ctx.strokeRect(this.x, this.y, this.w, this.h);
		
		ctx.font = "18px Arial, sans-serif";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillStlye = "white";
		ctx.fillText(label, tableWidth/2, tableHeight/2 );
	}
};