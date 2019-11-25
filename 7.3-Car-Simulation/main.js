let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
let car = new Car(250, 250);
animate();
canvas.focus();
window.addEventListener("keydown", test);
car.displayStatus();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,canvas.width,canvas.height);
    //key press
    car.update();
}

function test(e){
    if(e.keyCode == '37'){          //left
        console.log("left");
    }
    else if(e.keyCode == '38'){     //up
        //console.log("up");
        car.accelerate();
    }
    else if(e.keyCode == '39'){     //right
        console.log("right");
    }
    else if(e.keyCode == '40'){     //down
        //console.log("down");
        car.decelerate();
    }
    animate();
}