// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */

// // Send a request to the API --> jQuery

// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd"
//     },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088

//   }
// ];

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

// Time since tweet was first created

const renderTweets = function (tweets) {
  for (const tweet of tweets) {
    // let $value = createTweetElement(tweet);
    $('#tweets-container').prepend(createTweetElement(tweet));
  }
};



// Handler for .ready() called.
$(document).ready(function () {
  function loadtweets() {

    $.get('/tweets').then(function(data) {
      renderTweets(data);
      // console.log("SUCCESS!! ");
    });
    // loadtweets();

  };

  $('#data').on('submit', function (event) {
    event.preventDefault();
    $(".error-msg").hide();
    if ($('#tweet-text').val().length === 0) {
      // return alert("Sorry, your tweet has no content. How will others know what you're humming?");
      // $(".error-msg").slideDown("slow", function () {
    
      //   return $(`Error- field is empty`);
      // });
      $(".error-msg")
        .html("Your tweet has no content. How will others know what you're humming?")
        .slideDown();
    }
    if ($('#tweet-text').val().length > 140) {
      // return alert("Your tweet content is too long");
      $(".error-msg")
        .html("Oh no! Your tweet content is too long. Don't worry, you can try again.")
        .slideDown();

    } else {
      const $value = $(this).serialize();
      $.post('/tweets', $value).then(function () {

        loadtweets();
      });
    }

  });
});




// console.log("new DATA--->", ($('.tweets-container'))); // to see what it looks like
// console.log("NEW TWEET -->", $value); // to see what it looks like
