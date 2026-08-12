import { useRef } from "react";
import gsap from "gsap";

export default function StringLine() {
  const pathRef = useRef(null);
  const point = useRef({ x: 300, y: 80 });

  const render = () => {
    pathRef.current.setAttribute(
      "d",
      `M -50 80 Q ${point.current.x} ${point.current.y} 650 80`
    );
  };

  const handleMove = (e) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();

    // Convert mouse position to SVG coordinates
    const x = ((e.clientX - rect.left) / rect.width) * 600;
    const y = ((e.clientY - rect.top) / rect.height) * 160;

    gsap.killTweensOf(point.current);

    gsap.to(point.current, {
      x: Math.max(30, Math.min(570, x)),
      y: Math.max(20, Math.min(140, y)),
      duration: 0.25,
      ease: "power3.out",
      onUpdate: render,
    });
  };

  const handleLeave = () => {
    gsap.killTweensOf(point.current);

    gsap.to(point.current, {
      x: 300,
      y: 80,
      duration: 1.2,
      ease: "elastic.out(1,0.3)",
      onUpdate: render,
    });
  };

  return (
    <div className="flex -mt-5 justify-center">
      <svg
        width="600"
        height="160"
        viewBox="0 0 600 160"
        className="w-full max-w-[600px] z-1 h-24 overflow-visible"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <path
          ref={pathRef}
          d="M -50 80 Q 300 80 650 80"
          stroke="#22d3ee"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}