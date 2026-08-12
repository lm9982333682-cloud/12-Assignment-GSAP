import { useEffect, useRef } from "react";
import gsap from "gsap";
// import profile from "../../assets/images/lalchand.jpeg";
import profile from "../../assets/images/lalchand123.jpeg";

export default function HeroImage() {
  const coreRef = useRef(null);
  const scanRef = useRef(null);
  const orbitRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Main floating animation
    gsap.to(coreRef.current, {
      y: -10,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Orbit rotation
    gsap.to(orbitRef.current, {
      rotation: 360,
      duration: 24,
      repeat: -1,
      ease: "none",
    });

    // Second ring reverse rotation
    gsap.to(ringRef.current, {
      rotation: -360,
      duration: 18,
      repeat: -1,
      ease: "none",
    });

    // Scanner
    gsap.to(scanRef.current, {
      y: 260,
      duration: 3,
      repeat: -1,
      ease: "power1.inOut",
    });

    return () => {
      gsap.killTweensOf([
        coreRef.current,
        scanRef.current,
        orbitRef.current,
        ringRef.current,
      ]);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center">

      {/* =====================================================
          MAIN SYSTEM
      ====================================================== */}

      <div
        ref={coreRef}
        className="
          relative
          h-[300px]
          w-[300px]

          sm:h-[370px]
          sm:w-[370px]

          md:h-[430px]
          md:w-[430px]

          lg:h-[480px]
          lg:w-[480px]
        "
      >

        {/* =================================================
            BACKGROUND ENERGY
        ================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[75%]
            w-[75%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400/[0.07]
            blur-[70px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[55%]
            w-[55%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-500/[0.08]
            blur-[60px]
          "
        />


        {/* =================================================
            OUTER ORBIT
        ================================================== */}

        <div
          ref={orbitRef}
          className="
            absolute
            inset-0
            rounded-full
            border
            border-cyan-400/20
          "
        >

          {/* Orbit segments */}

          <span
            className="
              absolute
              left-[12%]
              top-[8%]
              h-14
              w-14
              rounded-full
              border-t
              border-cyan-400
            "
          />

          <span
            className="
              absolute
              bottom-[10%]
              right-[8%]
              h-20
              w-20
              rounded-full
              border-r
              border-purple-400
            "
          />

          <span
            className="
              absolute
              bottom-[18%]
              left-[5%]
              h-10
              w-10
              rounded-full
              border-b
              border-pink-400
            "
          />

          {/* Orbit dots */}

          <span
            className="
              absolute
              left-1/2
              top-[-4px]
              h-2
              w-2
              -translate-x-1/2
              rounded-full
              bg-cyan-300
              shadow-[0_0_15px_rgba(34,211,238,1)]
            "
          />

          <span
            className="
              absolute
              bottom-[10%]
              left-[7%]
              h-2
              w-2
              rounded-full
              bg-pink-400
              shadow-[0_0_15px_rgba(236,72,153,1)]
            "
          />

        </div>


        {/* =================================================
            SECOND ORBIT
        ================================================== */}

        <div
          ref={ringRef}
          className="
            absolute
            inset-[20px]
            rounded-full
            border
            border-dashed
            border-purple-400/20
            sm:inset-[25px]
            md:inset-[30px]
          "
        >

          <span
            className="
              absolute
              right-[8%]
              top-1/2
              h-2
              w-2
              -translate-y-1/2
              rounded-full
              bg-purple-400
              shadow-[0_0_12px_rgba(168,85,247,1)]
            "
          />

        </div>


        {/* =================================================
            HUD MARKERS
        ================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-[5%]
            -translate-x-1/2
            font-mono
            text-[7px]
            tracking-[0.3em]
            text-cyan-400/50
          "
        >
          CORE
        </div>

        <div
          className="
            absolute
            bottom-[4%]
            left-1/2
            -translate-x-1/2
            font-mono
            text-[7px]
            tracking-[0.3em]
            text-white/20
          "
        >
          IDENTITY_01
        </div>


        {/* =================================================
            PROFILE CORE
        ================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[62%]
            w-[62%]
            -translate-x-1/2
            -translate-y-1/2
            overflow-hidden
            rounded-full
            border
            border-cyan-300/30
            bg-[#050810]
            shadow-[0_0_70px_rgba(34,211,238,0.16)]
          "
        >

          {/* Image */}

          <img
            src={profile}
            alt="Gurjot Singh"
            className="
              h-full
              w-full
              object-cover
              object-center
              grayscale-[15%]
            "
          />

          {/* Image tint */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-[#050810]/50
              via-transparent
              to-cyan-400/[0.06]
            "
          />

          {/* Scan line */}

          <div
            ref={scanRef}
            className="
              pointer-events-none
              absolute
              left-0
              top-[-40px]
              h-20
              w-full
              bg-gradient-to-b
              from-transparent
              via-cyan-300/20
              to-transparent
              blur-[2px]
            "
          />

        </div>


        {/* =================================================
            CROSSHAIR
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[70%]
            w-[70%]
            -translate-x-1/2
            -translate-y-1/2
          "
        >

          {/* Top */}

          <span
            className="
              absolute
              left-1/2
              top-[-5px]
              h-5
              w-px
              -translate-x-1/2
              bg-cyan-400/40
            "
          />

          {/* Bottom */}

          <span
            className="
              absolute
              bottom-[-5px]
              left-1/2
              h-5
              w-px
              -translate-x-1/2
              bg-cyan-400/40
            "
          />

          {/* Left */}

          <span
            className="
              absolute
              left-[-5px]
              top-1/2
              h-px
              w-5
              -translate-y-1/2
              bg-cyan-400/40
            "
          />

          {/* Right */}

          <span
            className="
              absolute
              right-[-5px]
              top-1/2
              h-px
              w-5
              -translate-y-1/2
              bg-cyan-400/40
            "
          />

        </div>


        {/* =================================================
            REACT NODE
        ================================================== */}

        <div
          className="
            absolute
            right-[-5px]
            top-[15%]
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-cyan-400/20
            bg-[#07101c]/90
            px-3
            py-2
            shadow-[0_0_25px_rgba(34,211,238,0.08)]
            backdrop-blur-xl

            sm:right-[-25px]
            sm:px-4
            sm:py-2.5
          "
        >

          <span
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-lg
              bg-cyan-400/10
              text-xs
              text-cyan-300
            "
          >
            ⚛
          </span>

          <div>
            <p
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-wider
                text-white/30
              "
            >
              Framework
            </p>

            <p className="text-xs font-medium text-cyan-300">
              React.js
            </p>
          </div>

        </div>


        {/* =================================================
            NODE JS NODE
        ================================================== */}

        <div
          className="
            absolute
            bottom-[14%]
            left-[-5px]
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-emerald-400/20
            bg-[#07100d]/90
            px-3
            py-2
            shadow-[0_0_25px_rgba(74,222,128,0.08)]
            backdrop-blur-xl

            sm:left-[-25px]
            sm:px-4
            sm:py-2.5
          "
        >

          <span
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-lg
              bg-emerald-400/10
              text-xs
              text-emerald-300
            "
          >
            ◈
          </span>

          <div>
            <p
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-wider
                text-white/30
              "
            >
              Runtime
            </p>

            <p className="text-xs font-medium text-emerald-300">
              Node.js
            </p>
          </div>

        </div>


        {/* =================================================
            AI NODE
        ================================================== */}

        <div
          className="
            absolute
            bottom-[3%]
            right-[3%]
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-purple-400/20
            bg-[#0b0713]/90
            px-3
            py-2
            shadow-[0_0_25px_rgba(168,85,247,0.08)]
            backdrop-blur-xl

            sm:bottom-[1%]
            sm:right-[2%]
            sm:px-4
            sm:py-2.5
          "
        >

          <span
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-lg
              bg-purple-400/10
              text-xs
              text-purple-300
            "
          >
            ✦
          </span>

          <div>
            <p
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-wider
                text-white/30
              "
            >
              Intelligence
            </p>

            <p className="text-xs font-medium text-purple-300">
              AI Systems
            </p>
          </div>

        </div>


        {/* =================================================
            STATUS
        ================================================== */}

        <div
          className="
            absolute
            left-[4%]
            top-[8%]
            hidden
            items-center
            gap-2
            rounded-lg
            border
            border-white/[0.06]
            bg-black/30
            px-3
            py-2
            backdrop-blur-md

            sm:flex
          "
        >

          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-emerald-400
              shadow-[0_0_8px_rgba(74,222,128,0.9)]
            "
          />

          <span
            className="
              font-mono
              text-[8px]
              uppercase
              tracking-[0.2em]
              text-white/30
            "
          >
            System Online
          </span>

        </div>


        {/* =================================================
            DECORATIVE PARTICLES
        ================================================== */}

        <span
          className="
            absolute
            left-[17%]
            top-[28%]
            h-1
            w-1
            rounded-full
            bg-cyan-300
            shadow-[0_0_10px_rgba(34,211,238,1)]
          "
        />

        <span
          className="
            absolute
            bottom-[29%]
            right-[14%]
            h-1.5
            w-1.5
            rounded-full
            bg-pink-400
            shadow-[0_0_10px_rgba(236,72,153,1)]
          "
        />

        <span
          className="
            absolute
            right-[24%]
            top-[30%]
            h-1
            w-1
            rounded-full
            bg-purple-400
          "
        />

      </div>
    </div>
  );
}
