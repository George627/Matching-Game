//Grabs all card classes and places it into cards constant.
const cards = document.querySelectorAll(".card");

//Grabs the inner side element of the card.
const innerColors = document.querySelectorAll(".inner-card");

//The reset button.
const reset = document.querySelector("button");

//Array of colors for the game.
const colors = ["red", "red", 
                "blue", "blue", 
                "yellow", "yellow", 
                "orange", "orange", 
                "purple", "purple",
                "green", "green"];

//Array that compares object. 
const compare = [];

//The method that shuffles the colors.
colorPlacement(colorShuffle(colors));

/*A forEach method that takes all the card elements 
and applies the clickable function to each of them.*/

cards.forEach(clickableCards);

/*An addEventListener that is linked the the reset button. 
If clicked, (1) then it will reset the game by flipping all the cards over,
(2) then shuffle the colors for each card. */
reset.addEventListener("click", function () {
    
    //1
    cards.forEach(resetGame)

    //2 
    const delayShuffle = setTimeout('colorPlacement(colorShuffle(colors))', 500);

})

//The clickableCards function takes the current card then incorporate the flip function to it. 
function clickableCards(card){
   
  
  card.addEventListener("click", funcction(){
    compare.push(this);
    console.log(compare.length);
    flip)};
}


//The flip function takes a card and will either add or remove the flip class.
function flip() {

    //Grabs the current card.
    let flip = this;  

    //If the current card does NOT contain the flip class, then add it.
    if(!flip.classList.contains("flip")){

        //Adds the flip class to the current card.
        flip.classList.add("flip");
    }

    //Else, remove the flip class.
    else{
        flip.classList.remove("flip");
    }

}

//The colorShuffle function takes in the array of colors, then shuffles it.
function colorShuffle(color) {
    let currentIndex = color.length,  randomIndex;
    
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [color[currentIndex], color[randomIndex]] = [
        color[randomIndex], color[currentIndex]];
    }

    //Returns the new array of colors.
    return color;
}

/*The colorPlacement function takes in array of colors 
and places them on the inner side of the card.*/
function colorPlacement(newColors){
    let shuffColors = newColors;

    /*Using a for loop to loop through all inner cards
    and adds a color to it.*/
    for(let i = 0; i < newColors.length; i++){
        innerColors[i].style.backgroundColor = shuffColors[i];
    }
}

//The resetGame functions flips all the cards over to their back side.
function resetGame(card){
    card.classList.remove("flip");
}
