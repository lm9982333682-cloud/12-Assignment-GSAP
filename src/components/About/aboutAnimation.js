import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const aboutAnimation = () => {

  gsap.from(".about-heading", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#about",
      start: "top 60%",
      end:"top 0%",
      //toggleActions: "play none none reverse",
scrub:1,
      //markers:true
    },
  });

  gsap.from(".about-text", {
    x: -60,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-text",
      start: "top 85%",
      scrub:1,
      // toggleActions: "play none none reverse",
     // markers:true,
    },
  });

  gsap.from(".about-para", {
    x: -40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-description",
      start: "top 75%",
      end:"top 30%",
      //toggleActions: "play none none reverse",
      scrub:1,  
     // markers:true,
    },
  });

  gsap.fromTo(
  ".about-card",
  {
    y: 40,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.7,
    stagger: 0.2,
    ease: "back.out(1.6)",
    scrollTrigger: {
      trigger: ".about-grid",
      start: "top 80%",
      end:"top 70%",
      scrub:1,
           // markers:true,
      // toggleActions: "play none none reverse",
    },
  }
);

  gsap.from(".education", {
    x: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".education",
      start: "top 85%",
      end:"top 35%",
      scrub:1,
           // markers:true,
      // toggleActions: "play none none reverse",
    },
  });

  gsap.fromTo(
  ".education-card",
  {
    x: 80,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.25,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".education-list",
      start: "top 80%",
      //toggleActions: "play none none reverse",
        end:"top 35%",
      scrub:1,
           //markers:true,
    },
  }
);
};