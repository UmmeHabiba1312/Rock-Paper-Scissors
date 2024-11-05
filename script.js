let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".image");
let msg = document.querySelector("#msg");


let userScores = document.querySelector("#user");
let compScores = document.querySelector("#comp");

let gameDraw = ()=>{
    msg.innerText="Game Draw."
    msg.style.backgroundColor = "black";
    
}



let showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScores.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
        
    }else{
        compScore++;
        compScores.innerText = compScore;
        msg.innerText = `You lose, ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        
    }
}



let playGame = (userChoice)=>{
    let compChoice = playComp();
    
    if(userChoice === compChoice){
        gameDraw();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors , paper
            userWin = compChoice === "paper"? false:true
        }
        else if(userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "scissors"? false:true;
            
        }else{
            // scissors, paper
            userWin = compChoice === "rock"? false:true
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}



let playComp = ()=>{
    let options = ["rock","paper","scissors"]
    let randomInd = Math.floor(Math.random() * 3);
    return options[randomInd]
}

choices.forEach((image)=>{
    image.addEventListener("click",()=>{
        let userChoice = image.getAttribute("id");
        playGame(userChoice);
        
    })
})