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




let aiScore = 0;
let humScore = 0;




function playRound(compChoice,humanChoice){
    console.log("i chose "+humanChoice);
    console.log("AI chose "+compChoice);
    if (compChoice == "rock" && humanChoice == "scissors"){
        console.log("AI wins!!!!")
        winner = "AI wins!!!!"
    }
    if (compChoice == "rock" && humanChoice == "paper"){
        console.log("Human wins!!!!")
        winner = "Human wins!!!!"
    }
    if (compChoice == "rock" && humanChoice == "rock"){
        console.log("no one wins!!!!")
        winner = "no one wins!!!!"
    }
    if (compChoice == "scissors" && humanChoice == "scissors"){
        console.log("no one wins!!!!")
        winner = "no one wins!!!!"
    }
    if (compChoice == "scissors" && humanChoice == "paper"){
        console.log("AI wins!!!!")
        winner = "AI wins!!!!"
    }
    if (compChoice == "scissors" && humanChoice == "rock"){
        console.log("Human wins!!!!")
        winner = "Human wins!!!!"
    }
    if (compChoice == "paper" && humanChoice == "scissors"){
        console.log("Human wins!!!!")
        winner = "Human wins!!!!"
    }
    if (compChoice == "paper" && humanChoice == "paper"){
        console.log("no one wins!!!!")
        winner = "no one wins!!!!"
    }
    if (compChoice == "paper" && humanChoice == "rock"){
        console.log("AI wins!!!!")
        winner = "AI wins!!!!"
    }

    if (winner == "AI wins!!!!") {
        aiScore += 1;
    }
    if (winner == "Human wins!!!!") {
        humScore += 1;
    }
    
    
    const score = document.querySelector("#score")

    score.textContent = "SCORE = "+aiScore+"-"+humScore ;
    const result = document.querySelector("#result")
    if (aiScore > 4 && humScore < 5){
        

        result.textContent = "Winner is: AI";
    }
    if (humScore > 4 && aiScore < 5){
        

        result.textContent = "Winner is: Human";
    }
        
        
}


let humanChoiceInput = "";

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        humanChoiceInput = event.target.id;
        playRound(getComputerChoice(),humanChoiceInput)
    })
})