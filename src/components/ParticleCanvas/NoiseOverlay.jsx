import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function NoiseOverlay() {
  const scanRef = useRef(null);
  const gridRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Moving scan line
      gsap.fromTo(
        scanRef.current,
        {
          yPercent: -100,
        },
        {
          yPercent: 100,
          duration: 9,
          repeat: -1,
          ease: "none",
        }
      );

      // Slow grid movement
      gsap.to(gridRef.current, {
        backgroundPosition: "80px 80px",
        duration: 18,
        repeat: -1,
        ease: "none",
      });

      // Subtle atmosphere pulse
      gsap.to(glowRef.current, {
        opacity: 0.55,
        scale: 1.08,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-15
        overflow-hidden
      "
    >
      {/* =====================================
          DIGITAL GRAIN
      ====================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          mix-blend-overlay
        "
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")
          `,
        }}
      />

      {/* =====================================
          MICRO GRID
      ====================================== */}

      <div
        ref={gridRef}
        className="
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(34,211,238,0.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(34,211,238,0.5) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* =====================================
          HOLOGRAPHIC SCAN
      ====================================== */}

      <div
        ref={scanRef}
        className="
          absolute
          -top-full
          left-0
          h-[50%]
          w-full
          opacity-[0.08]
          blur-[1px]
        "
        style={{
          background: `
            linear-gradient(
              to bottom,
              transparent,
              rgba(34,211,238,0.35),
              transparent
            )
          `,
        }}
      />

      {/* =====================================
          CENTER ATMOSPHERE
      ====================================== */}

      <div
        ref={glowRef}
        className="
          absolute
          top-1/2
          left-1/2
          h-[55vw]
          w-[55vw]
          max-h-[700px]
          max-w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.025]
          blur-[120px]
        "
      />

      {/* =====================================
          HORIZONTAL DATA LINES
      ====================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              to bottom,
              transparent 0px,
              transparent 3px,
              rgba(255,255,255,0.5) 4px,
              transparent 5px
            )
          `,
        }}
      />

      {/* =====================================
          EDGE VIGNETTE
      ====================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(
            ellipse_at_center,
            transparent_35%,
            rgba(2,6,23,0.18)_70%,
            rgba(2,6,23,0.55)_100%
          )]
        "
      />
    </div>
  );
}