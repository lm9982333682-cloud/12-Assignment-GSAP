import AchievementCard from "./AchievementsCard";
import { achievements } from "./achievementsData";
import { useGSAP } from "@gsap/react";
import { achievementAnimation } from "./achievementsAnimation";
import StringLine from "../StringLine/StringLine";

export default function Achievements() {
  useGSAP(() => {
    achievementAnimation();
  });

  return (
    <section
      id="achievements"
      className="
        relative
        overflow-hidden
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
          left-[10%]
          top-[15%]
          h-72
          w-72
          rounded-full
          blur-[120px]
          
          bg-cyan-400/[0.035]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          right-[8%]
          h-96
          w-96
          rounded-full
          bg-violet-500/[0.035]
          blur-[140px]
        "
      />


      {/* =====================================================
          DIGITAL GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.02]
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
            HEADER
        ================================================== */}

        <div
          className="
            achievements-heading
            mb-14
            text-center

            sm:mb-16
            lg:mb-20
            
          "
        >

          {/* Archive Label */}

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
                text-white/30
              "
            >
              Credential Vault / 05
            </span>

          </div>


          {/* Small heading */}

          <p
            className="
              uppercase
              tracking-[6px]
              text-xs
              font-semibold
              text-cyan-400

              sm:text-sm
            "
          >
            Achievements
          </p>


          {/* Main heading */}

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
            Proof of{" "}
            <span className="text-cyan-400">
              Progress
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
            Verified certifications, achievements and milestones
            collected throughout my development journey.
          </p>


          {/* String line */}

          <div className="mt-8">
            <StringLine />
          </div>

        </div>


        {/* =================================================
            VAULT HEADER
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
                tracking-[0.3em]
                text-white/20
              "
            >
              Verified Credentials
            </span>

          </div>


          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <span
              className="
                font-mono
                text-[7px]
                uppercase
                tracking-[0.2em]
                text-white/15
              "
            >
              Records
            </span>

            <span
              className="
                border
                border-cyan-400/10
                bg-cyan-400/[0.03]
                px-2
                py-1
                font-mono
                text-[8px]
                text-cyan-400/50
              "
            >
              {String(achievements.length).padStart(2, "0")}
            </span>

          </div>

        </div>


        {/* =================================================
            ACHIEVEMENT RECORDS
        ================================================== */}

        <div
          className="
            achievements-grid
            grid
            gap-6

            md:grid-cols-2
            lg:gap-8
          "
        >

          {achievements.map((achievement, index) => (

            <div
              key={achievement.id}
              className="
                achievement-record
                relative
              "
            >

              {/* Record number */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -left-1
                  top-5
                  z-20
                  hidden
                  font-mono
                  text-[7px]
                  text-cyan-400/20

                  lg:block
                "
              >
                {String(index + 1).padStart(2, "0")}
              </div>


              <AchievementCard
                achievement={achievement}
              />

            </div>

          ))}

        </div>


        {/* =================================================
            VAULT FOOTER
        ================================================== */}

        <div
          className="
            mt-12
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
              tracking-[0.3em]
              text-white/10
            "
          >
            Credential vault synchronized
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
