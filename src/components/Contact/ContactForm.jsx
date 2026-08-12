
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("I not integrated backend so call or mail me 😅!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        contact-form
        relative
        w-full
      "
    >

      {/* =====================================================
          FORM HEADER
      ====================================================== */}

      <div
        className="
          mb-8
          border-b
          border-white/[0.06]
          pb-6
        "
      >

        <div className="flex items-center justify-between">

          <div>

            <p
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-cyan-400/40
              "
            >
              Transmission Protocol
            </p>

            <h3
              className="
                mt-2
                text-2xl
                font-bold
                tracking-tight
                text-white

                sm:text-3xl
              "
            >
              Send a Message
            </h3>

          </div>


          {/* Status */}

          <div
            className="
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
                animate-pulse
                rounded-full
                bg-cyan-400
                shadow-[0_0_10px_rgba(34,211,238,.7)]
              "
            />

            <span
              className="
                font-mono
                text-[7px]
                uppercase
                tracking-[0.2em]
                text-cyan-400/40
              "
            >
              Ready
            </span>

          </div>

        </div>


        <p
          className="
            mt-3
            max-w-lg
            text-sm
            leading-7
            text-white/30
          "
        >
          Introduce yourself, share your idea, or tell me
          what you would like to build together.
        </p>

      </div>


      {/* =====================================================
          FORM FIELDS
      ====================================================== */}

      <div className="space-y-5">


        {/* =================================================
            NAME
        ================================================== */}

        <div className="form-field group">

          <div className="mb-2 flex items-center justify-between">

            <label
              htmlFor="name"
              className="
                flex
                items-center
                gap-2
                font-mono
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-white/25
              "
            >
              <span className="text-cyan-400/40">
                01
              </span>

              Identity
            </label>

            <span
              className="
                text-[8px]
                text-white/10
              "
            >
              REQUIRED
            </span>

          </div>


          <div className="relative">

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name..."
              value={formData.name}
              onChange={handleChange}
              required
              className="
                w-full
                border
                border-white/[0.07]
                bg-white/[0.015]

                px-4
                py-4

                text-sm
                text-white

                placeholder:text-white/15

                outline-none

                transition-all
                duration-300

                focus:border-cyan-400/40
                focus:bg-cyan-400/[0.025]
                focus:shadow-[inset_0_0_30px_rgba(34,211,238,.025)]
              "
            />

            <span
              className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                h-px
                w-0
                bg-cyan-400
                transition-all
                duration-500

                group-focus-within:w-full
              "
            />

          </div>

        </div>


        {/* =================================================
            EMAIL
        ================================================== */}

        <div className="form-field group">

          <div className="mb-2 flex items-center justify-between">

            <label
              htmlFor="email"
              className="
                flex
                items-center
                gap-2
                font-mono
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-white/25
              "
            >
              <span className="text-cyan-400/40">
                02
              </span>

              Communication ID
            </label>

            <span
              className="
                text-[8px]
                text-white/10
              "
            >
              REQUIRED
            </span>

          </div>


          <div className="relative">

            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="
                w-full
                border
                border-white/[0.07]
                bg-white/[0.015]

                px-4
                py-4

                text-sm
                text-white

                placeholder:text-white/15

                outline-none

                transition-all
                duration-300

                focus:border-cyan-400/40
                focus:bg-cyan-400/[0.025]
              "
            />

            <span
              className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                h-px
                w-0
                bg-cyan-400
                transition-all
                duration-500

                group-focus-within:w-full
              "
            />

          </div>

        </div>


        {/* =================================================
            SUBJECT
        ================================================== */}

        <div className="form-field group">

          <div className="mb-2 flex items-center justify-between">

            <label
              htmlFor="subject"
              className="
                flex
                items-center
                gap-2
                font-mono
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-white/25
              "
            >
              <span className="text-cyan-400/40">
                03
              </span>

              Transmission Subject
            </label>

            <span
              className="
                text-[8px]
                text-white/10
              "
            >
              REQUIRED
            </span>

          </div>


          <div className="relative">

            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="What would you like to discuss?"
              value={formData.subject}
              onChange={handleChange}
              required
              className="
                w-full
                border
                border-white/[0.07]
                bg-white/[0.015]

                px-4
                py-4

                text-sm
                text-white

                placeholder:text-white/15

                outline-none

                transition-all
                duration-300

                focus:border-cyan-400/40
                focus:bg-cyan-400/[0.025]
              "
            />

            <span
              className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                h-px
                w-0
                bg-cyan-400
                transition-all
                duration-500

                group-focus-within:w-full
              "
            />

          </div>

        </div>


        {/* =================================================
            MESSAGE
        ================================================== */}

        <div className="form-field group">

          <div className="mb-2 flex items-center justify-between">

            <label
              htmlFor="message"
              className="
                flex
                items-center
                gap-2
                font-mono
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-white/25
              "
            >
              <span className="text-cyan-400/40">
                04
              </span>

              Message Payload
            </label>


            <span
              className="
                font-mono
                text-[8px]
                text-white/15
              "
            >
              {formData.message.length}/1000
            </span>

          </div>


          <div className="relative">

            <textarea
              id="message"
              name="message"
              rows="6"
              maxLength="1000"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              className="
                w-full
                resize-none

                border
                border-white/[0.07]

                bg-white/[0.015]

                px-4
                py-4

                text-sm
                leading-7
                text-white

                placeholder:text-white/15

                outline-none

                transition-all
                duration-300

                focus:border-cyan-400/40
                focus:bg-cyan-400/[0.025]
              "
            />

            <span
              className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                h-px
                w-0
                bg-cyan-400
                transition-all
                duration-500

                group-focus-within:w-full
              "
            />

          </div>

        </div>


        {/* =================================================
            SUBMIT
        ================================================== */}

        <button
          type="submit"
          className="
            submit-btn
            group
            relative
            mt-3
            flex
            w-full
            items-center
            justify-between
            overflow-hidden

            border
            border-cyan-400/30

            bg-cyan-400/[0.06]

            px-5
            py-4

            text-cyan-400

            transition-all
            duration-500

            hover:border-cyan-400
            hover:bg-cyan-400
            hover:text-black

            active:scale-[0.98]
          "
        >

          {/* Button glow */}

          <span
            className="
              pointer-events-none
              absolute
              inset-0
              -translate-x-full
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent

              transition-transform
              duration-700

              group-hover:translate-x-full
            "
          />


          <span
            className="
              relative
              z-10
              font-mono
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
            "
          >
            Initialize Transmission
          </span>


          <span
            className="
              relative
              z-10
              flex
              h-9
              w-9
              items-center
              justify-center

              border
              border-cyan-400/20

              transition-all
              duration-300

              group-hover:border-black/20
            "
          >

            <FaPaperPlane
              className="
                text-sm
                transition-transform
                duration-300

                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />

          </span>

        </button>

      </div>


      {/* =====================================================
          SECURITY STATUS
      ====================================================== */}

      <div
        className="
          mt-6
          flex
          items-center
          justify-between
          border-t
          border-white/[0.05]
          pt-4
        "
      >

        <div className="flex items-center gap-2">

          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-cyan-400/60
            "
          />

          <span
            className="
              font-mono
              text-[7px]
              uppercase
              tracking-[0.2em]
              text-white/15
            "
          >
            Channel Ready
          </span>

        </div>


        <span
          className="
            font-mono
            text-[7px]
            uppercase
            tracking-[0.2em]
            text-white/10
          "
        >
          Awaiting Input
        </span>

      </div>

    </form>
  );
}