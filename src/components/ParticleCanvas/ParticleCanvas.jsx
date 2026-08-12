import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationId;
    let particles = [];
    let width = 0;
    let height = 0;
    let time = 0;

    // --------------------------------------------------
    // MOUSE
    // --------------------------------------------------

    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      active: false,
      radius: 260,

      // Interactive button
      buttonScale: 1,
      targetScale: 1,
    };

    // --------------------------------------------------
    // CANVAS RESIZE
    // --------------------------------------------------

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${ width } px`;
      canvas.style.height = `${ height } px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // --------------------------------------------------
    // RANDOM
    // --------------------------------------------------

    const random = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    // --------------------------------------------------
    // PARTICLE
    // --------------------------------------------------

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = random(0, width);
        this.y = random(0, height);

        this.baseX = this.x;
        this.baseY = this.y;

        this.angle = random(0, Math.PI * 2);
        this.velocity = random(0.15, 0.55);
        this.size = random(0.5, 1.8);
        this.alpha = random(0.25, 0.9);
        this.wave = random(0, Math.PI * 2);

        this.life = initial ? random(0, 100) : 0;
      }

      update() {
        this.life += 0.01;
        this.wave += 0.02;

        // ----------------------------------------------
        // FLOW FIELD
        // ----------------------------------------------

        const flowX =
          Math.sin(this.y * 0.004 + time * 0.7) * 0.45;

        const flowY =
          Math.cos(this.x * 0.004 + time * 0.5) * 0.45;

        this.x += flowX;
        this.y += flowY;

        // ----------------------------------------------
        // MOUSE MAGNETIC FIELD
        // ----------------------------------------------

        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force =
              (1 - distance / mouse.radius) * 1.8;

            const angle = Math.atan2(dy, dx);

            // Attraction
            this.x += Math.cos(angle) * force;
            this.y += Math.sin(angle) * force;

            // Circular magnetic force
            this.x += -Math.sin(angle) * force * 0.8;
            this.y += Math.cos(angle) * force * 0.8;
          }
        }

        // ----------------------------------------------
        // BOUNDARY
        // ----------------------------------------------

        const padding = 20;

        if (this.x < -padding) {
          this.x = width + padding;
        }

        if (this.x > width + padding) {
          this.x = -padding;
        }

        if (this.y < -padding) {
          this.y = height + padding;
        }

        if (this.y > height + padding) {
          this.y = -padding;
        }
      }

      draw() {
        const pulse =
          Math.sin(this.wave) * 0.35 + 0.65;

        const alpha = this.alpha * pulse;

        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          this.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(34, 211, 238, ${ alpha })`;

        ctx.fill();
      }
    }

    // --------------------------------------------------
    // CREATE PARTICLES
    // --------------------------------------------------

    const createParticles = () => {
      particles = [];

      const area = width * height;

      const count = Math.min(
        180,
        Math.max(70, Math.floor(area / 9000))
      );

      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    // --------------------------------------------------
    // FLOW TRAILS
    // --------------------------------------------------

    const drawFlowTrails = () => {
      ctx.save();

      ctx.lineWidth = 0.35;

      for (let i = 0; i < particles.length; i += 2) {
        const particle = particles[i];

        const length = 10;

        const angle =
          Math.sin(
            particle.y * 0.004 + time
          ) * Math.PI;

        const endX =
          particle.x +
          Math.cos(angle) * length;

        const endY =
          particle.y +
          Math.sin(angle) * length;

        const gradient =
          ctx.createLinearGradient(
            particle.x,
            particle.y,
            endX,
            endY
          );

        gradient.addColorStop(
          0,
          "rgba(34,211,238,0.35)"
        );

        gradient.addColorStop(
          1,
          "rgba(34,211,238,0)"
        );

        ctx.strokeStyle = gradient;

        ctx.beginPath();

        ctx.moveTo(
          particle.x,
          particle.y
        );

        ctx.lineTo(endX, endY);

        ctx.stroke();
      }

      ctx.restore();
    };

    // --------------------------------------------------
    // MAGNETIC ORBITS
    // --------------------------------------------------

    const drawMagneticField = () => {
      if (!mouse.active) return;

      ctx.save();

      const rings = 4;

      for (let i = 0; i < rings; i++) {
        const radius =
          40 +
          i * 38 +
          Math.sin(time * 2 + i) * 8;

        const alpha =
          0.08 - i * 0.012;

        ctx.beginPath();

        ctx.arc(
          mouse.x,
          mouse.y,
          radius,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          `rgba(34, 211, 238, ${ alpha })`;

        ctx.lineWidth = 1;

        ctx.stroke();
      }

      // ----------------------------------------------
      // MOUSE CORE GLOW
      // ----------------------------------------------

      const glow =
        ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          150
        );

      glow.addColorStop(
        0,
        "rgba(34,211,238,0.18)"
      );

      glow.addColorStop(
        0.4,
        "rgba(34,211,238,0.06)"
      );

      glow.addColorStop(
        1,
        "rgba(34,211,238,0)"
      );

      ctx.fillStyle = glow;

      ctx.beginPath();

      ctx.arc(
        mouse.x,
        mouse.y,
        150,
        0,
        Math.PI * 2
      );

      ctx.fill();

      ctx.restore();
    };

    // --------------------------------------------------
    // INTERACTIVE MOUSE BUTTON
    // --------------------------------------------------

    const drawMouseButton = () => {
      if (!mouse.active) return;

      // Smooth scale
      mouse.buttonScale +=
        (mouse.targetScale - mouse.buttonScale) * 0.12;

      const scale = mouse.buttonScale;

      ctx.save();

      ctx.translate(mouse.x, mouse.y);
      ctx.scale(scale, scale);

      // ----------------------------------------------
      // OUTER GLOW
      // ----------------------------------------------

      const glow =
        ctx.createRadialGradient(
          0,
          0,
          15,
          0,
          0,
          65
        );

      glow.addColorStop(
        0,
        "rgba(34,211,238,0.22)"
      );

      glow.addColorStop(
        0.5,
        "rgba(34,211,238,0.08)"
      );

      glow.addColorStop(
        1,
        "rgba(34,211,238,0)"
      );

      ctx.fillStyle = glow;

      ctx.beginPath();

      ctx.arc(
        0,
        0,
        65,
        0,
        Math.PI * 2
      );

      ctx.fill();

      // ----------------------------------------------
      // OUTER BUTTON RING
      // ----------------------------------------------

      ctx.beginPath();

      ctx.arc(
        0,
        0,
        32,
        0,
        Math.PI * 2
      );

      ctx.strokeStyle =
        "rgba(34,211,238,0.45)";

      ctx.lineWidth = 1;

      ctx.stroke();

      // ----------------------------------------------
      // INNER BUTTON
      // ----------------------------------------------

      const buttonGradient =
        ctx.createRadialGradient(
          -8,
          -8,
          2,
          0,
          0,
          30
        );

      buttonGradient.addColorStop(
        0,
        "rgba(103,232,249,0.28)"
      );

      buttonGradient.addColorStop(
        0.6,
        "rgba(34,211,238,0.12)"
      );

      buttonGradient.addColorStop(
        1,
        "rgba(34,211,238,0.04)"
      );

      ctx.fillStyle = buttonGradient;

      ctx.beginPath();

      ctx.arc(
        0,
        0,
        25,
        0,
        Math.PI * 2
      );

      ctx.fill();

      // ----------------------------------------------
      // INNER BORDER
      // ----------------------------------------------

      ctx.beginPath();

      ctx.arc(
        0,
        0,
        25,
        0,
        Math.PI * 2
      );

      ctx.strokeStyle =
        "rgba(103,232,249,0.65)";

      ctx.lineWidth = 1;

      ctx.stroke();

      // ----------------------------------------------
      // CENTER DOT
      // ----------------------------------------------

      ctx.beginPath();

      ctx.arc(
        0,
        0,
        3,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        "rgba(165,243,252,0.9)";

      ctx.fill();

      // ----------------------------------------------
      // SMALL ORBIT DOTS
      // ----------------------------------------------

      for (let i = 0; i < 3; i++) {
        const orbitAngle =
          time * 1.5 +
          (Math.PI * 2 * i) / 3;

        const orbitRadius = 31;

        const x =
          Math.cos(orbitAngle) *
          orbitRadius;

        const y =
          Math.sin(orbitAngle) *
          orbitRadius;

        ctx.beginPath();

        ctx.arc(
          x,
          y,
          1.5,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          "rgba(103,232,249,0.8)";

        ctx.fill();
      }

      ctx.restore();
    };

    // --------------------------------------------------
    // ENERGY CONNECTIONS
    // --------------------------------------------------

    const drawEnergyLinks = () => {
      const maxDistance = 100;

      for (
        let i = 0;
        i < particles.length;
        i++
      ) {
        const p1 = particles[i];

        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;

          const distance =
            Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity =
              (1 - distance / maxDistance) *
              0.16;

            ctx.beginPath();

            ctx.moveTo(
              p1.x,
              p1.y
            );

            const centerX =
              (p1.x + p2.x) / 2;

            const centerY =
              (p1.y + p2.y) / 2;

            const curve =
              Math.sin(
                time * 2 + i
              ) * 10;

            ctx.quadraticCurveTo(
              centerX + curve,
              centerY - curve,
              p2.x,
              p2.y
            );

            ctx.strokeStyle =
              `rgba(34, 211, 238, ${ opacity })`;

            ctx.lineWidth = 0.4;

            ctx.stroke();
          }
        }
      }
    };

    // --------------------------------------------------
    // MOUSE MOVE
    // --------------------------------------------------

    const handleMouseMove = (event) => {
      mouse.targetX = event.clientX;
      mouse.targetY = event.clientY;

      mouse.active = true;

      // Zoom-out effect
      mouse.targetScale = 0.82;
    };

    // --------------------------------------------------
    // MOUSE LEAVE
    // --------------------------------------------------

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetScale = 1;
    };

    // --------------------------------------------------
    // TOUCH
    // --------------------------------------------------

    const handleTouchMove = (event) => {
      const touch = event.touches[0];

      if (!touch) return;

      mouse.targetX = touch.clientX;
      mouse.targetY = touch.clientY;

      mouse.active = true;
      mouse.targetScale = 0.9;
    };

    const handleTouchEnd = () => {
      mouse.active = false;
      mouse.targetScale = 1;
    };

    // --------------------------------------------------
    // SMOOTH MOUSE
    // --------------------------------------------------

    const updateMouse = () => {
      mouse.x +=
        (mouse.targetX - mouse.x) * 0.12;

      mouse.y +=
        (mouse.targetY - mouse.y) * 0.12;
    };

    // --------------------------------------------------
    // ANIMATION
    // --------------------------------------------------

    const animate = () => {
      time += 0.008;

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      // Smooth mouse
      updateMouse();

      // Background trails
      drawFlowTrails();

      // Particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Energy connections
      drawEnergyLinks();

      // Magnetic field
      drawMagneticField();

      // Interactive mouse button
      drawMouseButton();

      animationId =
        requestAnimationFrame(animate);
    };

    // --------------------------------------------------
    // INITIALIZE
    // --------------------------------------------------

    resize();

    mouse.x = width / 2;
    mouse.y = height / 2;

    mouse.targetX = width / 2;
    mouse.targetY = height / 2;

    createParticles();

    animate();

    // --------------------------------------------------
    // EVENTS
    // --------------------------------------------------

    const handleResize = () => {
      resize();
      createParticles();
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    window.addEventListener(
      "touchmove",
      handleTouchMove,
      { passive: true }
    );

    window.addEventListener(
      "touchend",
      handleTouchEnd
    );

    // --------------------------------------------------
    // CLEANUP
    // --------------------------------------------------

    return () => {
      cancelAnimationFrame(
        animationId
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      window.removeEventListener(
        "touchmove",
        handleTouchMove
      );

      window.removeEventListener(
        "touchend",
        handleTouchEnd
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        fixed
        inset-0
        z-0
        h-full
        w-full
        pointer-events-none
      "
    />
  );
}
