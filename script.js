function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'https://nishanthrachakonda.github.io/Report/data.json', false);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
}

var data;
var features = ["road_quality_index", "jerk", "speed_limit", "day_night"];
var reference = {"road_quality_index": 2, "jerk": 2, "speed_limit": 2, "day_night": 2};

loadJSON(function(response) {
    data = JSON.parse(response);
});

function selection(query){
  console.log(query);
  for (var index in features){
    if (reference[features[index]] != 2 && reference[features[index]] != query[features[index]]) {
      return false;
    }
  }
  return true;
}

function outputJSON(){
  var htmlElements = "";
  var elementAttributes = [{"width": "100px","height": "100px"}];
  for (var i = 0; i < data.length; i++) {
    if(selection(data[i]))
    htmlElements += `<iframe  src=${data[i].src} frameborder="0">
                        </iframe>`;
  }
  var container = document.getElementById("videos");
  container.innerHTML = htmlElements;
}

function setFeature(code, value){
  reference[features[code]] = value;
  outputJSON();
}

outputJSON();
