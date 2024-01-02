var randomNumber1 = Math.floor(Math.random() * 6) + 1 ; //Dice1 randomized between 6 sides
var randomNumber2 = Math.floor(Math.random() * 6) + 1 ; //Dice2 randomized between 6 sides

console.log("Dice 1: " + randomNumber1);
console.log("Dice 2: " + randomNumber2);

document.querySelectorAll("img")[0].setAttribute("src", "./images/dice" + randomNumber1 + ".png"); //would change the images accordingly to the randomNumber1
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice" + randomNumber2 + ".png"); //would change the images accordingly to the randomNumber2

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}