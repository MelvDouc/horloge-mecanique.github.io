let secs = setInterval(obtenirSecondes, 1000);
let mins = setInterval(obtenirMinutes, 1000);
let hours = setInterval(obtenirHeures, 1000);

function obtenirSecondes() {
    let secondes = document.querySelector('.cadre:nth-child(1)');
    let d = new Date();
    let s = d.getSeconds();
    secondes.style.transform = `rotate(${s * 6}deg)`;
}

function obtenirMinutes() {
    let minutes = document.querySelector('.cadre:nth-child(2)');
    let d = new Date();
    let m = d.getMinutes();
    minutes.style.transform = `rotate(${m * 6 + (d.getSeconds() / 60 * 6)}deg)`;
}

function obtenirHeures() {
    let heures = document.querySelector('.cadre:nth-child(3)');
    let d = new Date();
    let h;
    if(d.getHours() >= 13){
        h = d.getHours() - 12
    } else{
        h = d.getHours();
    };
    heures.style.transform = `rotate(${h * 30 + (d.getMinutes() / 60 * 30)}deg)`;
}