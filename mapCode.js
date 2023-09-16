// variable storing here maps api key
var apiKey = "uOVTfYk08za4iVYFlm5UMg";

// variable storing svg image for midpoint map marker
var midpointMapMarker = '<svg width="65" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="rgba(96, 161, 204, 0.8)" x="1" y="1" width="65" ' +
    'height="22" /><text x="5" y="18" font-size="10pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="start" ' +
    'fill="white">midpoint</text></svg>';

// variable storing svg image for team ground map marker
var groundMarker = '<svg id="svgIcon" width="115" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="rgba(96, 161, 204, 0.8)" x="1" y="1" width="90" ' +
    'height="22" /><text x="5" y="18" font-size="10pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="start" ' +
    'fill="white">team ground</text></svg>';

// variables storing coordinates for team grounds
var bradfordLatLon = [53.7938, - 1.7564];
var halifaxLatLon = [53.7270, - 1.8575];
var huddersfieldLatLon = [53.6458, - 1.7850];
var leedsLatLon = [53.8008, - 1.5491];

// variable storing an array of the team ground coordinates
var teamGrounds = [
    bradfordLatLon,
    halifaxLatLon,
    huddersfieldLatLon,
    leedsLatLon
];

// variable storing array of team ground latitudes
var lats = [
    bradfordLatLon[0],
    halifaxLatLon[0],
    huddersfieldLatLon[0],
    leedsLatLon[0]
];

// variable storing array of team ground longitudes
var lons = [
    bradfordLatLon[1],
    halifaxLatLon[1],
    huddersfieldLatLon[1],
    leedsLatLon[1]
];

// function to calculate mean average of an array of numbers
function coordsMidpoint(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}

// variable to store calculated midpoint between home grounds
var midpointCoords = [coordsMidpoint(lats), coordsMidpoint(lons)];