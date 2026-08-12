import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
   FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    icon: <FaGithub />,
    url: "https://github.com/lm9982333682-cloud",
    name: "GitHub",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/lal-chand-meghwal-108336423/",
    name: "LinkedIn",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    url: "https://www.instagram.com/lal_chand1122/",
    name: "Instagram",
  },
  {
    id: 4,
    icon: < FaPhoneAlt/>,
    url: "tel:+917627065028",
    name: "Mobile Number",
  },
  {
    id: 5,
    icon: <FaEnvelope/>,
    url: "mailto:lm1839811@gmail.com",
    name: "E-Mail",
  },
];

export default function SocialLinks() {
  return (
    <div
      className="
        social-links
        flex
        flex-wrap
        justify-center
        sm:justify-start
        gap-3
        sm:gap-4
        lg:gap-5
      "
    >
      {socialLinks.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          className="
            social-icon
            group
            flex
            h-12
            w-12
            sm:h-14
            sm:w-14
            lg:h-15
            lg:w-15
            items-center
            justify-center
            rounded-full
            border
            border-cyan-400/20
            bg-[#0B1220]
            text-xl
            sm:text-2xl
            lg:text-3xl
            text-cyan-400
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400
            hover:bg-cyan-400
            hover:text-black
            hover:shadow-[0_0_30px_rgba(34,211,238,.35)]
            active:scale-95
          "
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}