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
// функция которая меняет классы при открытии адаптивного меню
function myFunction() {
	var y = document.getElementById("responsive__mobile");
    var x = document.getElementById("myTopnav");
	x.classList.toggle("responsive");
	y.classList.toggle("mobile__nav--responsive");
}
// функия которая закрывает меню отправки заявок на сайт
function closeFooterSend(){
	document.getElementById("footer__close--modal").style.display="none";
}
// функция которая вызывает модальное окно
function footerOrderCall(){
	document.getElementById("modalOrder").style.display = "block";
}
// функция которая закрывает основное модальное окно
function closeModalWindow(){
	document.getElementById("modalOrder").style.display = "none";
}

document.getElementById('close__nav-main').onclick = function() {
	document.getElementById('myTopnav').classList.remove('responsive');
	document.getElementById('responsive__mobile').classList.remove('mobile__nav--responsive');
}
document.getElementById('close__nav-about').onclick = function() {
	document.getElementById('myTopnav').classList.remove('responsive');
	document.getElementById('responsive__mobile').classList.remove('mobile__nav--responsive');
}
document.getElementById('close__nav-price').onclick = function() {
	document.getElementById('myTopnav').classList.remove('responsive');
	document.getElementById('responsive__mobile').classList.remove('mobile__nav--responsive');
}
document.getElementById('close__nav-service').onclick = function() {
	document.getElementById('myTopnav').classList.remove('responsive');
	document.getElementById('responsive__mobile').classList.remove('mobile__nav--responsive');
}
document.getElementById('close__nav-reviews').onclick = function() {
	document.getElementById('myTopnav').classList.remove('responsive');
	document.getElementById('responsive__mobile').classList.remove('mobile__nav--responsive');
}
document.getElementById('close__nav-footer').onclick = function() {
	document.getElementById('myTopnav').classList.remove('responsive');
	document.getElementById('responsive__mobile').classList.remove('mobile__nav--responsive');
}
