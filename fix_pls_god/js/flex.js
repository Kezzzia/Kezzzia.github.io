let tab = document.querySelectorAll('.tab');

tab.forEach(function(element){
    element.onclick = showTabs;
})

function init(){
    let tabBody = document.querySelectorAll('.tab-body');
    for (let i = 1; i < tabBody.length; i++){
        tabBody[i].style.display = 'none';
    }
}
init();

function showTabs(){
    let data =  this.getAttribute('data');
    let tabBody = document.querySelectorAll('.tab-body');
    let tab = document.querySelectorAll('.tab');

    for (let i = 0; i < tabBody.length; i++){
        tabBody[i].style.display = 'none';
    }
    document.querySelector(`.tab-body[data = "${data}"]`).style.display = 'block';

    for (let f = 0; f < tab.length; f++){
        tab[f].style.cssText = 'color: #C4C4C4; background-color: #504C58';
    }
    document.querySelector(`.tab[data = "${data}"]`).style.cssText = 'color: #504C58; background-color: #D4E1F4';
}

