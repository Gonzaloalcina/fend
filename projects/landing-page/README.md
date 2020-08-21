# Landing Page Project

## Description

This is the second project of the Front End's Udacity's Nanodegree. With a starting html and css, I wrote the js and some extra html and css that made the page dynamic.

* Creating a dynamic menu bar with list items. The number of sections on the web generates this items using the function `<navBuilder>` that you can see on the js code. This functions uses a `<forEach>` loop and <`innerHtml>` to build the nav.
* Highlight active sections when they are in the viewport, also the nav item list that correspond to this section highlights too. This function is called `<sectionActive>` and works with sections and nav items. To link nav items with sections I gave a dynamic class to the list items with the same id of the sections. The function uses a `<for loop>` with and `<if else>` condition. Finally, we call the function on scroll.
* Scroll to anchor ID with smooth behavior using a `<forEach>` loop and an `<eventListener>`.
* Build a scroll to top button that appears when the user scrolls below the fold of the page. To create this button I've used a [fontawesome] (https://fontawesome.com/) icon with an arrow. I think that fits better with the syle of the page, also, this icon has an `<eventListener>` on click to smooth scroll up.

## Tools

* Visual Studio Code - Development
* Notion - For notes and drafts
