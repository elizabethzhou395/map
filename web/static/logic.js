var globalMapObject;
var globalTiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
});
function bodyDidLoad() {
    globalMapObject = L.map('mapid').setView([-33.918, 151.23], 4);
    globalTiles.addTo(globalMapObject);
    // loading GeoJSON file - Here my html and usa_adm.geojson file resides in same folder
    $.getJSON("aus_state.geojson",function(data){
    // L.geoJson function is used to parse geojson file and load on to map
    L.geoJson(data).addTo(globalMapObject);
    });
} 
