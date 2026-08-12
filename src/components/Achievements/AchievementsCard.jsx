import { FaAward, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

export default function AchievementCard({ achievement }) {
  return (
    <article
      className="
        achievement-card
        group
        relative
        overflow-hidden

        border
        border-white/[0.07]


        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-cyan-400/30
        hover:shadow-[0_20px_60px_rgba(0,0,0,.35)]
      "
    >

      {/* =====================================================
          AMBIENT GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-52
          w-52
          rounded-full
          bg-cyan-400/[0.04]
          blur-[80px]

          transition-all
          duration-700

          group-hover:bg-cyan-400/[0.08]
        "
      />


      {/* =====================================================
          SCAN LINE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-px
          w-full
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-cyan-400/60
          to-transparent

          transition-transform
          duration-[1200ms]

          group-hover:translate-x-full
        "
      />


      {/* =====================================================
          TOP SYSTEM BAR
      ====================================================== */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-white/[0.05]
          px-5
          py-3

          sm:px-6
        "
      >

        <div className="flex items-center gap-2">

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
            Verified Credential
          </span>

        </div>


        <div
          className="
            flex
            items-center
            gap-1.5
            font-mono
            text-[7px]
            uppercase
            tracking-[0.2em]
            text-cyan-400/40
          "
        >
          <FaCheckCircle />
          Verified
        </div>

      </div>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative p-5 sm:p-6 lg:p-7">

        {/* Header */}

        <div
          className="
            flex
            flex-col
            gap-6

            sm:flex-row
            sm:items-start
            sm:justify-between
          "
        >

          {/* Award Identity */}

          <div className="flex items-start gap-4">

            <div
              className="
                relative
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center

                border
                border-cyan-400/15

                bg-cyan-400/[0.04]

                text-cyan-400

                transition-all
                duration-500

                group-hover:border-cyan-400/40
                group-hover:bg-cyan-400/[0.08]
                group-hover:shadow-[0_0_25px_rgba(34,211,238,.12)]

                sm:h-14
                sm:w-14
              "
            >

              <FaAward className="text-xl sm:text-2xl" />

              {/* Corner */}

              <span
                className="
                  absolute
                  right-0
                  top-0
                  h-2
                  w-2
                  border-r
                  border-t
                  border-cyan-400/40
                "
              />

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-2
                  w-2
                  border-b
                  border-l
                  border-cyan-400/40
                "
              />

            </div>


            {/* Title */}

            <div>

              <h3
                className="
                  max-w-md
                  text-lg
                  font-bold
                  leading-snug
                  tracking-tight
                  text-white

                  sm:text-xl
                "
              >
                {achievement.title}
              </h3>

              <p
                className="
                  mt-2
                  font-mono
                  text-xs
                  uppercase
                  tracking-wider
                  text-cyan-400/70

                  sm:text-sm
                "
              >
                {achievement.organization}
              </p>

            </div>

          </div>


          {/* Date */}

          <div
            className="
              flex
              w-fit
              items-center
              gap-2

              border
              border-white/[0.06]

              bg-white/[0.02]

              px-3
              py-2

              font-mono
              text-xs
              text-white/35
            "
          >

            <FaCalendarAlt className="text-cyan-400/60" />

            <span>
              {achievement.year}
            </span>

          </div>

        </div>


        {/* =================================================
            DIVIDER
        ================================================== */}

        <div className="my-6 flex items-center gap-3">

          <span className="h-px flex-1 bg-white/[0.05]" />

          <span
            className="
              font-mono
              text-[7px]
              uppercase
              tracking-[0.25em]
              text-white/15
            "
          >
            Achievement Data
          </span>

          <span className="h-px w-10 bg-white/[0.05]" />

        </div>


        {/* =================================================
            DESCRIPTION
        ================================================== */}

        <p
          className="
            max-w-2xl
            text-sm
            leading-7
            text-white/40

            sm:text-[15px]
          "
        >
          {achievement.description}
        </p>


        {/* =================================================
            TAGS
        ================================================== */}

        {achievement.tags && achievement.tags.length > 0 && (

          <div className="mt-6 flex flex-wrap gap-2">

            {achievement.tags.map((tag, index) => (

              <span
                key={tag}
                className="
                  achievement-tag
                  inline-flex
                  items-center
                  gap-2

                  border
                  border-cyan-400/10

                  bg-cyan-400/[0.035]

                  px-3
                  py-1.5

                  font-mono
                  text-[10px]
                  text-cyan-400/60

                  transition-all
                  duration-300

                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.08]
                  hover:text-cyan-400
                "
              >

                <span className="text-cyan-400/30">
                  0{index + 1}
                </span>

                {tag}

              </span>

            ))}

          </div>

        )}


        {/* =================================================
            BOTTOM STATUS
        ================================================== */}

        <div
          className="
            mt-7
            flex
            items-center
            justify-between
            border-t
            border-white/[0.05]
            pt-4
          "
        >

          <span
            className="
              font-mono
              text-[7px]
              uppercase
              tracking-[0.3em]
              text-white/10
            "
          >
            Credential authenticated
          </span>


          <div className="flex items-center gap-1">

            <span className="h-1 w-1 bg-cyan-400/60" />
            <span className="h-1 w-1 bg-cyan-400/30" />
            <span className="h-1 w-1 bg-cyan-400/10" />

          </div>

        </div>

      </div>

    </article>
  );
}
