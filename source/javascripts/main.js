$(document).ready(function () {
  $(".button").on("click", function() {
    if($(this).nextAll("div").hasClass("closed")) {
      $(this).nextAll("div").removeClass("closed");
    } else {
      $(this).nextAll("div").addClass("closed");
    }
    if($(".expand", this).hasClass("open")) {
      $(".expand", this).removeClass("open");
    } else {
      $(".expand", this).addClass("open");
    }
  });
});
