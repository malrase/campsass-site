$(document).ready(function () {
  $(".content").hide();
  $(".contract").hide();
  $(".button").on("click", function() {
    $(this).nextAll("div").toggle();
    $(".expand", this).toggle();
    $(".contract", this).toggle();
  });
});