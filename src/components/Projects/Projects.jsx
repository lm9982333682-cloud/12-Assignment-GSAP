import ProjectCard from "./ProjectCard";
import { projects } from "./ProjectsData";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { projectAnimation } from "./projectAnimation";
import StringLine from "../StringLine/StringLine";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useGSAP(() => {
    projectAnimation();
  });

  return (
    <section
      id="projects"
      className="
        projects-section
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
          top-[20%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-cyan-500/[0.035]
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
          bg-purple-600/[0.04]
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
            projects-heading
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
                  Selected Work / Archive
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
                Things I've
                <br />

                <span className="text-cyan-400">
                  built.
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
                Project Archive / 04
              </span>

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-white/35
                "
              >
                Selected projects exploring frontend
                interfaces, backend architecture,
                APIs, real-time systems and
                interactive experiences.
              </p>

            </div>

          </div>


          <div className="mt-10">
            <StringLine />
          </div>

        </div>


        {/* =================================================
            PROJECT SYSTEM BAR
        ================================================== */}

        <div
          className="
            mb-6
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
                relative
                flex
                h-2
                w-2
              "
            >

              <span
                className="
                  absolute
                  inset-0
                  animate-ping
                  rounded-full
                  bg-emerald-400/30
                "
              />

              <span
                className="
                  relative
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_8px_rgba(74,222,128,0.7)]
                "
              />

            </span>

            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-white/25
              "
            >
              Archive Online
            </span>

          </div>


          <span
            className="
              font-mono
              text-[8px]
              text-cyan-400/30
            "
          >
            {String(projects.length).padStart(2, "0")} PROJECTS
          </span>

        </div>


        {/* =================================================
            PROJECT GRID
        ================================================== */}

        <div
          className="
            projects-grid
            grid
            gap-5

            lg:grid-cols-2
          "
        >

          {projects.map((project, index) => (

            <div
              key={project.id}
              className="
                project-module
                group
                relative
              "
            >

              {/* Project number */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-4
                  top-4
                  z-20
                  font-mono
                  text-[8px]
                  text-white/20
                  transition-colors
                  duration-300
                  group-hover:text-cyan-400/50
                "
              >
                PROJECT_{String(index + 1).padStart(2, "0")}
              </div>


              {/* Active line */}

              <span
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-0
                  z-20
                  h-px
                  w-0
                  bg-cyan-400
                  shadow-[0_0_12px_rgba(34,211,238,0.8)]
                  transition-all
                  duration-700
                  group-hover:w-full
                "
              />


              {/* Corner markers */}

              <span
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  right-0
                  z-20
                  h-8
                  w-8
                  border-b
                  border-r
                  border-cyan-400/20
                  transition-all
                  duration-500
                  group-hover:h-12
                  group-hover:w-12
                  group-hover:border-cyan-400/40
                "
              />


              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />

            </div>

          ))}

        </div>


        {/* =================================================
            BOTTOM ARCHIVE BAR
        ================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-4
            border-t
            border-white/[0.05]
            pt-5

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <div>

            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-white/15
              "
            >
              End of selected work
            </span>

          </div>


          <div className="flex items-center gap-4">

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
              04 / 05
            </span>

          </div>

        </div>

      </div>


      {/* =====================================================
          FUTURE PROJECT MODAL HOOK
      ====================================================== */}

      {selectedProject && (
        <div className="hidden">
          {/* 
            Your existing ProjectCard click flow is preserved.

            selectedProject is available here if you later
            want to render a full-screen project case study.
          */}
        </div>
      )}

    </section>
  );
}
