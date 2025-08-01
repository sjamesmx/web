'use client';

import { useEffect, useRef } from 'react';

export default function Player3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationId: number;
    const animate = () => {
      frameRef.current += 0.01;

      // Clear canvas with subtle fade effect
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Grid effect
      ctx.strokeStyle = '#B8FF0010';
      ctx.lineWidth = 0.5;
      const gridSize = 20;
      
      for (let x = 0; x < canvas.offsetWidth; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.offsetHeight);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.offsetHeight; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.offsetWidth, y);
        ctx.stroke();
      }

      // Player wireframe
      const centerX = canvas.offsetWidth / 2;
      const centerY = canvas.offsetHeight / 2;
      const scale = Math.min(canvas.offsetWidth, canvas.offsetHeight) * 0.3;
      
      // Animation cycle for smash movement
      const animPhase = frameRef.current % (Math.PI * 2);
      const smashPhase = Math.sin(animPhase);
      
      // Body parts coordinates
      const head = {
        x: centerX,
        y: centerY - scale * 0.4 - smashPhase * 20
      };
      
      const torso = {
        topX: centerX,
        topY: centerY - scale * 0.2 - smashPhase * 15,
        bottomX: centerX,
        bottomY: centerY + scale * 0.1
      };
      
      const racketArm = {
        shoulderX: centerX - scale * 0.15,
        shoulderY: centerY - scale * 0.15 - smashPhase * 15,
        elbowX: centerX - scale * 0.3 - smashPhase * 30,
        elbowY: centerY - scale * 0.3 - Math.abs(smashPhase) * 40,
        handX: centerX - scale * 0.2 - smashPhase * 40,
        handY: centerY - scale * 0.5 - Math.abs(smashPhase) * 60
      };
      
      const otherArm = {
        shoulderX: centerX + scale * 0.15,
        shoulderY: centerY - scale * 0.15 - smashPhase * 15,
        handX: centerX + scale * 0.2,
        handY: centerY
      };
      
      const legs = {
        hipX: centerX,
        hipY: centerY + scale * 0.1,
        leftKneeX: centerX - scale * 0.1,
        leftKneeY: centerY + scale * 0.3,
        leftFootX: centerX - scale * 0.15,
        leftFootY: centerY + scale * 0.5,
        rightKneeX: centerX + scale * 0.1,
        rightKneeY: centerY + scale * 0.3,
        rightFootX: centerX + scale * 0.15,
        rightFootY: centerY + scale * 0.5
      };

      ctx.strokeStyle = '#B8FF00';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#B8FF00';

      // Draw head (circle)
      ctx.beginPath();
      ctx.arc(head.x, head.y, scale * 0.08, 0, Math.PI * 2);
      ctx.stroke();

      // Draw torso
      ctx.beginPath();
      ctx.moveTo(torso.topX, torso.topY);
      ctx.lineTo(torso.bottomX, torso.bottomY);
      ctx.stroke();

      // Draw racket arm
      ctx.beginPath();
      ctx.moveTo(racketArm.shoulderX, racketArm.shoulderY);
      ctx.lineTo(racketArm.elbowX, racketArm.elbowY);
      ctx.lineTo(racketArm.handX, racketArm.handY);
      ctx.stroke();

      // Draw racket
      const racketSize = scale * 0.15;
      ctx.beginPath();
      ctx.ellipse(
        racketArm.handX, 
        racketArm.handY - racketSize/2, 
        racketSize * 0.6, 
        racketSize,
        smashPhase * 0.5,
        0, 
        Math.PI * 2
      );
      ctx.stroke();
      
      // Racket strings
      ctx.strokeStyle = '#B8FF0050';
      ctx.lineWidth = 0.5;
      for (let i = -3; i <= 3; i++) {
        ctx.beginPath();
        ctx.moveTo(racketArm.handX - racketSize * 0.5, racketArm.handY - racketSize/2 + i * racketSize/4);
        ctx.lineTo(racketArm.handX + racketSize * 0.5, racketArm.handY - racketSize/2 + i * racketSize/4);
        ctx.stroke();
      }
      
      ctx.strokeStyle = '#B8FF00';
      ctx.lineWidth = 2;

      // Draw other arm
      ctx.beginPath();
      ctx.moveTo(otherArm.shoulderX, otherArm.shoulderY);
      ctx.lineTo(otherArm.handX, otherArm.handY);
      ctx.stroke();

      // Draw legs
      ctx.beginPath();
      ctx.moveTo(legs.hipX, legs.hipY);
      ctx.lineTo(legs.leftKneeX, legs.leftKneeY);
      ctx.lineTo(legs.leftFootX, legs.leftFootY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(legs.hipX, legs.hipY);
      ctx.lineTo(legs.rightKneeX, legs.rightKneeY);
      ctx.lineTo(legs.rightFootX, legs.rightFootY);
      ctx.stroke();

      // Ball trail effect
      if (smashPhase > 0.5) {
        const ballX = centerX - smashPhase * 50;
        const ballY = centerY - scale * 0.4 - smashPhase * 30;
        
        ctx.beginPath();
        ctx.arc(ballX, ballY, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#B8FF00';
        ctx.fill();
        
        // Motion lines
        ctx.strokeStyle = '#B8FF0030';
        ctx.lineWidth = 1;
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          ctx.moveTo(ballX + i * 10, ballY);
          ctx.lineTo(ballX + i * 10 + 20, ballY);
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="w-full h-full"
      style={{ minHeight: '400px' }}
    />
  );
}