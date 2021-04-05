# GifFinder

1. [Objectives](#objectives)
2. [What We're Building](#what-were-building)
3. [Starting Code](#starting-code)
4. [Stepped Solution](#stepped-solution)
5. [Finished Code](#finished-code)
6. [Extensions for Independent Practice](#extensions-for-independent-practice)

## Objectives

- Students will make a call to an API Endpoint in the browser.
- Students will use `fetch()` to make a call to an API Endpoint. 
- Students will use `.then()` and `.catch()` to handle responses from an API endpoint. 
- Students will render content from an API call in their `index.html` files. 

**Key vocabulary: API, API Call, API Endpoint, Request, Response, JSON**

## What We're Building

In this project, we'll make our first ever call to an API endpoint using the Giphy API to search for gifs based on a user's query. In many ways, this is a mini-intro to Firebase, in that conceptually, we're sending and receiving data in JavaScript.

## Starting Code

Note: This lesson assumes that students have mastered all the JavaScript concepts we've covered so far. That may not be the case, so you may want to remove some chunks of the starter JavaScript to create space for students to practice those concepts. 

###### Starting HTML
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>GifMaker!</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css" />
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <section class="hero is-small is-primary has-text-centered">
    <div class="hero-body">
      <p class="title">
        Welcome to the GifFinder!
      </p>
      <p class="subtitle">
        Gifs like grandma used to make :)
      </p>
    </div>
  </section>
  <div class="container">
    <section class="section">
      <h1 class="title">Ingredients</h1>
      <h2 class="subtitle">
        Go ahead and let us know what kind of gif you'd like us to cook up for you!
      </h2>
      <input id="search" class="input is-primary is-large" type="text" placeholder="Enter a search term">
      <div class="mt-4">
        <button id="submit" class="button is-large">Gif-it!</button>
      </div>
    </section>
    <section class="section">
      <h1 class="title">Results</h1>
      <h2 class="subtitle">
        Your gifs will appear below:
      </h2>
      <div id="imageholder">
        <img src="https://i.pinimg.com/originals/2e/a1/1e/2ea11ee6a5ef8b94da9f0659f92904df.jpg"
          alt="Close up of a tiny pig" />
      </div>
    </section>
  </div>
  <script src="/script.js" defer></script>
</body>

</html>
```

###### Starting CSS
```css
#imageholder {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

#imageholder img {
  height: 250px;
  margin-bottom: 30px;
}
```

###### Starting JavaScript
```javascript
console.log("Script running");

// We'll want to get some random integers, and that isn't built right into JavaScript.
// Here's a pre-built function that will do it for ya. 
const getRandom = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

// Capture the three major foci of user interaction in variables.
const submitButton = document.querySelector("#submit");
const queryField = document.querySelector("#search");
const imageHolderDiv = document.querySelector("#imageholder");

// Log the elements to confirm that the querySelectors worked.
console.log(submitButton);
console.log(queryField);
console.log(imageHolderDiv);

submitButton.addEventListener("click", (e) => {
  let myKey = 'YOUR_API_KEY_HERE';
  let topic = queryField.value;
  console.log(topic);
})
```

## Stepped Solution

NOTE: You can definitely cover this content without getting deep into the theory of APIs and skip straight into Part 2 below. However, APIs are a pretty complicated topic for first-time users, and the `fetch().then().then().catch()` syntax feels inscrutable without knowing what you're waiting for in the `.then()` callbacks. 

The Prelude and Part 1 of this lesson are both meant to support students who haven't covered APIs, and therefore may not have thought about accessing a webpage as a request and response. 

This is one of the longest walkthroughs we've done so far, but it's not actually critically important to move ahead into additional content. If students are in the panic zone, it's entirely possible to skip this discussion of APIs in favor of a much simpler project that reviews content from week 1, or to use this day as a way to jump start week 2 by doing some isolated practice with just command line. 

### PRELUDE: What is an API?

Show students an example of an API in action. The lowest-touch example might be any site that populates the city and state based on a zip code, or any site with an embedded Google Map (like airbnb). In fact, not only is airbnb using an API, it's using the *Google Maps API*. 

Pause to mention that API stands for **Application Program Interface**. Talk about the fact that you'll likely want to use an API anytime you want to interact with a large base of information that someone else has already created, especially when recreating that information yourself would require prohibitive time and effort.

Point out that requesting information from an API can often cost money - usually tiny amounts that add up over time - but that we'll be focusing on APIs which can be used for free. 

### PART 1: APIs in the Browser

NOTE: This section is written as a script you can use with students - you're welcome to use it as-is, or to adjust it to your voice. This script hyper-emphasizes a lot of new vocabulary.

Before we start coding, let's spend some time talking about how an API works, and how we request information from an API. 

Normally, if we look at a web page like `google.com`, we're **REQUESTING** information from a server. That server sends back some HTML (and usually some CSS and some JavaScript as well) in the form of a **RESPONSE**. We generally don't think of that response as being a set of `.html`, `.css`, and `.js` files, we generally just think of that whole collection of code in three different languages as a "webpage."

But we can request a whole lot more than just webpages, and we can get lots of other responses back besides just HTML documents. 

Many API's send us back information in a format called **JSON**, which stands for **JavaScript Object Notation**. Rather than describe it to you, let's just play with it. 

Use the following URL to **REQUEST** a JSON **RESPONSE** from an API called jService - an API devoted entirely to questions from the TV show *Jeopardy*. 

> Pause to describe Jeopardy if students haven't ever seen it. 

```
https://jservice.io/api/random
```

If this API call worked, each of you **REQUESTED** a random Jeopardy question from the `/random` **ENDPOINT**, and each you got a random **RESPONSE** from the jService API. 

If you're using Firefox, the JSON **RESPONSE** may have been formatted automatically, so it might be easy to read already. If you're using Chrome, you may wish to add a JSON viewer plugin. [JSONview](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc) is a really simple one that works well.

> If you have time, pause to play a game, and let some students ask their questions to the class. Follow up each by asking how many points that question is worth, and maybe even what category it's from.

I didn't just guess that there would be a `/random` endpoint, by the way. We could try making up an endpoint like `/coolClue`, but it probably won't work. 

```
https://jservice.io/api/coolClue
```

We got a message that said "The page you were looking for doesn't exist" - and if we open up the JavaScript console, we'll see a familiar **RESPONSE CODE**: 404 (Not Found). We'd definitely rather get a 200 (Success) code. 

So since I didn't guess, where did I figure out that `/random` will work? I looked at the [jService Documentation](https://jservice.io/) to see their list of endpoints and found one that worked for me. 

The random endpoint is cool, but sometimes the questions that come back are a little outside my area of expertise. I want to find a really good category, so I am going to **REQUEST** something from the `categories` endpoint. 

```
https://jservice.io/api/categories
```

This doesn't seem quite right, though. It's just a single category called "prehistoric times" - I asked for categor**ies**, not just the first one on the list. 

Well, turns out most API endpoints are designed to conserve data. So if I'm not specific in what I ask for, I'm going to get the bare minimum back. That's why I'll need to add some **query parameters** to my request. To show that I'm done talking about the endpoint in my request, and am moving on to the specifics of my **query**, I'll add a `?` question mark to the URL I'm requesting. Then I'll add in the options that I want. 

```
https://jservice.io/api/categories?count=20
```

This is cool, but still didn't include any categories that struck my eye, so I'll try adding another option to look at 20 categories starting at the 21st category. 

```
https://jservice.io/api/categories?count=20&offset=21
```

Even looking at the second set of responses, I still didn't see one I loved, so I actually checked out the ["popular categories" documentation](https://jservice.io/popular) and found one I really liked. Category 105 is called "three-letter words", and those are really less like trivia, and more like races or puzzles. 

Let's use the `/clues` endpoint to look for clues from a specific category. 

```
https://jservice.io/api/clues?category=105
```

So we've finally done it - we've got a huge chunk of questions that could make for a really fun game!

> Consider pausing here to play a game with the questions, allowing students to ask and answer questions. 

So now that we've established what APIs are, and how we can request JSON reponses from them, we're ready to build a webpage which uses the Giphy API. 

### PART 2: APIs in JavaScript

1. Share this [working preview](https://giphy-api-demo-cssi.glitch.me/) with students and let them demo the app. 

2. Share out the starter code and help students think through the features we'll need to add to finish this version. A lot of it is already made. 

3. Have students head to developers.giphy.com and sign up for a developer account. 

4. Guide students through creating an app called "GifFinder" on their developer dashboard at giphy. Giphy will push the SDK instead, but emphasize that we're learning to use APIs. Help students find their API keys. Pause to explain the purpose of API keys, and to emphasize the importance of keeping them private. Name that we're not doing a *great* job of this here, but we will work on improving that starting later this week. 

5. Have each student replace the text `"YOUR_API_KEY_HERE"` in the starter code with their respective API key. 

6. Add the following lines of code to your event listener arrow function:
```javascript
let myQuery = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${topic}`;
console.log(myQuery);
``` 

7. Guide students to click on the link that gets logged to the console and open in a new tab to show that it will indeed get us the info we want (a series of gifs per the topic).

8. This is our first encounter with String templating/formatting in JavaScript, but students tend to pick it up quickly. Feel free to use concatenation instead if you prefer, but this tends to work just fine.

9. Next, it's time to walk through the `fetch` syntax. We're going to *briefly* touch on promises here, but in no great depth. Start with `console.log(fetch(myQuery))` to show the first promise. The idea that "fetch" means "go get this data" isn't that surprising, but the fact that it returns a promise instead of the data we asked for is less intuitive. Explain that JavaScript is using fetch to make the request, but is ready to move on and run other processes while we wait on a response. Until that happens, and while JavaScript does other stuff, there will be a `promise` placeholder. 

10. What we want to do is wait for that response to come (or, to put it another way, we want to wait for that promise to resolve), and **then** take action. Replace the earlier console.log statement with this:
```javascript
fetch(myQuery)
  .then(response => console.log(response))
```

11. Point out that we've got a response, but the FULL response isn't back yet - just the headers with information like the response code (200, and not 404, which is good!), so we need to specifically read the rest of the data as it comes in. Replace the earlier JavaScript with this:
```javascript
fetch(myQuery)
  .then(response => response.json())
  .then(myjson => {
    console.log(myjson);
  })
```

12. Depending on where your students are, you may want to take some time to explore the json that is logged out. Chrome has a built-in "copy property path"  when exploring json data in the console that can make finding an image url very simple, but feel free to pause and explore here. Once you're satisfied that students understand this, update the code as follows:
```javascript
fetch(myQuery)
  .then(response => response.json()) // read JSON response
  .then(myjson => {
    // code to execute once JSON response is available
    let imgurl = myjson.data[2].images.downsized.url;
    console.log(imgurl);
    imageHolderDiv.innerHTML = `<img src="${imgurl}"/>`
  })
```

13. This isn't our first encounter with `.innerHTML`, but you may want to pause here to review it. 

14. Name that even though it can work in most browsers just like this, it's good practice to also be ready for errors. APIs are updated often, and just because something works today doesn't mean it will work in the future. Let's finish it off with the `.catch()` after our last `.then()` closes:
```javascript
.catch(error => {
  console.log(error); // Log error if there is one (we can add more sophisticated handling later)
})
```

15. Pause here and name two ways our code could be improved. First, we're always getting the same image from a search (the third one, at index `2`). Second, our new image always replaces the old one. Neither of these things NEEDS to be addressed, and student patience may be wearing thin since this is a long code-along, so you can decide whether or not to address these last two pieces.

16. On the line before we capture our `imgurl` variable, add `let i = getRandom(10);` to get a random number between 0-9 - the 10 is arbitrary, but the gifs get stranger the deeper you go into the response, and there are only 50 anways. Then, replace the hard-coded `2` with the variable `i`. Now we'll get a random choice from our top 10 gifs in the json response.

17. Instead of replacing the `.innerHTML`, we could add to it. The easiest way to do this is by resetting the `.innerHTML` to whatever it used to be, plus our new image element. If we want our new image element to be in front, we'll write that code like this:
```javascript
imageHolderDiv.innerHTML = `<img src="${imgurl}"/>` + imageHolderDiv.innerHTML
```

18. OPTIONAL: You may notice that the model has a high likelihood of returning cat gifs. That's because the query in the model is slightly different - it concatenates the word "kitten" onto the end of the query. If students want to theme their apps in a similar way, they should absolutely do so! Feel freet to share this line of code with them as a reference. 
```javascript
let myQuery = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${topic}+kitten`;
```

## Extensions for Independent Practice

### Mild

- Change the title and subtitle of this application! Personalize it and make it your own. 
- Update the colors to your liking - right now it's green, but you can and should customize it!
- Add a footer at the bottom of the page. You'll want to consult Bulma documentation for this. 

### Medium

- If you didn't go over it in the code-along, think about how you could modify the query so that all the gifs your users get fit a theme. The model modified the queries to make the responses all be a little bit cat-related.
- If you didn't go over how to do it in class, find a way to get a random gif out of the 50 that come back in the response, instead of always getting number `2` instead. 

### Spicy

- Earlier today, we looked at the jService API - can you think of a way to build an interactive Jeopardy game using what we learned from that app?
- There are hundreds of other free APIs out there. There's at least one good one for movies, about a dozen good ones to get the weather, and even one that returns data about Pokemon. Pick one you like and build something like this for it.