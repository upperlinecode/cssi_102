---
layout: lesson
title: Day 3 - JavaScript Zoo
pos: 2103
published: true
instructor: true
type: lesson
subunit: firebase
level: core
---

# JavaScript Petting Zoo

1. [Objectives](#objectives)
2. [What We're Building](#what-were-building)
3. [Starting Code](#starting-code)
4. [Stepped Solution](#stepped-solution)
5. [Finished Code](#finished-code)
6. [Extensions for Independent Practice](#extensions-for-independent-practice)

## Objectives

- Students will connect a local JavaScript file within their HTML.
- Students will use `document.querySelector` to access DOM nodes in their JavaScript. 
- Students will use `.addEventListener` to add click events to their HTML elements.
- Students will use `.innerHTML` to modify content on their page in response to user interactions. 

**Key vocabulary: DOM, Selector, Event, Constant, Variable**

## What We're Building

In order to demonstrate JavaScript DOM manipulation, we're going to create a virtual petting zoo. Each animal in the zoo will have a button to allow for visitors to use to interact with them. 

## Starting Code

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
  <section class="hero is-small is-dark has-text-centered">
    <div class="hero-body">
      <p class="title">
        Petting Zoo!
      </p>
      <p class="subtitle">
        Welcome to the world's first digital petting zoo!
      </p>
    </div>
  </section>
  <div class="container">

    <section class="section">
      <h1 class="title">Tippy the Baby Goat</h1>
      <h2 class="subtitle">
        Tippy the baby goat walks right up to you and bonks his head against your legs. It looks like he wants to be
        pet!
      </h2>
      <figure class="image">
        <img src="https://i1.wp.com/packgoats.com/wp-content/uploads/2019/11/babygoat.jpeg?fit=1800%2C1350&ssl=1"
          alt="a cream-colored baby goat" />
      </figure>
      <p id="status1">He may bleat, but he won't bite!</p>
      <div class="mt-4">
        <button id="button1" class="button is-large">Click to pet the baby goat</button>
      </div>
    </section>
    <section class="section">
      <h1 class="title">Brodie the Bunny</h1>
      <h2 class="subtitle">
        Brodie the bunny loves gentle pets on the head! Go ahead and give him a little pet.
      </h2>
      <figure class="image">
        <img src="https://www.rd.com/wp-content/uploads/2020/04/GettyImages-694542042-e1586274805503.jpg"
          alt="close-up of small white bunny" />
      </figure>
      <p id="status2">Brodie is really quiet. He probably won't say much.</p>
      <div class="mt-4">
        <button id="button2" class="button is-large">Click to pet the bunny</button>
      </div>
    </section>
    <section class="section">
      <h1 class="title">Coco the Mama Goat</h1>
      <h2 class="subtitle">
        Coco is Tippy's mother! She loves carrots. Would you like to feed her one?
      </h2>
      <figure class="image">
        <img src="https://5.imimg.com/data5/PG/YS/MY-27909549/boer-female-goat-500x500.jpg"
          alt="white and brown female goat" />
      </figure>
      <p id="status3">Coco has had 2 carrots today.</p>
      <div class="mt-4">
        <button id="button3" class="button is-large">Click to feed the mama goat</button>
      </div>
    </section>
    <section class="section">
      <h1 class="title">Arno the Alligator</h1>
      <h2 class="subtitle">
        Please do not pet the alligator! He's not part of the petting zoo.
      </h2>
      <figure class="image">
        <img
          src="https://static01.nyt.com/images/2020/01/21/science/17TB-ALLIGATORCARCASS02/17TB-ALLIGATORCARCASS02-videoSixteenByNineJumbo1600.jpg"
          alt="alligator on a small pile of rocks in a lake" />
      </figure>
      <p>Please just look.</p>
      <p id="status3">No Touching!</p>
      <div class="mt-4">
        <button id="button4" class="button is-large is-danger">Pet the alligator anyways</button>
      </div>
    </section>
  </div>
  <script src="" type="text/javascript" defer></script>
</body>

</html>
```

###### Starting CSS
```css
img {
  max-width: 400px;
}
```

###### Starting JavaScript
```javascript
console.log("script running!");

const button1 = document.querySelector("#button1");
```

## Stepped Solution

1. Show students the finished project, and let them play with the petting zoo. Give them a chance to talk about what it does. Consider asking questions like "which animal's button do you think has the most complicated code?" Name that what brings this project to life is *JavaScript*, and so that's what we'll be using today. 

2. Share the starter code with students, have them open the preview. They're likely to notice that the page looks almost finished, but point out that right now none of the buttons do anything.

3. Open the inspector and show students how to study the HTML. If you haven't used the inspector at all in the first two days, you'll want to take extra time to point out that if they mouse over an element in the inspector, the corresponding element will be show in the browser. Demonstrate the "select an element" tool and show that you can use it to click on an element in the browser to see the corresponding HTML in the inspector.

4. Name that there are roughly 50 elements on the page, and that none of those are added to JavaScript automatically. They will have to be explicitly **selected** if we want to bring them to life. Give students time to try to identify which elements we'll need to select for interactivity. Students will likely identify the buttons, and will not likely realize we'll also need the `"status"` paragraphs - that's fine. 

5. Show students how to navigate to the JS console in their browsers. Make sure everyone is able to open their JS console before moving on, and pause briefly to explain that the console will be our primary JS debugging tool. 

6. Open the JavaScript file and point out that there should be a "script running" message logged to the console, but there isn't just yet - that's because we haven't connected the JavaScript file to our HTML file. Find the `script` tag and add `"script.js"` to the src attribute so JavaScript file runs. Confirm that everyone who is coding along sees that message before continuing. 

7. Point out that one element has already been **selected** (using a `#` to look by ID, just like in CSS) and stored in a constant. If you choose to discuss constants, do so only briefly. Then, add `console.log(button1)` and demonstrate how most browsers will not only log a lot of information about the selected element, but they will also highlight the corresponding rendered element on the page when you mouse over it in the console.
    - Using a `#` to select by ID will feel intuitive to students who have had HTML and CSS practice prior to this week, but if most of your students haven't used CSS before, you may want to pause here and explain why that `#` is so important by contrasting it with something like `querySelector(div)`. 

8. You can either repeat this process with `querySelector()` to select all four buttons, have students do this part independently for practice, or repeat this process each time you get ready to add another event. As long as you have emphasized the word "selected" each time it has been bolded in these instructions, students tend to take to `querySelector()` pretty intuitively. 

9. Add `button1.addEventListener("click", e => {})`. This is a LOT of code all at once, and it's glossing over a fair bit. Students generally handle this perfectly well, but it can be helpful to have a planned think-aloud to work in key vocabulary as you type. 
    * For example: "We're going to take button1 and add an event listener to it. We'll listen specifically for a *click* event, and that event will be fed into a function. We're going to build that function out right here with an arrow, so that event will trigger this block of code between curly braces."
    * NOTE: While this is technically a *callback* function, that vocabulary is generally not very helpful for students at this juncture. Consider glossing over that for now and coming back to it when that vocabulary feels more important. 

10. Inside the arrow function, add `console.log("Button 1 pressed!")` and show students that we have our first working button!

11. Add `alert("Meh-eh-eh-eh!")` to that first button's arrow function.

12. Celebrate! The first button is done!

13. Add `button2.addEventListener("click", e => {})`, add a `console.log("Button 2 pressed!")`, and then either ask or tell students what else (based on the finished example) should happen when button 2 is pressed. 

14. Since we're going to display the results in the `status2` paragraph, we'll need to select that as well. Add `const status2 = document.querySelector("#status2")` to your script and then a `console.log(status2)` to confirm that it has been selected. 

15. We want to change the *inside* of the `status2` paragraph, so we'll do that using the `.innerHTML` property. This will leave the opening and closing tags intact, but reset the inside to whatever we specify. Add `status2.innerHTML = "Thanks for petting the bunny! He looks really happy!"` to your arrow function for button 2.

16. Ask or tell students what's different about the third button based on what they saw in the finished version. Name that we're going to need a counter to keep track of the number of carrots. Briefly discuss `let` as a way to initialize variables, and add `let carrots = 2` to start off with the correct number.

17. Capture `status3` in a constant with a `.querySelector()`, and console.log it out to make sure it worked.

18. Add the event listener for button 3, test that it's working with a `console.log("Button 3 pressed!")`. 

19. Add `carrots = carrots + 1` and describe what that will do, and then immediately add `status3.innerHTML = "Coco has had " + carrots + " carrots today!"` and discuss what will happen here. Since this is our first exploration of concatenation in this course, it might we worth discussing Strings and how that `+` sign is assumed to mean "glue these two things together" whenever JavaScript can't reasonably sum them.

20. Ask or tell students what's different about the fourth and final button.
    * Note that the fourth button is really just additional practice. If there isn't time, the fourth button could reasonably be something that some students get to as part of independent practice. 

21. Since we're going to be manipulating a much larger chunk of the page, have students add `const zoo = document.querySelector(".container")`. Then add `console.log(zoo)` to confirm that we've done it. 

22. Add the fourth button's event listener and a console.log statement inside it to confirm that the event is firing. 

23. Add the below line of code to the event listener's arrow function. 

```javascript
zoo.innerHTML = `<h1 class="title">Due to some dangerous rulebreaking, the petting zoo is temporarily closed</h1>`
```

24. It's worth pointing out that we're using bactics for this string instead of quotation marks like we used for the rest. Point out that you can use single quotes, double quotes, and backtics to denote a String in JavaScript, and award a big high five to any student who can figure out why we can't use double quotes here.

## Extensions for Independent Practice

### Mild

- Add a fifth animal! Model it after whichever of the four example animals whose behavior you want to replicate. 
- Change at least one of the example animals to an animal of your choice, like a hamster or a lion. Modify the HTML to reflect that, and modify the event listener as well. 

### Medium

- Right now the mama goat can eat infinite carrots. That's not too realistic. Find a way to make her respond differently if she gets too many carrots. Here are some ideas of what that could look like:
    - Change the message to be something about the dangers of overfeeding, or to show that she doesn't accept carrots once she's full.
    - Disable or remove the button.
    - Create an alert.

### Spicy

- Add another button to each of the animals, and code out corresponding behaviors. The goal is to approximate a pet-keeping simulation. Here are some ideas for what those buttons might look like:
    - "Play", which increases a happiness variable, but decreases an energy variable. 
    - "Feed", which increases energy and fullness. 
    - "Brush", which increases happiness and cleanliness.
- Break the alligator button into multiple steps - when you first click it, change the button to say "are you sure?" or something similar. 