import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

import { useGSAP } from "@gsap/react";
import { heroAnimation } from "./HeroAnimation";

export default function Hero() {
  useGSAP(() => {
    heroAnimation();
  });

  return (
    <section
      id="hero"
      className="
        hero-section
        relative
        isolate
        min-h-screen
        overflow-hidden
      "
    >

      {/* =====================================================
          HERO AMBIENT LIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-15%]
          top-[15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/[0.05]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-15%]
          bottom-[-10%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-purple-600/[0.05]
          blur-[160px]
        "
      />


      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />


      {/* =====================================================
          CENTER RADIAL LIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(34,211,238,0.045)_0%,transparent_65%)]
        "
      />


      {/* =====================================================
          TOP SYSTEM LINE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-[96px]
          hidden
          items-center
          justify-center
          lg:flex
        "
      >
        <div
          className="
            h-px
            w-[calc(100%-80px)]
            max-w-[1400px]
            bg-gradient-to-r
            from-transparent
            via-white/[0.06]
            to-transparent
          "
        />
      </div>


      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-7xl
          items-center
          px-6
          pb-20
          pt-32

          sm:px-8

          lg:px-10
          lg:pb-16
          lg:pt-28
        "
      >

        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-16

            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-8

            xl:grid-cols-[1fr_0.9fr]
            xl:gap-14
          "
        >

          {/* =================================================
              LEFT — TEXT
          ================================================== */}

          <div
            className="
              order-2
              flex
              justify-center
              text-center

              lg:order-1
              lg:justify-start
              lg:text-left
            "
          >
            <HeroText />
          </div>


          {/* =================================================
              RIGHT — IMAGE
          ================================================== */}

          <div
            className="
              hero-visual
              order-1
              flex
              min-h-[360px]
              items-center
              justify-center

              sm:min-h-[420px]

              lg:order-2
              lg:min-h-[520px]
            "
          >
            <HeroImage />
          </div>

        </div>
      </div>


      {/* =====================================================
          LEFT SIDE INDEX
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-5
          top-1/2
          hidden
          -translate-y-1/2
          flex-col
          items-center
          gap-4
          xl:flex
        "
      >

        <span
          className="
            font-mono
            text-[8px]
            tracking-[0.35em]
            text-white/20
            [writing-mode:vertical-rl]
          "
        >
          PORTFOLIO / 2026
        </span>

        <span
          className="
            h-16
            w-px
            bg-gradient-to-b
            from-cyan-400/40
            to-transparent
          "
        />

        <span
          className="
            font-mono
            text-[8px]
            text-cyan-400/40
          "
        >
          01
        </span>

      </div>


      {/* =====================================================
          RIGHT SIDE INDEX
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-5
          top-1/2
          hidden
          -translate-y-1/2
          flex-col
          items-center
          gap-4
          xl:flex
        "
      >

        <span
          className="
            font-mono
            text-[8px]
            tracking-[0.35em]
            text-white/20
            [writing-mode:vertical-rl]
          "
        >
          FULL STACK / SYSTEM
        </span>

        <span
          className="
            h-16
            w-px
            bg-gradient-to-b
            from-purple-400/30
            to-transparent
          "
        />

        <span
          className="
            font-mono
            text-[8px]
            text-purple-400/40
          "
        >
          01 / 05
        </span>

      </div>


      {/* =====================================================
          BOTTOM SYSTEM BAR
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-7
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          items-center
          gap-5
          font-mono
          text-[8px]
          uppercase
          tracking-[0.25em]
          text-white/20
          lg:flex
        "
      >

        <span>
          Scroll to explore
        </span>

        <span
          className="
            h-px
            w-16
            bg-white/10
          "
        />

        <span className="text-cyan-400/40">
          ↓
        </span>

      </div>


      {/* =====================================================
          CORNER HUD — TOP LEFT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-6
          top-28
          hidden
          h-5
          w-5
          border-l
          border-t
          border-cyan-400/30
          lg:block
        "
      />


      {/* =====================================================
          CORNER HUD — TOP RIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-6
          top-28
          hidden
          h-5
          w-5
          border-r
          border-t
          border-purple-400/20
          lg:block
        "
      />


      {/* =====================================================
          CORNER HUD — BOTTOM LEFT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-6
          left-6
          hidden
          h-5
          w-5
          border-b
          border-l
          border-cyan-400/20
          lg:block
        "
      />


      {/* =====================================================
          CORNER HUD — BOTTOM RIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-6
          right-6
          hidden
          h-5
          w-5
          border-b
          border-r
          border-purple-400/20
          lg:block
        "
      />


      {/* =====================================================
          HERO FADE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-32
          bg-gradient-to-t
          from-[#03060d]
          to-transparent
        "
      />

    </section>
  );
}
