var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');


////// FILL IN THE BLANKS

var token = "token " + "YOUR_TOKEN";
var userId = "YOUR_USERNAME";

var urlRoot = "https://api.github.com";
// NCSU Enterprise endpoint:
// https://github.ncsu.edu/api/v3

getYourRepos(userId);

function getYourRepos(userName)
{

	//commented code is a skeleton for sending information to the API
	var options = {
		url: urlRoot + '/users/' + userName + "/repos",
		method: 'GET',
		headers: {
			"User-Agent": "GetYourRepos",
			"content-type": "application/json",
			"Authorization": token
		}
		/*
		json: {
			"var1": "1",
			"var2": true
		}
		*/
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body)
	{
		// by default, print out each of the return fields so you can construct a parser.
		console.log('error:', error);
		console.log('statusCode:', response && response.statusCode);
		console.log('body:', body);

		// parse the returned data (in "body")
		var obj = JSON.parse(body);
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});

}

function createRepo(owner,repo)
{

}
