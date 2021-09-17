/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  const data = [
    {
      user: {
        name: "Newton",
        avatars:
          "https://img.icons8.com/fluency/30/000000/lumpy-space-princess.png",
        handle: "@SirIsaac",
      },
      content: {
        text: "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1631661600000,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://img.icons8.com/color/30/000000/clr-beemo.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at:  1631575200000,
    },
  ];
  const renderTweets = function (tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container

    for (const tweet of tweets) {
      const tweetMsg = createTweetElement(tweet);
      $(".existing-tweets-container").append(tweetMsg);
    }
  };

  const createTweetElement = function (tweet) {
    const timeStamp = timeago.format(tweet.created_at);
    let $tweet = `<article class="existing-tweets">

  <header class="existing-tweets-header">
    <div class="tweeter-avatar"> <img src="${tweet.user.avatars}"/> </div>
    <div class="user-name"><b>${tweet.user.name}</b></div>
    <div class="user-handle"><b>${tweet.user.handle}</b></div>
    </header>


  <div class="existing-tweets-body"> <strong>${tweet.content.text}</strong></div>


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

  renderTweets(data);
});

