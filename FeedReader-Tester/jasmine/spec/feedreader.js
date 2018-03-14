/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed in the allFeeds
         * object and ensures it has a URL defined and that
         * the URL is not empty.
         */
		it('feed urls defined', function() {
			for (i = 0; i < allFeeds.length; i++)  {
				expect(allFeeds[i].url).toBeDefined();
				expect(allFeeds[i].url.length).not.toBe(0);
			}
		});

        /* A test that loops through each feed in the allFeeds
         * object and ensures it has a name defined and that
         * the name is not empty.
         */
		 
		 it('feed names defined', function() {
			for (i = 0; i < allFeeds.length; i++)  {
				expect(allFeeds[i].name).toBeDefined();
				expect(allFeeds[i].name.length).not.toBe(0);
			}
		});
		 		 
    });


	describe('The menu', function() {

		
        /* A test that ensures the menu element is hidden by default.
         */
		 
		 it('menu is hidden on load', function() {
			var body = document.getElementsByTagName("body")[0].className.match(/menu-hidden/);			
			//console.log(body[0]);			
			expect(body[0]).toBe('menu-hidden');			
		 });
		 
		 
		 
         /* A test that ensures the menu changes visibility when
          * the menu icon is clicked. 
          */
		 	  
		  it('menu is working', function() {
			$('.menu-icon-link').trigger('click');		 
		    var body = document.getElementsByTagName("body")[0].className.match(/menu-hidden/); 
			expect(body).toBe(null);
			  
			
			$('.menu-icon-link').trigger('click');
			var body = document.getElementsByTagName("body")[0].className.match(/menu-hidden/);		
			expect(body[0]).toBe('menu-hidden');	
	 
		  });

	});	  
	
	describe('Initial Entries', function() {
		
		
        /* A test that ensures when the loadFeed function is called
         * and completes its work, there is at least a single .entry
         * element within the .feed container.
         */
		
	
		beforeEach(function(done) {
			loadFeed(0, function() {
				done();
			});	
		});
		 
		 it('loadFeed working properly', function(done) {
			//var feed = document.getElementsByClassName("feed");
			//console.log(feed);

			var entrieslength = $('.feed .entry').length;
			//console.log(entrylink);
			//expect(entrylink).not.toBe(null);	


			//console.log(numEntries);
			expect(entrieslength).toBeGreaterThan(0);	
			done();
	
		 });	 
	});
		
		describe('New Feed Selection', function() {	
			
		
        /* A test that ensures when a new feed is loaded by the loadFeed
         * function that the content actually changes.
         */
		 
		 var current;
		 var newcontent;
			
		 beforeEach(function(done) {
			 loadFeed(0, function() {
				 current = $('.feed').html();
				 loadFeed(1, function() {
					newcontent = $('.feed').html();
					done();
				 });			 
			  });		 			
			});
			
		  it('content has changed', function(done) {
			  
			  
			  
			  expect(current).not.toBe(newcontent);
			  done();
			 	  
		  });
		
		 });
}());
