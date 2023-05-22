let player="X";
let running=true;
let board=["","","","","","","","",""];
let text= document.getElementById("text")
let restartBtn=document.getElementById("restartbtn")
let box=document.getElementsByClassName('box')

//To make a move
{function startGame(cellIndex){
    if(board[cellIndex]==""&& running==true){
        board[cellIndex]=player;
        box[cellIndex].innerHTML=player;
        checkStatus();
        changePlayer();
    }
}}

function changePlayer(){
    player= player==="X"?"O":"X";
}

//To check status
 function checkStatus(){
    const winCombos=[[0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6] 
    ];
    for (let combo of winCombos){
       const[a,b,c]=combo;
       if(board[a]!==""&& board[a]===board[b] && board[a]===board[c]){
        running=false;
        end(`Player ${player} wins !!`)
        return

       } 
    }
      if (!board.includes("")){
          running=false;
          end("It's a draw.")
      }
 }

 //To restart the game
 restartBtn.addEventListener("click", restart=()=>{
    board=["","","","","","","","",""];
    running=true;
    player="X";
    text.innerHTML=""

    const boxes=document.getElementsByClassName("box");
    for(let box of boxes){
        box.innerHTML="";
    }
 })
 // Win or draw message
 const end=(msg)=> {
    text.innerHTML= `${msg}`;
}