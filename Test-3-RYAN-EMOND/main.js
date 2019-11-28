//exercise 7.3
let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
let player = new Player();
let stillAlive = true;
let time = 0;
let count = 0;
window.addEventListener("keypress", spaced);
window.addEventListener("mousedown", clicked);

animate();
canvas.focus();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,canvas.width,canvas.height);
    if(stillAlive){
        player.update();
        stillAlive = checkEndOfGame();
        addTime();
    }
    else{
        player = null;  
    }
    displayTime();
}
function spaced(e){
    if(e.keyCode == '32'){
        player.newStats();
    }
}
function clicked(e){
    let x = e.clientX - 50; //-50 to account for canvas border
    let y = e.clientY - 50; //-50 to account for canvas border
    if(x >= player.boundaries["left"] && x <= player.boundaries["right"] && y >= player.boundaries["top"] && y <= player.boundaries["bottom"]){
        player.colour = getColour();
    }
}
function checkEndOfGame(){
    if(player.boundaries["left"] <= 0){
        stillAlive = false;
        return false;
    }
    if(player.boundaries["right"] >= canvas.width){
        stillAlive = false;
        return false;
    }
    if(player.boundaries["top"] <= 0){
        stillAlive = false;
        return false;
    }
    if(player.boundaries["bottom"] >= canvas.height){
        stillAlive = false;
        return false;
    }
    return true
}
function displayTime(){
    context.save();
    context.font = "20px Arial";
    context.fillText(`Time: ${time.toFixed(0)}s`, 5, 20);
    context.restore();
}
function addTime(){
    if(count%60 == 0){
        time++;
    }
    if(stillAlive){
        count++;
    }
}