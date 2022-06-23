$(function() {
  $("div.option-l").click(function() {
    $("div.option-mobile").fadeIn(200);
    $("div.section").addClass("shadow");
  });
  //
  $("div.x").click(function() {
    $("div.option-mobile").fadeOut(200);
    $("div.section").removeClass("shadow");
  });
  //
  $("div.features").click(function() {
    $("div.feat-l").css("display") == "none"
      ? $("div.features").css(
          "backgroundImage",
          "url(../images/icon-arrow-down.svg)"
        )
      : $("div.features").css(
          "backgroundImage",
          "url(../images/icon-arrow-up.svg)"
        );
    $("div.feat-l").slideToggle();
  });
  //
  $("div.company").click(function() {
    $("div.comp-l").css("display") == "none"
      ? $("div.company").css(
          "backgroundImage",
          "url(../images/icon-arrow-down.svg)"
        )
      : $("div.company").css(
          "backgroundImage",
          "url(../images/icon-arrow-up.svg)"
        );
    $("div.comp-l").slideToggle();
  });
  // media query
  function myFunction(x) {
    if (x.matches) {
      $("div.option").addClass("option-mobile");
      $("div.option").removeClass("option-desktop");
    } else {
      $("div.option").addClass("option-desktop");
      $("div.option").removeClass("option-mobile");
    }
  }
  var x = window.matchMedia("(max-width: 768px)");
  myFunction(x);
  x.addListener(myFunction);
});
