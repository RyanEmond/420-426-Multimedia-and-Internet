let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
canvas.height = 500;
canvas.width = 500;
let truck = new Truck(canvas.width / 2, canvas.height / 2);
animate();
truck.draw();
canvas.focus();
truck.displayStatus();
console.log("test");

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height); 
    // Check which key was pressed and call the appropriate Car function.
    truck.update();
}
