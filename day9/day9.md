---
layout: lesson
title: Day 9 - Realtime Database Part 2
pos: 2109
published: true
instructor: true
type: lesson
subunit: firebase
level: core
---

# Intro to Realtime Database Part. 2

1. [Objectives](#objectives)
2. [What We're Building](#what-were-building)
3. [Starting Code](#starting-code)
4. [Stepped Solution](#stepped-solution)
5. [Finished Code](#finished-code)
6. [Extensions for Independent Practice](#extensions-for-independent-practice)

## Objectives

- Students will use the DOM to capture user input.
- Students will use the Firebase API to write data to their realtime database.
- Students will use the Firebase console as the source of truth for database operations. 

**Key vocabulary: event handler, write operation**

## What We're Building

Today we will use the Firebase API to write to our realtime database. We can use the Firebase console as the source of truth for these types of operations. From there we can see any changes we make to our realtime database. Today's lesson is intentionally short. Use the remaining time to review any concepts from the last week that students might have struggled with, or that feels important to reinforce as students prepare to enter project mode tomorrow. 

## Starting Code

Starter code can be found in the `day9_starter` directory. 

## Stepped Solution

1. Start off by adding a function to `writeMessage.js` where students will write logic to send a message to the database. Students will also want to run `firebase emulators:start --only hosting`. This will start their emulators so that they can test their project. It will only run the hosting emulator, but not the database emulator. This way, when students write data to the database, it will persist. Students can run all emulators with this line: `firebase emulators:start`, but should be aware that any data they write to their database will not persist once they shut down their emulators. 

```js
const submitMessage = () => {

}
```

2. Emphasize the concept of testing early and often. Explain that before writing logic it is a good idea to use `console.log()` to confirm that our script file is properly linked to our HTML. 

3. When students realize that the `console.log()` statement prints nothing, walk them through the steps of confirming that the Javascript file is linked to the `index.html` header. Guide them to the realization that the "Send Message" button isn't triggering any functionality. Explain event handlers and how they allow us to add interactivity and logic to our currently static site.

4. Add a click handler to the "Send Message" button. Then test the `submitMessage()` function again.
```html
<button class="button is-block is-fullwidth is-primary is-medium is-rounded" onclick="submitMessage()">
  Send Message
</button>
```

5. We'll be using the DOM again to capture input from our form. Probe students for understanding of the DOM, before writing out the code. 
```js
const submitMessage = () => {
  const passcodeInput = document.querySelector('#passcode').value;
  const messageInput = document.querySelector('#message').value;
}
```

6. Use the Firebase API to push our data to the realtime database. Point out that by using the Firebase API, unique keys are automatically generated for us. Students can confirm that their data was added by navigating to the Firebase console (<a href="https://console.firebase.google.com/">https://console.firebase.google.com/</a>) and clicking "Realtime Database" in the left-hand menu. They should be able to view a string (or list of strings) of random characters, which is the unique key for that piece of data. Clicking on that unique key will reveal their data. If students are running the database emulator, they will have to open the emulator UI to see their data. The link for the emulator UI can be found in the terminal.
```js
const submitMessage = () => {
    const passcodeInput = document.querySelector('#passcode').value;
    const messageInput = document.querySelector('#message').value;
    
    firebase.database().ref().push({
        passcode: passcodeInput,
        message: messageInput
    })
}
```

## Finished Code

The finished code for today's code along can be found in the `day9_final` folder.

## Extensions for Independent Practice

### Mild

- Limit the number of characters that a message can be.
- Render an alert or warning message if a user attempts to create a message longer than the character limit. 

### Medium

- Set restrictions for the user generated password. For example, the password must contain at least one capital letter and one number.

### Spicy

- Write logic to randomly generate a unique key. Use this to identify each data node, instead of the automatically generated Firebase key. 