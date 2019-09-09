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

function myFunction() {
    var x = document.getElementById("myTopnav");
	x.classList.toggle("responsive");
  	// document.body.style.overflow = 'hidden'; 
}
// function closeMenuItem() {
// 	var z = document.getElementsByClassName("responsive");
// 	z.close();
// 	document.body.style.overflow = ''; // Восстанавливаем прокрутку
//   }


document.getElementById('close__nav-main').onclick = function() {
	document.getElementById('myTopnav').classList.remove('responsive');
}
document.getElementById('close__nav-about').onclick = function() {
	document.getElementById('myTopnav').classList.remove('responsive');
}
document.getElementById('close__nav-price').onclick = function() {
	document.getElementById('myTopnav').classList.remove('responsive');
}
document.getElementById('close__nav-service').onclick = function() {
	document.getElementById('myTopnav').classList.remove('responsive');
}
document.getElementById('close__nav-reviews').onclick = function() {
	document.getElementById('myTopnav').classList.remove('responsive');
}
document.getElementById('close__nav-footer').onclick = function() {
	document.getElementById('myTopnav').classList.remove('responsive');
}
// window.addEventListener('scroll', (e) => {
// 	window.scrollTo(0,0);
//   });