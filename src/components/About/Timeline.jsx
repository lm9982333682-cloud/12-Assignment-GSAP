import { timeline } from "./aboutData";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const iconMap = {
  education: <FaGraduationCap />,
  internship: <FaBriefcase />,
  project: <FaCode />,
  career: <FaRocket />,
};

export default function Timeline() {
  return (
    <section className="mt-24">
      {/* Heading */}

      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-white">
          My <span className="text-cyan-400">Journey</span>
        </h2>

        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-cyan-400" />
      </div>

      <div className="relative mx-auto max-w-4xl">

        {/* Vertical Line */}

        <div className="timeline absolute left-6 top-0 h-full w-[2px] bg-cyan-400/20" />

        <div className="space-y-10">

          {timeline.map((item, index) => (
            <div key={index} className="timeline-item relative pl-20">

              {/* Icon */}

              <div className="absolute left-0 top-2 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/20 bg-[#0B1220] text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,.15)]">
                {iconMap[item.type]}
              </div>

              {/* Card */}

              <div className="rounded-2xl border border-cyan-400/10 bg-[#0B1220] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,.15)]">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="text-cyan-400 mt-1">
                      {item.organization}
                    </p>
                  </div>

                  <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400">
                    {item.year}
                  </span>

                </div>

                <p className="mt-5 leading-7 text-gray-400">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}