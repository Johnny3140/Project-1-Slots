//set symbols for lanes* 
const symbols = ['naruto','sauske','itatchi','neji','Kakashi','Sakura','Jminato'] //strings until I gather up the images for each characters subject to change 
//set up bet button and array of wage amounts
const betButton = document.getElementById('betButton');
const spinButton = document.getElementById('spinButton');
const wagerAmounts = [1000, 2500, 5000, 10000];
//set up function to grab random symbol from array
function getRandomSymbol(){
    const randomIndex = Math.floor(Math.random()* symbols.length);
    return symbols[randomIndex]; 
}
//set up the spin function for spinning the lanes by calling the grab function 3 times for each slot lane
function spinLane(laneId) {
    const lane = document.getElementById(laneId);
    const symbolImages = lane.querySelectorAll('.symbol-image');

//hide Images 
for (let i = 0; i <symbols.length; i++){
    symbolImages[i].style.display = 'none';
}
//choose random img for selection 
const randomIndex = Math.floor(Math.random()* symbolImages.length);
symbolImages[randomIndex].style.display = 'block';
} 
//event listener for the spin button 
spinButton.addEventListener('click',() =>{
    spinLane('lane1');
    spinLane('lane2');
    spinLane('lane3');
});
//set up jackpot function 
const jackpotAmount = 500000;
//set up win funciton to display winnings 




