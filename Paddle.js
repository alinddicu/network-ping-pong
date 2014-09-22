
// Function for creating paddles
function Paddle(pos) {
	// Height and width
	this.h = 5;
	this.w = 150;
	
	// Paddle's position
	this.x = W/2 - this.w/2;
	this.y = (pos == "top") ? 0 : H - this.h;	
	
	this.draw = function(){	
		ctx.fillStyle = "white";
		ctx.fillRect(this.x, this.y, this.w, this.h);
	};
	
	this.move = function(mousePointerX){
		this.x =  mousePointerX - this.w/2;
	};
};