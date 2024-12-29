let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () =>{
    const options = ["rock" , "paper" , "scissor"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
}

const drawGame = () =>{
    // console.log("Game Was Draw !!");
    msg.innerText = "Game Was draw .... Play Again !!";
    msg.style.backgroundColor = "purple";
}

const showWinner = (userWin , userChoice , compChoice) =>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win !!!");
        msg.innerText = `You Win !!!  Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You Loose");
        msg.innerText = `You Loose....  ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("User Choice : ", userChoice);
    // Generate computer choice ==> modular
    const compChoice = genCompChoice();
    console.log("Computer Choice : ", compChoice);

    if(userChoice === compChoice){
         // Draw Game
         drawGame();
     }
     else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper or scissor
           userWin =  compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // rock , scissor
           userWin = compChoice === "scissors" ? false : true;
        }
        else{
            // rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
     }
} 

choices.forEach((choice) =>{
   // console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
    //    console.log("choice was clicked.", userChoice);
        playGame(userChoice);
    });
});
