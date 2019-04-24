var userChoice = prompt("Let's play! Do you choose rock, paper or scissors?");
// User choice
if (! userChoice) {
    document.write("Oops it looks like you forgot to answer");
} else {
    document.write("You:"+ "" +userChoice +"");
}
//computer Choice
    var computerChoice = Math.random();
    if (computerChoice <0.34){
    computerChoice="rock";
    } else if(computerChoice<=0.67) {
    computerChoice="paper";
    } else {
    computerChoice= "scrissors";
    }

document.write("Computer:"+ "" + computerChoice+"");

//compare choices
var compare = function(choice1,choice2) {
    if (choice1 === choice2) {
        return "It's a tie!";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "You win!";
        } else {
            return "You lose! Try again.";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "You win!";
        } else {
            return "You lose! Try again.";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "You lose! Try again.";
        } else {
            return "You win!";
        }
    }
};
var results = compare(userChoice,computerChoice);

document.write( ""+ results);