//set symbols for lanes* 
document.addEventListener('DOMContentLoaded', function () {

let balance = 100000; 
let spinCount = 0;
const symbols = [ 
    {name: 'naruto', imageSrc: 'img/HD-wallpaper-naruto-kurama-kurama-mode-sage-of-six-path-naruto-uzumaki-nine-tails.jpg'},
    {name: 'sasuke', imageSrc: 'img/905c30ea029866b949b240ede035cb5989ae2474r1-1368-2048v2_uhq.jpg'},
    {name: 'itatchi', imageSrc: 'img/16832317_229802720815603_6959446976233233315_n.jpg'},
    {name: 'kakashi', imageSrc: 'img/desktop-wallpaper-kakashi-naruto-jaw-art-kakashi-sensei.jpg'},
    {name: 'neji', imageSrc: 'img/neji-hyuga-otwfra4pv99zcckm.jpg'},
    {name: 'shikamaru', imageSrc: 'img/6CnJhw.jpg'},
    {name: 'jackpot', imageSrc: 'img/513216.webp'},
] //strings until I gather up the images for each characters subject to change 
//set up bet button and array of wage amounts
const betButton = document.getElementById('betButton');
// const spinButton = document.getElementById('spinButton');
const wagerAmounts = [1000, 2500, 5000, 10000];
//set up function to grab random symbol from array
function getRandomSymbol() {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}

// Function to spin a lane
// Define the spinLane function
function spinLane(laneId) {
    console.log('lanespun')
    const lane = document.getElementById(laneId);
    const symbolImages = Array.from(lane.querySelectorAll('.image-symbol')); // Convert to an array

    // Hide all images in the lane
    // symbolImages.forEach((image) => {
    //     image.style.display = 'none';
    // });

    // Choose a random symbol for this lane
    const randomSymbolData = getRandomSymbol();

    // Display the image associated with the selected symbol
    symbolImages.forEach((image)=>{
        const randomSymbolData = getRandomSymbol();
        image.src = randomSymbolData.imageSrc;

    })
    
}







// Function to check for a win and update the balance
function checkForWin() {
    if (spinCount % 4 === 0) {
        // Grant a win every 4 spins
        const wagerAmount = parseInt(document.getElementById('wager').value);

        if (isNaN(wagerAmount)) {
            console.log('Invalid wager amount. Please enter a valid number.');
            return;
        }

        if (wagerAmount <= balance) {
            balance += wagerAmount * 2;
            console.log('Congratulations! You won!');

            // Update all lanes with the same symbol for the win
            const winSymbol = getRandomSymbol();
            document.getElementById('lane1').querySelector('.image-symbol').src = winSymbol.imageSrc;
            document.getElementById('lane2').querySelector('.image-symbol').src = winSymbol.imageSrc;
            document.getElementById('lane3').querySelector('.image-symbol').src = winSymbol.imageSrc;
        } else {
            console.log('Not enough balance to place this wager.');
        }

        // Update the balance display immediately after a win
        document.getElementById('balance').textContent = `Balance: $${balance}`;
    } else {
        const wagerAmount = parseInt(document.getElementById('wager').value);

        if (isNaN(wagerAmount)) {
            console.log('Invalid wager amount. Please enter a valid number.');
            return;
        }

        if (wagerAmount <= balance) {
            balance -= wagerAmount; // Deduct the wager from the balance when you lose
            console.log('No win this time. Try again.');
            console.log(`Balance: $${balance}`);
            
            // Update the balance display immediately after a loss
            document.getElementById('balance').textContent = `Balance: $${balance}`;
        } else {
            console.log('Not enough balance to place this wager.');
        }
    }
}






// Get a reference to the spin button
const spinButton = document.getElementById('spinButton');

// Add an event listener for the spin button
spinButton.addEventListener('click', () => {
    spinLane('lane1');
    spinLane('lane2');
    spinLane('lane3');
    checkForWin();
    spinCount++;
});
});
