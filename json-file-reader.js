//Module waarmee ik jason kan lezen en parsen (format wat jsondata bruikbaar en leesbaar maakt in JS)
var fs = require('fs');
//Functie aanmaken, met filename en callbackfunctie als parameter
//should read & parse the file
//daarna it should call the callback function and pass the parsed data to it
function reader (filename,callback){

	fs.readFile(filename, function (err, data) {
		if (err) {
			throw err;
		}
		
		var parsedText = JSON.parse(data)

		callback(parsedText);
	});

}

module.exports = {
	reader:reader
}
