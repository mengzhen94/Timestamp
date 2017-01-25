var express = require('express')
var app = express()

function unix2natural(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = month + ' ' + date + ',' + ' ' + year;
  return time;
}

/*function natural2unix(natural_time){
  var time = (+Date.parse(date)) / 1000
  return time;
}
*/

app.get('/:times', function(req, res){
	var date = req.params.times
	console.log("date: " + date)
	var unix = null;
	var natural = null;
	if(+date >= 0){
		natural = unix2natural(date)
		unix = +date;
	}
	if(Date.parse(date) === Date.parse(date)){
		natural = date
		unix = (+Date.parse(date)) / 1000
	}
	var results = {
		"unix" : unix,
		"natural" : natural
	}
	res.send(JSON.stringify(results))
})
app.listen(8080, function() {
    console.log("Timestamp App listening on port "+ 8080);
});




	







 


