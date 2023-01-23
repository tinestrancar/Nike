// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}


//bezier curve for nike logo

var nikeBezier = document.getElementById("nikeBezier");
var ctx = nikeBezier.getContext("2d");
ctx.beginPath();
ctx.moveTo(80, 60);
ctx.bezierCurveTo(80, 120, 100, 90, 300, 20);
ctx.bezierCurveTo(20, 200, 40, 110, 63, 80);
ctx.fillStyle = "#272728";
ctx.fill();

var nikeBezier = document.getElementById("nikeBezier2");
var ctx2 = nikeBezier.getContext("2d");
ctx2.beginPath();
ctx2.moveTo(80, 60);
ctx2.bezierCurveTo(80, 120, 100, 90, 250, 40);
ctx2.bezierCurveTo(20, 200, 40, 110, 63, 80);
ctx2.fillStyle = "#272728";
ctx2.fill();