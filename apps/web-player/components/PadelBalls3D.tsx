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
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      radius: number;
      color: string;

      constructor() {
        this.radius = 15 + Math.random() * 10;
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
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
        if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
          this.vx *= -0.9;
          this.x = Math.max(this.radius, Math.min(canvas.width - this.radius, this.x));
        }
        if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
          this.vy *= -0.9;
          this.y = Math.max(this.radius, Math.min(canvas.height - this.radius, this.y));
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
      balls.push(new Ball());
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

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