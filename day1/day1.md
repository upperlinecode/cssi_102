# Restaurant Page

1. [Objectives](#objectives)
2. [What We're Building](#what-were-building)
3. [Starting Code](#starting-code)
4. [Stepped Solution](#stepped-solution)
5. [Finished Code](#finished-code)
6. [Extensions for Independent Practice](#extensions-for-independent-practice)

## Objectives

- Students will properly nest HTML elements to create a Web page. 
- Students will use semantic elements including `<section>` and `<footer>`.
- Students will consult documentation to learn to add new elements to their page. 
- Students will use element-level CSS selectors to modify the appearance of their pages. 

**Key vocabulary: Elements, Tags, Attributes, Value, Ruleset, Property**

## What We're Building

In this lesson, we'll use HTML and CSS to make a basic webpage for a website we're founding. 

INSTRUCTOR NOTE: Depending on the level of your students, the size of their screens, and the environment you're using, some students might find it instructive to try to code along with you as you work, and others might benefit from simply watching and taking notes. Sometimes it's helpful to share code with students *after* the code-along so that students who are just watching don't start out significantly behind those who prefer to try to code along, and so that students who have tried to code along, but haven't successfully followed along can either abandon their code in favor of yours, or repair their code while looking at yours.

## Starting Code

INSTRUCTOR NOTE: Even though this lesson starts with CSS, do not focus on it, or draw any attention to it at first - we'll address it later in the lesson. Some students who have seen HTML and CSS before may be tempted to focus on how & why these elements are pre-styled - if they ask, or even if they're just pointing out the answer to another student who asked, let them know that we *will* focus on that before the end of the lesson, but to stick with just HTML for now.  

###### Starting HTML
```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Pete's Pizza</title>
  <link rel="stylesheet" href="style.css" type="text/css">
</head>

<body>

</body>

</html>
```

###### Starting CSS
```css
body {
  width: 90%;
  margin: auto;
  padding: 20px;
  background-color: aliceblue;
  font: "IBM Plex Sans", sans-serif;
}

section {
  padding: 20px;
  margin: 20px;
  background-color: #d5e1eb;
}

h1 {
  text-align: center;
  font-size: 64px;
}

h3 {
  text-align: center;
  font-style: italic;
}

div {
  padding: 20px;
  margin: 20px;
  background-color: #607482;
  color: white;
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 34px;
}

h4 {
  font-size: 30px;
}

p {
  margin-top: 30px;
}

h5 {
  font-size: 30px;
  text-align: right;
}

img {
  width: 100%;
  max-width: 600px;
  margin: auto;
}

footer {
  padding: 30px;
  padding-top: 20px;
  margin-bottom: -20px;
  margin-left: -40px;
  margin-right: -40px;
  background-color: #7cbdeb;
}
```

## Stepped Solution

1. Distribute the starter code in whatever way you'd like, and ask everyone to open the `index.html` file. Point out the title element, and emphasize that it has three parts: an opening tag, contents (which may even contain other elements), and a closing tag. Pause and discuss the importance of the `/` in creating a closing tag, and then explain that about 90% of all elements we use will follow this structure of having both an opening and closing tag surrounding its contents.

2. If your chosen environment has syntax highlighting, point out how you can click on a single opening or closing tag, and that its corresponding tag will be highlighted. To really drive this home, consider clicking on a few opening tags and asking "on what line does this element end?" for each one.

3. Show the rendered html page in the browser. In Glitch, this is called the "preview", so it will be referred to as the preview for the rest of these lesson guides. Point out that right now, there's nothing on the preview at all, and then emphasize that the body has nothing in it. 

4. If you haven't yet told your students that we're building a restaurant page, do so now. If you're willing to adjust on the fly, you may want to let students vote on the name, cuisine, menu options, etc in chat, but the lesson can be successful without that.  

5. Add a `<section>` with nothing in it, and refresh the preview. Pause and explain that we're going to create three main sections - a greeting banner to welcome people to the page, an about section, and a menu. 
    * INSTRUCTOR NOTE: There's no reason to address this with students, but it's worth noting that normally, adding an empty section would have no effect. However, it should be visible thanks to the pre-written CSS selectors. This is nice because usually beginners don't get to see much purpose for using grouping elements like sections and divs at this early stage. 

6. Since we're building three sections, it might be helpful to add a label to each one. We'll use the `id` attribute, and we'll add `id="greeting"` to the **opening tag** to give an ID of "greeting to this first section.

7. Inside the greeting section, add an `h1` element with your restaurant's name and refresh the page. 

8. Add an `h3` with your restaurant's tagline or motto in it immediate after the `h1`. Refresh the page. Ask students to make some guesses about what the number in these `h*` elements might mean, or simply let them know that there are six levels of headings they might use in their page. We're going to try to use a different heading level for each type of information. 

9. Add a second `section` to your page. We'll give this one an ID of "about". Refresh the page and point out that simply giving the section an ID of "about" isn't enough for our user to see what that section is, so we'll also give it a heading. Add `<h2>About</h2>` to that section, and then add your first `<p>` element with a quick bio of your restaurant. 
    * At some point during this lesson, it's crucial that your students have a chance to look at documentation. w3schools is a really good place for HTML beginners to go and look things up, and this is a great opportunity to demo how that site addresses `h2` elements, and `p` elements, and to normalize that all good developers only memorize some things, and look the rest up - you should feel confident doing the same. 

10. Add a third section with `id="menu"` to house our menu, and like our "about" section, it will need a corresponding `h2` so that users know it's a menu. 

11. We'll want to **divide** our menu section up a little bit, so we'll use what's called a "divider" or just a "div" to each menu item its own little space to live. Add two `<div></div>`s to our menu, and then point out we now have space for two menu items on our menu. Each one will need four things: a title, a picture, a description, and a price. 

12. Code out the first `div` as follows: Let's use an `h4` for the name, a `p` for the description, and a `h5` for the price. 

13. Last, add the image. First type `<img src="" />` and pause to address two new things. 
    * First, an image can't really have things "inside" of it like most other elements can, so it's one of the few elements without a closing tag. Feel free to encourage students to use the **self-closing** syntax demonstrated here, especially if they'd like to continue to hold themselves accountable to the rule that "all tags must close". 
    * Second, talk about the `src` attribute. Name that the three most common reasons an image might not display are: 
        1. Misspelling `src`.
        2. Leaving off quotes in after the equals sign. 
        3. Forgetting to close the `img` tag with a `>` after the URL.

14. Go and find a suitable image, and paste the url into the image element. 

15. Add an `alt=""` property to the `img` element, and pause here to talk about the importance of accesibility best practices. Encourage students to add an `alt` to every `img` in the course moving forward. 

16. Repeat the previous 3 steps for the next menu item if time allows. If time is short, you can leave it blank, or just place the empty elements inside it for students to populate during independent practice. 

17. Finally, add a `footer`, add a `p` inside it, and name that we're going to use this opportunity to practice one final and very important tag. We'll use an Anchor Link (or an `a` tag for short) to create a clickable link to take you to another page. The exemplar demos this by linking to an external article about pizza, but you can adjust however you need to. 

18. Encourage students to do something for some brief independent practice. This could be as simple as filling out a menu item, or as complex as revamping the entire restaurant to their own tastes - adjust the scope of this task based on the time you have left in the lesson, but less lecture and more practice is generally better. 

19. IF students have asked, use that as a springboard to jump into a very brief explanation and exploration of the CSS. Emphasize that the chunks of code to style an element are called **rulesets** and that each rule in a rulset is made up of two things: a **property** (like background-color) and a **value** like "aliceblue". 

20. Demonstrate how to change the color of something by showing the [Google color picker](https://www.google.com/search?q=color+picker) - don't get into the nuances of hex codes or hexadecimal number systems, just name that the color picker gives us at least five different codes for any color we pick. We can use *any* of those codes; we'll start with hex since it's used fairly often. 

21. Celebrate! You and your students built a webpage together! Especially if students have had a chance to diverge in the projects they are making, try to reserve some class time to showcase those projects. 

## Extensions for Independent Practice

### Mild

- Change the name of the restaurant. 
- Personalize the about section of the restaurant. 
- Add 2-5 new menu items and round out your restaurant's offerings.
- Add another `section` to your page - maybe "location" or "contact us" might be good places to start. 
- Look up an "unordered list in HTML" and see if you can figure out a way to add an unordered list to your `about` section. If you can't think of anything to put in the list, you might use these to list out the rules for your restaurant.
- It is worth noting that Google has a style guide which sets standards for formatting code in all of the common markup and scripting languages. These guides contain conventions for everything from indentation to semi-colons to how to order classnames and attributes. Following them can drastically improve the readbility of your code and make debugging and collaborating more seamless. Spend some time perusing through Google's Style Guide for HTML and CSS and modify at least two pieces in your code to meet the style guide conventions.

### Medium

- Using an `img` element, add a photo of yourself or an avatar you like to the "About" section of the page, and maybe a 1-sentence bio about yourself. 
- Change the cuisine and all the menu offerings of this restaurant - make it your own. If you want to open up a boba shop instead of a pizza parlor, do that!
- Change the color scheme to match the branding you imagine for your restaurant. 

### Spicy

- Add another page called `menu.html`, and move your menu to that page. Figure out how to create a link from your homepage (`index.html`) to your menu page. 
- Add a third page to your site, and link it from your homepage. Try to make sure that the colors, fonts, and general layout is fairly consistent accross all your pages. 
- Try modifying all of your code for today's code-along to meet Google's HTML/CSS Style Guide standards.
