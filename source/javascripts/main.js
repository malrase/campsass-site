$(document).ready(function () {
  $(".description").hide();
  $(".contract").hide();
  $(".expand").on("click", function() {
    $(this).toggle();
    $(this).next("span").toggle();
    $(this).nextAll("div").toggle();
  });
  $(".contract").on("click", function() {
    $(this).toggle();
    $(this).prev("span").toggle();
    $(this).next("div").toggle();
  });
});