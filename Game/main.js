let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
let characterSize = 40;
let boxSize = 20;
let character = new Character(canvas.width / 2 - 20, canvas.height / 2 - 20, characterSize);
let count = 0;
let boxesArr = new Array();
let boxesList = new Array();
let boxesNeeded = new Array();
let inProgress = false;
window.addEventListener("keypress", keyPress);
welcome();


function welcome(){
    context.font = "30px Arial";
    context.textAlign = "center";
    context.fillText("Welcome to the game.", 400, 40);
    context.fillText("Collect as many points as you can in 30 seconds.", 400, 80);
    context.fillText("Use the arrow keys to move your character.", 400, 120);
    context.fillText("You will have a list of 5 colours (green, yellow and blue)", 400, 160);
    context.fillText("and you want to collect the most frquent colour from that ", 400, 200);
    context.fillText("list on the game board to get more points.", 400, 240);
    context.fillText("A new list will spawn when you collect a block and the", 400, 280);
    context.fillText("playing board will clear. ", 400, 320);
    context.fillText("Keep in mind a new collectable block appears", 400, 360);
    context.fillText("every 2 seconds!", 400, 400)
    context.fillText("Character colour selection", 400, 460)
    context.textAlign = "left";
    context.fillText("1 - Red", 350, 500)
    context.fillText("2 - Orange", 350, 540)
    context.fillText("3 - Black", 350, 580)
    context.textAlign = "center";
    context.fillText("Once you select a colour, press ENTER to begin!", 400, 620)
}
function playGame(){
    canvas.focus();
    context.clearRect(0,0,canvas.width,canvas.height);
    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);
    createList();
    animate();
}
function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,canvas.width - 100,canvas.height);
    drawBorder();
    character.displayStatus();
    character.draw();
    character.updateBounds();
    movement();
    if(count % 120 == 0){
        let box = createBox();
        boxesArr.push(box);
    }
    count++;
    drawBoxes();
    checkOverlap();
    
    drawList();
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
function keyPress(e){
    if(!inProgress){
        if(e.keyCode == '13'){      //enter
            playGame();
            inProgress = true;
        }
        else if(e.keyCode == '49'){ //1
            character.colour = "red";
        }
        else if(e.keyCode == '50'){ //2
            character.colour = "orange";
        }
        else if(e.keyCode == '51'){ //3
            character.colour = "black";
        }
        
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
    let box = new Collectable(Math.floor(Math.random() * Math.floor(canvas.width - 100 - boxSize)), Math.floor(Math.random() * Math.floor(canvas.height - boxSize)), boxSize);
    return box;
}
function drawBoxes(){
    for(let i in boxesArr){
        boxesArr[i].draw();
    }
}
function checkOverlap(){
    for(let i in boxesArr){
        if(boxesArr[i].boundaries['left'] >= character.boundaries['left'] && boxesArr[i].boundaries['right'] <= character.boundaries['right'] && boxesArr[i].boundaries['top'] >= character.boundaries['top'] && boxesArr[i].boundaries['bottom'] <= character.boundaries['bottom']){
            countPoints(boxesArr[i].colour);
            boxesArr = [];
            createList();
            break;  
        }
    }
}
function countPoints(theColour){
    let result = Array();
    result = boxesList.filter(box => box.colour == theColour);
    character.points += result.length;
}
function createList(){
    boxesList = [];
    let y = 200;
    for (let i = 0; i < 5; i++){
        let box = new Collectable(727,y,50)
        boxesList.push(box);
        y+=60;
    }
}
function drawList(){
    for(box of boxesList){
        box.draw();
    }
}
function drawBorder(){
    context.save();
    context.translate(700, 0);
    context.fillStyle = "black";
    context.fillRect(0, 0, 4, canvas.height);
    context.restore();
}
