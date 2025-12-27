
function btn() {
    const int = document.querySelector('#input');
    const result = document.querySelector('#result');
    let num = 0;
    num = Math.floor(Math.random() * 11);
    if (int.value == num) {
        console.log("You win the game");
        result.textContent = "You win the game";
    }
    else if (int.value <= num && int.value >= num) {
        console.log("You lose the game. The correct number is " + num);
        result.textContent = "You lose the game. The correct number is " + num;
    }
    else if (int.value > 10 || int.value < 0) {
        console.log("Please enter a number between 0 and 10");
        result.textContent = "Please enter a number between 0 and 10";
    }
    else if (int.value - 1 == num || int.value + 1 == num) {
        console.log("You lose the game. You were near to number is ");
        result.textContent = "You lose the game. You were near to  " + num;
    }
    else {
        console.log("You loss the game. The correct number is " + num);
        result.textContent = "You loss the game. The correct number is " + num;
    }

}
