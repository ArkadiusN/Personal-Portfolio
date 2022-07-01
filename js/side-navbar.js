function closeNav() {
  document.getElementById("sideNav").style.width = "0";
  document.getElementById("btt").classList.toggle("change");
}

function checkNavDisplayed() {
  if (document.getElementsByClassName("button change").length > 0) {
    return true;
  } else {
    return false;
  }
}

function hideOrShowNav() {
  if (checkNavDisplayed() == true) {
    document.getElementById("sideNav").style.width = "50%";
  } else {
    document.getElementById("sideNav").style.width = "0";
  }
}
