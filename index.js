const menuHambButton = document.querySelector(".menu-hamb-button");
const navBarLinks = document.querySelector(".navbar-links");
const menuOverlay = document.querySelector(".menu-overlay");
const btn = document.getElementById("btn");

menuHambButton.addEventListener("click", () => {
  menuHambButton.classList.toggle("isOpen");
  navBarLinks.classList.toggle("show");
  menuOverlay.classList.toggle("show");
  btn.classList.toggle("show");
});

menuOverlay.addEventListener("click", () => {
  menuHambButton.classList.remove("isOpen");
  navBarLinks.classList.remove("show");
  menuOverlay.classList.remove("show");
  btn.classList.remove("show");
});


function slidesPlugin(activeSlide = 0) {
  const slides = document.querySelectorAll('.slide');

  slides[activeSlide].classList.add('active');
  toggleButtonTextVisibility(activeSlide);

  slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
      clearActiveClasses();
      slide.classList.add('active');
      toggleButtonTextVisibility(index);
    });
  });

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
  }

  function toggleButtonTextVisibility(index) {
    const buttons = document.querySelectorAll('.slide button');
    const textElements = document.querySelectorAll('.slide h3');

    buttons.forEach((button, i) => {
      button.style.opacity = i === index ? '1' : '0';
    });

    textElements.forEach((textElement, i) => {
      textElement.style.visibility = i === index ? 'visible' : 'hidden';
    });
  }
}

slidesPlugin(2);
