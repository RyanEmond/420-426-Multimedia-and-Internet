let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
let character = new Character(canvas.width / 2 - 20, canvas.height / 2 - 20);

canvas.focus();
window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);

animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,canvas.width,canvas.height);
    character.displayStatus();
    movement();
    character.update();
    
    
}
function keyDown(e){
    if(e.keyCode == '37'){          //left
        character.left = true;
    }
    else if(e.keyCode == '38'){     //up
        character.up = true;
    }
    else if(e.keyCode == '39'){     //right
        character.right = true;
    }
    else if(e.keyCode == '40'){     //down
        character.down = true;
    }
}
function keyUp(e){
    if(e.keyCode == '37'){          //left
        character.left = false;
    }
    else if(e.keyCode == '38'){     //up
        character.up = false;
    }
    else if(e.keyCode == '39'){     //right
        character.right = false;
    }
    else if(e.keyCode == '40'){     //down
        character.down = false;
    }
}
function movement(){
    if(character.left){
        character.goLeft();
    }
    if(character.right){
        character.goRight();
    }
    if(character.up){
        character.goUp();
    }
    if(character.down){
        character.goDown();
    }
}
