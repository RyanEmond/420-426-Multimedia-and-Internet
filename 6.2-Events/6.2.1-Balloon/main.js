let theBalloon = document.getElementById("balloon");
let fontSize = 10;
theBalloon.style.fontSize = fontSize;
theBalloon.addEventListener("click", increase);

function increase(){
    theBalloon.style.fontSize = fontSize ;
    fontSize = fontSize+10;
    console.log('up');
}