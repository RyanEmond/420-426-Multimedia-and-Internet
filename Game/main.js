let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
let character = new Character(canvas.width / 2 - 20, canvas.height / 2 - 20);
let count = 0;
let boxes = new Array();
let boxesNeeded = new Array();
canvas.focus();
window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);


animate();




function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,canvas.width,canvas.height);
    character.displayStatus();
    character.update();
    movement();
    createBox();
    if(count % 200 == 0){
        let box = createBox();
        boxes.push(box);
    }
    count++;
    drawBoxes();
    //testBoxCollect();
    console.log("refresh");
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
function createBox(){
    let box = new Collectable(Math.floor(Math.random() * Math.floor(canvas.width - 20)), Math.floor(Math.random() * Math.floor(canvas.height - 20)));
    return box;
}
function drawBoxes(){
    for(let i in boxes){
        boxes[i].draw();
    }
}
