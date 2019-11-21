let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');


let car = new Car(250, 250);

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,canvas.width,canvas.height);
    //key press
    car.update();
}

animate();
canvas.focus();
canvas.addEventListener("keydown", test);
canvas.addEventListener("keypress", test);
//canvas.addEventListener("mousemove", test, false);
function test(){
    console.log("pressed");
}