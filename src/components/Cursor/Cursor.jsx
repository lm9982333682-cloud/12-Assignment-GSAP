
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef(null);
  const coreRef = useRef(null);
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const labelRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    // Touch/mobile devices par custom cursor disable
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    const core = coreRef.current;
    const outer = outerRef.current;
    const inner = innerRef.current;
    const label = labelRef.current;
    const trail = trailRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    let lastX = mouseX;
    let lastY = mouseY;

    let velocity = 0;
    let animationId;

    // -----------------------------------------
    // MOUSE MOVE
    // -----------------------------------------

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const dx = mouseX - lastX;
      const dy = mouseY - lastY;

      velocity = Math.min(
        Math.sqrt(dx * dx + dy * dy) / 10,
        1
      );

      lastX = mouseX;
      lastY = mouseY;

      gsap.to(core, {
        x: mouseX,
        y: mouseY,
        duration: 0.08,
        ease: "power3.out",
      });

      gsap.to(trail, {
        x: mouseX,
        y: mouseY,
        duration: 0.45,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // -----------------------------------------
    // SMOOTH CURSOR
    // -----------------------------------------

    const animate = () => {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;

      gsap.set(cursor, {
        x: currentX,
        y: currentY,
      });

      velocity *= 0.92;

      const stretch = 1 + velocity * 0.4;

      gsap.set(cursor, {
        scaleX: stretch,
        scaleY: 1 / stretch,
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // -----------------------------------------
    // INTERACTIVE ELEMENTS
    // -----------------------------------------

    const elements = document.querySelectorAll(
      "a, button, input, textarea, select, [data-cursor]"
    );

    const handleEnter = (e) => {
      const element = e.currentTarget;

      const customText =
        element.getAttribute("data-cursor");

      let text = customText;

      if (!text) {
        if (element.tagName === "BUTTON") {
          text = "CLICK";
        } else if (
          element.tagName === "INPUT" ||
          element.tagName === "TEXTAREA" ||
          element.tagName === "SELECT"
        ) {
          text = "TYPE";
        } else {
          text = "VIEW";
        }
      }

      label.textContent = text;

      // Main cursor
      gsap.to(cursor, {
        scale: 1.45,
        duration: 0.3,
        ease: "power3.out",
      });

      // Core
      gsap.to(core, {
        scale: 1.7,
        duration: 0.3,
        ease: "back.out(2)",
      });

      // Outer ring
      gsap.to(outer, {
        scale: 1.25,
        borderColor: "rgba(168, 85, 247, 0.8)",
        duration: 0.3,
        ease: "power3.out",
      });

      // Inner ring
      gsap.to(inner, {
        scale: 0.7,
        borderColor: "rgba(34, 211, 238, 0.9)",
        duration: 0.3,
        ease: "power3.out",
      });

      // Text
      gsap.to(label, {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        ease: "back.out(2)",
      });

      // Trail
      gsap.to(trail, {
        scale: 1.5,
        opacity: 0.3,
        duration: 0.3,
      });
    };

    const handleLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });

      gsap.to(core, {
        scale: 1,
        duration: 0.25,
      });

      gsap.to(outer, {
        scale: 1,
        borderColor: "rgba(34, 211, 238, 0.45)",
        duration: 0.3,
      });

      gsap.to(inner, {
        scale: 1,
        borderColor: "rgba(168, 85, 247, 0.35)",
        duration: 0.3,
      });

      gsap.to(label, {
        opacity: 0,
        scale: 0.7,
        duration: 0.2,
      });

      gsap.to(trail, {
        scale: 1,
        opacity: 0.15,
        duration: 0.3,
      });
    };

    elements.forEach((element) => {
      element.addEventListener(
        "mouseenter",
        handleEnter
      );

      element.addEventListener(
        "mouseleave",
        handleLeave
      );
    });

    // -----------------------------------------
    // CLICK EFFECT
    // -----------------------------------------

    const handleClick = () => {
      gsap.timeline()
        .to(core, {
          scale: 2.5,
          duration: 0.12,
          ease: "power2.out",
        })
        .to(core, {
          scale: 1,
          duration: 0.35,
          ease: "elastic.out(1, 0.4)",
        });

      gsap.to(outer, {
        scale: 1.8,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(outer, {
            scale: 1,
            opacity: 1,
          });
        },
      });
    };

    window.addEventListener("click", handleClick);

    // -----------------------------------------
    // WINDOW ENTER / LEAVE
    // -----------------------------------------

    const handleWindowEnter = () => {
      gsap.to(
        [cursor, core, outer, inner, trail],
        {
          opacity: 1,
          duration: 0.25,
        }
      );
    };

    const handleWindowLeave = () => {
      gsap.to(
        [cursor, core, outer, inner, trail],
        {
          opacity: 0,
          duration: 0.25,
        }
      );
    };

    document.addEventListener(
      "mouseenter",
      handleWindowEnter
    );

    document.addEventListener(
      "mouseleave",
      handleWindowLeave
    );

    // -----------------------------------------
    // CLEANUP
    // -----------------------------------------

    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "click",
        handleClick
      );

      document.removeEventListener(
        "mouseenter",
        handleWindowEnter
      );

      document.removeEventListener(
        "mouseleave",
        handleWindowLeave
      );

      elements.forEach((element) => {
        element.removeEventListener(
          "mouseenter",
          handleEnter
        );

        element.removeEventListener(
          "mouseleave",
          handleLeave
        );
      });
    };
  }, []);

  return (
    <>
      {/* =====================================
          ORBITAL CURSOR
      ====================================== */}

      <div
        ref={cursorRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[99999]
          hidden
          h-14
          w-14
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          md:flex
        "
      >
        {/* Outer Ring */}

        <div
          ref={outerRef}
          className="
            absolute
            inset-0
            rounded-full
            border
            border-cyan-400/40
            shadow-[0_0_25px_rgba(34,211,238,0.12)]
          "
        />

        {/* Inner Ring */}

        <div
          ref={innerRef}
          className="
            absolute
            inset-[9px]
            rounded-full
            border
            border-purple-400/30
          "
        />

        {/* Orbit Dot */}

        <div
          className="
            absolute
            -top-1
            left-1/2
            h-1.5
            w-1.5
            -translate-x-1/2
            rounded-full
            bg-cyan-300
            shadow-[0_0_10px_rgba(34,211,238,1)]
          "
        />

        {/* Second Orbit Dot */}

        <div
          className="
            absolute
            bottom-1
            right-1
            h-1
            w-1
            rounded-full
            bg-purple-400
          "
        />

        {/* Hover Text */}

        <div
          ref={labelRef}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            scale-75
            whitespace-nowrap
            font-mono
            text-[7px]
            font-semibold
            tracking-[0.2em]
            text-cyan-200
            opacity-0
          "
        >
          VIEW
        </div>
      </div>

      {/* =====================================
          CORE
      ====================================== */}

      <div
        ref={coreRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[100000]
          hidden
          h-2.5
          w-2.5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-300
          shadow-[0_0_15px_rgba(34,211,238,1)]
          md:block
        "
      >
        <div
          className="
            absolute
            inset-[-4px]
            rounded-full
            bg-cyan-400/20
            blur-sm
          "
        />
      </div>

      {/* =====================================
          TRAILING GLOW
      ====================================== */}

      <div
        ref={trailRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9997]
          hidden
          h-20
          w-20
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.06]
          opacity-20
          blur-2xl
          md:block
        "
      />
    </>
  );
}

