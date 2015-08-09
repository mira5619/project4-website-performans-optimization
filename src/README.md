This is my submission for Project 4- Website Performance Optimization
of Udacity Front-End Web Development Nanodegree.
This is a web site, it contain several folders with css html and js files.
The source code were suppled by Udacity,
and can be found at: https://github.com/udacity/frontend-nanodegree-mobile-portfolio.
I made only small changes in order to improve performance.

Part 1: Optimize PageSpeed Insights score for index.html

Optimizations in index.html:
 -added media='print' property to stylesheet print.css hyperlink
 -added async attrubute to the script hyperlink for Google Analitics
 -inlined style.css in index.html
 -inlined Google Web Font in index.html
 -created new image pizzeria-small.jpg with small dimensions to be served with index.html
 -minifyed index.html

 To inspect the site on your phone or your local machine, you can run a local server
  1.clone it on your local machine
  ```bash
  2.$> cd /path/to/the-project-folder
  3.$> python -m SimpleHTTPServer 8080
  ```
  4. Open a browser and visit localhost:8080
  5. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.
  ``` bash
  6.$> cd /path/to/the-project-folder
  7.$> ngrok 8080
  ```
  8. Copy the public URL ngrok gives you and try running it through PageSpeed Insights!
  The target score is 90 for mobile and desktop.


Part 2: Optimize Frames per Second in views/pizza.html

To optimize it I modified views/js/main.js until my frames per second rate hit 60 fps.
 in views/js/main.js there are optimizations in:
 -function updatePositions
 -function changePizzaSizes
 -function determineDx
 ... and many others, in-line comments are applied.

