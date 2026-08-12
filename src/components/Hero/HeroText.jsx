
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { HiOutlineDownload } from "react-icons/hi";



import { TypeAnimation } from "react-type-animation";

export default function HeroText() {
  return (
    <div className="relative w-full max-w-4xl">

      {/* =================================================
          IDENTITY STATUS
      ================================================= */}

      <div className="hero-tag mb-7 flex items-center gap-3">

        <span
          className="
            relative
            flex
            h-2.5
            w-2.5
            items-center
            justify-center
          "
        >
          <span
            className="
              absolute
              h-full
              w-full
              animate-ping
              rounded-full
              bg-cyan-400/40
            "
          />

          <span
            className="
              relative
              h-1.5
              w-1.5
              rounded-full
              bg-cyan-300
              shadow-[0_0_10px_rgba(34,211,238,1)]
            "
          />
        </span>

        <span
          className="
            font-mono
            text-[10px]
            font-medium
            uppercase
            tracking-[0.35em]
            text-cyan-300/80
          "
        >
          Available for creative development
        </span>

        <span
          className="
            hidden
            h-px
            w-16
            bg-gradient-to-r
            from-cyan-400/50
            to-transparent
            sm:block
          "
        />
      </div>


      {/* =================================================
          NAME
      ================================================= */}

      <div className="relative">

        {/* Background Number */}

        <div
          className="
            pointer-events-none
            absolute
            -right-5
            -top-16
            select-none
            font-mono
            text-[100px]
            font-bold
            leading-none
            text-white/[0.025]
            sm:text-[150px]
            lg:text-[190px]
          "
        >
          01
        </div>


        <h1
          className="
            hero-title
            relative
            z-10
            overflow-hidden
            text-[clamp(4rem,13vw,7rem)]
            font-black
            uppercase
            leading-[0.78]
            tracking-[-0.06em]
            text-white
          "
        >

          <span className="block overflow-hidden">
            <span className="hero-line flex ">
              <span className="
                hero-line
                block
                bg-gradient-to-r
                from-cyan-300
                via-cyan-400
                to-blue-500
                bg-clip-text
                text-transparent
              ">LAL</span> CHAND
            </span>
          </span>

          <span className="block overflow-hidden">
            <span
              className="
                hero-line
                block
                bg-gradient-to-r
                from-cyan-300
                via-cyan-400
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
             MEGHWAL
            </span>
          </span>

        </h1>


        {/* Name Accent */}

        <div
          className="
            pointer-events-none
            absolute
            -bottom-4
            left-0
            h-px
            w-[75%]
            bg-gradient-to-r
            from-cyan-400
            via-cyan-400/30
            to-transparent
          "
        />

      </div>


      {/* =================================================
          ROLE / TERMINAL
      ================================================= */}

      <div
        className="
          hero-role
          mt-9
          flex
          min-h-[48px]
          items-center
          rounded-xl
          border
          border-white/[0.07]
          bg-white/[0.025]
          px-4
          py-3
          shadow-[0_0_30px_rgba(34,211,238,0.025)]
          backdrop-blur-md
          sm:max-w-xl
        "
      >

        {/* Terminal Icon */}

        <span
          className="
            mr-3
            font-mono
            text-xs
            text-cyan-400
          "
        >
          ❯
        </span>

        <div
          className="
            min-w-0
            font-mono
            text-xs
            text-white/70
            sm:text-sm
            md:text-base
          "
        >
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1500,
              "Backend Developer",
              1500,
              "Frontend Developer",
              1500,
              "MERN Stack Developer",
              1500,
              "AI-Powered Application Builder",
              2000,
            ]}
            speed={55}
            repeat={Infinity}
            cursor
          />
        </div>

        <span
          className="
            ml-auto
            hidden
            font-mono
            text-[9px]
            uppercase
            tracking-widest
            text-emerald-400/60
            sm:block
          "
        >
          online
        </span>

      </div>


      {/* =================================================
          DESCRIPTION
      ================================================= */}

      <div
        className="
          hero-desc
          mt-7
          max-w-2xl
        "
      >

        <p
          className="
            text-base
            leading-8
            text-white/45
            sm:text-lg
          "
        >
          I engineer
          <span className="text-white/80">
            {" "}modern digital experiences
          </span>
          {" "}where clean architecture,
          thoughtful interfaces and smooth motion
          come together.
        </p>


        <p
          className="
            mt-3
            font-mono
            text-[11px]
            uppercase
            tracking-[0.16em]
            text-cyan-400/50
          "
        >
          React · Node.js · Express · MongoDB · GSAP
        </p>

      </div>


      {/* =================================================
          ACTIONS
      ================================================= */}

      <div
        className="
          hero-buttons
          mt-9
          flex
          flex-col
          gap-3
          sm:flex-row
        "
      >

        {/* Projects */}

        <a
          href="#projects"
          data-cursor="EXPLORE"
          className="
            group
            relative
            flex
            h-12
            items-center
            justify-center
            gap-3
            overflow-hidden
            rounded-xl
            bg-cyan-400
            px-7
            font-semibold
            text-black
            transition-all
            duration-300
            hover:scale-[1.03]
            hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
          "
        >

          <span className="relative z-10">
            Explore Projects
          </span>

          <HiOutlineArrowUpRight
            className="
              relative
              z-10
              text-lg
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />

          {/* Hover Shine */}

          <span
            className="
              absolute
              inset-y-0
              -left-[100%]
              w-1/2
              skew-x-[-20deg]
              bg-white/30
              transition-all
              duration-500
              group-hover:left-[130%]
            "
          />

        </a>


        {/* CV */}

        <a
          href="https://www.linkedin.com/in/lal-chand-meghwal-108336423/?skipRedirect=true"
          target="_blank"
          rel="noreferrer"
          data-cursor="DOWNLOAD"
          className="
            group
            flex
            h-12
            items-center
            justify-center
            gap-3
            rounded-xl
            border
            border-white/[0.12]
            bg-white/[0.025]
            px-7
            font-medium
            text-white/70
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-cyan-400/40
            hover:bg-cyan-400/[0.06]
            hover:text-cyan-300
          "
        >

          <HiOutlineDownload
            className="
              text-lg
              transition-transform
              duration-300
              group-hover:translate-y-0.5
            "
          />

          Download CV

        </a>

      </div>


      {/* =================================================
          SOCIAL / CONNECTIONS
      ================================================= */}

      <div
        className="
          hero-social
          mt-10
          flex
          items-center
          gap-5
        "
      >

        <span
          className="
            font-mono
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-white/20
          "
        >
          Connect
        </span>


        <span
          className="
            h-px
            w-8
            bg-white/10
          "
        />


        {/* GitHub */}

        <a
          href="https://github.com/lm9982333682-cloud"
          target="_blank"
          rel="noreferrer"
          data-cursor="GITHUB"
          aria-label="GitHub"
          className="
            group
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            border
            border-white/[0.08]
            bg-white/[0.025]
            text-white/35
            transition-all
            duration-300
            hover:border-cyan-400/30
            hover:bg-cyan-400/[0.06]
            hover:text-cyan-300
            hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]
          "
        >
          <FaGithub
            className="
              text-base
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />
        </a>


        {/* LinkedIn */}

        <a
          href="https://www.linkedin.com/in/lal-chand-meghwal-108336423"
          target="_blank"
          rel="noreferrer"
          data-cursor="LINKEDIN"
          aria-label="LinkedIn"
          className="
            group
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            border
            border-white/[0.08]
            bg-white/[0.025]
            text-white/35
            transition-all
            duration-300
            hover:border-cyan-400/30
            hover:bg-cyan-400/[0.06]
            hover:text-cyan-300
            hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]
          "
        >
          <FaLinkedin
            className="
              text-base
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />
        </a>


        {/* Status */}

        <div
          className="
            ml-2
            hidden
            items-center
            gap-2
            sm:flex
          "
        >
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
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-white/25
            "
          >
            Open to opportunities
          </span>
        </div>

      </div>


      {/* =================================================
          DECORATIVE CORNER
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-8
          right-0
          hidden
          font-mono
          text-[8px]
          uppercase
          tracking-[0.3em]
          text-white/[0.12]
          lg:block
        "
      >
        BUILD / CREATE / SHIP
      </div>

    </div>
  );
}
