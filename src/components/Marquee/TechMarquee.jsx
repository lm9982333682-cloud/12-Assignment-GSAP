
import { techStack } from "./techData";
import { useGSAP } from "@gsap/react";
import { marqueeAnimation } from "./marqueeAnimation";

export default function TechMarquee() {
  const marqueeItems = [...techStack, ...techStack];

  useGSAP(() => {
    marqueeAnimation();
  });

  return (
    <section
      className="
        relative
        z-10
        overflow-hidden
        border-y
        border-white/[0.06]
        
        py-4
        backdrop-blur-md
      "
    >

      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />


      {/* =====================================================
          TOP SYSTEM INFO
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          pb-3

          sm:px-8
          lg:px-10
        "
      >

        <div className="flex items-center gap-3">

          {/* Status */}

          <span
            className="
              relative
              flex
              h-2
              w-2
            "
          >
            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                animate-ping
                rounded-full
                bg-cyan-400
                opacity-60
              "
            />

            <span
              className="
                relative
                inline-flex
                h-2
                w-2
                rounded-full
                bg-cyan-400
              "
            />
          </span>

          <span
            className="
              font-mono
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-white/30
            "
          >
            Technology Stack
          </span>

        </div>


        <div
          className="
            hidden
            font-mono
            text-[8px]
            uppercase
            tracking-[0.25em]
            text-cyan-400/30

            sm:block
          "
        >
          SYSTEM / 01
        </div>

      </div>


      {/* =====================================================
          MARQUEE VIEWPORT
      ====================================================== */}

      <div className="relative overflow-hidden">

        {/* Left fade */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-20
            bg-gradient-to-r
            from-[#03060d]
            to-transparent

            sm:w-32
          "
        />


        {/* Right fade */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full
            w-20
            bg-gradient-to-l
            from-[#03060d]
            to-transparent

            sm:w-32
          "
        />


        {/* =================================================
            MOVING TRACK
        ================================================== */}

        <div
          className="
            marquee-track
            flex
            w-max
            items-center
            gap-3
            px-3

            sm:gap-4
            sm:px-4
          "
        >

          {marqueeItems.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div
                key={`${ tech.name } -${ index } `}
                className="
                  group
                  relative
                  flex
                  h-12
                  items-center
                  gap-3
                  overflow-hidden
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  px-4
                  transition-all
                  duration-300

                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.04]

                  sm:h-14
                  sm:px-5
                "
              >

                {/* Top accent */}

                <span
                  className="
                    absolute
                    left-0
                    top-0
                    h-px
                    w-0
                    bg-cyan-400
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />


                {/* Icon container */}

                <div
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    border
                    border-cyan-400/10
                    bg-cyan-400/[0.04]
                    transition-all
                    duration-300

                    group-hover:border-cyan-400/30
                    group-hover:bg-cyan-400/10
                  "
                >
                  <Icon
                    className="
                      text-xl
                      text-cyan-400/70
                      transition-all
                      duration-300

                      group-hover:scale-110
                      group-hover:text-cyan-300
                    "
                  />
                </div>


                {/* Tech name */}

                <span
                  className="
                    whitespace-nowrap
                    font-mono
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-white/60
                    transition-colors
                    duration-300

                    group-hover:text-white
                  "
                >
                  {tech.name}
                </span>


                {/* Number */}

                <span
                  className="
                    hidden
                    font-mono
                    text-[7px]
                    text-white/15

                    sm:block
                  "
                >
                  {String((index % techStack.length) + 1).padStart(2, "0")}
                </span>


                {/* Bottom accent */}

                <span
                  className="
                    absolute
                    bottom-0
                    right-0
                    h-px
                    w-4
                    bg-cyan-400/40
                  "
                />

              </div>
            );
          })}

        </div>

      </div>


      {/* =====================================================
          BOTTOM SYSTEM INFO
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          pt-3

          sm:px-8
          lg:px-10
        "
      >

        <span
          className="
            font-mono
            text-[7px]
            uppercase
            tracking-[0.25em]
            text-white/15
          "
        >
          Continuous Signal
        </span>


        <div className="flex items-center gap-2">

          <span
            className="
              h-px
              w-8
              bg-white/[0.08]
            "
          />

          <span
            className="
              font-mono
              text-[7px]
              tracking-[0.2em]
              text-cyan-400/30
            "
          >
            ACTIVE
          </span>

        </div>

      </div>

    </section>
  );
}
