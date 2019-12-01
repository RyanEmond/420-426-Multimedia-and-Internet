let characterSize = 40;
let boxSize = 20;

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
let character = new Character(canvas.width / 2 - 20, canvas.height / 2 - 20, characterSize);
let count = 0;
let boxesArr = new Array();
let boxesNeeded = new Array();
canvas.focus();
window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);


animate();




function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,canvas.width,canvas.height);
    character.displayStatus();
    character.draw();
    character.updateBounds();
    movement();
    if(count % 200 == 0){
        let box = createBox();
        boxesArr.push(box);
    }
    count++;
    drawBoxes();
    checkOverlap();
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
    let box = new Collectable(Math.floor(Math.random() * Math.floor(canvas.width - boxSize)), Math.floor(Math.random() * Math.floor(canvas.height - boxSize)), boxSize);
    return box;
}
function drawBoxes(){
    for(let i in boxesArr){
        //checkOverlap(i);
        boxesArr[i].draw();
       
    }
}
function checkOverlap(){
    for(let i in boxesArr){
        if(boxesArr[i].boundaries['left'] >= character.boundaries['left'] && boxesArr[i].boundaries['right'] <= character.boundaries['right'] && boxesArr[i].boundaries['top'] >= character.boundaries['top'] && boxesArr[i].boundaries['bottom'] <= character.boundaries['bottom']){
            //console.log(boxesArr[i].colour);
            countPoints(boxesArr[i].colour);
            boxesArr = [];
            break;  
        }
    }
}
function countPoints(colour){
    console.log(colour);
}
