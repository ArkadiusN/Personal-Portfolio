var element = document.querySelector(".scroll-top");
var sectionHeight = document.getElementById("about").offsetHeight;

console.log("Section height:" + sectionHeight);
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
  if (scrolled > sectionHeight) {
    changeColor();
  } else if (scrolled <= sectionHeight) {
    returnColor();
  }
});

element.addEventListener("click", clickedButton, false);
