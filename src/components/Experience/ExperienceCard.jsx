import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

export default function ExperienceCard({ experience }) {
  return (
    <article
      className="
        experience-card
        group
        relative
        overflow-hidden
        border
        border-white/[0.07]
        
        transition-all
        duration-500

        hover:border-cyan-400/25
        hover:-translate-y-1
      "
    >

      {/* =====================================================
          TOP ACCENT
      ====================================================== */}

      <div
        className="
          absolute
          left-0
          top-0
          h-px
          w-0
          bg-cyan-400
          shadow-[0_0_15px_rgba(34,211,238,.8)]
          transition-all
          duration-700

          group-hover:w-full
        "
      />


      {/* =====================================================
          CORNER DECORATIONS
      ====================================================== */}

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
          group-hover:border-cyan-400/25
        "
      />

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
        "
      />


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 p-5 sm:p-7 lg:p-8">


        {/* =================================================
            RECORD HEADER
        ================================================== */}

        <div
          className="
            mb-7
            flex
            items-center
            justify-between
            border-b
            border-white/[0.05]
            pb-4
          "
        >

          {/* Record */}

          <div className="flex items-center gap-3">

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
                text-[7px]
                uppercase
                tracking-[0.3em]
                text-white/25
              "
            >
              Professional Record
            </span>

          </div>


          {/* Status */}

          <div
            className="
              flex
              items-center
              gap-2
              border
              border-white/[0.06]
              bg-white/[0.02]
              px-2.5
              py-1
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
                text-cyan-400/50
              "
            >
              Verified
            </span>

          </div>

        </div>


        {/* =================================================
            MAIN HEADER
        ================================================== */}

        <div
          className="
            flex
            flex-col
            gap-6

            lg:flex-row
            lg:items-start
            lg:justify-between
          "
        >

          {/* LEFT */}

          <div className="flex items-start gap-4">

            {/* Icon */}

            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                border
                border-cyan-400/15
                bg-cyan-400/[0.04]
                text-cyan-400
                transition-all
                duration-500

                group-hover:border-cyan-400/35
                group-hover:bg-cyan-400/[0.08]
              "
            >

              <FaBriefcase className="text-base" />

            </div>


            {/* Role */}

            <div>

              <p
                className="
                  mb-1
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.25em]
                  text-white/20
                "
              >
                Position
              </p>

              <h3
                className="
                  text-xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-white
                  transition-colors
                  duration-300

                  sm:text-2xl

                  group-hover:text-cyan-300
                "
              >
                {experience.role}
              </h3>


              <p
                className="
                  mt-2
                  text-sm
                  font-medium
                  text-cyan-400/70
                "
              >
                {experience.company}
              </p>

            </div>

          </div>


          {/* =================================================
              DATE
          ================================================== */}

          <div
            className="
              flex
              w-fit
              items-center
              gap-3
              border
              border-white/[0.06]
              bg-white/[0.015]
              px-4
              py-2.5
            "
          >

            <FaCalendarAlt
              className="
                text-xs
                text-cyan-400/50
              "
            />

            <div>

              <p
                className="
                  font-mono
                  text-[6px]
                  uppercase
                  tracking-[0.25em]
                  text-white/15
                "
              >
                Duration
              </p>

              <span
                className="
                  font-mono
                  text-[9px]
                  text-white/50
                "
              >
                {experience.duration}
              </span>

            </div>

          </div>

        </div>


        {/* =================================================
            DIVIDER
        ================================================== */}

        <div
          className="
            my-7
            flex
            items-center
            gap-3
          "
        >

          <span
            className="
              h-px
              w-10
              bg-cyan-400/30
            "
          />

          <span
            className="
              font-mono
              text-[7px]
              uppercase
              tracking-[0.3em]
              text-white/15
            "
          >
            Responsibilities
          </span>

          <span
            className="
              h-px
              flex-1
              bg-white/[0.05]
            "
          />

        </div>


        {/* =================================================
            RESPONSIBILITIES
        ================================================== */}

        <ul className="space-y-4">

          {experience.description.map((item, index) => (

            <li
              key={index}
              className="
                group/item
                flex
                items-start
                gap-4
                text-sm
                leading-7
                text-white/40

                sm:text-[15px]
              "
            >

              {/* Number */}

              <span
                className="
                  mt-1
                  shrink-0
                  font-mono
                  text-[8px]
                  text-cyan-400/30
                  transition-colors
                  duration-300

                  group-hover/item:text-cyan-400
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>


              {/* Line */}

              <span
                className="
                  mt-3
                  h-px
                  w-5
                  shrink-0
                  bg-white/10
                  transition-all
                  duration-300

                  group-hover/item:w-8
                  group-hover/item:bg-cyan-400/40
                "
              />


              {/* Text */}

              <span>
                {item}
              </span>

            </li>

          ))}

        </ul>


        {/* =================================================
            TECHNOLOGY MATRIX
        ================================================== */}

        <div
          className="
            mt-8
            border-t
            border-white/[0.05]
            pt-6
          "
        >

          <div
            className="
              mb-4
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
                tracking-[0.3em]
                text-white/20
              "
            >
              Technology Matrix
            </span>


            <span
              className="
                font-mono
                text-[7px]
                text-cyan-400/25
              "
            >
              {String(experience.tech.length).padStart(2, "0")} TOOLS
            </span>

          </div>


          <div className="flex flex-wrap gap-2">

            {experience.tech.map((tech, index) => (

              <span
                key={tech}
                className="
                  group/tech
                  flex
                  items-center
                  gap-2
                  border
                  border-white/[0.06]
                  bg-white/[0.015]
                  px-3
                  py-2
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
                    text-white/40
                    transition-colors
                    duration-300

                    group-hover/tech:text-cyan-300
                  "
                >
                  {tech}
                </span>

              </span>

            ))}

          </div>

        </div>


        {/* =================================================
            FOOTER
        ================================================== */}

        <div
          className="
            mt-7
            flex
            items-center
            justify-between
            border-t
            border-white/[0.04]
            pt-4
          "
        >

          <span
            className="
              font-mono
              text-[6px]
              uppercase
              tracking-[0.3em]
              text-white/10
            "
          >
            Record authenticated
          </span>


          <div className="flex items-center gap-1">

            <span className="h-1 w-1 bg-cyan-400/50" />
            <span className="h-1 w-1 bg-cyan-400/25" />
            <span className="h-1 w-1 bg-cyan-400/10" />

          </div>

        </div>

      </div>

    </article>
  );
}
