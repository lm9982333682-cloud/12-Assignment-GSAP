
import SkillCard from "./SkillCard";
import { skills } from "./SkillsData";
import { useGSAP } from "@gsap/react";
import { skillsAnimation } from "./skillsAnimation.js";
import StringLine from "../StringLine/StringLine";

export default function Skills() {
  useGSAP(() => {
    skillsAnimation();
  });

  return (
    <section
      id="skills"
      className="
        skills-section
        relative
        isolate
        overflow-hidden
        py-28

        sm:py-32
        lg:py-40
      "
    >

      {/* =====================================================
          AMBIENT LIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[15%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-cyan-500/[0.04]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          bottom-[10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-600/[0.045]
          blur-[150px]
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
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />


      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6

          sm:px-8
          lg:px-10
        "
      >

        {/* =================================================
            HEADER
        ================================================== */}

        <div
          className="
            skills-heading
            mb-14

            lg:mb-20
          "
        >

          <div
            className="
              flex
              flex-col
              gap-8

              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >

            {/* LEFT */}

            <div>

              <div className="mb-5 flex items-center gap-3">

                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_12px_rgba(34,211,238,0.8)]
                  "
                />

                <p
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-cyan-400/70
                  "
                >
                  Capabilities / Stack
                </p>

              </div>


              <h2
                className="
                  text-4xl
                  font-black
                  leading-[0.95]
                  tracking-tight
                  text-white

                  sm:text-5xl

                  md:text-6xl

                  lg:text-7xl
                "
              >
                Tools I use
                <br />

                <span className="text-cyan-400">
                  to build things.
                </span>
              </h2>

            </div>


            {/* RIGHT META */}

            <div
              className="
                max-w-sm
                border-l
                border-white/[0.08]
                pl-5
              "
            >

              <span
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                  text-white/20
                "
              >
                Capability Matrix / 03
              </span>

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-white/35
                "
              >
                A collection of technologies I use to
                design interfaces, engineer backend
                systems and build complete digital
                products.
              </p>

            </div>

          </div>


          <div className="mt-10">
            <StringLine />
          </div>

        </div>


        {/* =================================================
            MATRIX HEADER
        ================================================== */}

        <div
          className="
            mb-5
            flex
            items-center
            justify-between
            border-b
            border-white/[0.06]
            pb-4
          "
        >

          <div className="flex items-center gap-3">

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-emerald-400
                shadow-[0_0_8px_rgba(74,222,128,0.8)]
              "
            />

            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-white/25
              "
            >
              Systems Operational
            </span>

          </div>


          <span
            className="
              font-mono
              text-[8px]
              text-cyan-400/30
            "
          >
            {String(skills.length).padStart(2, "0")} MODULES
          </span>

        </div>


        {/* =================================================
            SKILL MATRIX
        ================================================== */}

        <div
          className="
            skills-grid
            grid
            gap-4

            sm:grid-cols-2

            lg:grid-cols-3

            xl:grid-cols-4
          "
        >

          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="
                skill-module
                group
                relative
                min-h-[210px]
                overflow-hidden
                border
                border-white/[0.07]
                bg-white/[0.015]
                transition-all
                duration-500

                hover:-translate-y-1
                hover:border-cyan-400/25
                hover:bg-cyan-400/[0.025]
              "
            >

              {/* =========================================
                  MODULE NUMBER
              ========================================== */}

              <div
                className="
                  absolute
                  right-4
                  top-4
                  font-mono
                  text-[8px]
                  text-white/10
                  transition-colors
                  duration-300
                  group-hover:text-cyan-400/30
                "
              >
                {String(index + 1).padStart(2, "0")}
              </div>


              {/* =========================================
                  CORNER MARKERS
              ========================================== */}

              <span
                className="
                  absolute
                  left-0
                  top-0
                  h-6
                  w-6
                  border-l
                  border-t
                  border-cyan-400/20
                  transition-all
                  duration-300
                  group-hover:h-10
                  group-hover:w-10
                  group-hover:border-cyan-400/50
                "
              />

              <span
                className="
                  absolute
                  bottom-0
                  right-0
                  h-6
                  w-6
                  border-b
                  border-r
                  border-cyan-400/10
                "
              />


              {/* =========================================
                  TOP SIGNAL
              ========================================== */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-px
                  w-0
                  bg-cyan-400
                  shadow-[0_0_10px_rgba(34,211,238,0.8)]
                  transition-all
                  duration-700
                  group-hover:w-full
                "
              />


              {/* =========================================
                  CARD CONTENT
              ========================================== */}

              <div className="relative flex h-full flex-col p-6">

                <SkillCard skill={skill} />

              </div>


              {/* =========================================
                  BOTTOM STATUS
              ========================================== */}

              <div
                className="
                  absolute
                  bottom-4
                  left-6
                  flex
                  items-center
                  gap-2
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:opacity-100
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

                <span
                  className="
                    font-mono
                    text-[7px]
                    uppercase
                    tracking-[0.2em]
                    text-cyan-400/40
                  "
                >
                  Active Module
                </span>

              </div>

            </div>
          ))}

        </div>


        {/* =================================================
            BOTTOM SYSTEM BAR
        ================================================== */}

        <div
          className="
            mt-8
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
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-white/15
            "
          >
            Developer Capability Matrix
          </span>


          <div className="flex items-center gap-3">

            <span
              className="
                h-px
                w-10
                bg-white/[0.08]
              "
            />

            <span
              className="
                font-mono
                text-[8px]
                text-cyan-400/30
              "
            >
              03 / 05
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}
