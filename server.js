var express = require('express')
var path = require('path')
var app = express()

app.engine('html', require('ejs').renderFile)
app.set("views", path.join(__dirname, "views"))
app.set('view engine', 'html')

app.get('/', function(req, res) {
    res.render('index')
})

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
var port = process.env.PORT || 8080; 
app.listen(port, function() {
    console.log("Timestamp App listening on port "+ port);
});




	







 


