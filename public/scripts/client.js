/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Send a request to the API --> jQuery

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": timeago.format(new Date())
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": timeago.format(new Date())

  }
];


const createTweetElement = function (tweet) {
  let $tweet = `<article class="tweet">
  <header class="tweet-header">
    <a><i class="far fa-smile"></i>${tweet.user.name}</a>
    <strong>${tweet.user.handle}</strong>
  </header>
  <p>${tweet.content.text}</p>
  <footer class="tweet-footer">
    <small>${tweet.created_at}</small>
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
    $('#tweets-container').append(createTweetElement(tweet));
  }
};


// Handler for .ready() called.
$(document).ready(function () {
  renderTweets(data);



  $('#data').on('submit', function (event) {
    event.preventDefault();
    console.log("Hellooooo");

    // $.post('/tweet', $value).then(function () {
    //   const $value = $(event.target.data).serialize();

    // });

  });

});

// console.log("new DATA--->", ($('.tweets-container'))); // to see what it looks like
// console.log("NEW TWEET -->", $value); // to see what it looks like
