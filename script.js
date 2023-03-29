let sectionCounter = document.querySelector(".service-number");
let counters = document.querySelectorAll(".count");
let speed = 500;

const isOpentext1 = document.getElementById("open-text1");
const isOpentext2 = document.getElementById("open-text2");
const isOpentext3 = document.getElementById("open-text3");

const rotageBtns1 = document.getElementById("rotage1");
const rotageBtns2 = document.getElementById("rotage2");
const rotageBtns3 = document.getElementById("rotage3");

const logo1 = document.getElementById("logo1");
const logo2 = document.getElementById("logo2");
const logo3 = document.getElementById("logo3");

let isRotated = true;

const gallery = document.querySelector(".gallery");
const filterButtons = document.querySelectorAll(".filter-button");

const galleryItems = document.querySelectorAll(".filter-button");

// Counter number
const CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    counters.forEach((counter, index) => {
      const updateCounter = () => {
        //   take number in html
        const targetNumber = +counter.dataset.target;

        const initialNumber = +counter.innerText;
        //   the speed value increase
        const increNum = targetNumber / speed;

        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + increNum);
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = targetNumber;
        }
      };
      updateCounter();
    });
    observer.unobserve(sectionCounter);
  },
  {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
  }
);
CounterObserver.observe(sectionCounter);

// RotageBtn

const rotateAndToggleText = (logo, text) => {
  logo.style.transform = isRotated ? "rotate(180deg)" : "rotate(0deg)";
  text.style.display = isRotated ? "block" : "none";
  isRotated = !isRotated;
};

rotageBtns1.addEventListener("click", () => {
  rotateAndToggleText(logo1, isOpentext1);
});

rotageBtns2.addEventListener("click", () => {
  rotateAndToggleText(logo2, isOpentext2);
});

rotageBtns3.addEventListener("click", () => {
  rotateAndToggleText(logo3, isOpentext3);
});

// FILTER WORK

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    gallery.querySelectorAll(".gallery-item").forEach((item) => {
      if (category === "all" || item.dataset.category === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

window.onload = function () {
  let elements = document.getElementsByClassName("fade-in");
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    element.style.animation = "fadeIn 1s ease-in-out";
  }
};

// Hover & focus select filter work

galleryItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    galleryItems.forEach((item) =>
      item.classList.remove("filter-button-active")
    );
    item.classList.add("filter-button-active");
  });

  item.addEventListener("mouseleave", () => {
    galleryItems.forEach((item) =>
      item.classList.remove("filter-button-active")
    );
    // item.classList.add("filter-button-active");
  });
  item.addEventListener("focus", () => {
    // galleryItems.forEach((item) => item.classList.remove("filter-button-active"));
    item.classList.add("filter-button-active");
  });
});

// Hidden and show
const hiddenElementsBottom = document.querySelectorAll(".hiddenBottom");
const hiddenElementsRight = document.querySelectorAll(".hiddenRight");
const hiddenElementsLeft = document.querySelectorAll(".hiddenLeft");

// const observer_bottom = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.add("showBottom");
//       observer_bottom.unobserve(entry.target);
//     } else {
//       entry.target.classList.remove("showBottom");
//     }
//   });
// });
// const observe_right = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("showRight");
//       observe_right.unobserve(entry.target);
//     } else {
//       entry.target.classList.remove("showRight");
//     }
//   });
// });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("hiddenBottom")) {
        entry.target.classList.add("showBottom");
      } else if (entry.target.classList.contains("hiddenRight")) {
        entry.target.classList.add("showRight");
      } else if (entry.target.classList.contains("hiddenLeft")) {
        entry.target.classList.add("showLeft");
      }
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove("showBottom");
      entry.target.classList.remove("showRight");
      entry.target.classList.remove("showLeft");
    }
  });
});

hiddenElementsRight.forEach((el) => {
  observer.observe(el);
});

hiddenElementsBottom.forEach((el) => {
  observer.observe(el);
});
hiddenElementsLeft.forEach((el) => {
  observer.observe(el);
});

///////////////////////////////SKILL - BAR///////////////////////////////
const skillBars = document.querySelectorAll(".skill-bar");

const options = {
  threshold: 0.5,
};

const observerScroll = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const percentage = entry.target.querySelector(".skill-percentage");
      const percentageNumber = entry.target.querySelector(
        ".skill-percentage-text"
      );
      console.log(percentage);
      percentage.style.width = percentageNumber.textContent;
    }
  });
}, options);

skillBars.forEach((skillBar) => {
  observerScroll.observe(skillBar);
});
