console.log("hello yo yo");

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    let result
    if (choice == 1){
        result = "rock";
    }
    else if (choice == 2){
        result = "paper";
    }
    else if (choice == 3){
        result = "scissors";
    }
    return result;
}

let humanChoiceInput = prompt("Enter rock paper scissors:");

function playRound(compChoice,humanChoice){
    console.log("i chose "+humanChoice);
    console.log("AI chose "+compChoice);
    if (compChoice == "rock" && humanChoice == "scissors"){
        console.log("AI wins!!!!")
    }
    if (compChoice == "rock" && humanChoice == "paper"){
        console.log("Human wins!!!!")
    }
    if (compChoice == "rock" && humanChoice == "rock"){
        console.log("no one wins!!!!")
    }
    if (compChoice == "scissors" && humanChoice == "scissors"){
        console.log("no one wins!!!!")
    }
    if (compChoice == "scissors" && humanChoice == "paper"){
        console.log("AI wins!!!!")
    }
    if (compChoice == "scissors" && humanChoice == "rock"){
        console.log("Human wins!!!!")
    }
    if (compChoice == "paper" && humanChoice == "scissors"){
        console.log("Human wins!!!!")
    }
    if (compChoice == "paper" && humanChoice == "paper"){
        console.log("no one wins!!!!")
    }
    if (compChoice == "paper" && humanChoice == "rock"){
        console.log("AI wins!!!!")
    }
}


playRound(getComputerChoice(),humanChoiceInput);