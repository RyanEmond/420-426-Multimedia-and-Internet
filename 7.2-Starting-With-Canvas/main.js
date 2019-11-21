const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');

/*
context.fillRect(20,20,100,100);
context.clearRect(40,40,60,60);
context.strokeRect(45,45,50,50);
*/

/*
context.beginPath();
context.moveTo(75, 50);
context.lineTo(100,75);
context.lineTo(100,25);
context.closePath();
context.fill();
*/

/*
context.arc(100,100,20,12,0,true);
context.fill();
*/

/*
let x = 100;
function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x++, 100, 50, 0, 2 * Math.PI);
    context.closePath();
    context.stroke();
} animate();
*/

class Bubble {
    constructor(x, y) {
        /* Initialize the bubble's properties. */
    }
    draw() {
        /* Code concerning the drawing of the bubble should go here. */
    }
    update() {
        /* Code concerning the manipulation of the bubbles properties should go here. */
        context.beginPath();
        context.arc(mouseX, mouseY, 20, 0, 2 * Math.PI, true);
        context.fillStyle = "#000000";
        context.fill();
    } 
}
let mouseX = Math.random(0, canvas.width);
let mouseY = Math.random(0, canvas.height);
canvas.addEventListener("mousemove", setMousePosition, false);

let bubble = new Bubble(mouseX,mouseY);
animate();

function setMousePosition(e){
    mouseX = e.clientX;
    mouseY = e.clientY;
    animate()
}
function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,canvas.width,canvas.height);
    bubble.x = mouseX;
    bubble.y = mouseY;
    bubble.update();
}

