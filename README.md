# Tweeter Project

Tweeter is a simple, single-page app built with HTML, CSS, JS, jQuery and AJAX front-end skills, and Node, Express back-end skills.

## Getting Started

1. Clone your repository onto your local device.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above


## Functionalities
- A client-side Single Page App (SPA)
- Communicates with a server via AJAX

## Display
### Navigation Bar:
The Navigation Bar is fixed to the top, has padding on both sides and contains Compose button.

### Compose Tweet box:
The Compose Tweet box is displayed above the list of tweets. It contains a form for submitting tweets, which itself contains:
- A box for new tweet content
- A left-aligned button for submitting new tweets
- Contains a Character Counter, right-aligned, which by default shows 140

### List of Tweets:
The List of Tweets displays tweets in reverse-chronological order (that is, by creation time descending).
Individual Tweets have a:
- Header, which contains the user's:
  - Avatar, on the left
  - Name, on the left and after the avatar
  - Handle, on the right
  - Body, which contains the tweet text
- Footer, which displays:
  - How long ago the tweet was created, on the left
  - "Flag", "Re-tweet" and "Like" action icons on the right

## Behaviour
### Individual Tweets
When the user hovers over a tweet, that tweet displays a box shadow.

### Action Icons
When the user hovers over an icon ("Flag", "Re-tweet" and "Like") the icon changes colour.

### Character Counter
When a user types into the Compose Tweet box, the Character Counter is updated to show how many characters a user may still type (subtracting the number of characters they've typed from the maximum allowable character count of 140).

The Character Counter turns red (or similar) when more than 140 characters have been typed into the Compose Tweet box, and it shows how many characters over the 140 limit have been typed (using a negative number).

### Compose Tweet
When a user submits an invalid tweet (the tweet box is empty or contains more than 140 characters), an appropriate error message is displayed.

When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet), the Compose Tweet box is cleared, and the Character Counter is reset (to 140).

## Screenshots
!["Desktop and Tablet design before tweets"](https://github.com/HabonH/tweeter/blob/master/docs/Desktop-Tablet-version.png)
> Desktop and Tablet design before tweets

!["Desktop and Tablet design after tweets"](https://github.com/HabonH/tweeter/blob/master/docs/Desktop-Tablet-version1.png)
> Desktop and Tablet design after tweets


!["Mobile design before tweets"](https://github.com/HabonH/tweeter/blob/master/docs/Mobile-version1.png)
> Mobile design before tweets


!["Mobile design timeline"](https://github.com/HabonH/tweeter/blob/master/docs/Mobile-version1.png)
> Mobile design before timeline

