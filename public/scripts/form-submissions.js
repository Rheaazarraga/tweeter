$(document).ready(function () {

  $('#submit').on('submit', function (event) {
    event.preventDefault();
    const data = $( this ).serialize();
    $.ajax({url: '/tweets', method: 'POST', data: data })
    .then(function (response) {
      
    });
  });


});