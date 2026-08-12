import gsap from "gsap";

export const loaderAnimation = () => {
  const tl = gsap.timeline();

  tl.from(".loader-logo", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
  });

  tl.from(
    ".loader-text",
    {
      y: 20,
      opacity: 0,
      duration: 0.6,
    },
    "-=0.5"
  );

  tl.fromTo(
    ".loader-bar",
    {
      scaleX: 0,
    },
    {
      scaleX: 1,
      duration: 4,
      ease: "power2.inOut",
    }
  );

  tl.to(".loader", {
    opacity: 0,
    duration: 0.6,
    delay: 0.2,
    pointerEvents: "none",
  });
};