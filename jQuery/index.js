
// document.querySelector('h1');
$('h1').addClass('big-title margin-50')
document.querySelectorAll("button");

// $("h1").text("bye");

// $("button").text("Don't click me");
// ("a").attr("href", "https://www.yahoo.com");
// $("h1").click(function () {
// 	$("h1").css("color", "blue")
// });

// Select all buttons using jquery
// $("button").click(function () {
// 	$("h1").css("color", "purple")
// });

// $("input").keypress(function (event) {
// 	$("h1").text(event.key)
// 	console.log(event.key);
// })
// // alternative way for event handling
// $("h1").on("mouseover", function () {
// 	$("h1").css("color", "purple")
// })

// Animation using Jquery
// $("button").on("click", function () {
// 	$("h1").toggle();
// })

// $("button").on("click", function () {
// 	$("h1").fadeToggle();
// })
// $("button").on("click", function () {
// 	$("h1").slideUp();
// })
$("button").on("click", function () {
	$("h1").slideUp().slideDown().animate({
		opacity: 0.5,
		margin: "20%"
	});
})
