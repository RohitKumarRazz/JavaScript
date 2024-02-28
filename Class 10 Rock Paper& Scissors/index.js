let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock" , "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw, Play Again !!";
    msg.style.backgroundColor ="#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        uScore.innerText = userScore;
        msg.innerText = `You Won!!. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        compScore++;
        cScore.innerText = compScore;
        msg.innerText = `You Lose!!. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame = (userChoice) => {
    //to generate user choices
    const compChoice = genCompChoice();

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin=compChoice === "paper" ? false : true ;
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click",  () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});