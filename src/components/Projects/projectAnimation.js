import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const projectAnimation = () => {
  // Heading
  gsap.fromTo(
  ".projects-heading",
  {
    y: 80,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".projects-heading",
      start: "top 70%",
      end: "top 40%",
      scrub: 1,
      //markers: true,
    },
  }
);

  // Cards
gsap.fromTo(
  ".project-card",
  {
    y: 100,
    opacity: 0,
    scale: 0.9,
  },
  {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".projects-grid",
      start: "top 75%",
     end:"top 30%",
      scrub:1,
     //markers:true,
    },
  }
);


};