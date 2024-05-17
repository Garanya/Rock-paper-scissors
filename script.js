function getComputerChoice() {
    let computer_choice;
    let random_number = Math.random();

    /* If random_number < 0.33, computer_choice is 'rock',
    If random_number < 0.66, computer_choice is 'paper'
    Otherwise computer_choice is 'scissors'. */
    
    if (random_number.toFixed(2) < 0.33) {
        computer_choice = 'rock';
    }
    else if (random_number.toFixed(2) < 0.66) {
        computer_choice = 'paper';
    }
    else {
        computer_choice = 'scissors';
    }

    return computer_choice;
}

function getHumanChoice() {
    let user_choice = prompt('Enter your choice', '').toLowerCase();
    
    /* Ask for input until one of 'rock', 'paper', or 'scissors' is entered. */

    while((user_choice != 'rock') && (user_choice != 'paper') && (user_choice != 'scissors')) {
        alert("Your choice is invalid. Please choose one of 'rock', 'paper', or 'scissors'.");
        user_choice = getHumanChoice();
    }

    return user_choice;
}

function playRound(computer_choice, human_choice) {
    
    if((computer_choice === 'rock' && human_choice === 'scissors') || (computer_choice === 'paper' && human_choice === 'rock') || (computer_choice === 'scissors' && human_choice === 'paper')) {
        console.log(`You lose! ${computer_choice} beats ${human_choice}`);
        computer_score++;
    }
    
    else if((computer_choice === 'rock' && human_choice === 'paper') || (computer_choice === 'paper' && human_choice === 'scissors') || (computer_choice === 'scissors' && human_choice === 'rock')) {
        console.log(`You win! ${human_choice} beats ${computer_choice}`);
        human_score++;
    }
    
    else {
        console.log(`It's a tie! ${computer_choice} matches ${human_choice}`);
    }
}

/* console.log(getComputerChoice());
console.log(getHumanChoice()); */
let computer_score = 0;
let human_score = 0;
let computer_selection = getComputerChoice();
let human_selection = getHumanChoice();
playRound(computer_selection, human_selection);