# [Planner-Perfect](https://lbernadel.github.io/Planner-Perfect/)

![Planner Screenshot](/Assets/Images/planner-page.JPG)

## Description
This goal of this assignment was to create a basic browser-based calendar application an employee who works standard business hours to easily plan their activities for the current workday. It has the following capabilities:
* Spans standard business hours (9a to 5p)
  - Time is broken into hour-long blocks
  - Uses colors to highlight past, current and upcoming events of the day
* Current date is displayed at the top
* Fields to hold user input with the capability to save for future access

Relevant concepts taught this week: jQuery, Data Persistence

## Challenges
I wasn't sure how to interact with `localStorage` properly for the different text fields because I haven't done that before. This was also my first exposure to the moment.js object; understanding the formatting was clear but interacting with it was not.

I also learned that jQuery doesn't like to use  the `#id` selector while trying to grab the text in the `textarea`s...and that's where the usefulness of `data-` attributes came through for me.

Don't try to understand simple solutions when you're deliriously tired. That wasted a lot of time for me in the beginning stages of trying to accomplish this assignment. I'm gradually getting closer to understanding how to put the pieces I understand together, which means soon enough, I'll be sleeping at a sane time of night.

### Sources

Google is my best friend. It's probably yours too. It helped me find these resources during my times of confusion:

- [Icons](https://material.io/resources/icons/?style=baseline "Material Icons")
- [Time Formatting/Display](https://momentjs.com/docs/#/displaying/ "Formatting Moment Object")
- [Getting Hour Info](https://momentjs.com/docs/#/get-set/hour/ "Getting Hour from Moment Object")

Most importantly, shout out to my tutor, Phil, for helping me understand:
    a) how to interact with the moment.js object for the colorful highlighting feature
    b) how to use the `data-` attribute with jQuery
    c) using the `this` keyword in JS
    d) communicating properly with the browser's `localStorage`