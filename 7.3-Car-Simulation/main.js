let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
let car = new Car(canvas.width / 2, canvas.height / 2);
window.addEventListener("keydown", keyDown);

animate();
canvas.focus();



function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,canvas.width,canvas.height);
    car.displayStatus();
    car.update();
}

function keyDown(e){
    if(e.keyCode == '37'){          //left
        car.turnLeft();
    }
    else if(e.keyCode == '38'){     //up
        car.accelerate();
    }
    else if(e.keyCode == '39'){     //right
        car.turnRight();
    }
    else if(e.keyCode == '40'){     //down
        car.reverse();
    }
    animate();
}

