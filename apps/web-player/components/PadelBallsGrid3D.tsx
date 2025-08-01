'use client';

import { useEffect, useRef } from 'react';

export default function PadelBallsGrid3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Padel Ball class with realistic grid pattern
    class PadelBall {
      x: number = 0;
      y: number = 0;
      z: number = 0;
      vx: number = 0;
      vy: number = 0;
      vz: number = 0;
      radius: number;
      color: string = '#B8FF00';
      canvasWidth: number;
      canvasHeight: number;
      rotation: number = 0;
      rotationSpeed: number;

      constructor(width: number, height: number) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.radius = 20 + Math.random() * 15; // Bigger balls
        this.rotationSpeed = (Math.random() - 0.5) * 0.1;
        this.reset();
      }

      reset() {
        this.x = Math.random() * this.canvasWidth;
        this.y = Math.random() * this.canvasHeight;
        this.z = Math.random() * 100;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.vz = (Math.random() - 0.5) * 0.3;
        this.rotation = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;
        this.rotation += this.rotationSpeed;

        // Bounce off walls
        if (this.x - this.radius < 0 || this.x + this.radius > this.canvasWidth) {
          this.vx *= -0.8;
          this.x = Math.max(this.radius, Math.min(this.canvasWidth - this.radius, this.x));
        }
        if (this.y - this.radius < 0 || this.y + this.radius > this.canvasHeight) {
          this.vy *= -0.8;
          this.y = Math.max(this.radius, Math.min(this.canvasHeight - this.radius, this.y));
        }
        if (this.z < 0 || this.z > 100) {
          this.vz *= -0.8;
          this.z = Math.max(0, Math.min(100, this.z));
        }

        // Apply slight gravity
        this.vy += 0.05;

        // Apply friction
        this.vx *= 0.999;
        this.vy *= 0.999;
        this.vz *= 0.999;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const scale = 0.5 + (this.z / 100) * 0.8; // Scale based on depth
        const adjustedRadius = this.radius * scale;
        const opacity = 0.2 + (this.z / 100) * 0.4; // More subtle opacity

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.globalAlpha = opacity;

        // Draw padel ball grid pattern (wireframe spherical grid)
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1.5 * scale;

        // Main sphere outline
        ctx.beginPath();
        ctx.arc(0, 0, adjustedRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Vertical grid lines (longitude)
        const longitudeLines = 8;
        for (let i = 0; i < longitudeLines; i++) {
          const angle = (i / longitudeLines) * Math.PI * 2 + this.rotation;
          const x1 = Math.cos(angle) * adjustedRadius;
          const y1 = Math.sin(angle) * adjustedRadius * 0.3; // Flattened for 3D effect
          const x2 = Math.cos(angle + Math.PI) * adjustedRadius;
          const y2 = Math.sin(angle + Math.PI) * adjustedRadius * 0.3;
          
          ctx.beginPath();
          ctx.ellipse(0, 0, Math.abs(x1), adjustedRadius, angle, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Horizontal grid lines (latitude)
        const latitudeLines = 6;
        for (let i = 1; i < latitudeLines; i++) {
          const ratio = i / latitudeLines;
          const y = (ratio - 0.5) * adjustedRadius * 2;
          const radiusAtHeight = Math.sqrt(adjustedRadius * adjustedRadius - y * y);
          
          if (radiusAtHeight > 0) {
            ctx.beginPath();
            ctx.ellipse(0, y, radiusAtHeight, radiusAtHeight * 0.2, this.rotation, 0, Math.PI * 2);
            ctx.stroke();
          }
        }

        // Central seam lines (characteristic of padel balls)
        ctx.lineWidth = 2 * scale;
        ctx.beginPath();
        // Horizontal seam
        ctx.ellipse(0, 0, adjustedRadius, adjustedRadius * 0.15, this.rotation, 0, Math.PI * 2);
        ctx.stroke();
        
        // Vertical seam
        ctx.beginPath();
        ctx.ellipse(0, 0, adjustedRadius * 0.15, adjustedRadius, this.rotation + Math.PI/2, 0, Math.PI * 2);
        ctx.stroke();

        // Add some subtle depth indicators
        ctx.globalAlpha = opacity * 0.5;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(-adjustedRadius * 0.3, -adjustedRadius * 0.3, 2 * scale, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Create balls
    const balls: PadelBall[] = [];
    for (let i = 0; i < 3; i++) { // Fewer balls for background
      balls.push(new PadelBall(canvas.width, canvas.height));
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update canvas dimensions for balls
      balls.forEach(ball => {
        ball.canvasWidth = canvas.width;
        ball.canvasHeight = canvas.height;
      });

      // Sort balls by z-index (back to front)
      balls.sort((a, b) => a.z - b.z);

      // Update and draw balls
      balls.forEach(ball => {
        ball.update();
        ball.draw(ctx);
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.3 }}
    />
  );
}