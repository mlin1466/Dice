// Function to roll a single die (returns a random number from 1 to 6)
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to update the dice and total display
function updateDice() {
    const die1 = document.getElementById("die1");
    const die2 = document.getElementById("die2");
    const totalDisplay = document.getElementById("total");

    const roll1 = rollDie();
    const roll2 = rollDie();
    const total = roll1 + roll2;

    die1.textContent = roll1;
    die2.textContent = roll2;
    totalDisplay.textContent = total;
}

// Add click event listener to the Roll Dice button
const rollButton = document.getElementById("rollButton");
rollButton.addEventListener("click", updateDice);

// Initial roll
updateDice();
