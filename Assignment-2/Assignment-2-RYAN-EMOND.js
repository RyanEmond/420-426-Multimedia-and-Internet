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
    let removeArea = 0;
    let totalArea = 0;
    for (let i = 0; i < recs.length; i++){
        areas[i] = ((recs[i][2]-recs[i][0])*(recs[i][3]-recs[i][1]))
    }
    let intersect = [];
    for(let a = 0; a < recs.length; a++){
        for(let b = a+1; b < recs.length; b++){
            if(a!=b){
                // 0 - left
                // 1 - top
                // 2 - right
                // 3 - bottom
                if(recs[a][2]>=recs[b][0]){
                    if(recs[a][0]<=recs[b][2]){
                        if(recs[a][1]<=recs[b][3]){
                            if(recs[a][3]>=recs[b][1]){
                                if(recs[a][0]<recs[b][0]){
                                    intersect[0] = recs[b][0];
                                }
                                else{
                                    intersect[0] = recs[a][0];
                                }
                                if(recs[a][1]<recs[b][1]){
                                    intersect[1] = recs[b][1];
                                }
                                else{
                                    intersect[1] = recs[a][1];
                                }
                                if(recs[a][2]>recs[b][2]){
                                    intersect[2] = recs[b][2];
                                }
                                else{
                                    intersect[2] = recs[a][2];
                                }
                                if(recs[a][3]>recs[b][3]){
                                    intersect[3] = recs[b][3];
                                }
                                else{
                                    intersect[3] = recs[a][3];
                                }
                                removeArea += (intersect[2]-intersect[0])*(intersect[3]-intersect[1]);
                            }
                        }
                    }
                }
            }
        }
    }
    for(let i = 0; i < areas.length; i++){
        totalArea += areas[i];
    }
    totalArea -= removeArea;
    return totalArea;
}

function fastTrain(arr=[]){
    let count = 0;
    for (let j = 0; j < arr.length; j++){
        let distance = arr[j][0];
        let limit = arr[j][1];
        let dLeft = distance;
        let i = 1;
        while (true){
            dLeft -= (i*2);
            if(dLeft < 0){
                if(dLeft <= -i){
                    count++;
                    break;
                }
                else{
                    count+=2;
                    break;
                }
            }
            else if(dLeft == 0){
                count+=2;
                break;
            }
            i++;
            if(i > limit){
                i--;
            }
            count+=2;
        }
    }
    return count;
}

module.exports = {
    xoReferee: xoReferee,
    safePawns: safePawns,
    rectanglesUnion: rectanglesUnion,
    fastTrain: fastTrain
    };