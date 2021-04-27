# Language Grid Guessing Game

1. [Objectives](#objectives)
2. [What We're Building](#what-were-building)
3. [Starting Code](#starting-code)
4. [Stepped Solution](#stepped-solution)
5. [Finished Code](#finished-code)
6. [Extensions for Independent Practice](#extensions-for-independent-practice)

## Objectives

- Students will use the `"change"` event listener to listen for submissions in a text field.
- Students will use `if...else` control flow to respond differently to different inputs.
- Students will use the compound "or" (`||`) operator. 
- Students will use the `".classList.remove()` method to remove classes from HTML elements.

**Key vocabulary: classList, property, method**

## What We're Building

We're building a sporcle-style quiz to celebrate some of the many different languages spoken in the United States.

## Starting Code 

Note: The JavaScript starter code has a lot of the busywork done for students so that it doesn't become a major expenditure of time, but it also includes lots of errors for students to fix so that they have an opportunity to practice solving common problems with the `.querySelector()` method. You can start with less JavaScript if you think your students need more practice writing it out, or you can start with the errors already fixed if you don't think this practice would be productive for them right now. 

###### Starting HTML
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to the Zoo!</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
  <link rel="stylesheet" href="style.css" type="text/css">
</head>

<body>
  <section class="hero is-small notification is-info has-text-centered">
    <div class="hero-body">
      <p class="title">
        Language Quiz
      </p>
      <p class="subtitle">
        Can you guess the top 9 languages spoken in the United States?
      </p>
    </div>
  </section>
  <div class="container">
    <section class="section">
      <h1 class="title">Make some guesses!</h1>
      <h2 class="subtitle">
        Type your guesses below! If you get a match, it should show up instantly.
      </h2>
      <input id="guess" class="input is-primary is-large" type="text" name="language" placeholder="Guess a language!">
    </section>
    <section>
      <div class="tile is-ancestor">
        <div class="tile is-parent is-4">
          <div class="tile is-child notification is-info" id="English">
            <p class="title">English</p>
            <p class="subtitle">Hello World</p>
          </div>
        </div>
        <div class="tile is-parent is-4">
          <div class="tile is-child notification is-info" id="Spanish">
            <p class="title">Spanish</p>
            <p class="subtitle">Hola Mundo</p>
          </div>
        </div>
        <div class="tile is-parent is-4">
          <div class="tile is-child notification is-info" id="Chinese">
            <p class="title">Chinese</p>
            <p class="subtitle">你好世界</p>
          </div>
        </div>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child notification is-info" id="Tagalog">
            <p class="title">Tagalog</p>
            <p class="subtitle">Kamusta sa Mundo</p>
          </div>
        </div>
        <div class="tile is-parent is-4">
          <div class="tile is-child notification is-info" id="Vietnamese">
            <p class="title">Vietnamese</p>
            <p class="subtitle">Chào thế giới</p>
          </div>
        </div>
        <div class="tile is-parent is-4">
          <div class="tile is-child notification is-info" id="Arabic">
            <p class="title">Arabic</p>
            <p class="subtitle">مرحبا بالعالم</p>
          </div>
        </div>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-parent is-4">
          <div class="tile is-child notification is-info" id="French">
            <p class="title">French</p>
            <p class="subtitle">Bonjour le monde</p>
          </div>
        </div>
        <div class="tile is-parent is-4">
          <div class="tile is-child notification is-info" id="Korean">
            <p class="title">Korean</p>
            <p class="subtitle">안녕하세요 세계</p>
          </div>
        </div>
        <div class="tile is-parent is-4">
          <div class="tile is-child notification is-info" id="Russian">
            <p class="title">Russian</p>
            <p class="subtitle">Привет мир</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  <footer class="footer notification is-info mt-5 mb-0">
    <div class="content has-text-centered">
      <p class="subtitle">
        Thanks for playing!
      </p>
      <p>Source: <a
          href="https://www.accreditedlanguage.com/languages/the-10-most-popular-languages-in-the-us/">Accredited
          Language Services</a>, translations of "Hello World" prodived by Google Translate</p>
    </div>
  </footer>
  <script src="" type="text/javascript" defer></script>
</body>

</html>
```

###### Starting CSS
```css
.hidden {
  display: none;
}
```

###### Starting JavaScript
```javascript
console.log("script running");

// Fix these querySelectors so that they each select the correct element. 
const englishTile = document.querySelector("#English");
const spanishTile = document.querySelector("#Spanish");
const chineseTile = document.querySelector("#chinese");
const tagalogTile = querySelector("#Tagalog");
const vietnameseTile = document.queryselector("#Vietnamese");
const arabicTile = document.querySelector("#");
const frenchTile = document.querySelector("#French");
const koreanTile = document.querySelector("Korean");
const russianTile = document.querySelector("#Russiian");

console.log(englishTile);
console.log(spanishTile);
console.log(chineseTile);
console.log(tagalogTile);
console.log(vietnameseTile);
console.log(arabicTile);
console.log(frenchTile);
console.log(koreanTile);
console.log(russianTile);

// Add the id of the input field so we can access it!
const inputField = document.querySelector("#");
```

## Stepped Solution

1. Share the finished example and talk students through the roadmap of features we'll need to build to make this work.

2. Share out the starter code, and ask or talk through why the "script running" and other console messages aren't showing up in the console. Add the correct `src` to the `<script>` tag to fix this.

3. Point out that most of the `.querySelector()` methods start off with errors, and give students their first task: Solve those errors!

4. Next, have students look at the HTML to figure out how to complete the `.querySelector()` for the input field, and complete that together. 

5. Add a `"change"` event listener and a `console.log("Guess submitted!")` to test whether it's working. Show students how to test this with the "return" key. 

6. Point out that right now, all our tiles start off visible, but we want them hidden until it's time to display them, so we'll fix this before finishing the event. Show the custom-made `.hidden` class selector in the CSS file, and then add the `"hidden"` class to the English tile. Demonstrate that this makes it completely hidden, but still visible in the HTML inspector. 

7. Add `console.log(englishTile.classList)` and `console.log(spanishTile.classList)` right after all our querySelectors to show that each element has its the classes stored in a **property** called `classList`. Since we've added it to the English tile, but not the Spanish one, the ClassList for the English tile is one item longer. We'll eventually make it reappear by removing `"hidden"` from this list. 

8. Add (or have students add) a `"hidden"` class to all the language tiles.

9. Return to the event listener, and add `let guess = inputField.value` and `console.log(guess)`. Test this version and demo that the `.value` **property** shows what the user has typed into that field. 

9. Add our first conditional statement, as shown here:
```javascript
inputField.addEventListener("change", (e) => {
  console.log("Guess submitted!");
  let guess = inputField.value;
  console.log(guess);
  if (guess === "English") {
    englishTile.classList.remove("hidden");
  }
```

10. Test this with students - at least one person will use a lowercase letter "e", and the event will not work for them. This is the perfect chance to introduce the "or" (`||`) operator. Revise the condition to be `(guess === "English" || guess === "english")`.
    * While methods like `.toLowerCase()` are probably much better ways of handling case-sensitivity, the idea of compound logical operators is a more universal and versatile concept. Some advanced students may research the `.toLowerCase()` method and use it instead, and that's fine, but it's not critical for all students at this juncture. 

11. Consider adding `inputField.value = ""` to the end of this event's arrow function to auto-clear the field after every guess.

12. Celebrate that it's mostly working, and then add in the next two tiles so that students can see the `else if` syntax in action.

13. Launch students into independent practice with a deliberately incomplete project. They need to practice writing conditionals in small groups or on their own! 

## Extensions for Independent Practice

### Mild

- Add in an `if` statement for each of the remaining six tiles. 
- Customize the colors of each tile to brighten up the game. 

### Medium

- Add in another row of tiles, and add in the next three languages. Code out their functionality accordingly. 
- Figure out a way to keep track of how many correct guesses a user has made. Give them a congratulations message if they get them all.
- Change the topic of the game entirely. This could / should be a quiz about something interesting to you, like the top 10 restaurants in your neighborhood, or the top 5 characters in your favorite show!

### Spicy

- Right now, this is all pretty repetitive. Can you figure out a way to write this as a loop, an array, or an object that could help circumvent the very repetitive if-else tree currently in use?
