////////////////////////////
// this file outputs name and information about a country 
//which you input from the command line 

//we moeten de module oproepen
var leesmodule = require("./json-file-reader.js"); 

//de geparsde data is een lange array met allemaal objecten (de landen)
//om de juiste informatie op te vragen, moet ik door die lange array loopen
//en gaan kijken of ik een match kan vinden met welkLandWilJe en parsedText[i].name
//parsedText[0].name = Afghanistan
//if welkLandWilJE is gelijk aan de naam die in de JSON file staat, 
//dan print de naam en het aantal inwoners

leesmodule.reader('countries.json', function(parsedText) {
	var welkLandWilJe = process.argv[2];

	for (var i = 0; i <parsedText.length; i++) {
		if (welkLandWilJe === parsedText[i].name) {
			console.log("The name of this country is: " + parsedText[i].name);
			console.log("There are " + parsedText[i].population + " people living in this country.");
		};
	};
});


// var fs = require('fs');
// var commandInput = process.argv[1];

// fs.readFile('countries.json', function (err, data) {
// 	if (err) {
// 		console.log("looks like an error occurred: " + err);
// 		throw err;
// 	}
	
// 	// data = JSON.parse(data);
// 	console.log(commandInput);
	
// 	console.log("What the f*@k's wrong with my code?");
// });

////////////////////////////Throws out all JSON info
//var fs = require('fs');








// var fs = require('fs');
// fs.readFile('countries.json', function (err, data) {
// if (err) {
// throw err;
// }
// var parsedText = data.toString();
// console.log(parsedText);
// });


//////////////////////////////////////////////////////////

// console.log("file read successfully:");

// function grab(flag) {
// 	var index = process.argv.indexOf(flag);
// 	return (index === -1) ? null : process.argv[index+1];
// }
// var greeting

///////////////////////////////////////////////////Throws out comm. prompt

// var commandInput = process.argv[1];
// console.log(commandInput);

////////////////////////////////////////////////