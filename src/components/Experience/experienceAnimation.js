import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const experienceAnimation = () => {
  // Heading
  gsap.from(".experience-heading", {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".experience-heading",
      start: "top 80%",
      end:"top 40%",
      scrub:1,
      //markers:true,
    },
  });

  // Cards
gsap.fromTo(
  ".experience-card",
  {
    opacity: 0,
    x: -100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".experience-grid",
      start: "top 90%",
      end:"top 60%",
      scrub:1,
      //markers:true,
    },
  }
);

};