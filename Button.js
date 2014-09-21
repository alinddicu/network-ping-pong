
// button 
var Button = function(label) {	
	this.w = 100;
	this.h = 50;
	this.x = W/2 - 50;
	this.y = H/2 - 25;
	
	this.draw = function() {
		ctx.strokeStyle = "white";
		ctx.lineWidth = "2";
		ctx.strokeRect(this.x, this.y, this.w, this.h);
		
		ctx.font = "18px Arial, sans-serif";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillStlye = "white";
		ctx.fillText(label, W/2, H/2 );
	}
};