
const possibleOutcome = ["rock", "paper", "scissors"];
let roundsWonByComputer = 0;
let roundsWonByPlayer = 0;
const outputArea = document.querySelector("div .winnerOutput");
const playerScore = document.querySelector(".score .player-score .digit");
const computerScore = document.querySelector(".score .computer-score .digit");


const buttons = document.querySelectorAll('.main button');
buttons.forEach(button => button.addEventListener('click', (e) => { 

    if(roundsWonByComputer <5 && roundsWonByPlayer <5){
        outputArea.textContent = playSingleRound(button.getAttribute('data-selection'), computerPlay());
        playerScore.textContent = roundsWonByPlayer;
        computerScore.textContent = roundsWonByComputer;
    }

}));

function computerPlay(){
    return possibleOutcome[Math.floor(Math.random() * 3)];
}

function playSingleRound(playerSelection, computerSelection){

    let returnText = "";

    if(playerSelection === computerSelection){
        returnText = "You drew!"
    }

    if(playerSelection === "rock" && computerSelection === "scissors"){
        roundsWonByPlayer++;
        returnText = "You win! Rock beats Scissors!"
    }

    if(playerSelection === "rock" && computerSelection === "paper"){
        roundsWonByComputer++;
        returnText = "You lose! Paper beats Rock!"
    }

    if(playerSelection === "paper" && computerSelection === "scissors"){
        roundsWonByComputer++;
        returnText = "You lose! Scissors beats Paper!"
    }

    if(playerSelection === "paper" && computerSelection === "rock"){
        roundsWonByPlayer++;
        returnText = "You win! Paper beats Rock!"
    }

    if(playerSelection === "scissors" && computerSelection === "rock"){
        roundsWonByComputer++;
        returnText = "You lose! Scissors beats Rock!"
    }

    if(playerSelection === "scissors" && computerSelection === "paper"){
        roundsWonByPlayer++;
        returnText = "You win! Scissors beats Paper!"
    }


    if(roundsWonByComputer >4 || roundsWonByPlayer > 4){
        let winner = (roundsWonByComputer > roundsWonByPlayer) ? "the Computer" : "You";
        returnText =  "Game Over!\n" + winner + " won!";
    }

    return returnText;

}
