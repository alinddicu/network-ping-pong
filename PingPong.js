
function PingPong(){
	var fps = 60;

	window.requestAnimFrame = (function(){
		return  window.requestAnimationFrame || 
			window.webkitRequestAnimationFrame || 
			window.mozRequestAnimationFrame || 
			window.oRequestAnimationFrame || 
			window.msRequestAnimationFrame ||  
			function(callback){
				return window.setTimeout(callback, 1000 / fps);
			};
	})();

	window.cancelRequestAnimFrame = ( function() {
		return window.cancelAnimationFrame ||
			window.webkitCancelRequestAnimationFrame ||
			window.mozCancelRequestAnimationFrame ||
			window.oCancelRequestAnimationFrame ||
			window.msCancelRequestAnimationFrame ||
			clearTimeout
	})();

	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var tableWidth = 300;
	var tableHeight = window.innerHeight - 100;
	var ball = new Ball();
	var topPaddle = new Paddle('top', tableWidth, tableHeight);
	var bottomPaddle = new Paddle('bottom', tableWidth, tableHeight);
	var ballPaddleCollider = new BallPaddleCollider();
	var mousePointer = new MousePointer();
	var pingPongs = 0;
	var startBtn =  new Button('Start', tableWidth, tableHeight);
	var restartBtn = new Button('Restart', tableWidth, tableHeight);
	var isGameOver = false;
	var init;

	canvas.addEventListener('mousemove', mousePointer.trackPosition, true);
	canvas.addEventListener('mousedown', btnClick, true);

	canvas.width = tableWidth;
	canvas.height = tableHeight;

	function paintCanvas() {
		ctx.fillStyle = 'black';
		ctx.fillRect(0, 0, tableWidth, tableHeight);
	};

	function draw() {
		paintCanvas();
		
		topPaddle.draw(ctx);
		bottomPaddle.draw(ctx);
		
		ball.draw(ctx);
		play();
	};

	function play() {
		
		if(mousePointer.hasMoved()) {	
			topPaddle.move(mousePointer.x);
			bottomPaddle.move(mousePointer.x);
		}
		
		ball.move();
		
		if(ballPaddleCollider.doesBallCollidesWithPaddle(ball, topPaddle)) {
			pingPongs = ballPaddleCollider.collideAction(ball, topPaddle, pingPongs);
		}	
		else if(ballPaddleCollider.doesBallCollidesWithPaddle(ball, bottomPaddle)) {
			pingPongs = ballPaddleCollider.collideAction(ball, bottomPaddle, pingPongs);
		}	
		else {
			if(ball.collidesBottomWall(tableHeight)) {
				ball.repositionBottomWall(tableHeight);
				gameOver();
			}		
			else if(ball.collidesTopWall()) {
				ball.repositionTopWall();
				gameOver();
			}
			
			if(ball.collidesRightWall(tableWidth)) {
				ball.inverseXSpeed();
				ball.repostionRightWall(tableWidth);
			}		
			else if(ball.collidesLeftWall()) {
				ball.inverseXSpeed();
				ball.repostionLeftWall();
			}
		}
	};

	function gameOver() {
		
		cancelRequestAnimFrame(init);
		
		isGameOver = true;
		
		restartBtn.draw(ctx);
	};

	function animloop() {
		init = requestAnimFrame(animloop);
		draw();
	}

	function startScreen() {
		draw();
		startBtn.draw(ctx);
	}

	function btnClick(e) {
		
		var mx = e.pageX;
		var my = e.pageY;
		
		if(mx >= startBtn.x && mx <= startBtn.x + startBtn.w) {
			animloop();
			
			startBtn = {};
		}
		
		if(isGameOver) {
			if(mx >= restartBtn.x && mx <= restartBtn.x + restartBtn.w) {
				ball.reposition();
				pingPongs = 0;
				
				animloop();
				
				isGameOver = false;
			}
		}
	}

	startScreen();
};