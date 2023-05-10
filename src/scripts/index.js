const navWrapper = document.querySelector(".nav-wrapper");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNavigation = document.querySelector(".primary-navigation");

document.body.addEventListener("click", (e) => {
  if (
    !navWrapper.contains(e.target) &&
    navToggle.attributes[2].nodeValue === "true"
  ) {
    closeNav();
  }
});
navWrapper.addEventListener("click", (e) => {
  if (navToggle.attributes[2].nodeValue === "false") {
    showNav();
  } else {
    closeNav();
  }
});

const showNav = () => {
  navToggle.setAttribute("aria-expanded", true);
  primaryNavigation.toggleAttribute("opening");
  primaryNavigation.addEventListener(
    "animationend",
    () => {
      primaryNavigation.toggleAttribute("opened");
      primaryNavigation.toggleAttribute("opening");
    },
    { once: true }
  );
};

const closeNav = () => {
  primaryNavigation.toggleAttribute("closing");
  navToggle.setAttribute("aria-expanded", false);
  primaryNavigation.addEventListener(
    "animationend",
    () => {
      primaryNavigation.toggleAttribute("opened");
      primaryNavigation.toggleAttribute("closing");
    },
    { once: true }
  );
};

const contactMeButton = document.querySelector("#contact-me");
const modal = document.querySelector("#modal");
const closeModalButton = document.querySelector(".modal__close");
const mobileContactButton = document.querySelector(".button--mobile");

const closeModalAnimation = () => {
  modal.setAttribute("closing", "");

  modal.addEventListener(
    "animationend",
    () => {
      modal.removeAttribute("closing");
      modal.close();
    },
    { once: true }
  );
  document.body.style.overflow = "auto";
};

contactMeButton.addEventListener("click", () => {
  modal.showModal();
  document.body.style.overflow = "hidden";
});

mobileContactButton.addEventListener("click", () => {
  modal.showModal();
});

modal.addEventListener("click", (e) => {
  if (
    e.target === modal ||
    e.target.type === "submit" ||
    e.target === closeModalButton
  ) {
    closeModalAnimation();
    modal.close();
  }
});

/* This isn't consistant enough for me .... I'm not sure if it is just breaking when live server or fireFox disable's scroll anchoring due to many calls when resizing too frequently or I'm just doing something wrong.

  I think its due to how I am checking for the resize as this addEventlisenter is called a lot when the veiwport is resized.

*/

const tooltips = document.querySelectorAll(".tooltip");
const topHotspot = document.querySelector(".hotspot");
const container = document.querySelector(".hotspot-container");
window.addEventListener("load", () => {
  if (window.innerWidth <= 960) return;
  contentPosition();
});
window.addEventListener("resize", () => {
  if (window.innerWidth <= 960) return;
  contentPosition();
});

function contentPosition() {
  for (let i = 0; i < tooltips.length; i++) {
    const hotspot = tooltips[i].querySelector(".hotspot");
    const content = tooltips[i].querySelector(".tooltip__content");
    const pointer = tooltips[i].querySelector(".border-pointer");
    const bodyWidth = document.body.offsetWidth;
    if (bodyWidth >= 1103) {
      atLargeBody(hotspot, content, pointer);
    } else {
      atMediumBody(hotspot, content, pointer);
    }
  }
}

const atLargeBody = (hotspot, content, pointer) => {
  content.style.width = "400px";
  if (content.dataset.right === "true") {
    content.style.left = `${
      hotspot.offsetLeft + hotspot.offsetWidth + pointer.offsetWidth
    }px`;
    content.style.top = `${hotspot.offsetTop - content.offsetHeight / 2}px`;
    pointer.style.left = `-${pointer.offsetWidth}px`;
    pointer.style.transform = `translateY(${
      content.offsetHeight / 2
    }px) rotate(${-90}deg)`;
  } else {
    content.style.left =
      hotspot.offsetLeft - content.offsetWidth - pointer.offsetHeight + "px";
    content.style.top =
      hotspot.offsetTop +
      hotspot.offsetHeight +
      pointer.offsetHeight / 2 -
      content.offsetHeight / 2 +
      "px";
    pointer.style.left = `${content.offsetWidth}px`;
    pointer.style.top = `${
      hotspot.offsetTop -
      hotspot.offsetHeight -
      content.offsetHeight / 2 +
      pointer.offsetHeight
    }px`;
    pointer.style.transform = "rotate(90deg)";
  }
};

const atMediumBody = (hotspot, content, pointer) => {
  if (hotspot.closest(".tooltip").classList.contains("usmc")) {
    content.style.width = "350px";
    content.style.top = `${hotspot.offsetTop - content.offsetHeight / 2}px`;
    content.style.left = `${
      hotspot.offsetLeft + hotspot.offsetWidth + pointer.offsetHeight / 2
    }px`;
    pointer.style.left = `-${pointer.offsetWidth}px`;
    pointer.style.top = `${content.offsetHeight / 2}px`;
    pointer.style.transform = "rotate(-90deg)";
    return;
  }

  if (content.dataset.right === "true") {
    content.style.top = `${
      hotspot.offsetTop - content.offsetHeight - pointer.offsetHeight / 2
    }px`;
    content.style.left = `${hotspot.offsetLeft - content.offsetWidth / 4}px`;
    pointer.style.left = `${
      content.offsetWidth / 4 +
      hotspot.offsetWidth / 2 -
      pointer.offsetWidth / 2
    }px`;
    pointer.style.top = `${content.offsetHeight}px`;
    pointer.style.transform = "rotate(180deg)";
    return;
  }
  content.style.width = "300px";
  content.style.top = `${hotspot.offsetTop - content.offsetHeight / 1.6}px`;
  content.style.left = `-${
    content.offsetWidth - hotspot.offsetLeft + pointer.offsetWidth / 2
  }px`;
  pointer.style.left = `${
    content.offsetWidth + pointer.offsetWidth / 2 - hotspot.offsetWidth / 2
  }px`;
  pointer.style.top = `${content.offsetHeight / 1.6}px`;
  pointer.style.transform = "rotate(90deg)";
};

const aboutModalButton = document.querySelector(".button--current");

aboutModalButton.addEventListener("click", () => {
  modal.showModal();
});
// working on having tooltip say fully in veiw on scroll

// content.style.left = `${
//   hotspot.offsetLeft - content.offsetWidth - pointer.offsetWidth / 2
// }px`;
// content.style.top = `${hotspot.offsetTop}px`;
// pointer.style.left = `${content.offsetWidth}px`;
// pointer.style.transform = "translateY(5%) rotate(90deg)";

// Would love to use this but currently not sure if I can overcome the cursor acceleration I have an idea of how I might be able to but I need to do so testing and ask Schuster or someone else that is available.

/*
  1.split innerText
  2. add necessary random letter abouts the array matching the original names length;
  2.iterate through each letter
  3.send back one letter from original name on each iteration
*/
// const reveal = (target, dataAttrStr) => {
//   let iterations = 0;
//   const interval = setInterval(() => {
//     let innerTextResize = target.innerText.split("");

//     const randomLetter = String.fromCharCode(
//       Math.floor(Math.random() * (90 - 65) + 65) + 1
//     );

//     while (innerTextResize.length < target.dataset[dataAttrStr].length) {
//       innerTextResize.push(randomLetter);
//     }

//     target.innerText = innerTextResize
//       .map((letter, j) => {

//         if (target.dataset[dataAttrStr][j] === " ") {
//           return " ";
//         }

//         if (j < iterations) return target.dataset[dataAttrStr][j];

//         if (j > target.dataset[dataAttrStr].length - 1) {
//           return;
//         }

//         return String.fromCharCode(
//           Math.floor(Math.random() * (90 - 65) + 65) + 1
//         );
//       })
//       .join("");

//     if (iterations >= target.dataset[dataAttrStr].length) {
//       clearInterval(interval);
//     }

//     iterations++;
//   }, 40);
// };

// const nav = document.querySelector("nav");
// nav.onmouseover =  (e) => {
//     if (e.target.dataset.value !== undefined) reveal(e.target, "value");
//   };

// nav.onmouseout = (e) => {
//     if (e.target.dataset.original !== undefined) reveal(e.target, "original");
//   };
