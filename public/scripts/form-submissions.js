$(document).ready(function () {

  $('#submit-form').on('submit', function (event) {
    event.preventDefault();
    const data = $( this ).serialize();
    $.ajax({url: '/tweets', method: 'POST', data: data })
    .then(function (response) {
      console.log(`Response: ----`, response)
      // comment to show its functioning
    });
  });


});

