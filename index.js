let randomNumber1 = Math.floor(Math.random()*6+1);
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random()*6+1);
var randomDiceImage = "dice" + randomNumber2 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImageSource);


let title = document.querySelector("h1")
function score(){
    if(randomNumber1 > randomNumber2){
        title.innerHTML = "player 1 won!"
    } else if(randomNumber1 < randomNumber2){
        title.innerHTML = "player 2 won!"
    } else {
        title.innerHTML = "It's a draw!"
    }
}

score();