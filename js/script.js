//add map

var map = L.map('map');
map.setView([40.681339, -73.96302], 12
	);

L.mapbox.accessToken = 'pk.eyJ1IjoiYms3NDEiLCJhIjoiZFNVcTNvdyJ9.h8G4i4ib7PicRCiejvZW6g';

L.tileLayer('https://{s}.tiles.mapbox.com/v3/bk741.m44ejghn/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map)


//import layers
function popUp(feature, layer) {
  layer.bindPopup(feature.properties.name);
}


var to1000 = new L.GeoJSON.AJAX("js/0-1000.geojson", {onEachFeature:makeMarkers
});
// to1000.addTo(map);

// function make0to1000Markers(feature,layer) {
// 	layer.bindPopup(
// 		"This lot is "
// 		+feature.properties.sqft+" square feet"
// 		+"<br> It is under the jurisdiction of "
// 		+feature.properties.agency)
// };


var toTwentyFive = new L.GeoJSON.AJAX("js/2500.geojson", {onEachFeature:makeMarkers
});

// function makeMarkers (feature,layer) {
// 	layer.bindPopup(
// 		"This lot is "
// 		+feature.properties.sqft+" square feet"
// 		+"<br> It is under the jurisdiction of "
// 		+feature.properties.agency 
// 		)};


var toFive = new L.GeoJSON.AJAX("js/5001.geojson", {onEachFeature:makeMarkers
});
// toFive.addTo(map);

// function makeMarkers5000 (feature,layer) {
// 	layer.bindPopup(
// 		"This lot is "
// 		+feature.properties.sqft+" square feet"
// 		+"<br> It is under the jurisdiction of "
// 		+feature.properties.agency 
// 		)};


var toTen = new L.GeoJSON.AJAX("js/5000-10000.geojson", {onEachFeature:makeMarkers
});
// toTen.addTo(map);

// function makeMarkers10000 (feature,layer) {
// 	layer.bindPopup(
// 		"This lot is "
// 		+feature.properties.sqft+" square feet"
// 		+"<br> It is under the jurisdiction of "
// 		+feature.properties.agency 
// 		)};

var toInfinty = new L.GeoJSON.AJAX("js/10000.geojson", {onEachFeature:makeMarkers
});
// toInfinty.addTo(map);

// function makeMarkersInfinty (feature,layer) {
// 	layer.bindPopup(
// 		"This lot is "
// 		+feature.properties.sqft+" square feet"
// 		+"<br> It is under the jurisdiction of "
// 		+feature.properties.agency+"." 
// 		)};

function makeMarkers (feature,layer) {
	layer.bindPopup(
		"<b>"
		+feature.properties.address 
		+"</b>"
		+"<br>"
		+"This lot is "
		+feature.properties.sqft+" square feet."
		+"<br> It is under the jurisdiction of "
		+feature.properties.agency+"." 
		)};



//sidebar actions
$("#thousand").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(to1000)) {
        $(this).removeClass('selected');
        map.removeLayer(to1000);
        $(this).css({'background-color':'#B1ACBD'});

    } else {
        map.addLayer(to1000);        
        $(this).addClass('selected');
         $(this).css({'background-color':'#C1ACBD'});
   }
});

$("#twentyFiveHundred").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(toTwentyFive)) {
        $(this).removeClass('selected');
        map.removeLayer(toTwentyFive);
        $(this).css({'background-color':'#B1ACBD'});
    } else {
        map.addLayer(toTwentyFive);        
        $(this).addClass('selected');
        $(this).css({'background-color':'#C1ACBD'});
   }
});

$("#fiveThousand").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(toFive)) {
        $(this).removeClass('selected');
        map.removeLayer(toFive);
        $(this).css({'background-color':'#B1ACBD'});
    } else {
        map.addLayer(toFive);        
        $(this).addClass('selected');
        $(this).css({'background-color':'#C1ACBD'});
   }
});



$("#tenThousand").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(toTen)) {
        $(this).removeClass('selected');
        map.removeLayer(toTen);
        $(this).css({'background-color':'#B1ACBD'});
    } else {
        map.addLayer(toTen);        
        $(this).addClass('selected');
        $(this).css({'background-color':'#C1ACBD'});
   }
});


$("#infinity").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(toInfinty)) {
        $(this).removeClass('selected');
        map.removeLayer(toInfinty);
        $(this).css({'background-color':'#B1ACBD'});
    } else {
        map.addLayer(toInfinty);        
        $(this).addClass('selected');
        $(this).css({'background-color':'#C1ACBD'});
   }
});

$("#clearAll").click(function(event) {
    event.preventDefault();
    map.removeLayer(toInfinty);
    map.removeLayer(toTen);
    map.removeLayer(toFive);
    map.removeLayer(toTwentyFive);
    map.removeLayer(to1000);
    $("#infinity").css({'background-color':'#B1ACBD'});
    $("#tenThousand").css({'background-color':'#B1ACBD'});
    $("#fiveThousand").css({'background-color':'#B1ACBD'});
    $("#twentyFiveHundred").css({'background-color':'#B1ACBD'});
    $("#thousand").css({'background-color':'#B1ACBD'});
});












