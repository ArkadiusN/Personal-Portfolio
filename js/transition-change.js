var toggle = document.querySelector(".side-switch");
var checkbox = document.querySelector(".side-switch__checkbox");
var button1 = document.querySelector(".btn-one");
var button2 = document.querySelector(".btn-two");
var toggle2 = document.querySelector(".switch");
var checkbox2 = document.querySelector(".switch__checkbox");

var aTag1 = document.querySelector(".none1");
var aTag2 = document.querySelector(".none2");

var githubIcon = document.querySelector(".github-icon");

toggle.addEventListener("change", () => {
  if (checkbox.checked) {
    console.log("Checked");
    button1.classList.toggle("darkModeReading");
    button2.classList.toggle("darkModeReading");
    githubIcon.classList.toggle("darkModeReading");
    aTag1.classList.toggle("darkModeReading");
    aTag2.classList.toggle("darkModeReading");
  } else {
    console.log("Unchecked");
    button1.classList.remove("darkModeReading");
    button2.classList.remove("darkModeReading");
    githubIcon.classList.remove("darkModeReading");
    aTag1.classList.remove("darkModeReading");
    aTag2.classList.remove("darkModeReading");
  }
});

toggle2.addEventListener("change", () => {
  if (checkbox2.checked) {
    console.log("Checked");
    button1.classList.toggle("darkModeReading");
    button2.classList.toggle("darkModeReading");
    githubIcon.classList.toggle("darkModeReading");
    aTag1.classList.toggle("darkModeReading");
    aTag2.classList.toggle("darkModeReading");
  } else {
    console.log("Unchecked");
    button1.classList.remove("darkModeReading");
    button2.classList.remove("darkModeReading");
    githubIcon.classList.remove("darkModeReading");
    aTag1.classList.remove("darkModeReading");
    aTag2.classList.remove("darkModeReading");
  }
});

