// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = function (tweetData) {
  let $tweet = `<article class="tweet">
  <header class="tweet-header">
    <a><i class="far fa-smile"></i>${tweetData.user.name}</a>
    <strong>${tweetData.user.handle}</strong>
  </header>
  <p>${escape(tweetData.content.text)}</p>
  <footer class="tweet-footer">
    <small>${timeago.format(tweetData.created_at)}</small>
    <div class="icons">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </footer>
  </article>
  `;
  return $tweet;
};


const renderTweets = function (tweets) {
  for (const tweet of tweets) {
    $('#tweets-container').prepend(createTweetElement(tweet));
  }
};

$(document).ready(function () {
  function loadtweets() {

    $.get('/tweets').then(function (data) {
      renderTweets(data);
    });
  };

  $('#data').on('submit', function (event) {
    event.preventDefault();
    $(".error-msg").hide();

    if ($('#tweet-text').val().length === 0) {
      $(".error-msg")
        .html("🛑 Your tweet has no content. How will others know what you're humming?")
        .slideDown();
    }

    if ($('#tweet-text').val().length > 140) {
      $(".error-msg")
        .html("🛑 Oh no! Your tweet content is too long. Don't worry, you can try again.")
        .slideDown();

    } else {
      const $value = $(this).serialize();
      $.post('/tweets', $value).then(function () {
        loadtweets();
        $("#tweet-text").val("");
        $(".counter").val(140);

      });
    }
  });
});




