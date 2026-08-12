import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GradientBackground() {
  const containerRef = useRef(null);
  const aurora1Ref = useRef(null);
  const aurora2Ref = useRef(null);
  const aurora3Ref = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ---------------------------------------
      // AURORA 1
      // ---------------------------------------

      gsap.to(aurora1Ref.current, {
        x: 180,
        y: 100,
        rotation: 18,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ---------------------------------------
      // AURORA 2
      // ---------------------------------------

      gsap.to(aurora2Ref.current, {
        x: -160,
        y: -80,
        rotation: -22,
        duration: 17,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ---------------------------------------
      // AURORA 3
      // ---------------------------------------

      gsap.to(aurora3Ref.current, {
        x: 100,
        y: -140,
        rotation: 30,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ---------------------------------------
      // RING 1
      // ---------------------------------------

      gsap.to(ring1Ref.current, {
        rotation: 360,
        duration: 35,
        repeat: -1,
        ease: "none",
      });

      // ---------------------------------------
      // RING 2
      // ---------------------------------------

      gsap.to(ring2Ref.current, {
        rotation: -360,
        duration: 45,
        repeat: -1,
        ease: "none",
      });

      // ---------------------------------------
      // CENTER GLOW
      // ---------------------------------------

      gsap.to(glowRef.current, {
        scale: 1.25,
        opacity: 0.7,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        fixed
        inset-0
        z-0
        overflow-hidden
        pointer-events-none
        bg-[#020617]
      "
    >
      {/* =====================================
          AURORA FIELD
      ====================================== */}

      <div
        ref={aurora1Ref}
        className="
          absolute
          -top-40
          -left-40
          h-[500px]
          w-[900px]
          rotate-[-18deg]
          rounded-full
          bg-gradient-to-r
          from-cyan-500/0
          via-cyan-400/15
          to-blue-500/0
          blur-[100px]
        "
      />

      <div
        ref={aurora2Ref}
        className="
          absolute
          -bottom-40
          -right-40
          h-[550px]
          w-[950px]
          rotate-[20deg]
          rounded-full
          bg-gradient-to-r
          from-violet-600/0
          via-purple-500/15
          to-fuchsia-500/0
          blur-[110px]
        "
      />

      <div
        ref={aurora3Ref}
        className="
          absolute
          top-1/2
          left-1/2
          h-[400px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rotate-[25deg]
          rounded-full
          bg-gradient-to-r
          from-cyan-400/0
          via-pink-500/10
          to-purple-500/0
          blur-[120px]
        "
      />

      {/* =====================================
          CENTER ENERGY
      ====================================== */}

      <div
        ref={glowRef}
        className="
          absolute
          top-1/2
          left-1/2
          h-[280px]
          w-[280px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/5
          blur-[100px]
        "
      />

      {/* =====================================
          ROTATING ENERGY RING 1
      ====================================== */}

      <div
        ref={ring1Ref}
        className="
          absolute
          top-1/2
          left-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-cyan-400/[0.06]
        "
      >
        <div
          className="
            absolute
            -top-1
            left-1/2
            h-2
            w-24
            -translate-x-1/2
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-cyan-400/20
            to-transparent
            blur-md
          "
        />
      </div>

      {/* =====================================
          ROTATING ENERGY RING 2
      ====================================== */}

      <div
        ref={ring2Ref}
        className="
          absolute
          top-1/2
          left-1/2
          h-[900px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-purple-400/[0.04]
        "
      >
        <div
          className="
            absolute
            top-1/2
            -right-1
            h-20
            w-2
            -translate-y-1/2
            rounded-full
            bg-gradient-to-b
            from-transparent
            via-purple-400/20
            to-transparent
            blur-md
          "
        />
      </div>

      {/* =====================================
          GRID / VIGNETTE
      ====================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.15)_45%,rgba(2,6,23,0.7)_100%)]
        "
      />

      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />
    </div>
  );
}