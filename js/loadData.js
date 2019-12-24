var data = Data;
var data1 = Data1;
console.log(data1);
var features = ["road_quality_index", "jerk", "speed_limit", "day_night"];
var reference = {"road_quality_index": 2, "jerk": 2, "speed_limit": 2, "day_night": 2};

function selection(query){
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
    if(selection(data1[i]))
    htmlElements += `<div class="col-md-4 col-sm-6 portfolio-item">
                          <a class="portfolio-link" data-toggle="modal">
                            <iframe width="420" height="315" src="${data[i].src}">
                            </iframe>
                          </a>
                          <div class="portfolio-caption">
                            <h4>${data[i].filename}</h4>
                            <p class="text-muted">
                              <i class="fa fa-map-marker"></i> Location: ${data[i].location} <br />
                              <i class="fa fa-road"></i> Road Quality: ${1-Number(data[i].road_quality_index)} <br />
                              <i class="fa fa-exclamation-triangle"></i> Jerk: ${Number(data[i].jerk)} <br />
                              <i class="fa fa-bolt"></i> Speed: ${data[i].speed_limit} <br />
                              <i class="fa fa-sun"></i> Brightness: ${data[i].day_night} <br />
                            </p>
                          </div>
                        </div>\n`;
  }
  var container = document.getElementById("videos");
  container.innerHTML = htmlElements;
}

function setFeature(code, value){
  console.log(reference[features[code]], features[code], code, value);
  reference[features[code]] = value;
  outputJSON();
}

outputJSON();
