import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  const progressRef = useRef(null);
  const glowRef = useRef(null);
  const percentRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    let currentProgress = 0;

    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percentage =
        scrollHeight > 0
          ? (scrollTop / scrollHeight) * 100
          : 0;

      currentProgress = Math.min(
        100,
        Math.max(0, percentage)
      );

      setProgress(currentProgress);
      setScrolling(true);

      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setScrolling(false);
      }, 700);

      // Main progress animation
      gsap.to(progressRef.current, {
        height: `${currentProgress}%`,
        duration: 0.35,
        ease: "power2.out",
      });

      // Percentage
      if (percentRef.current) {
        percentRef.current.innerText =
          `${Math.round(currentProgress)}%`;
      }
    };

    window.addEventListener(
      "scroll",
      updateProgress,
      { passive: true }
    );

    updateProgress();

    return () => {
      window.removeEventListener(
        "scroll",
        updateProgress
      );

      clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!glowRef.current) return;

    if (scrolling) {
      gsap.to(glowRef.current, {
        scale: 1.35,
        opacity: 1,
        duration: 0.25,
        ease: "power2.out",
      });
    } else {
      gsap.to(glowRef.current, {
        scale: 1,
        opacity: 0.7,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [scrolling]);

  return (
    <div
      className="
        fixed
        top-1/2
        right-4
        z-[9999]
        hidden
        -translate-y-1/2
        md:block
      "
    >
      {/* =====================================
          OUTER HUD
      ====================================== */}

      <div
        className="
          group
          relative
          flex
          h-[280px]
          w-[42px]
          items-center
          justify-center
          rounded-full
          border
          border-white/[0.07]
          bg-slate-950/40
          backdrop-blur-xl
          shadow-[0_0_40px_rgba(34,211,238,0.04)]
          transition-all
          duration-500
          hover:w-[52px]
          hover:border-cyan-400/20
        "
      >
        {/* =====================================
            TRACK
        ====================================== */}

        <div
          className="
            relative
            h-[220px]
            w-[3px]
            overflow-hidden
            rounded-full
            bg-white/[0.06]
          "
        >
          {/* Background glow */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-cyan-400/10
              via-purple-500/10
              to-transparent
            "
          />

          {/* =================================
              ACTIVE PROGRESS
          ================================== */}

          <div
            ref={progressRef}
            className="
              absolute
              top-0
              left-0
              w-full
              rounded-full
              bg-gradient-to-b
              from-cyan-300
              via-cyan-400
              to-purple-500
              shadow-[0_0_12px_rgba(34,211,238,0.8)]
            "
            style={{
              height: `${progress}%`,
            }}
          />
        </div>

        {/* =====================================
            ENERGY CORE
        ====================================== */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[12px]
            w-[12px]
            -translate-x-1/2
            rounded-full
            bg-cyan-300
            shadow-[0_0_15px_rgba(34,211,238,1)]
          "
          style={{
            top: `calc(${progress}% - 6px)`,
          }}
        >
          <div
            ref={glowRef}
            className="
              absolute
              inset-[-6px]
              rounded-full
              border
              border-cyan-300/30
            "
          />
        </div>

        {/* =====================================
            TOP NODE
        ====================================== */}

        <div
          className="
            absolute
            top-3
            left-1/2
            h-[5px]
            w-[5px]
            -translate-x-1/2
            rounded-full
            bg-white/40
          "
        />

        {/* =====================================
            BOTTOM NODE
        ====================================== */}

        <div
          className="
            absolute
            bottom-3
            left-1/2
            h-[5px]
            w-[5px]
            -translate-x-1/2
            rounded-full
            bg-purple-400/50
          "
        />

        {/* =====================================
            PERCENTAGE HUD
        ====================================== */}

        <div
          className="
            absolute
            right-[55px]
            top-1/2
            -translate-y-1/2
            scale-90
            rounded-lg
            border
            border-cyan-400/10
            bg-slate-950/80
            px-3
            py-2
            opacity-0
            backdrop-blur-xl
            transition-all
            duration-300
            group-hover:scale-100
            group-hover:opacity-100
          "
        >
          <div
            className="
              whitespace-nowrap
              font-mono
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-cyan-300/60
            "
          >
            Progress
          </div>

          <div
            ref={percentRef}
            className="
              mt-1
              font-mono
              text-sm
              font-semibold
              text-cyan-300
            "
          >
            {Math.round(progress)}%
          </div>
        </div>

        {/* =====================================
            SCROLLING STATUS
        ====================================== */}

        <div
          className={`
            absolute
            bottom-[-38px]
            left-1/2
            -translate-x-1/2
            whitespace-nowrap
            font-mono
            text-[8px]
            uppercase
            tracking-[0.25em]
            transition-all
            duration-500
            ${scrolling
              ? "text-cyan-300 opacity-100"
              : "text-white/20 opacity-0"
            }
          `}
        >
          Scanning
        </div>
      </div>
    </div>
  );
}