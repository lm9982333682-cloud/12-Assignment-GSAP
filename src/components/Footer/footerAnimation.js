import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const footerAnimation = () => {
  // Footer Section
  gsap.from(".footer", {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".footer",
      start: "top 90%",
    },
  });

  // Logo
  gsap.from(".footer-logo", {
    opacity: 0,
    y: -50,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer",
      start: "top 90%",
        end:"top 55%",
      scrub:1,
      //markers:true,
    },
  });

  // Description
  gsap.from(".footer-desc", {
    opacity: 0,
    y: 25,
    duration: 0.8,
    delay: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer",
      start: "top 90%",
        end:"top 50%",
      scrub:1,
      //markers:true,
    },
  });

  // Social Icons
 gsap.fromTo(
  ".footer-icon",
  {
    opacity: 0,
    scale: 0,
    rotate: -180,
  },
  {
    opacity: 1,
    scale: 1,
    rotate: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: "back.out(2)",
    scrollTrigger: {
      trigger: ".footer-social",
      start: "top 90%",
        end:"top 80%",
      scrub:1,
      //markers:true,
    },
  }
);


  // Copyright
// gsap.fromTo(
//   ".footer-copy",
//   {
//     opacity: 0,
//     y: 20,
//   },
//   {
//     opacity: 1,
//     y: 0,
//     duration: 0.6,
//     ease: "power2.out",
//     scrollTrigger: {
//       trigger: ".footer-copy",
//       start: "top 100%",
//       end: "top 95%",
//       scrub: 1,
//       //markers: true,
//     },
//   }
// );

  // Scroll Button
//  gsap.fromTo(
//   ".scroll-top-btn",
//   {
//     opacity: 0,
//     scale: 0,
//     rotate: 180,
//   },
//   {
//     opacity: 1,
//     scale: 1,
//     rotate: 0,
//     duration: 0.6,
//     ease: "back.out(2)",
//     scrollTrigger: {
//       trigger: ".scroll-top-btn",
//       start: "top 95%",
//     },
//   }
// );
};