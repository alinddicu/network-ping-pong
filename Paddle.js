
function Paddle(pos, tableWidth, tableHeight) {

	this.h = 5;
	this.w = 150;
	this.name = pos;
	this.x = tableWidth/2 - this.w/2;
	this.y = (this.name == "top") ? 0 : tableHeight - this.h;
};

Paddle.prototype.log = function(){
		console.log('Paddle x:' + this.x);
};

Paddle.prototype.draw = function(drawCtx){
	drawCtx.fillStyle = "white";
	drawCtx.fillRect(this.x, this.y, this.w, this.h);
};

Paddle.prototype.move = function(mousePointerX){
	this.x =  mousePointerX - this.w/2;
};

module.exports = Paddle;
