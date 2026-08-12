import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { useGSAP } from "@gsap/react";
import { contactAnimation } from "./contactAnimations";
import StringLine from "../StringLine/StringLine";
import "./glitch.css";

export default function Contact() {
  useGSAP(() => {
    contactAnimation();
  });

  return (
    <section
      id="contact"
      className="
        contact-section
        relative
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
          h-96
          w-96
          rounded-full
          bg-cyan-400/[0.035]
          blur-[140px]
          
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-20
          h-96
          w-96
          rounded-full
          bg-violet-500/[0.035]
          blur-[140px]
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
          opacity-[0.018]
          [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
          [background-size:70px_70px]
         
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
            contact-heading
            mb-14
            text-center

            sm:mb-16
            lg:mb-20
          "
        >

          {/* System Label */}

          <div
            className="
              mx-auto
              mb-6
              flex
              w-fit
              items-center
              gap-3
              border
              border-cyan-400/10
              bg-cyan-400/[0.02]
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
                shadow-[0_0_12px_rgba(34,211,238,.8)]
              "
            />

            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.35em]
                text-cyan-400/50
              "
            >
              Communication Terminal
            </span>

          </div>


          {/* Small Heading */}

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
            Contact
          </p>


          {/* Main Heading */}

          <h2
            className="
              glitch
              mt-5
              font-black
              leading-[0.95]
              tracking-tight
              text-white
              text-4xl

              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
            data-text="Let's Work Together"
          >
            Let's Work{" "}
            <span className="text-cyan-400">
              Together
            </span>
          </h2>


          {/* Decorative Line */}

          <div className="mt-8">
            <StringLine />
          </div>


          {/* Description */}

          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-sm
              leading-7
              text-white/35

              sm:text-base
              sm:leading-8
            "
          >
            Have a project in mind, an opportunity to discuss,
            or simply want to connect? Open a communication channel
            and let's build something meaningful.
          </p>

        </div>


        {/* =================================================
            TERMINAL FRAME
        ================================================== */}

        <div
          className="
            contact-container
            relative

            border
            border-white/[0.07]

            

            shadow-[0_30px_100px_rgba(0,0,0,.35)]
          "
        >

          {/* Top terminal bar */}

          <div
            className="
              flex
              items-center
              justify-between

              border-b
              border-white/[0.06]

              px-5
              py-3

              sm:px-6
            "
          >

            {/* Window dots */}

            <div className="flex items-center gap-2">

              <span className="h-2 w-2 rounded-full bg-white/10" />
              <span className="h-2 w-2 rounded-full bg-white/10" />
              <span className="h-2 w-2 rounded-full bg-cyan-400/40" />

            </div>


            {/* Terminal title */}

            <span
              className="
                font-mono
                text-[7px]
                uppercase
                tracking-[0.35em]
                text-white/15
              "
            >
              connection://portfolio/contact
            </span>


            {/* Status */}

            <div
              className="
                flex
                items-center
                gap-2
                font-mono
                text-[7px]
                uppercase
                tracking-[0.2em]
                text-cyan-400/40
              "
            >

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_8px_rgba(34,211,238,.7)]
                "
              />

              Online

            </div>

          </div>


          {/* =================================================
              CONTENT
          ================================================== */}

          <div
            className="
              grid

              lg:grid-cols-[0.8fr_1.2fr]
            "
          >

            {/* =================================================
                LEFT — CONTACT INFO
            ================================================== */}

            <div
              className="
                border-b
                border-white/[0.06]

                p-6

                sm:p-8

                lg:border-b-0
                lg:border-r
                lg:p-10
                xl:p-12
              "
            >

              <div
                className="
                  mb-8
                  flex
                  items-center
                  justify-between
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
                  Incoming Channel
                </span>

                <span
                  className="
                    font-mono
                    text-[8px]
                    text-cyan-400/30
                  "
                >
                  01
                </span>

              </div>


              <ContactInfo />

            </div>


            {/* =================================================
                RIGHT — FORM
            ================================================== */}

            <div
              className="
                relative
                p-6

                sm:p-8

                lg:p-10
                xl:p-12
              "
            >

              {/* Form label */}

              <div
                className="
                  mb-8
                  flex
                  items-center
                  justify-between
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
                  Send Transmission
                </span>

                <span
                  className="
                    font-mono
                    text-[8px]
                    text-cyan-400/30
                  "
                >
                  02
                </span>

              </div>


              <ContactForm />


              {/* Bottom status */}

              <div
                className="
                  mt-8
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
                    tracking-[0.25em]
                    text-white/10
                  "
                >
                  End-to-end communication
                </span>


                <div className="flex items-center gap-1">

                  <span className="h-1 w-1 bg-cyan-400/60" />
                  <span className="h-1 w-1 bg-cyan-400/30" />
                  <span className="h-1 w-1 bg-cyan-400/10" />

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            FOOTER STATUS
        ================================================== */}

        <div
          className="
            mt-6
            flex
            flex-col
            gap-3

            sm:flex-row
            sm:items-center
            sm:justify-between
            
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
            Portfolio communication node / active
          </span>


          <span
            className="
              font-mono
              text-[7px]
              uppercase
              tracking-[0.2em]
              text-cyan-400/20
            "
          >
            Awaiting transmission...
          </span>

        </div>

      </div>

    </section>
  );
}
