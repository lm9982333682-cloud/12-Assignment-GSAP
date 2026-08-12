import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import { useGSAP } from "@gsap/react";
import { footerAnimation } from "./footerAnimation";

const socials = [
  {
    id: "01",
    name: "GitHub",
    href: "https://github.com/lm9982333682-cloud",
    icon: <FaGithub />,
  },
  {
    id: "02",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lal-chand-meghwal-108336423/",
    icon: <FaLinkedin />,
  },
  {
    id: "03",
    name: "Instagram",
    href: "https://www.instagram.com/lal_chand1122/",
    icon: <FaInstagram />,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  useGSAP(() => {
    footerAnimation();
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer relative overflow-hidden border-t border-white/10 ">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

        {/* Glow */}
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[150px]" />

        {/* Side glow */}
        <div className="absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-purple-500/5 blur-[130px]" />

      </div>

      {/* ================= MAIN ================= */}

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

        {/* ================= TOP LABEL ================= */}

        <div className="footer-label mb-12 flex items-center gap-4">

          <span className="h-px w-10 bg-cyan-400 sm:w-16" />

          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-cyan-400 sm:text-xs">
            End of transmission
          </span>

          <span className="h-px flex-1 bg-white/10" />

        </div>

        {/* ================= BIG IDENTITY ================= */}

        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr]">

          {/* LEFT */}

          <div>

            <div className="footer-logo">

              <p className="mb-4 font-mono text-xs tracking-[0.3em] text-gray-500">
                DEVELOPER_ID / 001
              </p>

              <h2
                className="
                  text-[clamp(3.5rem,10vw,7rem)]
                  font-black
                  uppercase
                  leading-[0.78]
                  tracking-[-0.07em]
                  text-white
                "
              >
                <span className=" text-cyan-400" >LAL</span>CHAND 
                <span className=" gap-1 text-cyan-400 flex  ">
                  MEGHWAL<span className="text-white  rounded-full ">.</span>
                </span>
              </h2>

            </div>

            <p
              className="
                footer-desc
                mt-10
                max-w-xl
                text-sm
                leading-7
                text-gray-500
                sm:text-base
              "
            >
              Full Stack MERN Developer building scalable digital
              experiences with modern technologies, thoughtful UI
              and smooth interactions.
            </p>

          </div>

          {/* RIGHT */}

          <div className="flex flex-col justify-end">

            {/* Status */}

            <div
              className="
                footer-status
                mb-8
                flex
                items-center
                gap-3
                border
                border-white/10
                bg-white/[0.02]
                px-4
                py-3
                font-mono
                text-xs
              "
            >

              <span className="relative flex h-2.5 w-2.5">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />

              </span>

              <span className="text-gray-400">
                SYSTEM STATUS:
              </span>

              <span className="text-cyan-400">
                AVAILABLE
              </span>

            </div>

            {/* Contact */}

            <div className="space-y-4">

              <a
                href="mailto:lm1839811@gmail.com"
                className="
                  footer-contact
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  pb-4
                  transition-all
                  duration-300
                  hover:border-cyan-400/50
                "
              >

                <div className="flex items-center gap-4">

                  <FaEnvelope className="text-cyan-400" />

                  <span className="text-sm text-gray-400 transition-colors group-hover:text-white sm:text-base">
                    lm1839811@gmail.com
                  </span>

                </div>

                <span className="text-gray-600 transition-all group-hover:translate-x-1 group-hover:text-cyan-400">
                  →
                </span>

              </a>

              <a
                href="tel:+917627065028"
                className="
                  footer-contact
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  pb-4
                  transition-all
                  duration-300
                  hover:border-cyan-400/50
                "
              >

                <div className="flex items-center gap-4">

                  <FaPhoneAlt className="text-cyan-400" />

                  <span className="text-sm text-gray-400 transition-colors group-hover:text-white sm:text-base">
                    +91 76270 65028
                  </span>

                </div>

                <span className="text-gray-600 transition-all group-hover:translate-x-1 group-hover:text-cyan-400">
                  →
                </span>

              </a>

            </div>

          </div>

        </div>

        {/* ================= SOCIAL NETWORK ================= */}

        <div className="footer-social mt-20">

          <div className="mb-5 flex items-center justify-between">

            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-600 sm:text-xs">
              Network
            </p>

            <span className="font-mono text-[10px] text-gray-700">
              03 CHANNELS
            </span>

          </div>

          <div className="grid border-y border-white/10 sm:grid-cols-3">

            {socials.map((social) => (

              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="
                  footer-icon
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  px-4
                  py-5
                  transition-all
                  duration-300
                  hover:bg-cyan-400
                  sm:border-b-0
                  sm:border-r
                  sm:px-6
                  last:border-r-0
                "
              >

                <div className="flex items-center gap-4">

                  <span className="font-mono text-xs text-gray-600 transition-colors group-hover:text-black/60">
                    {social.id}
                  </span>

                  <span className="text-lg text-cyan-400 transition-colors group-hover:text-black">
                    {social.icon}
                  </span>

                  <span className="text-sm font-medium text-gray-300 transition-colors group-hover:text-black">
                    {social.name}
                  </span>

                </div>

                <span className="text-gray-600 transition-all group-hover:translate-x-1 group-hover:text-black">
                  ↗
                </span>

              </a>

            ))}

          </div>

        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className="
            footer-divider
            mt-10
            flex
            flex-col
            gap-6
            border-t
            border-white/10
            pt-7
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          {/* Copyright */}

          <div className="footer-copy">

            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-600 sm:text-xs">
              © {year  } Lal Chand Meghwal
            </p>

            <p className="mt-2 text-xs text-gray-700">
              Designed & developed with React + GSAP
            </p>

          </div>

          {/* Back Top */}

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
              scroll-top-btn
              group
              flex
              w-full
              items-center
              justify-between
              border
              border-white/10
              px-5
              py-3
              font-mono
              text-xs
              uppercase
              tracking-[0.2em]
              text-gray-500
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-cyan-400
              hover:text-black
              sm:w-auto
            "
          >

            <span>
              Return to top
            </span>

            <FaArrowUp className="ml-8 transition-transform duration-300 group-hover:-translate-y-1" />

          </button>

        </div>

      </div>

      {/* ================= EDGE LINE ================= */}

      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

    </footer>
  );
}