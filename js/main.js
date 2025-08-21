const mySections = document.querySelectorAll("section");
const ulAs = document.querySelectorAll("ul a");

console.log(ulAs);

mySections.forEach((section) => {
  console.log(section.offsetTop);
});

window.addEventListener("scroll", (e) => {
  let offsetS1, offsetS2, offsetS3;
  let ofsets = [offsetS1, offsetS2, offsetS3];
  mySections.forEach((section, i) => {
    if (i) ofsets[i - 1] = section.offsetTop;
  });
  const resetAndAdd = (i) => {
    console.log(ulAs[i], i, offsetS1);
    document.querySelector(".on").classList.remove("on");
    ulAs[i].classList.add("on");
  };
  switch (true) {
    case window.scrollY + 100 < ofsets[0]:
      resetAndAdd(0);
      break;
    case window.scrollY + 100 < ofsets[1]:
      resetAndAdd(1);
      break;
    case window.scrollY + 100 < ofsets[2]:
      resetAndAdd(2);
      break;
    default:
      resetAndAdd(3);
      break;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  new Typed("#ab", {
    strings: [
      "Welcome! I'm Nima Firoozi - a young, ambitious frontend developer transforming ideas into beautiful, functional interfaces.",
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 3000,
    loop: true,
  });

  gsap.to(".pro", {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.2,
    stagger: 0.3,
    ease: "power3.out",
  });

  gsap.to("#ab", {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.7,
    stagger: 0.3,
    ease: "power3.out",
  });

  gsap.to("#About", {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.3,
    stagger: 0.3,
    ease: "power3.out",
  });

  gsap.to(".icon", {
    y: 0,
    duration: 2,
    stagger: 0.3,
    ease: "power3.out",
  });

  gsap.to(".ip", {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 1.5,
    stagger: 0.3,
    ease: "power3.out",
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".s2", {
    width: "100%",
    left: "0%",
    scrollTrigger: {
      duration: 0.6,
      trigger: "#ss2",
      start: "top bottom",
      end: "top 20%",
      scrub: true,
    },
    ease: "none",
  });

  gsap.to(".ski1", {
    translateX: "0%",
    scrollTrigger: {
      duration: 0.6,
      trigger: "#ss2",
      start: "top 40%",
      end: "top 20%",
      scrub: true,
    },
    ease: "none",
  });

  gsap.to(".ski2", {
    translateX: 0,
    scrollTrigger: {
      duration: 0.6,
      trigger: "#ss2",
      start: "top 60%",
      end: "top 20%",
      scrub: true,
    },
    ease: "none",
  });

  gsap.to(".ski3", {
    translateX: "0px",
    scrollTrigger: {
      duration: 0.6,
      trigger: "#ss2",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
    },
    ease: "none",
  });

  gsap.to(".ski4", {
    translateX: "0px",
    scrollTrigger: {
      duration: 0.6,
      trigger: "#ss2",
      start: "top bottom",
      end: "top 20%",
      scrub: true,
    },
    ease: "none",
  });

  gsap.to(".ski5", {
    translateX: "0%",
    scrollTrigger: {
      duration: 0.6,
      trigger: "#ss2",
      start: "top bottom",
      end: "top 20%",
      scrub: true,
    },
    ease: "none",
  });

  gsap.to(".ski6", {
    translateX: "0%",
    scrollTrigger: {
      duration: 0.6,
      trigger: "#ss2",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
    },
    ease: "none",
  });

  gsap.to(".ski7", {
    translateX: "0%",
    scrollTrigger: {
      duration: 0.6,
      trigger: "#ss2",
      start: "top 60%",
      end: "top 20%",
      scrub: true,
    },
    ease: "none",
  });

  gsap.to(".ski8", {
    translateX: "0%",
    scrollTrigger: {
      duration: 0.6,
      trigger: "#ss2",
      start: "top 40%",
      end: "top 20%",
      scrub: true,
    },
    ease: "none",
  });

  gsap.to(".ps2", {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      duration: 0.6,
      trigger: "#ss2",
      start: "top 33%",
      toggleActions: "play none none reverse",
    },
    ease: "power3.out",
  });

  gsap.to("#rnmz", {
    scale: 1,
    filter: "blur(0px)",
    scrollTrigger: {
      duration: 0.6,
      trigger: "#rnmz",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
    ease: "power3.out",
  });

  gsap.to("#Logic", {
    scale: 1,
    filter: "blur(0px)",
    scrollTrigger: {
      duration: 0.6,
      trigger: "#Logic",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
    ease: "power3.out",
  });

  gsap.to("#tailwind", {
    scale: 1,
    filter: "blur(0px)",
    scrollTrigger: {
      duration: 0.6,
      trigger: "#tailwind",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
    ease: "power3.out",
  });
  gsap.to(".w1", {
    scale: 1,
    filter: "blur(0px)",
    scrollTrigger: {
      duration: 0.6,
      trigger: ".w1",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
    ease: "power3.out",
  });

  gsap.to(".w2", {
    scale: 1,
    filter: "blur(0px)",
    scrollTrigger: {
      duration: 0.6,
      trigger: ".w2",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
    ease: "power3.out",
  });
  gsap.to(".w3", {
    scale: 1,
    filter: "blur(0px)",
    scrollTrigger: {
      duration: 0.6,
      trigger: ".w3",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
    ease: "power3.out",
  });
});
