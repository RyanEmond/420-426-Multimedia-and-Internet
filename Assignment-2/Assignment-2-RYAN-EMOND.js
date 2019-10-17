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