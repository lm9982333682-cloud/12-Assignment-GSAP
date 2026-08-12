
import AboutText from "./AboutText";
import Education from "./Education";
import { useGSAP } from "@gsap/react";
import { aboutAnimation } from "./aboutAnimation";
import StringLine from "../StringLine/StringLine";

export default function About() {
  useGSAP(() => {
    aboutAnimation();
  });

  return (
    <section
      id="about"
      className="
        about-section
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
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-500/[0.045]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-10
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
          SECTION CONTAINER
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
            SECTION HEADER
        ================================================== */}

        <div
          className="
            about-heading
            relative
            mb-16

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
                  About / Profile
                </p>

              </div>


              <h2
                className="
                  max-w-3xl
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
                The person
                <br />

                <span className="text-cyan-400">
                  behind the code.
                </span>
              </h2>

            </div>


            {/* RIGHT META */}

            <div
              className="
                flex
                max-w-xs
                flex-col
                gap-3
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
                Identity / 02
              </span>

              <p
                className="
                  text-sm
                  leading-6
                  text-white/40
                "
              >
                Developer focused on building
                scalable digital experiences,
                modern interfaces and intelligent
                web systems.
              </p>

            </div>

          </div>


          {/* String line */}

          <div className="mt-10">
            <StringLine />
          </div>

        </div>


        {/* =================================================
            MAIN DOSSIER
        ================================================== */}

        <div
          className="
            relative
            grid
            gap-10

            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-12
          "
        >

          {/* =================================================
              ABOUT TEXT PANEL
          ================================================== */}

          <div
            className="
              relative
              overflow-hidden
              border
              border-white/[0.07]
              bg-white/[0.015]
              p-6
              backdrop-blur-sm

              sm:p-8

              lg:p-10
            "
          >

            {/* Corner */}

            <span
              className="
                absolute
                left-0
                top-0
                h-10
                w-10
                border-l
                border-t
                border-cyan-400/30
              "
            />

            <span
              className="
                absolute
                bottom-0
                right-0
                h-10
                w-10
                border-b
                border-r
                border-cyan-400/20
              "
            />


            {/* Panel header */}

            <div
              className="
                mb-8
                flex
                items-center
                justify-between
                border-b
                border-white/[0.06]
                pb-5
              "
            >

              <span
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-white/30
                "
              >
                Personal Profile
              </span>

              <span
                className="
                  font-mono
                  text-[8px]
                  text-cyan-400/40
                "
              >
                DATA_01
              </span>

            </div>


            <AboutText />

          </div>


          {/* =================================================
              EDUCATION PANEL
          ================================================== */}

          <div
            className="
              relative
              overflow-hidden
              border
              border-white/[0.07]
              bg-white/[0.015]
              p-6
              backdrop-blur-sm

              sm:p-8

              lg:p-10
            "
          >

            {/* Panel glow */}

            <div
              className="
                pointer-events-none
                absolute
                right-[-100px]
                top-[-100px]
                h-64
                w-64
                rounded-full
                bg-purple-500/[0.05]
                blur-[80px]
              "
            />


            {/* Panel header */}

            <div
              className="
                relative
                mb-8
                flex
                items-center
                justify-between
                border-b
                border-white/[0.06]
                pb-5
              "
            >

              <div className="flex items-center gap-3">

                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-purple-400
                    shadow-[0_0_10px_rgba(168,85,247,0.8)]
                  "
                />

                <span
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-white/30
                  "
                >
                  Education
                </span>

              </div>

              <span
                className="
                  font-mono
                  text-[8px]
                  text-purple-400/40
                "
              >
                DATA_02
              </span>

            </div>


            <Education />

          </div>

        </div>


        {/* =================================================
            BOTTOM STATUS
        ================================================== */}

        <div
          className="
            mt-10
            flex
            items-center
            justify-between
            border-t
            border-white/[0.05]
            pt-5
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
                tracking-[0.25em]
                text-white/20
              "
            >
              Profile Loaded
            </span>

          </div>


          <span
            className="
              font-mono
              text-[8px]
              text-white/15
            "
          >
            02 / 05
          </span>

        </div>

      </div>

    </section>
  );
}
