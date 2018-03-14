## Project Overview

Using Jasmine to write a number of tests against a web-based application that reads RSS feeds. Tests the underlying business logic of the 
application as well as the event handling and DOM manipulation.


## How to run 

Access the RSS Feed Reader application by going to js/app.js & index.html. Access the Jasmine testing specs by going to jasmine/spec/feedreader.js


## Test Cases for RSS Feed Reader:

	1. Test that ensures that there is a feed URL defined and that the URL is not empty.
	2. Test that ensures each feed has a name defined and that the name is not empty.
	3. Test that ensures the menu element is hidden by default. 
	4. Test that ensures the menu changes visibility when the menu icon is clicked.
	5. Test that ensures that the load feed function works properly and can load at least a single entry within the feed container.
    6. Test that ensures when a new feed is loaded that the content actually changes




## Why this Project?

Testing is an important part of the development process and many organizations practice "test-driven development". This is when developers write tests first, 
before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.
