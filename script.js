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

console.log(getComputerChoice());
console.log(getHumanChoice());