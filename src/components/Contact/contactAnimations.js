import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const contactAnimation = () => {
  // Section Heading
  gsap.from(".contact-heading", {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".contact-heading",
      start: "top 80%",
      end:"top 40%",
      scrub:1,
     // markers:true,
    },
  });
 

  // Form
  gsap.from(".contact-form", {
    opacity: 0,
    x: 80,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-container",
      start: "top 75%",
      end:"top 30%",
      scrub:1,
     // markers:true,
    },
  });


  // Social Icons
gsap.fromTo(
  ".social-icon",
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
    duration: 0.6,
    ease: "back.out(2)",
    scrollTrigger: {
      trigger: ".social-links",
      start: "top 85%",
      end:"top 60%",
      scrub:1,
      //markers:true,
    },
  }
);
  // Form Fields
 gsap.fromTo(
  ".form-field",
  {
    opacity: 0,
    y: 40,
  },
  {
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact-form",
      start: "top 80%",
      end:"top 20%",
      scrub:1,
     // markers:true,
    },
  }
);
  

// Glitch Heading
const glitchTl = gsap.timeline({
  repeat: -1,
  repeatDelay: 2.5,
});

glitchTl
  .to(".glitch", {
    x: -3,
    duration: 0.03,
  })
  .to(".glitch", {
    x: 3,
    duration: 0.03,
  })
  .to(".glitch", {
    x: -2,
    duration: 0.03,
  })
  .to(".glitch", {
    x: 2,
    duration: 0.03,
  })
  .to(".glitch", {
    x: 0,
    duration: 0.05,
  });
  
};