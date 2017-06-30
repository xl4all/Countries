////////////////////////////Throws out command prompt & WTF 

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
var fs = require('fs');

fs.readFile('countries.json', function (err, data) {
	if (err) {
		console.log("looks like an error occurred: " + err);
		throw err;
	}
	
	var text = JSON.parse(data)
	// data = JSON.parse(data[2]);
	
	console.log(text[0].name);

});


// var fs = require('fs');
// fs.readFile('countries.json', function (err, data) {
// if (err) {
// throw err;
// }
// var text = data.toString();
// console.log(text);
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