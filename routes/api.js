var express = require('express');
var router = express.Router();
const rp = require('request-promise');
const cheerio = require('cheerio');


/* GET home page. */
router.get('/', function(req, res, next) {

	var elem = '//*[@id="app"]/div/div[2]/div[2]/div/div[2]/section/div[2]/div/div[2]/div[1]/div/div[2]/div/div[2]';

	const options = {
		uri: 'https://www.seek.com.au/tourism-jobs',
		transform: function (body) {
		  return cheerio.load(body);
		}
	};

	rp(options)
		.then(($) => {
			console.log($);
			console.log($('._365Hwu1 _14yeqbb').html());
		})
		.catch((err) => {
			console.log(err);
		});
  res.render('index', { title: 'Express' });
});


router.get("/getSkills", function (req, res) {

	var obj = {skills: [
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
	]};

	res.send(obj);
});

router.get("/getJobs", function (req, res) {

	var obj = {jobs: [{
		"Title":"Travel Consultant",
		"Loc":"Gold Coast",
		"Company":"Travel Trade Recruitment",
		"Skills":["Build Relationships","Verbal Skills","Team Player"],
		"Src":"Seek"
		},{
		"Title":"Travel Sales Consultant",
		"Loc":"Brisbane",
		"Company":"Flight Centre",
		"Skills":["Customer Service","Yr12","Travelled","Self-Motivated"],
		"Src":"Seek"
		},{
		"Title":"Tourism Events Co-ordination",
		"Loc":"Central QLD",
		"Company":"Curtis Ferry Services",
		"Skills":["Microsoft Office","First Aid","Computer Proficiency","Customer Service"],
		"Src":"Seek"
		},{
		"Title":"Python Engineer",
		"Loc":"Sunshine Coast",
		"Company":"Naviro",
		"Skills":["Python","MongoDB","Commercial Experience","JavaScript"],
		"Src":"Seek"
		}]};

	res.send(obj);
});

module.exports = router;
