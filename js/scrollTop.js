var element = document.querySelector(".scrollTop");
element.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// var elementOne = document.querySelector(".scrollTop");

// function changeOnScroll() {
//   elementOne.className = "scrollTopTwo";
// }

// elementOne.addEventListener("click", changeOnScroll, false);
