var element = document.querySelector(".scroll-top");
function clickedButton() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function changeColor() {
  element.className = "scroll-top-after";
}

function returnColor() {
  element.className = "scroll-top";
}

window.addEventListener("scroll", (e) => {
  const scrolled = window.scrollY;
  if (scrolled > 710) {
    changeColor();
  } else if (scrolled <= 710) {
    returnColor();
  }
});

element.addEventListener("click", clickedButton, false);
