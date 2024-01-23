let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#new")

console.log(boxes);
console.log(resetBtn);

// Create winning pattern
const winPatterns = [
    [0, 1, 2],   // written index number
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Alternate turn
let turn0 = true;    //playerX, playerO
console.log("turn0");

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{

        if (turn0 === true){
            box.innerText = "O"
            box.style.color = '#01391f';
            console.log("0");
            turn0 = false;
        }
        else{
            box.innerText = "X"
            console.log("X")
            turn0 = true;
        }
        checkWinner()
    })
 })

//  check winners
 const checkWinner = () =>{
    for (const pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        // console.log(`"winners = " ${pos1Val}, ${pos2Val}, ${pos3Val}`);

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
 }

 

//  Reset Game
const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

// Disable boxes
const disableBoxes = ()=>{
    for (const box of boxes) {
        box.disable = true;
        
    }
};

// enable boxes
const enableBoxes = () =>{
    for (const box of boxes) {
        box.disable = false;
        box.innerText = "";
    }
};

//   show winner
const showWinner = (winner) =>{
    msg.innerText=`Congratulations. Winners is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    console.log(`"congratulations you win "`);
}


   
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);