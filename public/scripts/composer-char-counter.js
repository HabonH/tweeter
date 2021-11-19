$(document).ready(function () {

  $("#tweet-text").on("input", function (event) {
    const charNum = $(this).val().length;
    const charLeft = 140 - charNum;
    const counter = $(this).parent().find('.counter');

    counter.val(charLeft);

    if (charLeft < 0) {
      counter.css("color", "red");
    } else {
      counter.css("color", "black");

    }

  });
});