var root = document.querySelector(":root");
var toggle = document.querySelector(".switch");
var checkbox = document.querySelector(".switch__checkbox");

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
    // root.style.setProperty("--white", "#D7D7D7");
    root.style.setProperty("--white", "#000fff");
  } else {
    console.log("Unchecked");
    root.style.setProperty("--dark-purple", "#222831");
    root.style.setProperty("--navy", "#2d4059");
    root.style.setProperty("--orange", " #ff5722");
    root.style.setProperty("--white", "#ffffff");
  }
});
