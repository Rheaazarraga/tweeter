// Leverage the createTweetElement function by passing the tweet object to it, then using the returned jQuery object by appending it to the #tweets-container section

$(document).ready(function() {
  const renderTweets = function (tweets) {
    for (const tweet of tweets) {
      const tweetMsg = createTweetElement(tweet);
      $('.existing-tweets-container').prepend(tweetMsg);
    }
  };
  // Secure input handling - re-encodes user text so that unsafe characters are converted into a safe "encoded" representation
  const escape = function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // Rendering dynamic tweets dynamically from JS code and emptying out the existing-tweets-container from html
  const createTweetElement = function(tweet) {
    const timeStamp = timeago.format(tweet.created_at);

    let $tweet = `<article class="existing-tweets">

  <header class="existing-tweets-header">
    
    <img src=${tweet.user.avatars}/>
    <div class="user-name"><b>${tweet.user.name}</b></div>
    <div class="user-handle"><b>${tweet.user.handle}</b></div>
  </header>

  <div class="existing-tweets-body"> <strong>${escape(tweet.content.text)}</strong></div>
  <footer class="existing-tweets-footer"><b>${timeStamp}</b>
    <div class="tweet-icons">
      <i id="icon1" class="fas fa-flag"></i>
      <i id="icon2" class="fas fa-retweet"></i>
      <i id="icon3" class="fas fa-heart"></i>
    </div>
  </footer>

  </article>`;

    return $tweet;
  };

  const loadTweets = function() {
    // Ajax, looking at url: '/tweets with get method
    $.ajax({ url: '/tweets', method: 'GET' })
    // Result = results, passing into renderTweets(result)
      .then(result => renderTweets(result))
       // If error, console.log error
      .catch(error => console.log(`Error:`, error));
  };

  let error = false;
  // Handler to take care of Submit (Tweet) button functionality
  const submitHandler = function(event) {
    // Prevents default behaviour
    event.preventDefault();
    let tweetBox = $('#tweet-box').val();
    const data = $(this).serialize();

    // Function to take .JSON data from /tweets to pass
    const tweetPost = function(data) {
      // Set #tweet-box to empty on successful submission & set .existing-tweets to empty to prevent duplicate messages
       $.ajax({ url: '/tweets', method: 'POST', data: data }).then(() => {
         $('.existing-tweets-container').empty();
         $('#tweet-box').val('');
         // Remove .alert if it existed
         $('.alert').empty();
         // Set #counter value back up to 140
        $('#counter').first().val(140);
        loadTweets();
      });
    };
    // Function to handle error messages
    const errorHandler = function() {
      // If tweet is empty
      if (tweetBox.length === 0) {
        $('.alert')
          .empty()
          .append('<p><i class="fas fa-exclamation-circle"></i><strong> Brevity is the soul of wit, but your tweet does need to be at least 1 character long...</strong</p>');
        $('.alert').hide().slideDown('slow');
        error = true
        // If tweet exceeds max characters
      } else if (tweetBox.length > 140) {
        $('.alert')
          .empty()
          .append('<p><i class="fas fa-exclamation-circle"></i><strong> Looks like you\'ve reached the max amount of characters!</strong></p>');
        $('.alert').hide().slideDown('slow');
        error = true;
      } else {
        // Post tweet because no error exists
        tweetPost(data);
        error = false;
      }
    };
    errorHandler();
  };
    //Get the button:
    scrollButton= document.getElementById("scroll-btn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    const scrollFunction = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    const topFunction = function() {
      // For Safari
      document.body.scrollTop = 0;
      // For Chrome, Firefox, IE and Opera
      document.documentElement.scrollTop = 0; 
    }
    $('#scroll-btn').on('click', () => {
      topFunction();
    })
    
 // #text-box event listener to remove alert/error msg when typing
  $('form').on('submit', submitHandler),
  $('#tweet-box').on('keyup', () => {
    if (error === true) {
     $('.alert').slideUp('slow');
     error = false;
   };
  });

  // Upon clicking create a new tweet, the new-tweet section will slide down for user to create a tweet. Click the button again & new-tweet section will slide up and be re-hidden
  $('#create-tweet').on('click', () => {
    $('.alert').hide()
    if($('#new-tweet').hasClass('hide-tweet')) {
      $('#new-tweet').slideDown('slow', function() {
        $(this).removeClass('hide-tweet');
        $('.alert').empty();
      });
    } else {
      $('#new-tweet').slideUp('slow', function() {
        $(this).addClass('hide-tweet');
        $('.alert').empty();
      });
    };
  });
  loadTweets();
});