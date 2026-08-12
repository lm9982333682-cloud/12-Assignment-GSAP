
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useRef } from "react";

export default function ProjectCard({ project, onClick }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    if (window.innerWidth < 768) return;

    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 7;
    const rotateX = ((y / rect.height) - 0.5) * -7;

    card.style.setProperty("--rotate-x", `${ rotateX } deg`);
    card.style.setProperty("--rotate-y", `${ rotateY } deg`);
  };


  const handleLeave = () => {
    const card = cardRef.current;

    if (!card) return;

    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
  };


  return (
    <article
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="
        project-card
        group
        relative
        cursor-pointer
        overflow-hidden
        border
        border-white/[0.07]
        
        transition-transform
        duration-300
        ease-out

        [perspective:1200px]
        [transform:perspective(1200px)_rotateX(var(--rotate-x,0deg))_rotateY(var(--rotate-y,0deg))]
        hover:border-cyan-400/30
      "
    >

      {/* =====================================================
          IMAGE AREA
      ====================================================== */}

      <div
        className="
          project-image
          relative
          h-56
          overflow-hidden

          sm:h-64
          lg:h-72
        "
      >

        <img
          src={project.image}
          alt={project.title}
          className="
            h-full
            w-full
            object-cover
            grayscale-[20%]
            transition-all
            duration-700
            ease-out

            group-hover:scale-105
            group-hover:grayscale-0
          "
        />


        {/* Dark gradient */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#050810]
            via-[#050810]/20
            to-transparent
          "
        />


        {/* Image scan */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            h-px
            w-full
            -translate-y-full
            bg-cyan-400
            opacity-0
            shadow-[0_0_15px_rgba(34,211,238,0.8)]
            transition-all
            duration-700

            group-hover:translate-y-[280px]
            group-hover:opacity-60
          "
        />


        {/* Project number */}

        <div
          className="
            absolute
            left-5
            top-5
            flex
            items-center
            gap-2
          "
        >

          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-cyan-400
              shadow-[0_0_8px_rgba(34,211,238,0.9)]
            "
          />

          <span
            className="
              font-mono
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-white/60
            "
          >
            Case File
          </span>

        </div>


        {/* Top right status */}

        <div
          className="
            absolute
            right-5
            top-5
            border
            border-white/10
            bg-black/30
            px-3
            py-1.5
            backdrop-blur-md
          "
        >

          <span
            className="
              font-mono
              text-[7px]
              uppercase
              tracking-[0.2em]
              text-cyan-400/70
            "
          >
            Online
          </span>

        </div>


        {/* Bottom image title */}

        <div
          className="
            absolute
            bottom-5
            left-5
            right-5
          "
        >

          <span
            className="
              font-mono
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-white/30
            "
          >
            Project Preview
          </span>

        </div>

      </div>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative p-5 sm:p-6 lg:p-7">

        {/* =================================================
            TITLE ROW
        ================================================== */}

        <div
          className="
            flex
            items-start
            justify-between
            gap-5
          "
        >

          <div>

            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-cyan-400/40
              "
            >
              Build / {project.id}
            </span>


            <h3
              className="
                mt-2
                text-2xl
                font-bold
                tracking-tight
                text-white
                transition-colors
                duration-300

                group-hover:text-cyan-300

                sm:text-3xl
              "
            >
              {project.title}
            </h3>

          </div>


          {/* Arrow */}

          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              border
              border-white/[0.08]
              text-white/20
              transition-all
              duration-300

              group-hover:border-cyan-400/30
              group-hover:bg-cyan-400/10
              group-hover:text-cyan-400
            "
          >
            ↗
          </div>

        </div>


        {/* =================================================
            DESCRIPTION
        ================================================== */}

        <p
          className="
            mt-5
            max-w-2xl
            text-sm
            leading-7
            text-white/40

            sm:text-[15px]
          "
        >
          {project.description}
        </p>


        {/* =================================================
            TECH STACK
        ================================================== */}

        <div
          className="
            project-tech
            mt-6
            border-y
            border-white/[0.05]
            py-4
          "
        >

          <div
            className="
              mb-3
              flex
              items-center
              justify-between
            "
          >

            <span
              className="
                font-mono
                text-[7px]
                uppercase
                tracking-[0.25em]
                text-white/20
              "
            >
              Technology Matrix
            </span>

            <span
              className="
                font-mono
                text-[7px]
                text-cyan-400/30
              "
            >
              {String(project.tech.length).padStart(2, "0")}
            </span>

          </div>


          <div className="flex flex-wrap gap-2">

            {project.tech.map((item, index) => (

              <span
                key={item}
                className="
                  group/tech
                  flex
                  items-center
                  gap-2
                  border
                  border-white/[0.06]
                  bg-white/[0.02]
                  px-2.5
                  py-1.5
                  transition-all
                  duration-300

                  hover:border-cyan-400/25
                  hover:bg-cyan-400/[0.04]
                "
              >

                <span
                  className="
                    font-mono
                    text-[6px]
                    text-cyan-400/30
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className="
                    text-[10px]
                    font-medium
                    text-white/45
                    transition-colors
                    duration-300

                    group-hover/tech:text-cyan-300
                  "
                >
                  {item}
                </span>

              </span>

            ))}

          </div>

        </div>


        {/* =================================================
            ACTIONS
        ================================================== */}

        <div
          className="
            project-btn
            mt-6
            grid
            grid-cols-2
            gap-3
          "
        >

          {/* GitHub */}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="
              group/github
              flex
              items-center
              justify-center
              gap-2
              border
              border-white/[0.08]
              bg-white/[0.02]
              px-4
              py-3
              text-xs
              font-medium
              text-white/50
              transition-all
              duration-300

              hover:border-cyan-400/30
              hover:bg-cyan-400/[0.05]
              hover:text-cyan-300
            "
          >

            <FaGithub
              className="
                text-sm
                transition-transform
                duration-300
                group-hover/github:scale-110
              "
            />

            <span>
              Source
            </span>

          </a>


          {/* Live */}

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="
              group/live
              flex
              items-center
              justify-center
              gap-2
              border
              border-cyan-400/20
              bg-cyan-400/[0.05]
              px-4
              py-3
              text-xs
              font-semibold
              text-cyan-400
              transition-all
              duration-300

              hover:border-cyan-400/50
              hover:bg-cyan-400/10
              hover:shadow-[0_0_25px_rgba(34,211,238,0.08)]
            "
          >

            <FaExternalLinkAlt
              className="
                text-[11px]
                transition-transform
                duration-300
                group-hover/live:translate-x-0.5
                group-hover/live:-translate-y-0.5
              "
            />

            <span>
              Live System
            </span>

          </a>

        </div>


        {/* =================================================
            FOOTER
        ================================================== */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-between
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
            Click to inspect
          </span>


          <div className="flex items-center gap-1">

            <span className="h-1 w-1 bg-cyan-400/40" />
            <span className="h-1 w-1 bg-cyan-400/20" />
            <span className="h-1 w-1 bg-cyan-400/10" />

          </div>

        </div>

      </div>


      {/* =====================================================
          CARD CORNERS
      ====================================================== */}

      <span
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-8
          w-8
          border-b
          border-l
          border-cyan-400/10
          transition-all
          duration-500

          group-hover:h-12
          group-hover:w-12
          group-hover:border-cyan-400/30
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-8
          w-8
          border-r
          border-t
          border-cyan-400/10
          transition-all
          duration-500

          group-hover:h-12
          group-hover:w-12
          group-hover:border-cyan-400/30
        "
      />

    </article>
  );
}
