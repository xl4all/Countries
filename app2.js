
var fs = require('fs');

fs.readFile('countries.json', function (err, data) {
	if (err) {
		console.log("looks like an error occurred: " + err);
		throw err;

var text = data.toString();

// var json = require('countries.json');
var commandInput = process.argv[1];
data = JSON.parse(data);
	

fs.readFile('countries.json', function (err, data) {
	if (err) {
		console.log("looks like an error occurred: " + err);
		throw err;
	}
		
	console.log(commandInput);
	// console.log(data);
	console.log("What the f*@k's wrong with my code?");
});

////////////////////////////

// var fs = require('fs');
// // var json = require('countries.json');
// var commandInput = process.argv[1];


// data = JSON.parse(data);


	

// fs.readFile('countries.json', function (err, data) {
// 	if (err) {
// 		console.log("looks like an error occurred: " + err);
// 		throw err;
// 	}
	
	
// 	console.log(commandInput);
// 	// console.log(data);
// 	console.log("What the f*@k's wrong with my code?");
// });














//////////////////////////////////////////////

// console.log("file read successfully:");

// function grab(flag) {
// 	var index = process.argv.indexOf(flag);
// 	return (index === -1) ? null : process.argv[index+1];
// }
// var greeting

