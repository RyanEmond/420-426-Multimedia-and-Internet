let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
let character = new Character(canvas.width / 2 - 20, canvas.height / 2 - 20);

animate();
canvas.focus();
window.addEventListener("keydown", keyDown);


function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,canvas.width,canvas.height);
    character.displayStatus();
    character.update();
}
function keyDown(e){
    if(e.keyCode == '37'){          //left
        character.goLeft();
    }
    else if(e.keyCode == '38'){     //up
        character.goUp();
    }
    else if(e.keyCode == '39'){     //right
        character.goRight();
    }
    else if(e.keyCode == '40'){     //down
        character.goDown();
    }
    animate();
}