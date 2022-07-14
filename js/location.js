//O document ready verifica se a página já carregou antes de executar o código
$(document).ready(function()
{
var platform = new H.service.Platform
({
    'apikey': 'au6lwBcp24KkWEaRhFdaWkTiGDUzd88uk-i37aNXNGA'

});

//Obtain por default tipos de mapas da plantaforma objeto
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
      zoom: 15,
      center: { lat: 38.762313, lng: -9.179562 },   
    });
    var svgMarkup = '<svg width="24" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
    'height="22" /><text x="12" y="18" font-size="12pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="white">S</text></svg>';

// Cria um icon, um objeto "preso" a uma latitude e longitude e o marcador
var icon = new H.map.Icon(svgMarkup),
    coords = {lat: 38.762313, lng: -9.179562},
    marker = new H.map.Marker(coords, {icon: icon});

// Adiciona um marcador ao mapa e centra o mapa com a localização do marcador 
map.addObject(marker);
map.setCenter(coords);



// Permite o mapa se ajustar para modo mobile
window.addEventListener('resize', 
	() => map.getViewPort().resize());
});