
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaFileExcel,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
  SiRedux,
  SiRedis,
  SiSocketdotio,
  SiJest,
  SiVite,
  SiSass,
  SiAxios,
  SiNpm,
  SiGreensock,
  SiRabbitmq,
  SiRazorpay,
  SiGooglegemini,
  SiMysql,
  SiDocker,
} from "react-icons/si";


const iconMap = {
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: FaJs,
  react: FaReact,

  redux: SiRedux,
  tailwind: SiTailwindcss,
  SCSS: SiSass,
  GSAP: SiGreensock,
  Axios: SiAxios,

  node: FaNodeJs,
  express: SiExpress,
  socketio: SiSocketdotio,
  redis: SiRedis,
  RabbitMQ: SiRabbitmq,
  Razorpay: SiRazorpay,
  GeminiAPI: SiGooglegemini,
  Docker: SiDocker,

  mongodb: SiMongodb,
  SQL: SiMysql,
  Pinecone: FaDatabase,

  git: FaGitAlt,
  github: FaGithub,
  postman: SiPostman,
  jest: SiJest,
  npm: SiNpm,
  Vite: SiVite,
  Excel: FaFileExcel,
};


export default function SkillCard({ skill }) {
  return (
    <div className="skills-card group h-full">

      {/* =====================================================
          HEADER
      ====================================================== */}

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
                inset-0
                animate-ping
                rounded-full
                bg-cyan-400/40
              "
            />

            <span
              className="
                relative
                h-2
                w-2
                rounded-full
                bg-cyan-400
                shadow-[0_0_8px_rgba(34,211,238,0.8)]
              "
            />
          </span>


          <h3
            className="
              font-mono
              text-sm
              font-semibold
              uppercase
              tracking-[0.15em]
              text-white/80
              transition-colors
              duration-300
              group-hover:text-cyan-300
            "
          >
            {skill.title}
          </h3>

        </div>


        <span
          className="
            font-mono
            text-[7px]
            uppercase
            tracking-[0.2em]
            text-white/15
            transition-colors
            duration-300
            group-hover:text-cyan-400/30
          "
        >
          ACTIVE
        </span>

      </div>


      {/* =====================================================
          TECHNOLOGY NODES
      ====================================================== */}

      <div className="grid grid-cols-3 gap-2 sm:gap-3">

        {skill.skills.map((item, index) => {
          const Icon = iconMap[item.icon];

          if (!Icon) {
            return null;
          }

          return (
            <div
              key={item.name}
              className="
                skill-node
                group/node
                relative
                flex
                min-h-[92px]
                flex-col
                items-center
                justify-center
                overflow-hidden
                border
                border-white/[0.06]
                bg-white/[0.02]
                
                px-2
                py-3
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:bg-cyan-400/[0.04]
              "
            >

              {/* =========================================
                  NODE NUMBER
              ========================================== */}

              <span
                className="
                  absolute
                  right-2
                  top-1.5
                  font-mono
                  text-[6px]
                  text-white/10
                  transition-colors
                  duration-300
                  group-hover/node:text-cyan-400/30
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>


              {/* =========================================
                  TOP LINE
              ========================================== */}

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
                  group-hover/node:w-full
                "
              />


              {/* =========================================
                  ICON
              ========================================== */}

              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-white/[0.06]
                  bg-black/20
                  transition-all
                  duration-300

                  group-hover/node:border-cyan-400/20
                  group-hover/node:bg-cyan-400/[0.05]
                "
              >

                <Icon
                  className="
                    text-2xl
                    text-cyan-400/70
                    transition-all
                    duration-300

                    group-hover/node:scale-110
                    group-hover/node:text-cyan-300
                  "
                />

              </div>


              {/* =========================================
                  NAME
              ========================================== */}

              <p
                className="
                  mt-2
                  max-w-full
                  truncate
                  text-center
                  font-mono
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-wider
                  text-white/40
                  transition-colors
                  duration-300

                  group-hover/node:text-white/80
                "
                title={item.name}
              >
                {item.name}
              </p>


              {/* =========================================
                  CORNER
              ========================================== */}

              <span
                className="
                  absolute
                  bottom-0
                  right-0
                  h-3
                  w-3
                  border-b
                  border-r
                  border-cyan-400/10
                  transition-colors
                  duration-300

                  group-hover/node:border-cyan-400/30
                "
              />

            </div>
          );
        })}

      </div>


      {/* =====================================================
          FOOTER
      ====================================================== */}

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
            tracking-[0.2em]
            text-white/10
          "
        >
          Module Ready
        </span>


        <div className="flex items-center gap-1">

          <span className="h-1 w-1 bg-cyan-400/40" />
          <span className="h-1 w-1 bg-cyan-400/25" />
          <span className="h-1 w-1 bg-cyan-400/10" />

        </div>

      </div>

    </div>
  );
}
