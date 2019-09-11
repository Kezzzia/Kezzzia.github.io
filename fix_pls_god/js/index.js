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


/////////////////////////////---HOME
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
// функция которая после отправки формы выводит меню и благодарит клиента
function openModalThanks(){
	document.getElementById("footer__close--modal").style.display = "block";
	document.getElementById("modalOrder").style.display = "none";
}
// блок где я забыл что делает - но работает
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
/////////////////////////////


/////////////////////////////---REWIEWS
// функция которая перелистывает страницы в отзывах
function scrollRewiews(){
	document.getElementById("rewiewsFirstPage").style.display = "none";
	document.getElementById("rewiewsSecondPage").style.display = "block";
}
function scrollrewiewback(){
	document.getElementById("rewiewsSecondPage").style.display = "none";
	document.getElementById("rewiewsFirstPage").style.display = "block";	
}

// функция которая открывает модальное окно для отзывов
function rewiewsOrderCall(){
	document.getElementById("rewievs__modal").style.display = "block";
}
// функция которая закрывает окно отзывов
function rewiewsСloseModalWindow(){
	document.getElementById("rewievs__modal").style.display = "none";
}
// функция которая закрывает меню после отправления отзыва
function rewiewsOpenModalThanks(){
	document.getElementById("reviews__modal--thanks").style.display = "block";
	document.getElementById("rewievs__modal").style.display = "none";
}
// функция которая возвращает на главную страницу после закрытия модального окна отзывов
function rewiewsCloseFooterSend(){
	document.getElementById("reviews__modal--thanks").style.display="none";
}
/////////////////////////////


/////////////////////////////---PRICE
// функция которая вызывает модальное окно (price)
function priceOrderCall(){
	document.getElementById("priceModalOrder").style.display = "block";
}
// функия которая закрывает меню отправки заявок на сайт (price)
function priceFooterSend(){
	document.getElementById("priceModalOrder").style.display="none";
}
// функция которая после отправки формы выводит меню и благодарит клиента (price)
function priceOpenModalThanks(){
	document.getElementById("price__close--modal").style.display = "block";
	document.getElementById("priceModalOrder").style.display = "none";
}
// функция которая возвращает на главную страницу после закрытия модального окна отзывов(price)
function priceCloseSend(){
	document.getElementById("price__close--modal").style.display="none";
}
// переключатели прайса
 function toogleSony(){
	 document.getElementById("price__Sony").style.display = "block";
	 document.getElementById("price__Apple").style.display = "none";
	 document.getElementById("price__Samsung").style.display = "none";
 }
//////////////////////////////





