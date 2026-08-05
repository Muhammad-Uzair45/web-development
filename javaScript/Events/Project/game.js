const boxes = document.querySelectorAll(".box");
const reset = document.querySelector("#reset-btn");
const newGame = document.querySelector("#newGame-btn");
const msg  = document.querySelector("#winer-msg");
const msgContainer = document.querySelector("#msg-container");
let turn0 = true;
const winpattrens = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
];

 
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        //console.log("clicked box");
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwiner();
        
    });

});

    function  disabledBtn(){
        for (let box of boxes){
            box.disabled = true;
        }
    }

    function showWiner(winner){
        msg.innerText = `Congratulation  wins ,  ${winner}`;
        msgContainer.classList.remove("hide");
        disabledBtn();
    }

 function checkwiner(){
    for (let pattern of winpattrens){
        const pos1 = boxes[pattern[0]].innerText;
        const pos2 = boxes[pattern[1]].innerText;
        const pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != ""){
                if (pos1 === pos2  && pos2===pos3 ){
                    showWiner(pos1);

                }

    }

            
            }

 } 


 reset.addEventListener("click"  ,()=>{
    for (let box of boxes){
        box.innerText ="";
        box.disabled = false;
        msgContainer.classList.add("hide");
    }
    turn0= true;

 });

 newGame.addEventListener("click"  ,()=>{
    for (let box of boxes){
        box.innerText ="";
        box.disabled = false;
        msgContainer.classList.add("hide");
    }
    turn0= true;

 });
 
