import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import { education } from "./aboutData";

export default function Education() {
  return (
    <div id="edu">
      {/* Heading */}
      <div className="mb-8">
        <h3 className=" education text-3xl sm:text-3xl lg:text-4xl font-bold text-white">
          Education
        </h3>

        <div className="mt-4 h-1 w-20 rounded-full bg-cyan-400" />
      </div>

      {/* Cards */}
      <div className="education-list space-y-6">
        {education.map((item, index) => (
          <div
            key={index}
            className="group education-card edu relative overflow-hidden rounded-2xl border border-cyan-400/10  p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,.15)]"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex gap-5">
              {/* Icon */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                <FaGraduationCap size={24} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-white">
                  {item.degree}
                </h4>

                <p className="mt-1 text-cyan-400">
                  {item.college}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    <span>{item.year}</span>
                  </div>

                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 font-medium text-cyan-400">
                    {item.score}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}