//Grabs all card classes and places it into cards constant.
const cards = document.querySelectorAll(".card");

const innerColors = document.querySelectorAll(".inner-card");

const reset = document.querySelector("button");

const colors = ["red", "red", 
                "blue", "blue", 
                "yellow", "yellow", 
                "orange", "orange", 
                "purple", "purple",
                "green", "green"];


colorShuffle(shuffle(colors));


cards.forEach(clickableCards);


reset.addEventListener("click", function () {
    
    cards.forEach(resetGame);

    colorShuffle(shuffle(colors));
})


function clickableCards(card){
   card.addEventListener("click", flip);
}


function flip() {
     
    let flip = this;  
    
    if(!flip.classList.contains("flip")){
        
        flip.classList.add("flip");
    }
    
    else{
        flip.classList.remove("flip");
    }

}

function shuffle(color) {
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
    
    return color;
}

function colorShuffle(newColors){
    var shuffColors = newColors;

    for(let i = 0; i < newColors.length; i++){
        innerColors[i].style.backgroundColor = shuffColors[i];
    }
}

function resetGame(card){
    card.classList.remove("flip");
}