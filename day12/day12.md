# Firebase Realtime Database: Reading Data and Rendering HTML

1. [Objectives](#objectives)
2. [What We're Building](#what-were-building)
3. [Starting Code](#starting-code)
4. [Stepped Solution](#stepped-solution)
5. [Finished Code](#finished-code)
6. [Extensions for Independent Practice](#extensions-for-independent-practice)

## Objectives

- Students will use the Firebase API to validate a users authentication state. 
- Students will read data from their realtime database.
- Students will use `for...in` loops to iterate over user generated data.
- Students will use the DOM to render data as formatted HTML.

**Key vocabulary: iteration, JSON, API, window, DOM**

## What We're Building
Today students will continue building out their notes app. We'll pick where we left off yesterday by adding functionality to read data and render a list of data as HTML. This lesson aims to strengthen students comfort with the Firebase API and Realtime Databases, as well as build up students confidence with parsing and manipulating data. Students will begin to solidify a foundational understanding of how the front and back end of web apps interact to create a dynamic web app.

## Starting Code

The starter code for today can be found in `day12/day12_starter/firebaseNotes`.

## Stepped Solution

1.  Today most of the code will be written in `viewNotes.js`. Once again, it's a good idea to check the authentication state of the user before proceeding with the logic to read from a database. Start by adding a `window.onload` event:
```js
window.onload = event => {

}
```

2. Challenge students to see if they can recall the steps to validate a user's authentication. Demonstrate using documentation here, and consider having the students walk you through coding the steps.
```js
  // Use this to retain user state between html pages.
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // Console log the user to confirm they are logged in 
      console.log('Logged in as: ' + user.displayName);
    } else {
      // If not logged in, navigate back to login page.
      window.location = 'index.html'; 
    };
  });
```

3. After verifying that our user is logged in, it's a good idea to store their id, so that we can later query for their data.Yesterday we retrieved the user's ID from the user object that was returned to us after the user logged in. Today we'll do the same thing, and store that user ID in a variable: `googleUserId`. Add this line at the end of the `if` block:
```js
const googleUserId = user.uid;
```

4. We need to add the functionality to retrieve the notes from the database. In order to look up a specific users notes, it's necessary to take in the user's ID, which can be passed in as a parameter.
```js
const getNotes = (userId) => {

}
```

5. Back in our `window.onload` event, call the `getNotes` function so that it will trigger after a user has been validated. Pass the user's ID into the function call so that it can be appended the query url.  At this point our `window.onload` event should look like this:
```js
window.onload = (event) => {
  // Use this to retain user state between html pages.
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      const googleUserId = user.uid;
      getNotes(googleUserId);
    } else {
      // If not logged in, navigate back to login page.
      window.location = 'index.html'; 
    };
  });
};
```

6. Inside the `getNotes(userId)` function definition, start by connecting to the database and routing to the individual user's database resource. Remind students that we used this path yesterday to write data to the Realtime Database. Instead of passing in the variable `userId`, we passed in `googleUser.uid`, but both variables point to the same data: the logged in user's unique id. Today we'll be referencing that same endpoint to retrieve our stored data.
```js
  const notesRef = firebase.database().ref(`users/${userId}`);
```

7. Read from the database and store the data that is returned in a variable:

```js
notesRef.on('value', (snapshot) => {
  const data = snapshot.val();
});
```

8. At this point the `getNotes(userId)` function should look like this:

```js
const getNotes = () => {
  const notesRef = firebase.database().ref(`users/${userId}`);
  notesRef.on('value', (snapshot) => {
    const data = snapshot.val();
  });
}
```

9. To add the functionality to render the data as HTML, start by adding a function `renderDataAsHtml()` that will loop over the notes, create a card, and render it onto the `viewNotes.html` HTML page.

```js
const renderDataAsHtml = data => {

};
```

10. Explain to students that there are multiple ways to dynamically create HTML using the DOM. The simplest way to do this, for now, is to create a large string of HTML that we can inject into the DOM.
```js
const renderDataAsHtml = data => {
  let cards = ``;

};
```

11. Because we are dealing with objects, it's not possible to iterate over them in exactly the same way we might an array. We have to use a `for...in` loop. 
```js
const renderDataAsHtml = data => {
  let cards = ``;
  for(const noteItem in data) {
    const note = data[noteItem];
    // For each note create an HTML card
    }
};
```

12. It's time to add some code that will create an HTML card. Explain to students that it is perfectly valid to do that inside of the `renderDataAsHtml()` function,but for the sake of readability and seperating concerns, it's best practice to keep code as modular as possible. Create a new function that just recieves data, formats it as HTML, and returns it. Then this function can be called from inside `renderDataAsHtml()`. After writing out the first few sub-strings, try to solicit students help in compiling the HTML string needed to build a card. 
```js
const createCard = (note) => {
  let innerHTML = "";
  innerHTML += `<div class="column is-one-quarter">`
  innerHTML += `<div class="card">`
  innerHTML += `<header class="card-header">`
  innerHTML += `<p class="card-header-title">`
  innerHTML += `${note.title}`
  innerHTML += `</p>`
  innerHTML += `</header>`
  innerHTML += `<div class="card-content">`
  innerHTML += `<div class="content">`
  innerHTML += `${note.text}`
  innerHTML += `</div>`
  innerHTML += `</div>`
  innerHTML += `</div>`
  innerHTML += `</div>`
  return innerHTML;
}
```

13. Now that the logic is written to create a card, call this function from inside `renderDataAsHtml()`. Make sure students understand that every time this function iterates over a new piece of data, the `createCard()` function will format that data as an HTML string. This string is then concatenated onto the cards variable, appended to the `viewNotes.html` page.
```js
const renderDataAsHtml = data => {
  let cards = ``;
  for(const noteItem in data) {
    const note = data[noteItem];
    // For each note create an HTML card
    cards += createCard(note);
  };
  // Inject our string of HTML into our viewNotes.html page
  document.querySelector('#app').innerHTML = cards;
};
```

## Finished Code
The finished code for today can be found in `day12/day12_final/firebaseNotes`.

## Extensions for Independent Practice

### Mild

- Add the user's display name or email address to each note card. 
- Update the `createCard()` function to give each card a random background color. 

### Medium
- Try refactoring the code using different DOM methods, to dynamically build the Bulma Cards.

### Spicy

- Add a `labels` field to your schema that stores an array of user generated labels. In your HTML add an additional field that allows users to add labels that categorize each note (ie: 'work', 'personal', 'CS tutorials', etc.). Allow users to search for notes by label. 

