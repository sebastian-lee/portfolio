$(document).ready(function() {
  var eventNoise = document.getElementById("noise");
  eventNoise.addEventListener("animationend", listener, false);
  eventNoise.className = "noise";

  //After the noise animaton is complete start the turn on animation
  function listener(event) {
    if (event.type == "animationend") {
      var content = $(".content");
      content.css("display", "inherit");
      content.toggleClass("turn-on");
      $("#noise").css("display", "none");
    }
  }
});
