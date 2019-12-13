// var videoData = JSON.parse(data);
// console.log(videoData);
// var htmlElements = "";
// for (var i = 0; i < array.length; i++) {
//    htmlElements += '<div class="box"></div>';
// }
// var container = document.getElementById("container");
// container.innerHTML = htmlElements;
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("~/Desktop/Personal/Research/Report/data.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
});
