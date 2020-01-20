var diceRoll1 = rollDice();
var diceRoll2 = rollDice();

document.querySelector(".dice .img1").setAttribute("src", diceRoll1);
document.querySelector(".dice .img2").setAttribute("src", diceRoll2);

if (diceRoll1 > diceRoll2) {
  setWinner(1);
}
else if (diceRoll1 < diceRoll2) {
  setWinner(2);
}
else {
  setWinner(0);
}

function rollDice() {
  return "images/dice" + Math.floor((Math.random() * 6) + 1) + ".png";
}

function setWinner(player) {
  var winner = (player > 0) ? "Player " + player + " Wins!" : "Draw!";
  document.querySelector("h1").innerHTML = winner;
}
