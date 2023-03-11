let rollDice = document.querySelector('.rollDice');
let diceImage = document.querySelector('.diceImage');
let scoreHolds = document.querySelector('.Holds')
let currentScore1 = document.querySelector('.currentScore1')
let score1 = document.querySelector('.score1')
let currentScore2 = document.querySelector('.currentScore2')
let score2 = document.querySelector('.score2')
let newGame = document.querySelector('.newGame');

newGame.addEventListener("click", newGameFunction)

function newGameFunction(){
    diceImage.classList.add("hidden")
    currentScore1.innerHTML = 0;
    currentScore2.innerHTML = 0;
    score1.innerHTML = 0;
    score2.innerHTML = 0;
}



rollDice.addEventListener("click", rollDiceFunction);

var playerSwitch = true;
if (playerSwitch) {
    scoreHolds.addEventListener("click", holdsFunction)
    rollDice.addEventListener("click", rollDiceFunction);
    scoreHolds.addEventListener("click", holdsFunction)
    function rollDiceFunction() {
        var diceNumber = Math.round(Math.random() * 5) + 1;
        console.log(diceNumber)
        diceImage.classList.remove("hidden")
        diceImage.src = `./assets/${diceNumber}.png`
        currentScore1.innerHTML = Number(currentScore1.innerHTML) + diceNumber;
        if (diceNumber == 1) {
            currentScore1.innerHTML = 0;
            var playerSwitch = false;

        }
    }
    function holdsFunction() {
        score1.innerHTML = Number(score1.innerHTML) + Number(currentScore1.innerHTML)
        currentScore1.innerHTML = 0;
        var playerSwitch = false;
    }
    function rollDiceFunction() {
        var diceNumber = Math.round(Math.random() * 5) + 1;
        console.log(diceNumber)
        diceImage.classList.remove("hidden")
        diceImage.src = `./assets/${diceNumber}.png`
        currentScore2.innerHTML = Number(currentScore2.innerHTML) + diceNumber;
        if (diceNumber == 1) {
            currentScore2.innerHTML = 0;
            var playerSwitch = true;

        }
    }
    function holdsFunction() {
        score2.innerHTML = Number(score2.innerHTML) + Number(currentScore2.innerHTML)
        currentScore2.innerHTML = 0;
        var playerSwitch = true;
    }
}