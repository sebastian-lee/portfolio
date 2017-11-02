$(document).ready(function() {
  var cart_animating = false;

  //Animation for loading the cartridge into the console
  $(".cartridge").click(function() {
    if (!cart_animating) {
      cart_animating = true;
      $(".cartridge").removeClass("cartridge-hover");
      $("#projects").removeClass("cartridge-idle-1");
      $("#skills").removeClass("cartridge-idle-2");
      $("#about").removeClass("cartridge-idle-3");

      var nesOffset = $(".nes").offset();
      var offset = $(this).offset();

      //Able to calculate X diff because both parents have same width
      //therefore the left difference should be the same. Top should be similar

      var diffX = nesOffset.left - offset.left;
      var diffY = nesOffset.top - offset.top;

      //Offset to tweak position

      var offsetX = $(this).width() / 14;
      var offsetY = $(".nes").height() * 3 / 4;

      var cartLoadingOffset = 0.65;

      //Check if in mobile and not first child
      if ($(document).width() < 600) {
        switch ($(this).attr("id")) {
          case "projects":
            cartLoadingOffset = 0.65;
            break;
          case "skills":
            cartLoadingOffset = 0.7;
            break;
          case "about":
            cartLoadingOffset = 0.75;
            break;
        }
      } else if ($(document).width() < 900) {
        offsetX -= $(this).width() / 6;
      }

      $(this).toggleClass("rotate");
      $(".nes").css("background-image", "url(resource/images/NES_top.svg)");
      $(this)
        .animate(
          {
            left: diffX - offsetX,
            top: diffY + offsetY
          },
          1000
        )
        .animate(
          {
            top: -$(this).offset().top * cartLoadingOffset
          },
          2000,
          function() {
            switch ($(this).attr("id")) {
              case "projects":
                window.location.href = "projects.html";
                break;
              case "skills":
                window.location.href = "skills.html";
                break;
              case "about":
                window.location.href = "about.html";
                break;
            }
          }
        );
    }
  });

  $(".cartridge").hover(function() {
    if (!cart_animating) {
      $("#projects").removeClass("cartridge-idle-1");
      $("#skills").removeClass("cartridge-idle-2");
      $("#about").removeClass("cartridge-idle-3");
    }
  });

  $(".cartridge").mouseleave(function() {
    if (!cart_animating) {
      $("#projects").addClass("cartridge-idle-1");
      $("#skills").addClass("cartridge-idle-2");
      $("#about").addClass("cartridge-idle-3");
    }
  });
});
