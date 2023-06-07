const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');

});
app.post('/', (req, res) => {
	const query = req.body.cityName;
	const apiKey = "72e1fbb1463918fda8786948f0873419";
	const units = "metric"
	const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;
	https.get(url, function (response) {
		console.log(response.statusCode);
		response.on('data', function (data) {
			const weatherData = JSON.parse(data);
			const temp = weatherData.main.temp;
			const weatherDescription = weatherData.weather[0].description;
			const icon = weatherData.weather[0].icon;
			const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
			res.write("<p>The weather is currently " + weatherDescription + "</p>");
			res.write("<h1>The Temprature in " + query + " is " + temp + " degree celcius.</h1>");
			res.write("<img src=" + imageURL + ">");
			res.send()
		});
	});
});



app.listen(3000, () => {
	console.log('Server is running on port 3000');
});