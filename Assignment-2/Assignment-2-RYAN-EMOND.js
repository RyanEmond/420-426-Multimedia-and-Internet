function xoReferee([row1,row2,row3]){
    let winner = "D";

    //columns X
    for(let i = 0; i<3; i++){
        if(row1.charAt(i)=='X' && row2.charAt(i)=='X' && row3.charAt(i)=='X'){
            winner = "X";
        }
    }
    //rows X
    if(row1=="XXX" || row2=="XXX" || row3=="XXX"){
        winner = "X";
    }
    //diagonal X
    if((row1.charAt(0)=="X" && row2.charAt(1)=="X" && row3.charAt(2)=="X") || (row1.charAt(2)=="X" && row2.charAt(1)=="X" && row3.charAt(0)=="X")){
        winner = "X";
    }

    //columns O
    for(let i = 0; i<3; i++){
        if(row1.charAt(i)=='O' && row2.charAt(i)=='O' && row3.charAt(i)=='O'){
            winner = "O";
        }
    }
    //rows O
    if(row1=="OOO" || row2=="OOO" || row3=="OOO"){
        winner = "O";
    }
    //diagonal O
    if((row1.charAt(0)=="O" && row2.charAt(1)=="O" && row3.charAt(2)=="O") || (row1.charAt(2)=="O" && row2.charAt(1)=="O" && row3.charAt(0)=="O")){
        winner = "O";
    }

    console.log(winner);
}