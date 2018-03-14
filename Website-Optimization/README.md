## Project Overview

The project's goal was to optimize the portfolio (provided by Udacity) for speed! Specifically to optimize the critical rendering path and make the pages
render as quickly as possible by applying the techniques learned in Udacity's Critical Rendering Path course.


## How to Run

Run the application by opening index.html, pizza.html in the Views folder or any other html file.


## Part 1: Optimize PageSpeed Insights score for index.html

General optimizations made:
- Moved CSS to within each HTML file
- Moved JavaScript to JavaScript files and ran asynchronously 
- Optimized images
	

	
## Part 2: Optimize Frames per Second in pizza.html	
	
Optimizations on Pizza page:
- Replaced querySelector function with getElementById function
- Optimized loops by putting calculations outside 
- Used requestAnimationFrame function to update page