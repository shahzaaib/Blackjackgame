

let cards = [];//array -orderd list of items
let sum = 0;
let hasBlackJack = false
let isAlive = false;
// 10.1. Declare a variable called message and assign its value to an empty string
let message = " ";
let messageEl = document.getElementById("message-el");
// 14.2. Create a startGame() function. Move the conditional
let sumEl = document.getElementById("sum-el");
//let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

// create an object 
let player = {
    playerName: "Zaib",
 playerChips: 150
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.playerName + " :$" + player.playerChips;

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame(){

    isAlive = true;
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let cards = [firstCard, secondCard];//array -orderd list of items
    let sum = firstCard + secondCard
    renderGame();
}

function renderGame(){
// 10.2. Flip its value to false in the appropriate code block 
 // 3. Render the sum on the page using this format -> "Sum: 14"
 sumEl.textContent = "Sum: "+  sum;
 cardsEl.textContent = "Cards: ";

// Create a for loop that renders out all the cards instead of just two
for(let i =0; i<cards.length;i++ ){
    cardsEl.textContent += cards[i] + " ";
}

if (sum <= 20) {
       
    message = "Do you want to draw a new card? 🙂";
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true
} else {
    message ="You're out of the game! 😭";
    isAlive = false;
}
messageEl.textContent=message;
// 3. Log it out to check that you're doing it right
//console.log(isAlive);
}
// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"

function newCard(){
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if( isAlive === true && hasBlackJack === false){
        // if( isAlive === true && sum <=20)
    console.log("Drawing a new card from the deck!");

     // 1. Create a card variable, and hard code its value to a number (2-11)
     let thirdCard = getRandomCard();
    
    // 2. Add the new card to the sum variable
    sum += thirdCard;
    // 3. Call startGame()
cards.push(thirdCard);
console.log(cards);
    renderGame();
    }
}
















/*
//3: add the cards
let firstCard = 6
let secondCard = 9

let sum = firstCard + secondCard

console.log(sum);

//4 if-else condition
if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
} else {
    console.log("You're out of the game! 😭")
}

//5 if else condition
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases
let age = 22;
if(age < 21){
    console.log("You can not enter the club!");
}else {
console.log("Welcome!");
}
// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

//6: if else 
// Check if the person is elegible for a birthday card from the King! (100)

let age = 100

// if less than 100    -> "Not elegible"
if (age < 100){
    console.log("Not elegible");
} else if (age === 100){
    console.log("Here is your birthday card from the King!")
}
else{
    console.log("Not elegible, you have already gotten one")
}
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

//7: if else
let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard;
let hasBlackJack = false;

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
if(sum <= 20){
    console.log("Do you want to draw a new card? 🙂"); 
} else if( sum === 21){
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
console.log("Wohoo! You've got Blackjack! 🥳");
hasBlackJack = true;
}
else {
    console.log("You're out of the game! 😭");
}
//8: add the hasblackjack variable
console.log(hasBlackJack);


*/