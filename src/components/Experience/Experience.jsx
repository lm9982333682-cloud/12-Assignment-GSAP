import ExperienceCard from "./ExperienceCard";
import { experience } from "./ExperienceData";
import { useGSAP } from "@gsap/react";
import { experienceAnimation } from "./experienceAnimation";
import StringLine from "../StringLine/StringLine";

export default function Experience() {
  useGSAP(() => {
    experienceAnimation();
  });

  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        bg-transparent
        py-28
        sm:py-32
        lg:py-40
      "
    >

      {/* =====================================================
          ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[20%]
          h-72
          w-72
          rounded-full
          bg-cyan-400/[0.035]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          right-[5%]
          h-96
          w-96
          rounded-full
          bg-violet-500/[0.035]
          blur-[140px]
        "
      />


      {/* =====================================================
          DECORATIVE GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />


      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          sm:px-8
          lg:px-10
        "
      >

        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <div
          className="
            experience-heading
            mb-16
            text-center
            lg:mb-20
          "
        >

          {/* System Label */}

          <div
            className="
              mx-auto
              mb-5
              flex
              w-fit
              items-center
              gap-3
              border
              border-white/[0.06]
              bg-white/[0.015]
              px-4
              py-2
            "
          >

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-cyan-400
                shadow-[0_0_10px_rgba(34,211,238,.8)]
              "
            />

            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-white/35
              "
            >
              Career Log / 04
            </span>

          </div>


          {/* Small Heading */}

          <p
            className="
              uppercase
              tracking-[6px]
              text-cyan-400
              text-xs
              font-semibold

              sm:text-sm
            "
          >
            Experience
          </p>


          {/* Main Heading */}

          <h2
            className="
              mt-4
              font-black
              leading-[0.95]
              tracking-tight
              text-white
              text-4xl

              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Where I've{" "}
            <span className="text-cyan-400">
              Built
            </span>
          </h2>


          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-white/35

              sm:text-base
            "
          >
            A timeline of professional work, real-world
            development and the systems I've helped build.
          </p>


          {/* String */}

          <div className="mt-8">
            <StringLine />
          </div>

        </div>


        {/* =================================================
            EXPERIENCE TERMINAL HEADER
        ================================================== */}

        <div
          className="
            mb-8
            flex
            items-center
            justify-between
            border-y
            border-white/[0.05]
            py-4
          "
        >

          <div className="flex items-center gap-3">

            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-white/20
              "
            >
              Professional Timeline
            </span>

          </div>


          <div
            className="
              hidden
              items-center
              gap-2
              sm:flex
            "
          >

            <span
              className="
                h-1
                w-1
                rounded-full
                bg-cyan-400/70
              "
            />

            <span
              className="
                font-mono
                text-[7px]
                uppercase
                tracking-[0.2em]
                text-cyan-400/30
              "
            >
              Active Record
            </span>

          </div>

        </div>


        {/* =================================================
            EXPERIENCE TIMELINE
        ================================================== */}

        <div
          className="
            experience-grid
            relative
          "
        >

          {/* Timeline spine */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-[14px]
              top-0
              w-px
              bg-gradient-to-b
              from-cyan-400/40
              via-white/[0.08]
              to-transparent

              sm:left-[18px]
            "
          />


          {/* Experience items */}

          <div className="space-y-8 sm:space-y-10">

            {experience.map((item, index) => (

              <div
                key={item.id}
                className="
                  experience-item
                  relative
                  pl-10

                  sm:pl-14
                "
              >

                {/* Timeline node */}

                <div
                  className="
                    absolute
                    left-[8px]
                    top-8
                    flex
                    h-3
                    w-3
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-cyan-400/40
                    bg-[#050810]
                    shadow-[0_0_15px_rgba(34,211,238,.15)]

                    sm:left-[12px]
                  "
                >

                  <span
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-cyan-400
                    "
                  />

                </div>


                {/* Index */}

                <div
                  className="
                    absolute
                    -left-1
                    top-1
                    hidden
                    font-mono
                    text-[7px]
                    text-white/10

                    sm:block
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>


                <ExperienceCard
                  experience={item}
                />

              </div>

            ))}

          </div>

        </div>


        {/* =================================================
            FOOTER STATUS
        ================================================== */}

        <div
          className="
            mt-14
            flex
            items-center
            justify-between
            border-t
            border-white/[0.05]
            pt-5
          "
        >

          <span
            className="
              font-mono
              text-[7px]
              uppercase
              tracking-[0.25em]
              text-white/10
            "
          >
            End of career log
          </span>


          <div className="flex items-center gap-1">

            <span className="h-1 w-1 bg-cyan-400/50" />
            <span className="h-1 w-1 bg-cyan-400/25" />
            <span className="h-1 w-1 bg-cyan-400/10" />

          </div>

        </div>

      </div>

    </section>
  );
}
