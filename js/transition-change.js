var toggle = document.querySelector(".switch");
var checkbox = document.querySelector(".switch__checkbox");
var button1 = document.querySelector(".btn-one");
var button2 = document.querySelector(".btn-two");

// var aTags = document.querySelectorAll(".none");
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

    // if (aTags.length > 0) {
    //   for (var i = 0; i < aTags.length; i++) {
    //     aTags[i].classList.toggle("darkModeReading");
    //   }
    // }
  } else {
    console.log("Unchecked");
    button1.classList.remove("darkModeReading");
    button2.classList.remove("darkModeReading");
    githubIcon.classList.remove("darkModeReading");
    aTag1.classList.remove("darkModeReading");
    aTag2.classList.remove("darkModeReading");
    // if (aTags.length > 0) {
    //   for (var i = 0; i < aTags.length; i++) {
    //     aTags[i].classList.remove("darkModeReading");
    //   }
    // }
  }
});
