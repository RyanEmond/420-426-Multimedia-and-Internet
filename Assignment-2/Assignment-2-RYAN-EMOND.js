function xoReferee([row1,row2,row3]){
    //columns X
    for(let i = 0; i<3; i++){
        if(row1.charAt(i)=='X' && row2.charAt(i)=='X' && row3.charAt(i)=='X'){
            return "X";
        }
    }
    //rows X
    if(row1=="XXX" || row2=="XXX" || row3=="XXX"){
        return "X";
    }
    //diagonal X
    if((row1.charAt(0)=="X" && row2.charAt(1)=="X" && row3.charAt(2)=="X") || (row1.charAt(2)=="X" && row2.charAt(1)=="X" && row3.charAt(0)=="X")){
        return "X";
    }

    //columns O
    for(let i = 0; i<3; i++){
        if(row1.charAt(i)=='O' && row2.charAt(i)=='O' && row3.charAt(i)=='O'){
            return "O";
        }
    }
    //rows O
    if(row1=="OOO" || row2=="OOO" || row3=="OOO"){
        return "O";
    }
    //diagonal O
    if((row1.charAt(0)=="O" && row2.charAt(1)=="O" && row3.charAt(2)=="O") || (row1.charAt(2)=="O" && row2.charAt(1)=="O" && row3.charAt(0)=="O")){
        return "O";
    }
    return "D";
}

function safePawns(pawns = []){
    let xx;
    let yy;
    let size = pawns.length;
    let safeCount = 0;
    for(let i = 0; i < size; i++){
        let x = pawns[i].charCodeAt(0);
        let y = pawns[i].charAt(1);
        for(let j = 0; j < size; j++){
            xx = pawns[j].charCodeAt(0);
            yy = pawns[j].charAt(1);
            if(yy==y-1 && (xx==x-1 || xx==x+1)){
                safeCount = safeCount + 1;
                break;
            }
        }
    }
    return safeCount;
}

function rectanglesUnion(recs = []){
    let areas = [];
    for (let i = 0; i < recs.length; i++){
        areas[i] = ((recs[i][2]-recs[i][0])*(recs[i][3]-recs[i][1]))
    }
    console.log(areas);
    for(let i = 0; i < recs.length; i++){
        for(let j = 0; j < recs.length; j++){
            if(j!=i){
                if (((recs[i][0] > recs[j][0] && recs[i][0] < recs[j][2]) || (recs[i][2] > recs[j][0] && recs[i][2] < recs[j][2])) && ((recs[i][1] > recs[j][1] && recs[i][1] < recs[j][3]) || (recs[i][3] > recs[j][1] && recs[i][1] < recs[j][1]))){
                  console.log("Calisse there's an osti d'un overlap quelque part!");
                }
            }
        }
    }


}





function fastTrain([distance]){
    let arrUp = [];
    let arrDown = [];
    let theSum = 0;
    let speed = 1;
    let i=0;
    while(theSum < distance){
        arrUp[i] = speed;
        arrDown[i] = speed;
        theSum = theSum + speed*2;
        i++;
        speed++;
    }
    console.log(theSum);
    console.log(arrUp,arrDown);
    i--;
    speed--;
    if(theSum - distance > arrUp[i]){
        speed--;
        arrUp[i] = speed;
        arrDown[i] = speed;
    }


    console.log("xxx");
    console.log(arrUp,arrDown);
    
}
function getSum([a1],[a2]){
    let theSum = 0;
    for (let i = 0; i < a1.length; i++){
        theSum += a1[i];
    }
    for (let i = 0; i < a2.length; i++){
        theSum += a2[i];
    }
    return theSum;
}