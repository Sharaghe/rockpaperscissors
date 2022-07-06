
const possibleOutcome = ["rock", "paper", "scissors"];
let roundsWonByComputer = 0;
let roundsWonByPlayer = 0;

function computerPlay(){
    return possibleOutcome[Math.floor(Math.random() * 3)];
}

function playSingleRound(playerSelection, computerSelection){


    if(playerSelection === computerSelection){
        return "You drew!"
    }

    if(playerSelection === "rock" && computerSelection === "scissors"){
        roundsWonByPlayer++;
        return "You win! Rock beats Scissors!"
    }

    if(playerSelection === "rock" && computerSelection === "paper"){
        roundsWonByComputer++;
        return "You lose! Paper beats Rock!"
    }

    if(playerSelection === "paper" && computerSelection === "scissors"){
        roundsWonByComputer++;
        return "You lose! Scissors beats Paper!"
    }

    if(playerSelection === "paper" && computerSelection === "rock"){
        roundsWonByPlayer++;
        return "You win! Paper beats Rock!"
    }

    if(playerSelection === "scissors" && computerSelection === "rock"){
        roundsWonByComputer++;
        return "You lose! Scissors beats Rock!"
    }

    if(playerSelection === "scissors" && computerSelection === "paper"){
        roundsWonByPlayer++;
        return "You win! Scissors beats Paper!"
    }
}


function game(){
    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i+1));
        let playerSelection = prompt("What do you choose? (Rock, Paper, Scissors)");

        playerSelection = playerSelection.toLowerCase();

        if(!possibleOutcome.includes(playerSelection)){
            i--;
            console.log("Wrong input. Please try again!");
        } else {
            console.log(playSingleRound(playerSelection, computerPlay()));
        }
    }

    let winner;
    let winningPoints

    if(roundsWonByComputer > roundsWonByPlayer){
        winner = "You lose!";
        winningPoints = roundsWonByComputer;
    } else if(roundsWonByComputer < roundsWonByPlayer) {
        winner = "You win!";
        winningPoints = roundsWonByPlayer;
    } else {
        winner = "Draw! No one won!"
    }

 
    let draw = roundsWonByComputer === roundsWonByPlayer;
    console.log("The game has finished: " + winner);
}

game();