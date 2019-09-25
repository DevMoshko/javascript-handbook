// ------------------------------ PART 1 ------------------------------

// We're going to try and mimic blog posts on a server, getting them, and creating a blog post

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
  // setTimeout takes in a callback function
  // It also takes in an amount of time to delay
  // You can also use an arrow function, like below
  setTimeout(() => {
    // The purpose is to get the posts and put them on the page
    let output = '';

    // Loop through the posts
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 500);
}

// Create a new post
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 750)
}

// Passing in getPosts as the call function
// Everything appears at once
createPost({ title: 'Post Three', body: 'This is post 3' }, getPosts);



// ------------------------------ PART 2 ------------------------------

// Before we dive into promises, let's take a look at callbacks

// Example:
element.addEventListener('click', submitForm);
// We have an element that we're adding an event listener to.
// And when a user clicks we're going to have the callback, submitForm.
//  That iss once the user clicks we're going to answer with submitForm.

// Example #2 - moving a player in a game:
movePlayer(100, 'Left', function () {
	movePlayer(400, 'Left', function () {
		movePlayer(10, 'Right', function () {
			movePlayer(330, 'Left', function () {				
			})
		})
	})
})
// Well, if we wanted to move player 100 to the left we'd run that.
// Once that is done, we want it to run a callback function which is to move player 400 to the left again 
// And then another callback function right after that is done to move player 10 to the right
// And then ANOTHER callback option to move player 330 to the left.
// And we have something called the 'pyramid of doom'.

// Realistic example - some kind of app using Twitter
grabTweets('https://twitter.com/andrew_devsrc', (error, andrewTweets) => {
	if (error) {
		throw Error;
	}
	displayTweets(andrewTweets)
	grabTweets('https://twitter.com/elonmusk', (error, elonTweets) => {
		if (error) {
			throw Error;
		}
		displayTweets(elonTweets)
		grabTweets('https://twitter.com/joerogan', (error, joeTweets) => {
			if (error) {
				throw Error;
			}
			displayTweets(joeTweets)
		})
	})
})
// Here, we grabTweets function, and the first parameter has the URL
// And then the callback function after you grab the tweets which has an 'error' And the tweets (andrewTweets).
// And if there's an error we throw an error. So that just creates an error in javascript.
// Otherwise we're going to display the tweets.
// But then if Andrew's tweets were successful, then we also want to grab the tweets again.
// Let's do Elon Musk this time and again if error
// We're going to throw error.
// Otherwise we're going to display his tweets.
// And if that's successful then we're also going to grab Vitalik Buterin's tweets.
// And again if error, throw error otherwise display tweets



// ------------------------------ PART 3 ------------------------------

// HTML FOR REFERENCE:
<div>
  <h1 class="header">Events and callbacks are SO fun</h1>
  <button id="btn-one">Button 1</button>
  <button id="btn-two">Button 2</button>
</div>

// Check out this code sample here:
window.addEventListener('load', function(event){
  console.log('All resources have finished loading!');
})
   
// What this does is it adds an event listener to the window object
// The listener waits for the ‘load’ event, and then once that event has been triggered, it calls the function in the second parameter
// And that function passes in an event object 
// That function in the second parameter is a callback

// A callback, put simply, is a function that's passed into another function, and is called after something occurs 
// With regards to events, the callback is an event handler.

// Setting up an event handler:
  // Select the button element
  // Add an event listener
  // Name the event
  // Put the results in a callback

// Event handler for Button 1
document.querySelector('#btn-one').addEventListener('click', function (){
  console.log('You have clicked da button!');
});
// ---------- BREAKDOWN ----------
// First, grab/select the element
// Add an event listener
// The event we will wait for is a click
// Then, in the second parameter, we put our function
// We won't pass anything into this function at this point
// To keep it simple, we simply console.log a message

// Event handler for Button 2
document.querySelector('#btn-two').addEventListener('mouseover', function(){
  // Let's change the text:
  document.querySelector('#btn-two').innerText = "I have been hovered!";
})
// Fun fact: the function in the second parameter is called an anonymous function because it doesn't actually have a name.

// As mentioned in lecture 11, you can also make your own custom events
// They don't happen as often as standard events in regular development, but they're still good to know.
// Example:

// Creating our event with a custom event called timeEvent
// And then we will call the function stateTime
document.body.addEventListener('timeEvent', stateTime);

// The function will pass an event object
function stateTime(event) {
  // Here, we will alert some data about event
  alert(`The event time is ${event.detail}`);
}

// Let's a new custom event object
// This is a special javascript object for custom events and we're going to call this event timeEvent just like we did above.
var myEvent = new CustomEvent('timeEvent', {
  // In this timeEvent, we're going to make it have a certain type of data.
  // Let's just call it detail and we'll just put new Date
  'detail': new Date()
  // Now what this does is it creates the custom event
  // This timeEvent has the property 'detail' 
  // That property consists of a new date 
  // When you create a new date object, that just gets the current time and date in JavaScript
});

// BREAKDOWN:
// So, when you wait for the event, you call the function 'stateTime' 
// 'stateTime' takes in an event object.
// And that's this custom event 'myEvent'
// So event will just end up being a variation of 'myEvent'
// This custom event has a name, 'timeEvent', just like the one we are listening for
// And it has the property detail which gives us the custom time

// Finally, we need the body object to DISPATCH the event:
document.body.dispatchEvent(myEvent);
