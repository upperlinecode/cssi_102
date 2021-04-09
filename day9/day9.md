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

Today we will use the Firebase API to write to our realtime database. We can use the Firebase console as the source of truth for these types of operations. From there we can see any changes we make to our realtime database.

## Starting Code

Starter code can be found in the `day9_starter` directory. 

## Stepped Solution

1. Start off by adding a function to `writeMessage.js` where students will write logic to send a message to the database.
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
  const passcodeInput = document.getElementById('passcode').value;
  const messageInput = document.getElementById('message').value;
}
```

6. Use the Firebase API to push our data to the realtime database. Have students navigate to the Firebase console to confirm that their data was successfully added. Point out that by using the Firebase API, unique keys are automatically generated for us.
```js
const submitMessage = () => {
    const passcodeInput = document.getElementById('passcode').value;
    const messageInput = document.getElementById('message').value;
    
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

- At least two mild challenges
- At least two mild challenges

### Medium

- At least one medium challenge

### Spicy

- At least one spicy challenge