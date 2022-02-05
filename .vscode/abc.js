//find all the images without alternate text
//and give them a red border
function process(e) {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        var img = images[i];
        if (img.alt == "") {
            img.style.border = "3px solid red";
        }
    }
}