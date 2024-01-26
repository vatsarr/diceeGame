let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource = "images/dice" + randomNumber1 + ".png";
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

let flagSource = "images/flag.png";

if (randomNumber1 > randomNumber2) {
    document.querySelector(
        "h1"
    ).innerHTML = `<img class="flag" src="images/flag.png"> Player 1 wins!`;
} else if (randomNumber2 > randomNumber1) {
    document.querySelector(
        "h1"
    ).innerHTML = `Player 2 wins! <img class="flag" src="images/flag.png">`;
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
