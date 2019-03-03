function weather() {
var rain = confirm("идет ли дождь?");
var temperature = +prompt("какая температура на улице?");
if (rain || temperature < 10 || temperature > 35){
    var minutes = 0;
    alert ("вы будете гулять " + minutes+ " минут");
} else if (temperature >=10 && temperature <15){
    var minutes = 30;
    alert("вы будете гулять " + minutes + " минут");
} else if (temperature >=15 && temperature <25){
    var minutes = 40;
    alert("вы будете гулять " + minutes + " минут");
} else if (temperature >=25 && temperature <=35){
    var minutes = 20;
    alert("вы будете гулять " + minutes + " минут");
    } 
 }