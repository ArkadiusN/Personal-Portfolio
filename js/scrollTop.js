var element = document.querySelector(".scrollTop");
function clickedButton() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function changeColor() {
  element.className = "scrollTopTwo";
}

function returnColor() {
  element.className = "scrollTop";
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
