import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const skillsAnimation = () => {
  // Heading
  gsap.from(".skills-heading", {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".skills-heading",
      start: "top 80%",
      end:"top 50%",
      scrub:1,
     // markers:true,
      // toggleActions: "play none none none",
    },
  });

  // Skill Cards
  gsap.fromTo(
  ".skills-card-inner",
  {
    opacity: 0,
    y: 80,
    scale: 0.9,
  },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    stagger: 0.2,
    duration: 0.8,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".skills-grid",
      start: "top 80%",
      end: "top 40%",
      scrub: 1,
      //markers: true,
      // toggleActions: "play none none none",
    },
  }
);

  // Icons
  gsap.from(".skill-icon", {
    opacity: 0,
    scale: 0,
    rotate: -180,
    stagger: 0.05,
    duration: 0.6,
    ease: "back.out(2)",
    scrollTrigger: {
      trigger: ".skills-grid",
      start: "top 75%",
    },
  });

  // Floating Effect
  gsap.to(".skill-card", {
    y: -8,
    duration: 2,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    stagger: {
      each: 0.2,
      from: "random",
    },
  });
};