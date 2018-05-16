var currentPlayer="W";
var finished=false;
var chessBoard = {
      //tablero
        a0: {x:0, y:0, occupied:true, chessMan: {color: "W", type: "Rook", position:[0,0], representation: "R"} },
        a1: {x:1, y:0, occupied:true, chessMan: {color: "W", type: "Knight", position: [1,0], representation: "k"}},
        a2: {x:2, y:0, occupied:true, chessMan: {color: "W", type: "Bishop", position: [2,0], representation: "B"}},
        a3: {x:3, y:0, occupied:true, chessMan: {color: "W", type: "King", position: [3,0], representation: "K"}},
        a4: {x:4, y:0, occupied:true, chessMan: {color: "W", type: "Queen", position: [4,0], representation: "Q"}},
        a5: {x:5, y:0, occupied:true, chessMan: {color: "W", type: "Bishop", position: [5,0], representation: "B"}},
        a6: {x:6, y:0, occupied:true, chessMan: {color: "W", type: "Knight", position: [6,0], representation: "k"}},
        a7: {x:7, y:0, occupied:true, chessMan: {color: "W", type: "Rook", position: [7,0], representation: "R"}},

        b0: {x:0, y:1, occupied: true, chessMan: {color: "W", type: "Pawn", position: [0,1], representation: "P"}},
        b1: {x:1, y:1, occupied: true, chessMan: {color: "W", type: "Pawn", position: [1,1], representation: "P"}},
        b2: {x:2, y:1, occupied: true, chessMan: {color: "W", type: "Pawn", position: [2,1], representation: "P"}},
        b3: {x:3, y:1, occupied: true, chessMan: {color: "W", type: "Pawn", position: [3,1], representation: "P"}},
        b4: {x:4, y:1, occupied: true, chessMan: {color: "W", type: "Pawn", position: [4,1], representation: "P"}},
        b5: {x:5, y:1, occupied: true, chessMan: {color: "W", type: "Pawn", position: [5,1], representation: "P"}},
        b6: {x:6, y:1, occupied: true, chessMan: {color: "W", type: "Pawn", position: [6,1], representation: "P"}},
        b7: {x:7, y:1, occupied: true, chessMan: {color: "W", type: "Pawn", position: [7,1], representation: "P"}},
        
        c0: {x:0, y:2, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        c1: {x:1, y:2, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        c2: {x:2, y:2, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        c3: {x:3, y:2, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        c4: {x:4, y:2, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        c5: {x:5, y:2, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        c6: {x:6, y:2, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        c7: {x:7, y:2, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        
        d0: {x:0, y:3, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        d1: {x:1, y:3, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        d2: {x:2, y:3, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        d3: {x:3, y:3, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        d4: {x:4, y:3, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        d5: {x:5, y:3, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        d6: {x:6, y:3, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        d7: {x:7, y:3, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        
        e0: {x:0, y:4, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        e1: {x:1, y:4, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        e2: {x:2, y:4, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        e3: {x:3, y:4, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        e4: {x:4, y:4, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        e5: {x:5, y:4, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        e6: {x:6, y:4, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        e7: {x:7, y:4, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},

        f0: {x:0, y:5, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        f1: {x:1, y:5, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        f2: {x:2, y:5, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        f3: {x:3, y:5, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        f4: {x:4, y:5, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        f5: {x:5, y:5, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        f6: {x:6, y:5, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},
        f7: {x:7, y:5, occupied: false, chessMan: {color: "", type: "", position: [], representation: " "}},

        g0: {x:0, y: 6, occupied: true, chessMan: {color: "B", type: "Pawn", position: [0,6], representation: "P"}},
        g1: {x:1, y: 6, occupied: true, chessMan: {color: "B", type: "Pawn", position: [1,6], representation: "P"}},
        g2: {x:2, y: 6, occupied: true, chessMan: {color: "B", type: "Pawn", position: [2,6], representation: "P"}},
        g3: {x:3, y: 6, occupied: true, chessMan: {color: "B", type: "Pawn", position: [3,6], representation: "P"}},
        g4: {x:4, y: 6, occupied: true, chessMan: {color: "B", type: "Pawn", position: [4,6], representation: "P"}},
        g5: {x:5, y: 6, occupied: true, chessMan: {color: "B", type: "Pawn", position: [5,6], representation: "P"}},
        g6: {x:6, y: 6, occupied: true, chessMan: {color: "B", type: "Pawn", position: [6,6], representation: "P"}},
        g7: {x:7, y: 6, occupied: true, chessMan: {color: "B", type: "Pawn", position: [7,6], representation: "P"}},

        h0: {x:0, y:7, occupied: true, chessMan: {color: "B", type: "Rook", position: [0,7], representation: "R"}},
        h1: {x:1, y:7, occupied: true, chessMan: {color: "B", type: "Knight", position: [1,7], representation: "k"}},
        h2: {x:2, y:7, occupied: true, chessMan: {color: "B", type: "Bishop", position: [2,7], representation: "B"}},
        h3: {x:3, y:7, occupied: true, chessMan: {color: "B", type: "King", position: [3,7], representation: "K"}},
        h4: {x:4, y:7, occupied: true, chessMan: {color: "B", type: "Queen", position: [4,7], representation: "Q"}},
        h5: {x:5, y:7, occupied: true, chessMan: {color: "B", type: "Bishop", position: [5,7], representation: "B"}},
        h6: {x:6, y:7, occupied: true, chessMan: {color: "B", type: "Knight", position: [6,7], representation: "k"}},
        h7: {x:7, y:7, occupied: true, chessMan: {color: "B", type: "Rook", position: [7,7], representation: "R"}},
};

function print()
{
    console.log("    0   1   2   3   4   5   6   7 ");
    console.log("a | "+chessBoard.a0.chessMan.representation+" | "+chessBoard.a1.chessMan.representation+" | "+chessBoard.a2.chessMan.representation+" | "+chessBoard.a3.chessMan.representation+" | "+chessBoard.a4.chessMan.representation+" | "+chessBoard.a5.chessMan.representation+" | "+chessBoard.a6.chessMan.representation+" | "+chessBoard.a7.chessMan.representation+" | ");
    console.log("b | "+chessBoard.b0.chessMan.representation+" | "+chessBoard.b1.chessMan.representation+" | "+chessBoard.b2.chessMan.representation+" | "+chessBoard.b3.chessMan.representation+" | "+chessBoard.b4.chessMan.representation+" | "+chessBoard.b5.chessMan.representation+" | "+chessBoard.b6.chessMan.representation+" | "+chessBoard.b7.chessMan.representation+" | ");
    console.log("c | "+chessBoard.c0.chessMan.representation+" | "+chessBoard.c1.chessMan.representation+" | "+chessBoard.c2.chessMan.representation+" | "+chessBoard.c3.chessMan.representation+" | "+chessBoard.c4.chessMan.representation+" | "+chessBoard.c5.chessMan.representation+" | "+chessBoard.c6.chessMan.representation+" | "+chessBoard.c7.chessMan.representation+" | ");
    console.log("d | "+chessBoard.d0.chessMan.representation+" | "+chessBoard.d1.chessMan.representation+" | "+chessBoard.d2.chessMan.representation+" | "+chessBoard.d3.chessMan.representation+" | "+chessBoard.d4.chessMan.representation+" | "+chessBoard.d5.chessMan.representation+" | "+chessBoard.d6.chessMan.representation+" | "+chessBoard.d7.chessMan.representation+" | ");
    console.log("e | "+chessBoard.e0.chessMan.representation+" | "+chessBoard.e1.chessMan.representation+" | "+chessBoard.e2.chessMan.representation+" | "+chessBoard.e3.chessMan.representation+" | "+chessBoard.e4.chessMan.representation+" | "+chessBoard.e5.chessMan.representation+" | "+chessBoard.e6.chessMan.representation+" | "+chessBoard.e7.chessMan.representation+" | ");
    console.log("f | "+chessBoard.f0.chessMan.representation+" | "+chessBoard.f1.chessMan.representation+" | "+chessBoard.f2.chessMan.representation+" | "+chessBoard.f3.chessMan.representation+" | "+chessBoard.f4.chessMan.representation+" | "+chessBoard.f5.chessMan.representation+" | "+chessBoard.f6.chessMan.representation+" | "+chessBoard.f7.chessMan.representation+" | ");
    console.log("g | "+chessBoard.g0.chessMan.representation+" | "+chessBoard.g1.chessMan.representation+" | "+chessBoard.g2.chessMan.representation+" | "+chessBoard.g3.chessMan.representation+" | "+chessBoard.g4.chessMan.representation+" | "+chessBoard.g5.chessMan.representation+" | "+chessBoard.g6.chessMan.representation+" | "+chessBoard.g7.chessMan.representation+" | ");
    console.log("h | "+chessBoard.h0.chessMan.representation+" | "+chessBoard.h1.chessMan.representation+" | "+chessBoard.h2.chessMan.representation+" | "+chessBoard.h3.chessMan.representation+" | "+chessBoard.h4.chessMan.representation+" | "+chessBoard.h5.chessMan.representation+" | "+chessBoard.h6.chessMan.representation+" | "+chessBoard.h7.chessMan.representation+" | ");
    currentPlayerLong=(currentPlayer==="W")?"Whites":"Blacks";
    console.log("it's your turn, " + currentPlayerLong);
    console.log("");
}

print();

function whichColor(box)
{
    if (chessBoard[box].occupied===false) return "none";
    else if(chessBoard[box].chessMan.color==="W") return "white";
    else if(chessBoard[box].chessMan.color==="B") return "black";
    else return "error in whichColor function";
}
function coordinateToNumber(a)
{
    switch(a)
    {
        case "a":
            return 0;
            break;
        case "b":
            return 1;
            break;
        case "c":
           return 2;
            break;
        case "d":
            return 3;
            break;
        case "e":
            return 4;
            break;
        case "f":
            return 5;
            break;
        case "g":
            return 6;
            break;
        case "h":
            return 7;
            break;
    }
}
function coordinateToLetter(a)
{
    switch(a)
    {
        case 0:
            return "a";
            break;
        case 1:
            return "b";
            break;
        case 2:
           return "c";
            break;
        case 3:
            return "d";
            break;
        case 4:
            return "e";
            break;
        case 5:
            return "f";
            break;
        case 6:
            return "g";
            break;
        case 7:
            return "h";
            break;
    }
}
function someoneBetween(posA, posB) //someoneBetween("a2","h2")
{
    var origin=[posA.charAt(0), posA.charAt(1)];
    var destination=[posB.charAt(0), posB.charAt(1)];

    var originMod=[];
    var destinationMod=[];
    originMod.push(origin[0],origin[1]);
    destinationMod.push(destination[0],destination[1]);

    originMod[0]=coordinateToNumber(origin[0]);
    destinationMod[0]=coordinateToNumber(destination[0]);

    var route=[];
    //ens movem en horitzontal
    if(destinationMod[0]===originMod[0])
    {
        if(destinationMod[1]>originMod[1])
        {
            //ens movem cap a la dreta
            while(originMod[1]!=destinationMod[1])
            {
                route.push([originMod[0],originMod[1]+1]);
                originMod[1]++;
            }
        }
        else
        {
            //ens movem cap a l'esquerra
            while(originMod[1]!=destinationMod[1])
            {
                route.push([originMod[0],originMod[1]-1]);
                originMod[1]--;
            }
        }
    }
    //ens movem en vertical
    else if (destinationMod[1]===originMod[1])
    {
        if(destinationMod[0]>originMod[0])
        {
            //avall
            while(originMod[0]!=destinationMod[0])
            {
                route.push([originMod[0]+1,originMod[1]]);
                originMod[0]++;
            }
        }
        else
        {
            //amunt
            while(originMod[0]!=destinationMod[0])
            {
                route.push([destinationMod[0]-1,originMod[1]]);
                originMod[0]--;
            }
        }
    }
    //ens movem en diagonal
    else if(Math.abs(destinationMod[1]-originMod[1])===Math.abs(destinationMod[0]-originMod[0]))
    {
        if(destinationMod[0]>originMod[0] && destinationMod[1]>originMod[1])
        {
            originMod[0]++;
            originMod[1]++;

            while(originMod[0]!=destinationMod[0])
            {
                var arrAux=[];
                var auxX=originMod[0];
                var auxY=originMod[1];
                arrAux.push(auxX);
                arrAux.push(auxY);
                route.push(arrAux);
                originMod[0]++;
                originMod[1]++;
            }
        }
        else if(destinationMod[0]>originMod[0] && destinationMod[1]<originMod[1])
        {
            originMod[0]++;
            originMod[1]--;

            while(originMod[0]!=destinationMod[0])
            {
                var arrAux=[];
                var auxX=originMod[0];
                var auxY=originMod[1];
                arrAux.push(auxX);
                arrAux.push(auxY);
                route.push(arrAux);
                originMod[0]++;
                originMod[1]--;
            }
        }
        else if(destinationMod[0]<originMod[0] && destinationMod[1]>originMod[1])
        {
            originMod[0]--;
            originMod[1]++;

            while(originMod[0]!=destinationMod[0])
            {
                var arrAux=[];
                var auxX=originMod[0];
                var auxY=originMod[1];
                arrAux.push(auxX);
                arrAux.push(auxY);
                route.push(arrAux);
                originMod[0]--;
                originMod[1]++;
            }
            
        }
        else if(destinationMod[0]<originMod[0] && destinationMod[1]<originMod[1])
        {
            originMod[0]--;
            originMod[1]--;

            while(originMod[0]!=destinationMod[0])
            {
                var arrAux=[];
                var auxX=originMod[0];
                var auxY=originMod[1];
                arrAux.push(auxX);
                arrAux.push(auxY);
                route.push(arrAux);
                originMod[0]--;
                originMod[1]--;
            }
        }
    }
    //error
    else
    {
        return "error finding obstacles"
    }
    var ocupied=false;
    route.forEach(function(arrPosicio){
        var position=coordinateToLetter(arrPosicio[0])+arrPosicio[1];
        if(ocupied===false) ocupied = chessBoard[position].occupied;
    });  
    return ocupied;

}
function rookValidMovement(from, to)
{
    if(( chessBoard[from].x===chessBoard[to].x || chessBoard[from].y===chessBoard[to].y )) return true;
    else return false;
}
function knightValidMovement(from, to)
{
    if(((chessBoard[to].x===chessBoard[from].x+1 && chessBoard[to].y===chessBoard[from].y+2) ||
    (chessBoard[to].x===chessBoard[from].x+1 && chessBoard[to].y===chessBoard[from].y-2) || 
    (chessBoard[to].x===chessBoard[from].x+2 && chessBoard[to].y===chessBoard[from].y+1) || 
    (chessBoard[to].x===chessBoard[from].x+2 && chessBoard[to].y===chessBoard[from].y-1) || 
    (chessBoard[to].x===chessBoard[from].x-1 && chessBoard[to].y===chessBoard[from].y+2) || 
    (chessBoard[to].x===chessBoard[from].x-1 && chessBoard[to].y===chessBoard[from].y-2) || 
    (chessBoard[to].x===chessBoard[from].x-2 && chessBoard[to].y===chessBoard[from].y+1) ||
    (chessBoard[to].x===chessBoard[from].x-2 && chessBoard[to].y===chessBoard[from].y-1))) return true;
    else return false;
}
function bishopValidMovement(from, to)
{
    if(Math.abs(chessBoard[to].x - chessBoard[from].x)===Math.abs(chessBoard[to].y - chessBoard[from].y)) return true;
    else false;
}
function kingValidMovement(from, to)
{
    if (((chessBoard[to].x === chessBoard[from].x && chessBoard[to].y === chessBoard[from].y+1) ||
    (chessBoard[to].x === chessBoard[from].x && chessBoard[to].y === chessBoard[from].y-1) ||
    (chessBoard[to].y === chessBoard[from].y && chessBoard[to].x === chessBoard[from].x+1) ||
    (chessBoard[to].y === chessBoard[from].y && chessBoard[to].x === chessBoard[from].x-1) ||
    (chessBoard[to].x === chessBoard[from].x+1 && chessBoard[to].y === chessBoard[from].y+1) ||
    (chessBoard[to].x === chessBoard[from].x+1 && chessBoard[to].y === chessBoard[from].y-1) ||
    (chessBoard[to].x === chessBoard[from].x-1 && chessBoard[to].y === chessBoard[from].y+1) ||
    (chessBoard[to].x === chessBoard[from].x-1 && chessBoard[to].y === chessBoard[from].y-1))) return true;
    else return false;
}
function queenValidMovement(from, to)
{
    if(((chessBoard[from].x===chessBoard[to].x && chessBoard[from].y!=chessBoard[to].y) || 
    (chessBoard[from].x!=chessBoard[to].x && chessBoard[from].y===chessBoard[to].y) || 
    (Math.abs(chessBoard[to].x - chessBoard[from].x) === Math.abs(chessBoard[to].y - chessBoard[from].y)))) return true;
    else return false;
}
function pawnValidMovement(from, to)
{
    //si vol anar una posició endavant i no està ocupada
        if ((currentPlayer=="W" && chessBoard[to].x==chessBoard[from].x && chessBoard[to].y==chessBoard[from].y+1 && chessBoard[to].occupied==false) ||
        (currentPlayer=="B" && chessBoard[to].x==chessBoard[from].x && chessBoard[to].y==chessBoard[from].y-1 && chessBoard[to].occupied==false) ||
    //si vol anar dues posicions endavant i no està ocupada i és el primer moviment
        (currentPlayer=="W" && chessBoard[to].x==chessBoard[from].x && chessBoard[to].y==chessBoard[from].y+2 && chessBoard[to].occupied==false) && chessBoard[from].y==1 ||
        (currentPlayer=="B" && chessBoard[to].x==chessBoard[from].x && chessBoard[to].y==chessBoard[from].y-2 && chessBoard[to].occupied==false) && chessBoard[from].y==6 ||
    //si vol anar en diagonal i està ocupada pel color contrari
        (currentPlayer=="W" && chessBoard[to].x==chessBoard[from].x+1 && chessBoard[to].y==chessBoard[from].y+1 && chessBoard[to].occupied==true && chessBoard[to].chessMan.color=="B") ||
        (currentPlayer=="W" && chessBoard[to].x==chessBoard[from].x-1 && chessBoard[to].y==chessBoard[from].y+1 && chessBoard[to].occupied==true && chessBoard[to].chessMan.color=="B") ||
        (currentPlayer=="B" && chessBoard[to].x==chessBoard[from].x+1 && chessBoard[to].y==chessBoard[from].y-1 && chessBoard[to].occupied==true && chessBoard[to].chessMan.color=="W") ||
        (currentPlayer=="B" && chessBoard[to].x==chessBoard[from].x-1 && chessBoard[to].y==chessBoard[from].y-1 && chessBoard[to].occupied==true && chessBoard[to].chessMan.color=="W")) return true;
        else return false;
}
function isKillingOthersKing(to)
{
    if((currentPlayer==="W" && chessBoard[to].chessMan.type==="King" && chessBoard[to].chessMan.color==="B") || 
        (currentPlayer==="B" && chessBoard[to].chessMan.type==="King" && chessBoard[to].chessMan.color==="W"))
        {
            finished=true;
            return true;
        }
    else
        return false;
}

function move (from, to) //i.e. move ("h1", "g1")
{
    if (finished===true) return "refresh to start a new game";

    var positions=["a0","a1","a2","a3","a4","a5","a6","a7","b0","b1","b2","b3","b4","b5","b6","b7","c0","c1","c2","c3","c4","c5","c6","c7","d0","d1","d2","d3","d4","d5","d6","d7","e0","e1","e2","e3","e4","e5","e6","e7","f0","f1","f2","f3","f4","f5","f6","f7","g0","g1","g2","g3","g4","g5","g6","g7","h0","h1","h2","h3","h4","h5","h6","h7"];
    if (positions.indexOf(from)===-1 || positions.indexOf(to)===-1) return "positions not valid"
    else if (chessBoard[from].occupied===false) return "trying to move from an empty position";
    else if(chessBoard[from].chessMan.color!==currentPlayer) return "not your tourn or not your chessMen!";
    else
    {   
        var type = chessBoard[from].chessMan.type;
        switch (type)
        {
            case "Rook":
                //torre: moviment en línia recta i sense saltar-se a ningú
                if (!rookValidMovement(from, to)) return "invalid movement for a Rook!";
                if (someoneBetween(from, to)===true) return "there is an obstacle";
            break;
            case "Knight":
                //caball: moviment en forma de L
                if (!knightValidMovement(from, to)) return "invalid movement for a Knight!";
            break;
            case "Bishop":
                //Alfil: moviment en diagonal i sense saltar-se a ningú
                if(!bishopValidMovement(from, to)) return "invalid movement for a Bishop!";
                if(someoneBetween(from, to)===true) return "there is an obstacle";
            break;
            case "King":
                if(!kingValidMovement(from, to)) return "invalid movement for a King!";
            break;
            case "Queen":
                if (!queenValidMovement(from, to)) return "invalid movement for a Queen!";
                if (someoneBetween(from, to)===true) return "there is an obstacle";
            break;
            case "Pawn":
                if (!pawnValidMovement(from, to)) return "invalid movement for a Pawn!";
                if(someoneBetween(from, to)===true) return "there is an obstacle";
            break;
            
        }

        var currentFrom=chessBoard[from];
        chessBoard[to].occupied=true;
        chessBoard[to].chessMan.color=currentFrom.chessMan.color;
        chessBoard[to].chessMan.type=currentFrom.chessMan.type;
        chessBoard[to].chessMan.position=currentFrom.chessMan.position;
        chessBoard[to].chessMan.representation=currentFrom.chessMan.representation;
        chessBoard[from].occupied=false;
        chessBoard[from].chessMan.color="";
        chessBoard[from].chessMan.type="";
        chessBoard[from].chessMan.position=[];
        chessBoard[from].chessMan.representation=" ";
        
        currentPlayer=(currentPlayer==="W")?"B":"W";

        print();
        
        if (isKillingOthersKing(to)===true){
            console.log(currentPlayer+" won!");
        }
    }
}