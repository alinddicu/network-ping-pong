
function BallPaddleCollider(){
	var self = this;

	self.paddleHit;
	self.paddleHitTop = 0
	self.paddleHitBottom = 1;
	self.collideSound = document.getElementById('collideSound');
	
	self.doesBallCollidesWithPaddle = function(ball, paddle) {
		if(ball.x + ball.r >= paddle.x && ball.x - ball.r <= paddle.x + paddle.w) {
			if(ball.y >= (paddle.y - paddle.h) && paddle.y > 0){
				self.paddleHit = self.paddleHitTop;
				return true;
			}
			else if(ball.y <= paddle.h && paddle.y == 0) {
				self.paddleHit = self.paddleHitBottom;
				return true;
			}
			else {
				return false;
			}
		}
	}
	
	self.collideAction = function(ball, paddle, pingPongs) {
		ball.vy = -ball.vy;
		
		if(self.paddleHit == self.paddleHitTop) {
			ball.y = paddle.y - paddle.h;	
		}	
		else if(self.paddleHit == self.paddleHitBottom) {
			ball.y = paddle.h + ball.r;
		}
		
		pingPongs++;
		ball.increaseBallSpeed(pingPongs);
		
		if(collideSound) {
			if(pingPongs > 0){ 
				collideSound.pause();
			}
			
			collideSound.currentTime = 0;
			collideSound.play();
		}
		
		return pingPongs;
	};
};