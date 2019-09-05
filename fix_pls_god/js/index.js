ymaps.ready(init);

function init(){
	var map = new ymaps.Map("map",{
		center: [53.874421975668085,27.63028032552346],
		zoom: 17,
		controls: ['zoomControl'],
		behaviors: ['drag']
	});

	var placemark = new ymaps.Placemark([53.874421975668085,27.63028032552346],{

	});

	map.geoObjects.add(placemark);
}
