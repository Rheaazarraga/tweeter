$(document).ready(function () {
  $("#tweet-box").on("input", function (event) {
    //storing our form input
    let $formInput = $(this);

    //targeting closest element to the form
    let $forms = $formInput.closest("form");

    //targets the text-box input
    let $textCount = $forms.find("#tweet-box");
    console.log("textCount", $textCount);

    //captures the length of our tweet
    let textLength = $textCount.val().length;
    let charLeft = 140 - textLength;

    //caputres the value of counter
    let counterColor = $("#counter").val(charLeft);
    console.log("counter", counterColor);

    //if length of tweet input is >140 characters, 0 characters and within range
    //want to display or hide error msgs based on these scenarios

    if (charLeft < 0) {
      counterColor.css("color", "red");
    } else {
      counterColor.css("color", "white");
    }
  });
});

// ready method allows us to execute a function when the document is fully loaded
// blur event fires when an the <input> field loses focus
// keydown event fires once whenever the user presses any key on the keyboard
// keyup event fires once whenever the user releases a key from the keyboard
// keypress event occurs fires continuously while a key is pressed
// change event occurs when the value of an element has been changed (only works on <input>, <textarea> and <select> elements)
// input event triggers whenever the input changes
