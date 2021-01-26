let temps = setInterval(rotationAiguilles, 1000)

function rotationAiguilles() {
    let secondes = document.querySelector('.aiguille:nth-child(1)');
    let minutes = document.querySelector('.aiguille:nth-child(2)');
    let heures = document.querySelector('.aiguille:nth-child(3)');
    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h;
    if(d.getHours() >= 13){
        h = d.getHours() - 12
    } else{
        h = d.getHours();
    };
    secondes.style.transform = `rotate(${s * 6}deg)`;
    minutes.style.transform = `rotate(${(m + s / 60) * 6}deg)`;
    heures.style.transform = `rotate(${(h + m / 60) * 30}deg)`;
}

//\\

const horloge = document.querySelector('#horloge');
const arrierePlans = ['clock-arabic.gif', 'clock-arabic2.jpg', 'clock-arabic3.png', 'clock-no-numbers.png', 'clock-roman.png'];
let index = 0;

function changerImage() {
    index = (++index % arrierePlans.length);
    horloge.style.backgroundImage = `url('./img/${arrierePlans[index]}')`;
}