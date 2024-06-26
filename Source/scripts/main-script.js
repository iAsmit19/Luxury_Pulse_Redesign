// Cursor
const cursor = document.querySelector(".cursor");

// Loader
const loader = document.querySelector(".loader");
const starContainer = document.querySelector(".stars-container");
const shootingStar = document.querySelectorAll(".shooting-star");
const numberOfStars = 30;
const loaderTitlePlace_1 = document.querySelector(".loader-title-1");
const loaderTitlePlace_2 = document.querySelector(".loader-title-2");
const loaderTitlePlace_3 = document.querySelector(".loader-title-3");

// Root
const root = document.querySelector(".root");

const theCursor = () => {
  gsap.to(cursor, {
    rotate: 360,
    duration: 2.5,
    repeat: -1,
    ease: "linear",
  });
  document.addEventListener("mousemove", (event) => {
    gsap.to(cursor, {
      display: "block",
      // top: 0,
      left: 0
    })
    gsap.to(cursor, {
      x: event.pageX,
      y: event.pageY,
      ease: "linear",
    });
  });
};

const starsLogic = () => {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  starContainer.appendChild(star);

  gsap.to(star, {
    duration: Math.random() * 2 + 1,
    opacity: 1,
    scale: Math.random() + 1,
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
    ease: "power2.inOut",
    onStart: () => {
      gsap.to(star, {
        duration: Math.random() * 0.5 + 0.5,
        rotation: Math.random() * 360,
        repeat: -1,
        ease: "power4.inOut",
      });
    },
  });
};

const createStars = () => {
  for (let i = 0; i < numberOfStars; i++) {
    starsLogic();
  }
};

const shootingStarAnimation = () => {
  let starNumber = () => {
    return Math.floor(Math.random() * 10) + 10;
  };
  let starStagger = () => {
    return Math.floor(Math.random() * 5) + 1;
  };

  gsap.to(shootingStar, {
    height: "40px",
    x: 1000,
    y: 1000,
    opacity: 1,
    ease: "power4.in",
    filter: "blur(2px)",
    duration: 2,
    delay: 1,
    repeat: -1,
    repeatDelay: starNumber(),
    stagger: starStagger(),
  });
};

const loaderTextLogic = () => {
  // let loaderText_1 = "LUXURY PULSE";
  let loaderText_1 = "Luxury Pulse";
  let loaderTextArray_1 = loaderText_1.split("");

  loaderTextArray_1.forEach((element) => {
    let loaderTextSpan_1 = document.createElement("span");
    loaderTextSpan_1.innerHTML = element;
    loaderTextSpan_1.classList.add("loader-text-span-1");
    loaderTitlePlace_1.appendChild(loaderTextSpan_1);
  });

  // let loaderText_2 = "THE LUXURIOUS MARKETPLACE";
  let loaderText_2 = "The Luxurious Marketplace";
  let loaderTextArray_2 = loaderText_2.split("");

  loaderTextArray_2.forEach((element) => {
    let loaderTextSpan_2 = document.createElement("span");
    loaderTextSpan_2.innerHTML = element;
    loaderTextSpan_2.classList.add("loader-text-span-2");
    loaderTitlePlace_2.appendChild(loaderTextSpan_2);
  });

  // let loaderText_3 = "";
  // let loaderTextArray_3 = loaderText_3.split("");

  // loaderTextArray_3.forEach((element) => {
  //   let loaderTextSpan_3 = document.createElement("span");
  //   loaderTextSpan_3.innerHTML = element;
  //   loaderTextSpan_3.classList.add("loader-text-span-3");
  //   loaderTitlePlace_3.appendChild(loaderTextSpan_3);
  // });
};

const loaderAnimation = () => {
  let loaderSpans_1 = Array.from(
    document.querySelectorAll(".loader-text-span-1")
  );
  loaderSpans_1.sort(() => Math.random() - 0.5);

  let loaderSpans_2 = Array.from(
    document.querySelectorAll(".loader-text-span-2")
  );
  loaderSpans_2.sort(() => Math.random() - 0.5);

  // let loaderSpans_3 = Array.from(
  //   document.querySelectorAll(".loader-text-span-3")
  // );
  // loaderSpans_3.sort(() => Math.random() - 0.5);

  let timeline = gsap.timeline();
  timeline.to(loaderSpans_1, {
    delay: 0.5,
    opacity: 1,
    stagger: 0.05,
    filter: "blur(0px)",
  });
  timeline.to(loaderSpans_1, {
    opacity: 0,
    duration: 0.5,
    stagger: 0.05,
    ease: "power4.inOut",
  });
  timeline.to(loaderSpans_2, {
    opacity: 1,
    stagger: 0.05,
    filter: "blur(0px)",
  });
  timeline.to(loaderSpans_2, {
    opacity: 0,
    duration: 0.5,
    stagger: 0.05,
    ease: "power4.inOut",
  });
  // timeline.to(loaderSpans_3, {
  //   opacity: 1,
  //   stagger: 0.05,
  //   filter: "blur(0px)",
  // });
  // timeline.to(loaderSpans_3, {
  //   opacity: 0,
  //   duration: 0.5,
  //   stagger: 0.05,
  //   ease: "power4.inOut",
  // });
  timeline.to(loader, {
    // y: "-200%",
    opacity: 0,
    display: "none",
    duration: 2,
    ease: "power4.inOut",
  });
};

const theLoader = () => {
  createStars();
  shootingStarAnimation();
  loaderTextLogic();
  loaderAnimation();
};

const EXECUTIONER = () => {
  theLoader();
  theCursor();
};

EXECUTIONER();
