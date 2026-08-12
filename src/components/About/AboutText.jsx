import { FaLocationDot } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { personalInfo } from "./aboutData";

export default function AboutText() {
  return (
    <div className=" space-y-8">

      {/* Heading */}
      <div>
        <h3 className="about-text text-3xl lg:text-4xl font-bold text-white leading-tight">
          {personalInfo.role}
        </h3>

        <div className="w-20 h-1 bg-cyan-400 rounded-full mt-4" />
      </div>

      {/* Description */}
      <div className="about-description space-y-5">

        {personalInfo.description.map((paragraph, index) => (
          <p
            key={index}
            className="about-para text-gray-400 leading-8 text-lg"
          >
            {paragraph}
          </p>
        ))}

      </div>

      {/* Information Cards */}
      <div className="about-grid grid sm:grid-cols-2 gap-5" >

        {/* Location */}

        <div className="about-card flex items-center gap-4 rounded-xl border border-cyan-400/10 bg-[#0B1220] p-5 transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
            <FaLocationDot size={22} />
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Location
            </p>

            <h4 className="font-semibold text-white">
              {personalInfo.location}
            </h4>
          </div>

        </div>

        {/* Availability */}

        <div className="about-card flex items-center gap-4 rounded-xl border border-cyan-400/10 bg-[#0B1220] p-5 transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
            <MdWork size={22} />
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Status
            </p>

            <h4 className="font-semibold text-white">
              {personalInfo.availability}
            </h4>
          </div>

        </div>

      </div>
    </div>
  );
}