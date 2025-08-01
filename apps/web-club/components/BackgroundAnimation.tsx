'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundAnimation() {
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

    // Floating geometric shapes for B2B feel
    class FloatingShape {
      x: number = 0;
      y: number = 0;
      size: number;
      speed: number;
      opacity: number;
      shape: 'circle' | 'square' | 'triangle';
      color: string;
      canvasWidth: number;
      canvasHeight: number;
      angle: number = 0;
      rotationSpeed: number;

      constructor(width: number, height: number) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.size = 20 + Math.random() * 40;
        this.speed = 0.2 + Math.random() * 0.8;
        this.opacity = 0.05 + Math.random() * 0.1;
        this.shape = ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle';
        this.color = ['#0EA5E9', '#10B981', '#64748B'][Math.floor(Math.random() * 3)]; // Club colors
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.reset();
      }

      reset() {
        this.x = Math.random() * this.canvasWidth;
        this.y = this.canvasHeight + this.size;
      }

      update() {
        this.y -= this.speed;
        this.x += Math.sin(this.y * 0.001) * 0.5; // Subtle drift
        this.angle += this.rotationSpeed;

        // Reset when off screen
        if (this.y < -this.size) {
          this.reset();
        }

        // Update canvas dimensions
        if (canvas) {
          this.canvasWidth = canvas.width;
          this.canvasHeight = canvas.height;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;

        switch (this.shape) {
          case 'circle':
            ctx.beginPath();
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 'square':
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            break;
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(0, -this.size / 2);
            ctx.lineTo(-this.size / 2, this.size / 2);
            ctx.lineTo(this.size / 2, this.size / 2);
            ctx.closePath();
            ctx.fill();
            break;
        }

        ctx.restore();
      }
    }

    // Create shapes
    const shapes: FloatingShape[] = [];
    for (let i = 0; i < 12; i++) { // Fewer shapes for professional look
      shapes.push(new FloatingShape(canvas.width, canvas.height));
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update canvas dimensions for shapes
      shapes.forEach(shape => {
        shape.canvasWidth = canvas.width;
        shape.canvasHeight = canvas.height;
      });

      // Update and draw shapes
      shapes.forEach(shape => {
        shape.update();
        shape.draw(ctx);
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
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
}