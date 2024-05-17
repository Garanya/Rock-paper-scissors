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

console.log(getComputerChoice());