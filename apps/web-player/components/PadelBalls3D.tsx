'use client';

import { useEffect, useRef } from 'react';

export default function PadelBalls3D() {
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

    // Ball class
    class Ball {
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

      constructor(width: number, height: number) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.radius = 15 + Math.random() * 10;
        this.reset();
      }

      reset() {
        this.x = Math.random() * this.canvasWidth;
        this.y = Math.random() * this.canvasHeight;
        this.z = Math.random() * 100;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.vz = (Math.random() - 0.5) * 0.5;
        this.color = '#B8FF00'; // Lime green
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;

        // Bounce off walls
        if (this.x - this.radius < 0 || this.x + this.radius > this.canvasWidth) {
          this.vx *= -0.9;
          this.x = Math.max(this.radius, Math.min(this.canvasWidth - this.radius, this.x));
        }
        if (this.y - this.radius < 0 || this.y + this.radius > this.canvasHeight) {
          this.vy *= -0.9;
          this.y = Math.max(this.radius, Math.min(this.canvasHeight - this.radius, this.y));
        }
        if (this.z < 0 || this.z > 100) {
          this.vz *= -0.9;
          this.z = Math.max(0, Math.min(100, this.z));
        }

        // Apply gravity
        this.vy += 0.1;

        // Apply friction
        this.vx *= 0.999;
        this.vy *= 0.999;
        this.vz *= 0.999;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const scale = 1 + this.z / 100;
        const adjustedRadius = this.radius * scale;
        const opacity = 0.3 + (this.z / 100) * 0.7;

        // Draw wireframe ball
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2 * scale;
        ctx.globalAlpha = opacity;

        // Main circle
        ctx.beginPath();
        ctx.arc(this.x, this.y, adjustedRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Horizontal line
        ctx.beginPath();
        ctx.moveTo(this.x - adjustedRadius, this.y);
        ctx.lineTo(this.x + adjustedRadius, this.y);
        ctx.stroke();

        // Vertical line
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - adjustedRadius);
        ctx.lineTo(this.x, this.y + adjustedRadius);
        ctx.stroke();

        // Diagonal lines for 3D effect
        const diagonalOffset = adjustedRadius * 0.7;
        ctx.beginPath();
        ctx.moveTo(this.x - diagonalOffset, this.y - diagonalOffset);
        ctx.lineTo(this.x + diagonalOffset, this.y + diagonalOffset);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.x + diagonalOffset, this.y - diagonalOffset);
        ctx.lineTo(this.x - diagonalOffset, this.y + diagonalOffset);
        ctx.stroke();

        ctx.globalAlpha = 1;
      }
    }

    // Create balls
    const balls: Ball[] = [];
    for (let i = 0; i < 5; i++) {
      balls.push(new Ball(canvas.width, canvas.height));
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
      style={{ opacity: 0.5 }}
    />
  );
}