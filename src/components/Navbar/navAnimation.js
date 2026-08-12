import gsap from "gsap";

export const navbarAnimation = () => {
  const tl = gsap.timeline();

  // Navbar
  tl.from(".navbar", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  // Logo
  tl.from(
    ".nav-logo",
    {
      x: -50,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    },
    "<"
  );

  // Desktop Links only
tl.fromTo(
  ".dt-link",
  {
    y: -20,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.3,
    duration: 1,
    ease: "power3.out",
  },
  "<"
);

  //mobile menu btn
  tl.from(
    ".mb-btn",
    {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    },
    "<"
  );

  // Floating Effect
  gsap.to(".nav-logo", {
    y: -5,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
};

export const animateMobileLinks = (container) => {
  if (!container) return;

  const links = container.querySelectorAll(".nav-link");
  if (!links || links.length === 0) return;

  gsap.killTweensOf(links);
  gsap.from(links, {
    x: -20,
    opacity: 0,
    stagger: 0.4,
    duration: 0.45,
    ease: "power3.out",
  });
};


