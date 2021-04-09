# Intro to Realtime Database Part. 1

1. [Objectives](#objectives)
2. [What We're Building](#what-were-building)
3. [Starting Code](#starting-code)
4. [Stepped Solution](#stepped-solution)
5. [Finished Code](#finished-code)
6. [Extensions for Independent Practice](#extensions-for-independent-practice)

## Objectives

- Students will initialize Firebase in a project directory.
- Students will use the Firebase API to read data from a Realtime Database.
- Students will interact with the DOM to render data onto their HTML page.

**Key vocabulary: Firebase emulators, iteration, DOM (Document Object Model)**

## What We're Building

Over the next couple days we'll be building a secret messaging app that we can use to communicate with friends. Today we'll focus on reading data from out database and render that data as HTML. We'll connect the Firebase project that we created yesterday to our `secretMessageApp` repository then use the Firebase API to retrieve data and make our page dynamic. 

## Starting Code

Starter code can be found in the `day8_starter` directory. 

## Stepped Solution

1.  Have students follow these steps to initialize a Firebase project in their `secretMessageApp` directory. 
* In their Firebase console, select the `secret-message-app` project that they built yesterday. 
* Under "Get Started" select web, to get started initializing a web app with Firebase. 
* Give the app a nickname. It can be named the same as your Firebase project, or something different. This is just a name to represent the app within the Firebase console. 
* Select "Also set up Firebase hosting".
* Click "Register App". Step through the rest of the set up, and click "Continue to console".

2. There are multiple ways to initialize Firebase in a project directory. One of the simplest ways to do this is through hosted URLs that we can plug into our application. Since students have set up hosting, these urls are available to use. Have students load up the necessary Firebase libraries by adding this code to the head of their `index.html` file:
```html
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script defer src="/__/firebase/8.3.1/firebase-app.js"></script>
<!-- include only the Firebase features as you need -->
<script defer src="/__/firebase/8.3.1/firebase-auth.js"></script>
<script defer src="/__/firebase/8.3.1/firebase-database.js"></script>
<!-- 
      initialize the SDK after all desired features are loaded, set useEmulator to false
      to avoid connecting the SDK to running emulators.
    -->
<script defer src="/__/firebase/init.js?useEmulator=true"></script>
```

3. In Cloudshell, `cd` into the `secretMessageApp` project directory. In the terminal, type `firebase login`. If prompted, students should login with the Google account that they've used to create their Firebase project.

4. Run `npm install -g firebase-tools`.

5. Have students `firebase init` and follow the prompts to initialize Firebase in their project.
  * Which Firebase CLI features do you want to set up for this folder? Database, Hosting, Emulators
  * Project Setup: Use an existing project (to-do-list)
  * Initialize RTDB
  * What file should be used for Realtime Database Security Rules? Default
  * What do you want to use as your public directory? Default
  * Configure as a single-page app (rewrite all urls to /index.html)? No
  * Set up automatic builds and deploys with GitHub? No
  * Which Firebase emulators do you want to set up? Database, Hosting (Setting up the database emulator is optional here)
  * Use default ports for emulators

6. Students can confirm that everything is working properly by running the command `firebase emulators:start --only hosting`.
> **Note:**
>
> In order to read the data that students created in their database yesterday, they should only run the hosting emulator. If students have set up the database emulator, and exclude the `--only hosting` flag, they would need to create dummy data from scratch and would lose it every time they shut down and restarted their emulators. It is worthwhile for them to be aware of the database emulator as they can use it to test their database in the future. 

7. In `viewMessages.js`, have students add this code:
```js
const getMessages = () => {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    });
}
```

8. Have students add a `console.log()` to their `getMessages()` function to confirm that they recieved data. Emphasize the value of printing to the console in testing out code as you build. Encourage students to be generous with adding `console.log()` statements as they continue to write the logic for their app. 

9. Use the DOM to capture the value of the input field. Use a `for...in` loop to iterate over the returned JSON, and search for the message that match the secret passcode. Remind students that they may have used iteration with arrarys with `for` loops, and that `for...in` loops are similar, but meant to be used with objects.
```js
const findMessage = (messages) => {
    const passcodeAttempt = document.getElementById('passcode').value;
    for(message in messages) {
        const messageData = messages[message];
        if(messageData.passcode === passcodeAttempt) {
            // Code to hide input form, and render message as HTML
        }
    }
}
```

10. Add functionality to render the message as HTML in our `viewMessage.html` file.
```js
const renderMessageAsHtml = (message) => {
    // Hide Input Form

    // Render messageas HTML
}
```

11. It is possible to render the message on the same page by using the DOM to hide the input field. It is worth a brief explanation of the DOM to students to help them understand how we are able to use JS to interact with our HTML. 
```js
const renderMessageAsHtml = (message) => {
    // Hide Input Form
    const passcodeInput = document.getElementById('passcodeInput');
    passcodeInput.style.display = 'none';
    // Render message as HTML
}
```

12. Inject the message into the `viewMessages.html` page.
```js
const renderMessageAsHtml = (message) => {
    console.log(message)
    // Hide Input Form
    const passcodeInput = document.getElementById('passcodeInput');
    passcodeInput.style.display = 'none';
    // Render message as HTML
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message;   
}
```

## Finished Code

The finished code for today's code along can be found in the `day8_final` folder.

## Extensions for Independent Practice

### Mild

- Allow users to enter another passcode to view another message. This will involve adding a button, and toggling the input field.
- Second mild challenge

### Medium

- Return an error to the user if the passcode doesnt match any of the messages. 

### Spicy

- Limit user to a certain number of attempts before blocking them from trying again.
- If you were able to complete the previous challenge, try adding a time out feature that will allow the user to try entering the passcode again after a set amount of time has elapsed. 