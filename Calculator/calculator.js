const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
	res.sendFile("./index.html", { root: __dirname });
});

app.post("/", function (req, res) {
	var num1 = Number(req.body.num1);
	var num2 = Number(req.body.num2);
	var result = num1 + num2;
	res.send("The result of the calculation is " + result);
});

app.get("/bmicalculator", function (req, res) {
	res.sendFile("./bmicalculator.html", { root: __dirname });
});
app.post("/bmicalculator", function (req, res) {
	var weight = parseFloat(req.body.weight);
	var height = parseFloat(req.body.height);
	var bmi = weight / (height * height).toFixed(2);
	res.send("<h1>Yout BMI is </h1> " + bmi);
});


app.listen(3000, function () {
	console.log("Server started on port 3000");
});