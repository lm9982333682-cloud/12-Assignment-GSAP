import { stats } from "./aboutData";
import {
  FaFolderOpen,
  FaCode,
  FaGraduationCap,
  FaClock,
} from "react-icons/fa";

const icons = [
  <FaFolderOpen />,
  <FaCode />,
  <FaGraduationCap />,
  <FaClock />,
];

export default function Stats() {
  return (
    <div className="stat-card grid grid-cols-2 gap-6">

      {stats.map((stat, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-[#0B1220] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,.15)]"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Icon */}
          <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/10 text-2xl text-cyan-400">
            {icons[index]}
          </div>

          {/* Number */}
          <h3 className="relative z-10 mt-6 text-4xl font-extrabold text-white">
            {stat.number}
          </h3>

          {/* Title */}
          <p className="relative z-10 mt-2 text-lg font-semibold text-white">
            {stat.title}
          </p>
        </div>
      ))}

    </div>
  );
}