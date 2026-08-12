import gsap from "gsap";

export const heroAnimation = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  // Initial State
  gsap.set(".hero-tag", {
    y: 30,
    opacity: 0,
  });

  gsap.set(".hero-line", {
    y: 120,
    opacity: 0,
  });

  gsap.set(".hero-role", {
    y: 30,
    opacity: 0,
  });

  gsap.set(".hero-desc", {
    y: 30,
    opacity: 0,
  });

  gsap.set(".hero-buttons", {
    y: 30,
    opacity: 0,
  });

  gsap.set(".hero-social", {
    y: 30,
    opacity: 0,
  });

  gsap.set(".hero-image", {
    scale: 0.2,
    opacity: 0,
    rotate: -15,
  });

  gsap.set(".floating-badge", {
    opacity: 0,
    y: 20,
  });

  // Timeline
  tl.to(".hero-tag", {
    opacity: 1,
    y: 0,
    duration: 0.6,
  }, ">")

    .to(
      ".hero-line",
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.9,
      },
      "-=0.2"
    )

    .to(
      ".hero-role",
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      "-=0.4"
    )

    .to(
      ".hero-desc",
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      "-=0.3"
    )

    .to(
      ".hero-buttons",
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      },
      "-=0.3"
    )

    .to(
      ".hero-social",
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      },
      "-=0.3"
    )

    .to(
      ".hero-image",
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 1,
      },
      "-=1.2",

    )

    .to(
      ".floating-badge",
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.6,
      },
      "-=0.5"
    );

  // Continuous Rotation
  gsap.to(".rotate-ring", {
    rotate: 360,
    duration: 18,
    ease: "none",
    repeat: -1,
  });

  // Floating Badges
  gsap.to(".badge-1", {
    y: -12,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(".badge-2", {
    y: 12,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(".badge-3", {
    y: -8,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  // Mouse Parallax
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 25;
    const y = (e.clientY / window.innerHeight - 0.5) * 25;

    gsap.to(".floating-badge", {
      x: x,
      y: y,
      duration: 1,
      ease: "power3.out",
    });
  });
};