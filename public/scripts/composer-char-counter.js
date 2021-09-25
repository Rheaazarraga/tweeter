$(document).ready(function() {
  $("#tweet-box").on("input", function(event) {
    //storing our form input
    let $formInput = $(this);

    //targets closest element to the form
    let $forms = $formInput.closest("form");

    //targets the text-box input
    let $textCount = $forms.find("#tweet-box");

    //captures the length of our tweet
    let textLength = $textCount.val().length;
    let charLeft = 140 - textLength;

    //caputres the value of counter
    let counterColor = $("#counter").val(charLeft);

    //if length of tweet input is >140 characters, 0 characters and within range
    //want to display or hide error msgs based on these scenarios

    if (charLeft < 0) {
      counterColor.css("color", "red");
    } else {
      counterColor.css("color", "white");
    }
  });
});
