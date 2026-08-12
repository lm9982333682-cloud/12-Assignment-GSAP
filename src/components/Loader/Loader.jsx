import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { loaderAnimation } from "./loaderAnimation";

export default function Loader({ onFinish }) {

  useGSAP(() => {
    loaderAnimation();
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loader fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050810]">

      {/* Logo */}

      <h1 className="loader-logo text-6xl md:text-7xl font-black tracking-widest">
        <span className="text-cyan-400">LAL</span>
        <span className="text-white">CHAND</span>
        <span className="text-cyan-400">.</span>
      </h1>

      {/* Loading Bar */}

      <div className="mt-12 h-1 w-64 overflow-hidden rounded-full bg-white/10">

        <div className="loader-bar h-full w-full origin-left bg-cyan-400" />

      </div>

      {/* Loading Text */}

      <p className="loader-text mt-6 tracking-[6px] uppercase text-gray-400">
        Loading Portfolio...
      </p>

    </div>
  );
}