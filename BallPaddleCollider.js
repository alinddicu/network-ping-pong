
function BallPaddleCollider(){
	var self = this;

	self.paddleHit; // contains which paddle was hit
	self.paddleHitTop = 0; // paddle hit was top
	self.paddleHitBottom = 1; // paddle hit was bottom
	self.collideSound = document.getElementById('collideSound'); // Initialise the collision sound
	
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
	
	self.collideAction = function(ball, paddle, points) {
		ball.vy = -ball.vy;
		
		if(self.paddleHit == self.paddleHitTop) {
			ball.y = paddle.y - paddle.h;	
		}	
		else if(self.paddleHit == self.paddleHitBottom) {
			ball.y = paddle.h + ball.r;
		}
		
		points++;
		ball.increaseBallSpeed(points);
		
		if(collideSound) {
			if(points > 0){ 
				collideSound.pause();
			}
			
			collideSound.currentTime = 0;
			collideSound.play();
		}
		
		return points;
	};
};