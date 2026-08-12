import { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { useGSAP } from "@gsap/react";

import {
  navbarAnimation,
  animateMobileLinks,
} from "./navAnimation";

const links = [
  {
    name: "About",
    path: "#about",
    number: "01",
  },
  {
    name: "Skills",
    path: "#skills",
    number: "02",
  },
  {
    name: "Projects",
    path: "#projects",
    number: "03",
  },
  {
    name: "Experience",
    path: "#experience",
    number: "04",
  },
  {
    name: "Contact",
    path: "#contact",
    number: "05",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [muted, setMuted] = useState(false);
  const [active, setActive] = useState("About");

  const mobileMenuRef = useRef(null);
  const mobileTlRef = useRef(null);
  const audioRef = useRef(null);

  // -----------------------------------------
  // NAVBAR GSAP
  // -----------------------------------------

  useGSAP(() => {
    navbarAnimation();
  });

  // -----------------------------------------
  // MOBILE MENU ANIMATION
  // -----------------------------------------

  useEffect(() => {
    let timer;

    if (open) {
      timer = setTimeout(() => {
        if (!mobileTlRef.current) {
          mobileTlRef.current =
            animateMobileLinks(
              mobileMenuRef.current
            );
        }

        mobileTlRef.current?.play(0);
      }, 100);
    } else {
      mobileTlRef.current?.reverse();
    }

    return () => clearTimeout(timer);
  }, [open]);

  // -----------------------------------------
  // ACTIVE SECTION
  // -----------------------------------------

  useEffect(() => {
    const sections = links
      .map((link) =>
        document.querySelector(link.path)
      )
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const current = links.find(
              (link) =>
                link.path === `#${entry.target.id}`
            );

            if (current) {
              setActive(current.name);
            }
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  // -----------------------------------------
  // MUSIC
  // -----------------------------------------

  useEffect(() => {
    const audio = new Audio("/aura.mp3");

    audio.loop = true;
    audio.volume = 0.35;

    audioRef.current = audio;

    const startMusic = () => {
      audio.play().catch(() => { });

      window.removeEventListener(
        "click",
        startMusic
      );
    };

    audio.play().catch(() => { });

    window.addEventListener(
      "click",
      startMusic
    );

    return () => {
      audio.pause();

      window.removeEventListener(
        "click",
        startMusic
      );
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.muted = !audio.muted;

    setMuted(audio.muted);

    if (audio.paused) {
      audio.play().catch(() => { });
    }
  };

  // -----------------------------------------
  // CLOSE MOBILE
  // -----------------------------------------

  const handleMobileLink = (name) => {
    setActive(name);
    setOpen(false);
  };

  return (
    <header
      className="
        navbar
        fixed
        top-0
        left-0
        z-50
        w-full
        px-4
        pt-4
        md:px-6
      "
    >
      {/* =====================================
          MAIN NAVBAR
      ====================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          h-[68px]
          max-w-7xl
          items-center
          justify-between
          rounded-2xl
          border
          border-white/[0.08]
          
          px-5
          shadow-[0_10px_50px_rgba(0,0,0,0.25)]
          backdrop-blur-2xl
          md:px-7
        "
      >
        {/* -------------------------------------
            TOP LIGHT
        -------------------------------------- */}

        <div
          className="
            pointer-events-none
            absolute
            left-[8%]
            right-[8%]
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-cyan-400/40
            to-transparent
          "
        />

        {/* -------------------------------------
            LOGO
        -------------------------------------- */}

        <a
          href="#hero"
          className="
            nav-logo
            group
            relative
            flex
            items-center
            gap-2
          "
        >
          {/* Logo Mark */}

          <span
            className="
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              overflow-hidden
              rounded
              border
              border-cyan-400/20
              bg-cyan-400/[0.06]
              font-mono
              text-sm
              font-bold
              text-cyan-300
              shadow-[0_0_20px_rgba(34,211,238,0.08)]
            "
          >
            LCM

            <span
              className="
                absolute
                bottom-1
                right-1
                h-1.5
                w-1.5
                rounded-full
                bg-cyan-300
                shadow-[0_0_8px_rgba(34,211,238,1)]
              "
            />
          </span>

          {/* Name */}

          <span
            className="
              hidden
              text-sm
              font-semibold
              uppercase
              tracking-[0.16em]
              text-white
              sm:block
            "
          >
            Lal
            <span className="text-cyan-400">
              {" "}
              chand
            </span>
          </span>
        </a>

        {/* =====================================
            DESKTOP NAV
        ====================================== */}

        <nav
          className="
            hidden
            items-center
            gap-1
            md:flex
          "
        >
          {links.map((link) => {
            const isActive =
              active === link.name;

            return (
              <a
                key={link.name}
                href={link.path}
                data-cursor="NAV"
                className="
                  dt-link
                  group
                  relative
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  px-4
                  py-2.5
                  font-mono
                  text-[11px]
                  uppercase
                  tracking-[0.12em]
                  transition-all
                  duration-300
                "
              >
                {/* Number */}

                <span
                  className={`
                    text-[8px]
                    transition-colors
                    duration-300
                    ${isActive
                      ? "text-cyan-400"
                      : "text-white/20 group-hover:text-cyan-400/60"
                    }
                  `}
                >
                  {link.number}
                </span>

                {/* Name */}

                <span
                  className={`
                    transition-colors
                    duration-300
                    ${isActive
                      ? "text-white"
                      : "text-white/50 group-hover:text-white"
                    }
                  `}
                >
                  {link.name}
                </span>

                {/* Active Indicator */}

                <span
                  className={`
                    absolute
                    bottom-1
                    left-1/2
                    h-[2px]
                    -translate-x-1/2
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_10px_rgba(34,211,238,0.8)]
                    transition-all
                    duration-300
                    ${isActive
                      ? "w-5"
                      : "w-0 group-hover:w-3"
                    }
                  `}
                />
              </a>
            );
          })}
        </nav>

        {/* =====================================
            RIGHT CONTROLS
        ====================================== */}

        <div
          className="
            flex
            items-center
            gap-2
          "
        >
          {/* ---------------------------------
              MUSIC
          ---------------------------------- */}

          <button
            onClick={toggleMusic}
            data-cursor="SOUND"
            aria-label="Toggle music"
            className="
              group
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-white/[0.07]
              bg-white/[0.03]
              text-cyan-400
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:bg-cyan-400/[0.08]
            "
          >
            {muted ? (
              <FaVolumeMute className="text-sm" />
            ) : (
              <FaVolumeUp className="text-sm" />
            )}

            {/* Sound Bars */}

            {!muted && (
              <div
                className="
                  absolute
                  -bottom-1
                  left-1/2
                  flex
                  -translate-x-1/2
                  gap-[2px]
                "
              >
                <span className="h-1 w-[2px] animate-pulse rounded-full bg-cyan-400" />
                <span className="h-2 w-[2px] animate-pulse rounded-full bg-cyan-400 [animation-delay:150ms]" />
                <span className="h-1.5 w-[2px] animate-pulse rounded-full bg-cyan-400 [animation-delay:300ms]" />
              </div>
            )}
          </button>

          {/* ---------------------------------
              MOBILE MENU
          ---------------------------------- */}

          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="
              mb-btn
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-white/[0.07]
              bg-white/[0.03]
              text-xl
              text-white
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:bg-cyan-400/[0.08]
              md:hidden
            "
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* =====================================
          MOBILE MENU
      ====================================== */}

      <div
        ref={mobileMenuRef}
        className={`
          mx-auto
          mt-2
          max-w-7xl
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.07]
          bg-[#050810]/90
          backdrop-blur-2xl
          transition-all
          duration-500
          md:hidden
          ${open
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
          }
        `}
      >
        {/* Mobile Header */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/[0.06]
            px-6
            py-4
          "
        >
          <span
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-cyan-400/60
            "
          >
            Navigation
          </span>

          <span
            className="
              font-mono
              text-[9px]
              text-white/20
            "
          >
            05 / 05
          </span>
        </div>

        {/* Mobile Links */}

        <div className="flex flex-col p-2">
          {links.map((link) => {
            const isActive =
              active === link.name;

            return (
              <a
                key={link.name}
                href={link.path}
                data-cursor="NAV"
                onClick={() =>
                  handleMobileLink(link.name)
                }
                className="
                  nav-link
                  group
                  relative
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  px-5
                  py-4
                  transition-all
                  duration-300
                  hover:bg-cyan-400/[0.06]
                "
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`
                      font-mono
                      text-[9px]
                      ${isActive
                        ? "text-cyan-400"
                        : "text-white/20"
                      }
                    `}
                  >
                    {link.number}
                  </span>

                  <span
                    className={`
                      text-sm
                      ${isActive
                        ? "text-white"
                        : "text-white/50 group-hover:text-white"
                      }
                    `}
                  >
                    {link.name}
                  </span>
                </div>

                {/* Arrow */}

                <span
                  className="
                    translate-x-[-8px]
                    text-cyan-400
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                >
                  →
                </span>

                {/* Active Line */}

                <span
                  className={`
                    absolute
                    left-0
                    top-1/2
                    h-6
                    w-[2px]
                    -translate-y-1/2
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_10px_rgba(34,211,238,0.8)]
                    ${isActive
                      ? "opacity-100"
                      : "opacity-0"
                    }
                  `}
                />
              </a>
            )
          })}
        </div>
      </div>
    </header>
  );
}