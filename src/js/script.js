///////////////////////////////////////////
//////////////Section2 Slider//////////////
///////////////////////////////////////////
const allSlides = document.querySelectorAll(".section2-one-slide");
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");

let currentSLide = 0;
nextBtn.addEventListener("click", () => {
  if (currentSLide < 3) {
    currentSLide++;
  }
  displayCurrentSLide();
});
prevBtn.addEventListener("click", () => {
  if (currentSLide > 0) {
    currentSLide--;
  }
  displayCurrentSLide();
});

const displayCurrentSLide = () => {
  if (currentSLide === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }
  if (currentSLide === 3) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
  allSlides.forEach((ele) => {
    ele.style.display = "none";
  });
  allSlides[currentSLide].style.display = "flex";
};
displayCurrentSLide();
/////////////////////////////////////////

///////////////////////////////////////////
//////////////Section3 Slider//////////////
///////////////////////////////////////////
const sliderContainer = document.querySelector(".section5-slider-container");
const nextBtn2 = document.querySelector("#next-btn-section5");
const prevBtn2 = document.querySelector("#prev-btn-section5");

let slideIndex = 0;
const totalSlides = sliderContainer.children.length;

prevBtn2.disabled = slideIndex === 0;
nextBtn2.disabled = slideIndex === totalSlides - 1;

prevBtn2.addEventListener("click", () => {
  slideIndex--;
  updateSliderPositionToLeft();
});

nextBtn2.addEventListener("click", () => {
  slideIndex++;
  updateSliderPositionToRight();
});

const updateSliderPositionToRight = () => {
  const newPosition = sliderContainer.scrollLeft + 250;

  sliderContainer.scrollTo({
    left: newPosition,
    behavior: "smooth",
  });

  prevBtn2.disabled = slideIndex === 0;
  nextBtn2.disabled = slideIndex === totalSlides - 1;
};

const updateSliderPositionToLeft = () => {
  const newPosition = sliderContainer.scrollLeft - 250;

  sliderContainer.scrollTo({
    left: newPosition,
    behavior: "smooth",
  });

  prevBtn2.disabled = slideIndex === 0;
  nextBtn2.disabled = slideIndex === totalSlides - 1;
};
///////////////////////////////////////////

///////////////////////////////////////////
//////////////Section6 Slider//////////////
///////////////////////////////////////////
const sliderContainer6 = document.querySelector(".section6-slider-container");
const nextBtn3 = document.querySelector("#next-btn-section6");
const prevBtn3 = document.querySelector("#prev-btn-section6");

let slideIndex6 = 0;
const totalSlides6 = sliderContainer6.children.length;

prevBtn3.disabled = slideIndex6 === 0;
nextBtn3.disabled = slideIndex6 === totalSlides6 - 1;

prevBtn3.addEventListener("click", () => {
  slideIndex6--;
  updateSliderPosition();
});

nextBtn3.addEventListener("click", () => {
  slideIndex6++;
  updateSliderPosition();
});

const updateSliderPosition = () => {
  const newView = document.querySelector(
    `#section6-oneslide-${slideIndex6 + 1}`
  );

  newView.scrollIntoView({ behavior: "smooth", block: "nearest" });

  prevBtn3.disabled = slideIndex6 === 0;
  nextBtn3.disabled = slideIndex6 === totalSlides6 - 1;
};
///////////////////////////////////////////

///////////////////////////////////////////
//////////////////Sidebar//////////////////
///////////////////////////////////////////
const sidebar = document.querySelector(".sidebar");
const openSidebar = document.querySelector(".burgermenu-container");
const closeSidebar = document.querySelector(".close-sidebar");

console.log(openSidebar)

openSidebar.addEventListener("click", () => {
  sidebar.style.transform = "translateX(0%)"
})

closeSidebar.addEventListener("click", () => {
  sidebar.style.transform = "translateX(-100%)"
})
///////////////////////////////////////////
