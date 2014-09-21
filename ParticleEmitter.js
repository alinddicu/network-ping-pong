
// Class for emitting particles
function ParticleEmitter(ctx, particlePosition, multiplier) { 

	var particles = []; // Array containing particles
	var particlesCount = 20; // Number of sparks when ball strikes the paddle

	for(var k = 0; k < particlesCount; k++) {
		particles.push(new Particle(particlePosition.x, particlePosition.y, multiplier));
	};

	for(var j = 0; j < particles.length; j++) {
		var particle = particles[j];
		
		ctx.beginPath(); 
		ctx.fillStyle = "white";
		if (particle.radius > 0) {
			ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI*2, false);
		}
		ctx.fill();	 
		
		particle.x += particle.vx; 
		particle.y += particle.vy; 
		
		// Reduce radius so that the particles dies after a few seconds
		particle.radius = Math.max(particle.radius - 0.05, 0.0); 		
	};
};