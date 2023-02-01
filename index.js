function throwTheDices(number, dice){
  switch (number){
    case 0: document.querySelector(dice).setAttribute("src", "images/dice1.png");
    break;
    case 1: document.querySelector(dice).setAttribute("src", "images/dice2.png");
    break;
    case 2: document.querySelector(dice).setAttribute("src", "images/dice3.png");
    break;
    case 3: document.querySelector(dice).setAttribute("src", "images/dice4.png");
    break;
    case 4: document.querySelector(dice).setAttribute("src", "images/dice5.png");
    break;
    case 5: document.querySelector(dice).setAttribute("src", "images/dice6.png");
  }
}

function winner(number1, number2){
  if(number1 > number2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
  } else if (number1 === number2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
  }

}

var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);

winner(randomNumber1, randomNumber2);

var leftDice = ".img1";
var rigthDice = ".img2";

throwTheDices(randomNumber1, leftDice);
throwTheDices(randomNumber2, rigthDice);
