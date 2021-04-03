# Top 10 List

1. [Objectives](#objectives)
2. [What We're Building](#what-were-building)
3. [Starting Code](#starting-code)
4. [Stepped Solution](#stepped-solution)
5. [Finished Code](#finished-code)
6. [Extensions for Independent Practice](#extensions-for-independent-practice)

## Objectives

- Students will develop a working understanding of the basic design principles involved in building a simple and intuitive UI.
- Students will utilize the Bulma styling library to style a mobile-responsive, static website.
- Students will use grid and columns to build responsive page layouts.
- Students will use class names to add custom styling to their layout.

**Key vocabulary: Columns, Classes, Documentation**

## What We're Building

We're going to use the Bulma.io library to build a static website that lists our top 10 favorite songs.

## Starting Code

This starter code can also be found in `starter/part_1/index.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSSI 102's Top 10 Songs!</title>
    <!-- <script src="https://use.fontawesome.com/5cd833ef09.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"> -->
  </head>

  <body>
    <!-- HERO -->
    <section class="hero has-background-success-dark has-text-centered">
      <div class="hero-body">
        <p class="title is-size-1">
          CSSI 102's Playlist
        </p>
        <p class="subtitle is-size-3">
          Our Top 10 Favorite Tunes
        </p>
      </div>
    </section>

    <!-- ROW 1 -->
    <div class="columns is-centered">
      <!-- COLUMN 1 -->
      <div class="column is-one-third mt-4">
        <!-- CARD -->
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img
                src="https://resources.tidal.com/images/e59f5bde/ab6c/433b/b864/bd4c9374371e/640x640.jpg"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="title is-4">Good Days</p>
              <p class="subtitle is-6">SZA</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ROW 2 -->
    <div class="columns is-centered is-variable is-5">
      <!-- COLUMN 1 -->
      <div class="column is-one-quarter">
        <!-- CARD -->
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img
                src="https://images.genius.com/b874f2aa0e09f2b03d337752954c252d.1000x1000x1.jpg"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="title is-4">Les Fleurs</p>
              <p class="subtitle is-6">Minnie Riperton</p>
            </div>
          </div>
        </div>
      </div>

      <!-- COLUMN 2 -->
      <div class="column is-one-quarter">
        <!-- CARD -->
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img
                src="https://t2.genius.com/unsafe/1890x0/https%3A%2F%2Fimages.genius.com%2Fbfb3abdbdc51ed5d52dc21e998b638ab.1000x1000x1.jpg"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="title is-4">That's The Way of The World</p>
              <p class="subtitle is-6">Earth, Wind & Fire</p>
            </div>
          </div>
        </div>
      </div>

      <!-- COLUMN 3 -->
      <div class="column is-one-quarter">
        <!-- CARD -->
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img
                src="https://f4.bcbits.com/img/a4127648818_10.jpg"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="title is-4">Brush The Heat</p>
              <p class="subtitle is-6">Little Dragon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```

## Stepped Solution

1. Take 3 minutes, try to find the "ugliest" and "most beautifully designed" sites on the internet.

2. Go over as a class what 3-5 things that make the ugly sites unattractive, and the beautiful sites nice to look at.

- Emphasize: minimal layout, consistency and logical succession/hierarchy, large readable fonts, three colors max.

3. Show students a hand-drawn or digital mockup of the final project you all will be building as a class.

4. View the `index.html` page in in `starter/part_1` using Glitch web preview. Have students identify that content appears on the page but that it isn't styled.

5. Uncomment the `<script>` and `<link>` tags. Then view the refreshed web preview. Give students a chance to inspect the HTML. Solicit predictions on what each class is doing.

- Explain that linking the Bulma.io CDN in the head of our page provides us with pre-defined CSS classes that we can use to style our page.
- Talk through the classes and what they are individually doing to style our page.

6. Show documentation for Bulma.io and how it confirms our understanding of how the elements and classnames are building the hero and columns.

7. Demonstrate how we can use the documentation to learn how to add columns to our page.

8. Challenge students to use the documentation to figure out how to add a card to a column.

9. Create the third row of columns, and add three cards. Give each card an image and card content that has a song name, and the artists name. The code up to this point can be found in `starter/part_2/index.html`.

10. Explain that adding so many elements can get confusing to manage over time. Emphasize that it's good practice to add comments to section off individual rows and columns to improve readability.

11. Give students time to add a fourth row of cards to their page. The code up to this point can be found in `starter/part_3/index.html`.

12. Create a `style.css` file. Show students how to customize their page even further with element selectors or by updating existing classes or creating their own classes.

## Extensions for Independent Practice

### Mild

- Update this list to reflect *your* top 10 songs - you can even switch to a different medium like movies, shows, or tropical fish if you like. Change the cards to display your favorite songs along with their artists. 
- Update the cover art for each of the songs.
- Add at least three more songs! You can do even more if you have more songs to add. 

### Medium

- Try revising the card layout of your Top 10 Page. Instead of a row with three columns, organize your cards into five rows of two columns, or a pyramid shape.
- On Bulma's documentation, look up at least three components we haven't used yet. Pick the one that seems the most interesting to try to add it in to your site.

### Spicy

- Bulma doesn't have a ton of built-in colors. Modify the colors to match the vibe you want to create with your top 10 list. 
- Right now, each song is just a single tile. Consider making a separate `.html` page for each of your top 2-5 songs, and then put a link to each on your main page. 