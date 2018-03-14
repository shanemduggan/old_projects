var bio = {
	"name": "Shane Duggan",
	"role": "Front End Developer",
	"welcomeMessage": "Welcome to my Interactive Resume. Check out my projects below to see all the stuff I've been working on!",
	"contacts": [{
		"mobile": "949-285-5859",
		"email": "devshaneduggan@gmail.com",
		"github": "github.com/shanemduggan",
		"twitter": "",
		"location": "Los Angeles"
	}],
	"age": 25,
	"skills": ["Javascript", "Bootstrap", "Angular.js"],
	"profilepic": "images/fry.jpg"
	
};	

//var name = "Shane Duggan";
//var role = "Front End Developer";
//$("#main").append(bio.name);

var displaybio = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[0].mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts[0].email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[0].github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[0].location);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedProfileImg = HTMLbioPic.replace("%data%", bio.profilepic);

	$('#header').prepend(formattedName);
	$('#header').append(formattedRole);
	$('#header').append(formattedMobile);
	$('#header').append(formattedEmail);
	$('#header').append(formattedGithub);
	$('#header').append(formattedLocation);
	$('#header').append(formattedMessage);
	$('#header').append(formattedProfileImg);
};

displaybio();



var work = {
  "jobs": [
	{
		"title": "Website Developer",
		"employer": "American Website Developer",
        "years": "9 months",
        "location": "Los Angeles",
		"dates": "October, 2015 - Current",
		"responsibilities": "Build and maintain websites for clients in a variety of verticals"
	},
	{
		"title": "Technical Sourcer",
		"employer": "ZEFR",
        "years": "1 year 2 months",
        "location": "Venice",
		"dates": "August, 2014 - October, 2015",
		"responsibilities": "Sourced Engineering talent to scale development teams"
	}
  ]	
};



var displaywork = function() {
	if (bio.skills.length > 0) {	

	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	var formattedSkill2 = HTMLskills.replace("%data%", bio.skills[1]);
	var formattedSkill3 = HTMLskills.replace("%data%", bio.skills[2]);	
	
	$("#skills").append(formattedSkill);	
	$("#skills").append(formattedSkill2);
	$("#skills").append(formattedSkill3);
  }

	if (work.jobs.length > 0) {
		
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;		
			$(".work-entry:last").append(formattedEmployerTitle);
			
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].responsibilities);
			$(".work-entry:last").append(formattedDescription);
		}
	  }
}

displaywork();








var projects = {
	"projects": [
		{
			"title": "Recipe a Day",
			"dates": "April, 2016",
			"description": "Help people find great recipes with ease!",
			"images": ["fakeimage.jpg", "fakeimage.jpg"]
		},
		{
			"title": "Camper Leaderboard",
			"dates": "March, 2016",
			"description": "Displays the top contributing members of FreeCodeCamp, their scores and sorts by Past 30 days and All time",
			"images": ["fakeimage.jpg", "fakeimage.jpg"]
		}
	]
};


var education = {
	"schools": [ 
		{
		"name": "California State University Northridge",
        "location": "Northridge",
		"degree": "Bachelor of Arts",
		"majors": ["Psychology"],
		"dates": "2013 - 2014",
		"url": ""
		},
		{
		"name": "Orange Coast College",
        "location": "Costa Mesa",
		"degree": "Associate of Arts",
		"majors": ["Psychology"],
		"dates": "2010 - 2013",
		"url": ""
		}
	],
	"onlineCourses": [
		{
		"title": "",
		"school": "",
		"dates": "",
		"url": ""
		},
		{
		"title": "",
		"school": "",
		"dates": "",
		"url": ""
		}
	]
};



var displaywork = function() {
	if (bio.skills.length > 0) {	

	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	var formattedSkill2 = HTMLskills.replace("%data%", bio.skills[1]);
	var formattedSkill3 = HTMLskills.replace("%data%", bio.skills[2]);	
	
	$("#skills").append(formattedSkill);	
	$("#skills").append(formattedSkill2);
	$("#skills").append(formattedSkill3);
  }

	if (work.jobs.length > 0) {
		
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;		
			$(".work-entry:last").append(formattedEmployerTitle);
			
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].responsibilities);
			$(".work-entry:last").append(formattedDescription);
		}
	  }
}

displaywork();







/*$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	
	logClicks(x,y);
});*/

//$("#main").append(internationalizeButton);

/*var inName = function(name) {
	var newName = name.split(" ");
	newName = name[0][0].toUpperCase() + name[0].splice(1).toLowerCase();
	newName = name[1].toUpperCase();
	newName = name[0] + " " + name[1];
	
	return newName;	
}*/

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		if (projects.project[project].images.length > 0 ) {
			for (image in projects.project[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}



