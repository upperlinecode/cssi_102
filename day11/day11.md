# Firebase Realtime Database: Authenticating Google Users and Writing to a Database

1. [Objectives](#objectives)
2. [What We're Building](#what-were-building)
3. [Starting Code](#starting-code)
4. [Stepped Solution](#stepped-solution)
5. [Finished Code](#finished-code)
6. [Extensions for Independent Practice](#extensions-for-independent-practice)

## Objectives

- Students will create a Firebase project.
- Students will initialize Firebase in project directory.
- Students will authenticate users through the Firebase API.
- Students will use the Firebase API to write and save new data to a realtime database. 

**Key vocabulary: authentication, asynchronous**

## What We're Building

Over the next few days we'll be building a notes app, similar to Google Keep. The goal of this project will be to help students understand what is generally required to build a dynamic web app, and to build their confidence and skills in developing robust apps using the Firebase suite. Today we'll build an authentication flow, where we'll be able to sign-in Google users. We'll also be using the Firebase API to write new data to our realtime database. 

## Starting Code

The starting code for today can be found in `day11/day11_start/firebaseNotes`.

## Stepped Solution

1.  Have students create a new project in the Firebase console and initialize Firebase in their `firebaseNotes` repository. Challenge students to complete these steps on their own, and support them as they navigate the steps.

2. In order for Firebase Authentication to work, students will need to enable Google Sign-In in the Firebase console (Authentication > Sign-In Method > Enable Google Sign-In).

3. Students should run the following commands in their terminal.
```bash
$ npm install -g firebase-tools
$ firebase login
$ firebase init
```

After initializing Firebase, have students check that it is working by running `firebase emulators:start`. The terminal will return links to view your app, and also links to view your running emulators. Students should open these links. 

4. Check for understanding by having students walk you through confirming that their Javascript `signIn.js` file is properly linked to their `index.html`.

5. In `signIn.js` write the shell of a `signIn()` function. Have students check that everything is linked together and working by adding a `console.log()` statement. 

6. Check for understanding by having students share out how we can attach an event handler to an HTML element. Have students add an `onclick()` handler to the Sign-In button.

7. The `.auth()` method is available to us through the Firebase Authentication library which has been preloaded into the HTML files. `GoogleAuthProvider()` calls an instance of Google Sign-In Authentication provider. This function carries out the logic of actually signing users in. Inside the `signIn` function add this line of code:
  ```js
  var provider = new firebase.auth.GoogleAuthProvider();
  ```

8. In the <a href="https://firebase.google.com/docs/auth/web/google-signin">Firebase documentation</a> we can find the code we need to sign in a user using Google Sign-In. Demo using documentation or direct students to use documentation to figure out how to sign-in users, then go over it as a whole group. Add the following code to `signIn.js`.
```js
firebase.auth()
  // triggers a Google Sign-in pop up to render and allows users to login using a Google account
.signInWithPopup(provider)
.then((result) => {
  /** @type {firebase.auth.OAuthCredential} */
  var credential = result.credential;

  // This gives you a Google Access Token. You can use it to access the Google API. We won’t be using it here, but it’s good to know that it’s available to you 
  var token = credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch((error) => {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
```

9. Pause to discuss the asynchronous nature of sending requests over the web. Explain that we will be using `.then()` to write out how our app should respond after the request we made is complete. 

10. Once a user has logged in, they should be redirected to a form to create a note. Have students add this line to their .`then()` method. It uses the Javascript `window` object to navigate the user to the `noteForm.html` page.
```js
window.location = 'noteForm.html';
```

11. Explain error handling, and emphasize that it is always a good idea to handle errors and return some data back to the user.

12.  Add this code to the end of the `.catch()` method:
```js
  const err = {
    errorCode,
    errorMessage,
    email,
    credential
  }
  console.log(err)
```

13. At this point, the `signIn()` function should look like this:
```js
const signIn = () => {
  console.log('test')
  var provider = new firebase.auth.GoogleAuthProvider();
  console.log(provider)

  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
      console.log('result')
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log('USER', user)
      window.location = 'writeNote.html';
  }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      const err = {
          errorCode,
          errorMessage,
          email,
          credential
      }
      console.log(err)
  });
}
```

14. Encourage students to test their code up to this point by stepping through their program so far. Students should be able to simulate logging in through Google and be redirected to another HTML page with a form for creating a note. In the Emulator UI, under the authentication tab, students should be able to see the fake user that we just logged in.

15. Add the logic to write to the database to `writeNote.js`.

16. For the optimal user experience, the user state should persist between all of the HTML pages. To do that we can trigger a function as soon as the page loads to see whether or not a user is logged in. Once again we'll use the `window` object. We can call the `.onload()` event to trigger some functionality as soon as the page loads:
```js
  window.onload = event => {

  }
```

17. The `.onAuthStateChanged()` method observes whether or not a user is signed in: if so, it makes the data for that user available to us, if not we can redirect that user back to the sign in page to log in. We are defining `googleUser` here, but want to make it global so that we can call it from another function that we'll write later on. For this reason, have students declare the `googleUser` variable by adding this code to the very top of their script file: `let googleUser;`.
```js
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('Logged in as: ' + user.displayName);
    googleUser = user;
  } else {
    window.location = 'index.html'; // If not logged in, navigate back to login page.
  }
});
```

18. It's now time to write the logic to create a new note and save it to the database. Give students a chance to explore documentation to see if they can figure how to write to realtime databases. Then solicit their help in guiding you through implementing this in the app. 

19. Write the shell of the function that will handle submitting a new note and persist this data to our realtime database.
  ```js
  const handleNoteSubmit = () => {

  }
  ```

20. Inside of our function a couple of things need to happen. Add comments to make our next steps more clear.
```js
const handleNoteSubmit = () => {
  // 1. Capture the form data
  // 2. Format the data and write it to our database
  // 3. Clear the form so that we can write a new note
}
```

21. Capture the form data. We'll use query selectors to select the input fields in our form.
```js
const handleNoteSubmit = () => {
  // 1. Capture the form data
  const noteTitle = document.querySelector('#noteTitle');
  const noteText = document.querySelector('#noteText');
  // 2. Format the data and write it to our database
  // 3. Clear the form so that we can write a new note
}
```

22. Format the data and write it to our database. In order to write to our database, we need to reference the endpoint where it will be stored. 
We'll call `firebase.database().ref()` and in the `.ref()` method we'll pass in the path to the user's data. Here we can use the `googleUser` variable that we defined earlier. Inside this variable we stored some data about our user. We can use this variable to access our user's user id, and use that to route us to their data (`users/${googleUser.uid}}`).
```js
const handleNoteSubmit = () => {
  // 1. Capture the form data
  const noteTitle = document.querySelector('#noteTitle');
  const noteText = document.querySelector('#noteText');
  // 2. Format the data and write it to our database
  firebase.database().ref(`users/${googleUser.uid}`).push({
    title: noteTitle.value,
    text: noteText.value
  })
  // 3. Clear the form so that we can write a new note
}
```

23. Clear the form so that we can write a new note. 
```js
const handleNoteSubmit = () => {
  // 1. Capture the form data
  const noteTitle = document.querySelector('#noteTitle');
  const noteText = document.querySelector('#noteText');
  // 2. Format the data and write it to our database
  firebase.database().ref(`users/${googleUser.uid}`).push({
    title: noteTitle.value,
    text: noteText.value
  })
  // 3. Clear the form so that we can write a new note
  .then(() => {
    noteTitle.value = "";
    noteText.value = "";
  });
}
```

## Finished Code

The final code for today can be found in `day11/day11_final/firebaseNotes`.

## Extensions for Independent Practice

### Mild

- Add a `created` field to the database schema that contains a timestamp for when the note was saved to the database. 
- Add a welcome message to individually greet your user once they've logged in. 

### Medium

- Add a `labels` field to your schema that stores an array of user generated labels. In your HTML add an additional field that allows users to add labels that categorize each note (ie: 'work', 'personal', 'CS tutorials', etc.).

### Spicy

- Implement an additional sign-in flow. Allow users to choose to sign in via their Google account, or with a username and password. This exercise is just for practiceand learning purposes. Keep in mind that in a real-world app you would **NEVER** store passwords as unencrypted strings. Until you have a better understanding of web security in general, it's better to use the authentication flow provided by companies like Google or Facebook when building apps. 

