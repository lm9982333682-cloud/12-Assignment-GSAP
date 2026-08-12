import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const achievementAnimation = () => {
  // Heading
  gsap.from(".achievements-heading", {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".achievements-heading",
      start: "top 80%",
      end:"top 40%",
      scrub:1,
    //  markers:true,
    },
  });

  // Cards
 gsap.fromTo(
  ".achievement-card",
  {
    opacity: 0,
    y: 80,
    scale: 0.9,
  },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".achievements-grid",
      start: "top 75%",
      end:"top 30%",
      scrub:1,
      //markers:true,

    },
  }
);



  // Award Icons
  gsap.from(".achievement-icon", {
    opacity: 0,
    rotate: -180,
    scale: 0,
    stagger: 0.2,
    duration: 0.6,
    ease: "back.out(2)",
    scrollTrigger: {
      trigger: ".achievements-grid",
      start: "top 45%",
      toggleActions: "play none none none",
    },
  });
};