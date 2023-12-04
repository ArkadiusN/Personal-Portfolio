var root = document.querySelector(":root");
var toggle = document.querySelector(".side-switch");
var checkbox = document.querySelector(".side-switch__checkbox");
var toggle2 = document.querySelector(".switch");
var checkbox2 = document.querySelector(".switch__checkbox");

// Instead of changing the root variables
// create a $vars in stylesheet and then another one
// underneath to be a alternative that will change based
// on the element.classList.toggle("dark")
// Make transitions on this change once
toggle.addEventListener("change", () => {
  if (checkbox.checked) {
    console.log("Checked");
    root.style.setProperty("--dark-purple", "#362222");
    root.style.setProperty("--navy", "#171010");
    root.style.setProperty("--orange", "#423F3E");
    root.style.setProperty("--white", "#D7D7D7");
  } else {
    console.log("Unchecked");
    root.style.setProperty("--dark-purple", "#222831");
    root.style.setProperty("--navy", "#2d4059");
    root.style.setProperty("--orange", " #ff5722");
    root.style.setProperty("--white", "#ffffff");
  }
});

toggle2.addEventListener("change", () => {
  if (checkbox2.checked) {
    console.log("Checked");
    root.style.setProperty("--dark-purple", "#362222");
    root.style.setProperty("--navy", "#171010");
    root.style.setProperty("--orange", "#423F3E");
    root.style.setProperty("--white", "#D7D7D7");
  } else {
    console.log("Unchecked");
    root.style.setProperty("--dark-purple", "#222831");
    root.style.setProperty("--navy", "#2d4059");
    root.style.setProperty("--orange", " #ff5722");
    root.style.setProperty("--white", "#ffffff");
  }
});
