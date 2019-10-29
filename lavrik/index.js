// window.onload = function (e) {
//     this.document.addEventListener('click', some);
//     this.document.addEventListener('click', some1);

//     this.document.addEventListener('contextmenu', some);
// }
// function some (e){
//     console.log(1);
// }
// function some1 (e){
//     console.log(2);
// }
window.onload = function(e){
    let buttons = this.document.querySelectorAll('.actions input');
    // console.log(buttons);
    for(var i = 0 ; i < buttons.length; i++ ){
        buttons[i].onclick = btnClick;
    }
}
function btnClick(e) {
    var name = this.getAttribute('name');
    if(name == 'save'){
        console.log(1);
    }
    else if(name == 'delete'){
        console.log(2);
    }
}