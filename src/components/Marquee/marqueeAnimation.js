import gsap from "gsap";

export const marqueeAnimation = () => {
  gsap.to(".marquee-track", {
    xPercent: -50,
    ease: "none",
    duration: 25,
    repeat: -1,
  });
};