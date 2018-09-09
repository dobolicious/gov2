var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function (req, res, next) {

    var skills = [
        "Communication",
        "Interpersonal Skills",
        "Teamwork",
        "Problem solving",
        "Initiative",
        "Administration",
        "Information and Communication Technologies",
        "Written communication",
        "Presentation skills",
        "Organisation",
        "Trouble shooting",
        "Time management",
        "Customer Service"
    ];

    var locations = [

      "Brisbane",
      "Fraser Coast",
      "Gold Coast",
      "Mackay",
      "Outback Queensland",
      "Southern great Barrier Reef",
      "Southern Queensland Country",
      "Sunshine Coast",
      "The Whitsundays",
      "Townsville North Queensland",
      "Tropical North Queensland"
    ];


    res.render('index', { title: "Take Me Anywhere", skills: skills, locations: locations });
});

/* GET home page. */
router.get('/search', function (req, res, next) {

    var skills = [
        "Communication",
        "Interpersonal Skills",
        "Teamwork",
        "Problem solving",
        "Initiative",
        "Administration",
        "Information and Communication Technologies",
        "Written communication",
        "Presentation skills",
        "Organisation",
        "Trouble shooting",
        "Time management",
        "Customer Service"
    ];

    var locations = [

        "Brisbane",
        "Fraser Coast",
        "Gold Coast",
        "Mackay",
        "Outback Queensland",
        "Southern Great Barrier Reef",
        "Southern Queensland Country",
        "Sunshine Coast",
        "The Whitsundays",
        "Townsville North Queensland",
        "Tropical North Queensland"
    ];


    res.render('search', { title: "Take Me Anywhere - Search", skills: skills.sort(), locations: locations });
});


/* GET home page. */
router.get('/jobs', function (req, res, next) {
		var jobs = [
		{
			"Title":"Travel Consultant",
			"Loc":"Gold Coast",
			"Company":"Travel Trade Recruitment",
			"Skills":["Build Relationships","Verbal Skills","Team Player"],
			"Src":"Seek",
			"Rank":-1.1
		},{
			"Title":"Travel Sales Consultant",
			"Loc":"Brisbane",
			"Company":"Flight Centre",
			"Skills":["Customer Service","Yr12","Travelled","Self-Motivated"],
			"Src":"Seek",
			"Rank":6.3
		},{
			"Title":"Tourism Events Co-ordination",
			"Loc":"Outback Queensland",
			"Company":"Curtis Ferry Services",
			"Skills":["Microsoft Office","First Aid","Computer Proficiency","Customer Service"],
			"Src":"Seek",
			"Rank":8.5
		},{
			"Title":"Python Engineer",
			"Loc":"Sunshine Coast",
			"Company":"Naviro",
			"Skills":["Python","MongoDB","Commercial Experience","JavaScript"],
			"Src":"Seek",
			"Rank":-2.6
		}
	];

	jobs.sort(function(a,b) {return (a.Rank < b.Rank) ? 1 : ((b.Rank < a.Rank) ? -1 : 0);} );

	/*  Algorithm for calculated rank
		  - 
	*/
	var ranks = {
		"Brisbane":6.3,
		"Fraser Coast":13.5,
		"Gold Coast":-1.1,
		"Mackay":-2.6,
		"Outback Queensland":8.5,
		"Southern Great Barrier Reef":5.9,
		"Southern Queensland Country":4,
		"Sunshine Coast":-2.6,
		"The Whitsundays":4.2,
		"Townsville North Queensland":-12.1,
		"Tropical North Queensland":-3.7
	};
  res.render('jobs', {jobs: jobs});
});

router.get('/landing', function (req, res, next) {
    res.render('landing', { title: 'Landing' });
});

module.exports = router;


