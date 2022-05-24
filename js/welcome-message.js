(function () {
  var elMessage = document.getElementById("welcome-message");
  var today = new Date();
  var hourNow = today.getHours();
  var minuteNow = today.getMinutes();
  var message;

  if (hourNow >= 17 && minuteNow > 0) {
    message = "Good evening";
  } else if (hourNow > 11 && minuteNow >= 0) {
    message = "Good afternoon";
  } else if (hourNow >= 2) {
    message = "Good morning";
  } else {
    message = "Welcome";
  }
  elMessage.textContent = message;
})();
